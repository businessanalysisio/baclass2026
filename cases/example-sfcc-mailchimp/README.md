# Case: Newsletter subscribers missing from Mailchimp

A worked example showing the full artifact chain from a vague report to a
UAT-validated fix. This is intentionally abbreviated — a real case would
give each stage its own file using the `templates/` above — but every ID
here traces the way a real traceability matrix would.

---

## CTX-01: Context Package

**Business context:** E-commerce site on Salesforce Commerce Cloud (SFCC)
runs a newsletter signup at checkout and on a standalone footer form.
Mailchimp is the email platform; marketing sends campaigns from it.

**Problem statement:** "Customers are subscribing to the newsletter. SFCC
appears to capture the subscription, but the subscriber is no longer
appearing in Mailchimp." (as reported by Marketing)

**Stakeholders:** Marketing (reports the problem, owns Mailchimp lists) ·
E-commerce Ops (owns SFCC) · Customer (subscriber) · Engineering (owns the
integration)

**Systems involved:** SFCC (capture) · Integration job (sync) · Mailchimp
(destination)

**What we know:**
| # | Fact | Source |
|---|---|---|
| 1 | SFCC order/subscription log shows the signup event firing | SFCC admin log |
| 2 | Marketing confirmed specific emails are absent from the Mailchimp audience | Mailchimp audience export |

**What we assume:**
| # | Assumption | Risk if wrong |
|---|---|---|
| 1 | The sync job runs on every signup, not on a batch delay | If it's batched, "missing" may just mean "not yet synced" — not a bug |
| 2 | Double opt-in isn't the cause | If Mailchimp requires opt-in confirmation and customers aren't confirming, this isn't an integration bug at all |

**Open questions:**
| # | Question | Who can answer | Blocking? |
|---|---|---|---|
| 1 | Is the sync real-time or batched, and what's the batch window? | Engineering | Yes |
| 2 | Is Mailchimp double opt-in enabled on this audience? | Marketing/Mailchimp admin | Yes |
| 3 | Do the missing subscribers share a common signup source (checkout vs. footer)? | Data pull | Yes |

**Failure boundary:** Unknown until Q1–Q3 above are answered — do not
assume it's the SFCC→Mailchimp sync until the alternative explanations
(batch delay, opt-in confirmation) are ruled out.

---

## BR-01: Business Requirement

**Objective:** Every customer who opts into the newsletter must reliably
appear in the Mailchimp audience so Marketing can reach them — silent
data loss undermines campaign reach and customer trust ("I signed up but
never heard from you").

| ID | Requirement | Priority | Source |
|---|---|---|---|
| BR-01.1 | Every successful SFCC signup event must result in a corresponding subscriber record in Mailchimp within a defined SLA, or a visible, actionable error | Must | Marketing report + CTX-01 |

---

## RULE-01: Business Rule

- **Statement:** A signup is only "successful" once it has both (a) fired
  in SFCC and (b) been acknowledged by Mailchimp's API. A fire-and-forget
  call that isn't confirmed does not count as success.
- **Source of authority:** Confirmed with Engineering + Marketing during
  investigation (not previously documented — this was itself a finding).
- **Linked BR:** BR-01.1

---

## FLOW-03: Process Flow — Newsletter signup sync

**Current state (as-is):**
| Step | Actor | Action | System |
|---|---|---|---|
| 1 | Customer | Submits signup form | SFCC |
| 2 | SFCC | Logs signup, fires sync call | SFCC → Integration |
| 3 | Integration job | Calls Mailchimp API | Mailchimp |
| 4 | Mailchimp | Adds subscriber **or** rejects if already unsubscribed/cleaned from a prior campaign | Mailchimp |

**Failure point found:** Step 4 — Mailchimp silently rejects re-adding an
address that was previously marked "cleaned" (hard-bounced) or
"unsubscribed," and the integration job was not checking the API response
for that rejection — it logged success in SFCC regardless.

**Target state:** Step 3 updated so the integration job checks the
Mailchimp API response and, on rejection, writes a visible error back to
SFCC/Ops rather than swallowing it.

---

## US-07: User Story

**As an** e-commerce ops admin,
**I want** to be notified when a newsletter sync to Mailchimp fails,
**so that** I can resolve the customer's subscription status manually
instead of it silently disappearing.

Linked: BR-01.1 · FLOW-03 (step 3–4) · RULE-01

---

## SCR-04: Screen Mapping — Sync Error Queue

| Field | Type | Source | Validation |
|---|---|---|---|
| Customer email | text | SFCC signup record | read-only |
| Failure reason | text | Mailchimp API response | read-only, must be non-empty |
| Signup date | date | SFCC signup record | read-only |
| Resolve action | button | admin input | required before row can be dismissed |

---

## AC-07.1 / AC-07.2: Acceptance Criteria

**AC-07.1 — Successful sync**
- **Given** a customer with no prior Mailchimp history submits the signup form
- **When** the integration job runs
- **Then** the subscriber appears in the Mailchimp audience within the SLA, and no error row is created

**AC-07.2 — Rejected sync is surfaced, not swallowed**
- **Given** a customer whose email is marked "cleaned" in Mailchimp
- **When** they resubmit the signup form
- **Then** the Mailchimp API rejection is captured, a row appears in the Sync Error Queue (SCR-04) with the failure reason, and the SFCC signup log does **not** report this as a plain success

Linked rule: RULE-01

---

## UAT-12: UAT

**Scenario:** Ops confirms that a previously-cleaned address, when
resubmitted, produces a visible error row instead of silent success.

| # | Step | Expected result |
|---|---|---|
| 1 | Submit signup form using a test address pre-marked "cleaned" in Mailchimp | Signup is accepted in SFCC |
| 2 | Wait for integration job to run | Job attempts Mailchimp sync |
| 3 | Check Sync Error Queue (SCR-04) | New row appears with reason "cleaned/previously unsubscribed" |
| 4 | Check Mailchimp audience | Address is **not** silently added |

**Status:** Pass (executed by Ops, [date])

---

## Traceability Matrix (this case)

| BR | RULE | FLOW | US | SCR | AC | UAT | Status |
|---|---|---|---|---|---|---|---|
| BR-01.1 | RULE-01 | FLOW-03 | US-07 | SCR-04 | AC-07.1, AC-07.2 | UAT-12 | Validated |

## What made this a BA case, not just a ticket

The original report ("subscriber not appearing") had at least three
plausible causes (batch delay, double opt-in, silent API rejection).
Jumping straight to "write a user story for a sync fix" would have
produced a plausible-looking artifact for the wrong problem. The context
package's open-questions step is what actually found the real failure
boundary — the requirement, rule, and stories only got written after that.
