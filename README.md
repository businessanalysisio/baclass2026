# baclass2026

Templates and worked examples for the SOL Business Analysis class artifact
chain. The program teaches BA work as an investigation, not a template-filling
exercise — these files exist to support that investigation, not replace it.

## The learning progression

```
Business Context → Problem → Evidence → Business Rules → Process →
Requirements → User Stories → Screens → Acceptance Criteria →
Validation → Delivery
```

A document can look professional while still resting on an unvalidated
assumption. Every template below has a place to write down what's known,
what's assumed, and what's still open — on purpose. Skipping that section
is how professional-looking-but-wrong artifacts get made.

## The artifact chain

Each template maps to one stage of the progression and to one ID prefix,
so any artifact can be traced back to the business rule and business
context that justify it:

| # | Template | ID prefix | Answers |
|---|----------|-----------|---------|
| 0 | [Context Package](templates/00-context-package.md) | `CTX` | What do we know, assume, and not know yet? |
| 1 | [BRD](templates/01-brd.md) | `BR` | What business problem are we solving, and why? |
| 2 | [Business Rules](templates/02-business-rules.md) | `RULE` | What constraints/logic must hold regardless of process? |
| 3 | [Process Flow](templates/03-process-flow.md) | `FLOW` | What actually happens, step by step, today vs. target? |
| 4 | [User Story](templates/04-user-story.md) | `US` | What does one actor need from the system? |
| 5 | [Acceptance Criteria](templates/05-acceptance-criteria.md) | `AC` | How do we know a story is actually done? |
| 6 | [Screen Mapping](templates/06-screen-mapping.md) | `SCR` | What does the user actually see and touch? |
| 7 | [Traceability Matrix](templates/07-traceability-matrix.md) | — | Does every artifact trace back to a business rule? |
| 8 | [UAT](templates/08-uat.md) | `UAT` | Did a real person confirm this works? |

Example chain for one requirement:

```
BR-01 → RULE-04 → FLOW-03 → US-07 → SCR-04 → AC-07.1 / AC-07.2 → UAT-12
```

If you can't draw that line for an artifact, it doesn't belong in the
delivery yet — go back and find the missing evidence or rule.

## How to use this

1. Start a new case under `cases/<case-name>/`.
2. Copy `templates/00-context-package.md` first and fill it in *before*
   writing requirements. If you don't have evidence for a line, write it
   under "Assumptions" or "Open Questions" — never state it as fact.
3. Work forward through the chain (BRD → Rules → Flow → Stories → AC →
   Screens → UAT), cross-referencing IDs as you go.
4. Keep `07-traceability-matrix.md` updated as the single source of truth
   linking every artifact back to a business rule.
5. See [`cases/example-sfcc-mailchimp/`](cases/example-sfcc-mailchimp/README.md)
   for a full worked example, end to end.

## Where AI fits

The goal is not "ask AI to write the PRD." AI is useful once you've built
a trustworthy **context package**: source evidence, decisions, assumptions,
business rules, and open questions, each labeled as such. From there:

```
Human evidence → Structured Context → AI-assisted Analysis →
BA Review → Stakeholder Validation → Trusted Artifact
```

The context package template (`templates/00-context-package.md`) is
written to double as that AI input — it's structured so an assistant can
draft a BRD, flow, or user stories from it, while the BA stays responsible
for validating every claim before it becomes a trusted artifact.
