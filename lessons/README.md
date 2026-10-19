# Lộ trình bài học

Bảy bài này dạy curriculum **Business Analysis As I Know It**. Mỗi bài dạy một module, chỉ template để luyện, và nói thế nào là xong.

Template trong [`templates/`](../templates/) giữ nguyên. Không sửa các file đó. Copy template vào `cases/<tên-case>/` rồi mới điền. Case mẫu để đối chiếu ID: [`cases/example-sfcc-mailchimp/`](../cases/example-sfcc-mailchimp/README.md).

BA ở đây là một cuộc điều tra (investigation), không phải bài tập điền form. Một tài liệu trông chuyên nghiệp vẫn có thể đứng trên một assumption chưa được kiểm. Mọi bài đều bắt bạn tách ba thứ:

- **Fact** — đã có nguồn. Không có nguồn thì không phải fact.
- **Assumption** — đang giả định. Ghi điều gì gãy nếu nó sai.
- **Open question** — chưa ai trả lời. Ghi ai trả lời được, và câu đó có đang chặn (blocking) không.

## Progression

```
Business Context → Problem → Evidence → Business Rules → Process →
Requirements → User Stories → Screens → Acceptance Criteria →
Validation → Delivery
```

Học đúng thứ tự module. Context Package không điền một lần rồi bỏ: bài 01 mở `CTX-`, bài 03 thêm stakeholder và scope, bài 04 thêm evidence.

## Bài và template luyện

| Bài | Module | Chỗ trong progression | Template luyện | ID |
|---|---|---|---|---|
| [01](01-introduction.md) | Introduction | Context | [`00-context-package.md`](../templates/00-context-package.md) | `CTX-` |
| [02](02-sdlc.md) | SDLC | Problem, rồi lúc nào mới tới Delivery | [`01-brd.md`](../templates/01-brd.md) nếu Waterfall; [`04-user-story.md`](../templates/04-user-story.md) và [`05-acceptance-criteria.md`](../templates/05-acceptance-criteria.md) nếu Agile | `BR-` hoặc `US-` / `AC-` |
| [03](03-project.md) | Project | Context | [`00-context-package.md`](../templates/00-context-package.md) — Stakeholders, Systems Involved, Out of Scope, Decisions | `CTX-` |
| [04](04-elicitation.md) | Elicitation | Evidence | [`00-context-package.md`](../templates/00-context-package.md) — Evidence Log, What We Know. Document analysis thì thêm as-is trong [`03-process-flow.md`](../templates/03-process-flow.md) | `CTX-`, `FLOW-` |
| [05](05-analysis.md) | Analysis | Requirements, Business Rules | [`01-brd.md`](../templates/01-brd.md), [`02-business-rules.md`](../templates/02-business-rules.md) | `BR-`, `RULE-` |
| [06](06-modeling.md) | Modeling | Process | [`03-process-flow.md`](../templates/03-process-flow.md) | `FLOW-` |
| [07](07-specs.md) | Specs | Requirements → Delivery | [`04-user-story.md`](../templates/04-user-story.md), [`05-acceptance-criteria.md`](../templates/05-acceptance-criteria.md), [`07-traceability-matrix.md`](../templates/07-traceability-matrix.md). Có UI thì [`06-screen-mapping.md`](../templates/06-screen-mapping.md). Validation thì [`08-uat.md`](../templates/08-uat.md) | `US-`, `AC-`, `SCR-`, `UAT-` |

## Chuỗi ID

Giữ prefix. Một requirement đi hết chuỗi thì có dạng:

```
BR-01 → RULE-04 → FLOW-03 → US-07 → SCR-04 → AC-07.1 / AC-07.2 → UAT-12
```

Case Mailchimp dùng cùng cách đánh số, với các ID đã điều tra ra: `CTX-01`, `BR-01.1`, `RULE-01`, `FLOW-03`, `US-07`, `SCR-04`, `AC-07.1`, `AC-07.2`, `UAT-12`. Đừng đổi các ID đó trong case mẫu. Case của bạn dùng prefix này và số của bạn. Ô không điền được là gap, ghi trong traceability matrix, không bịa ID cho phần chưa có evidence.

Nếu không vẽ được đường từ artifact về business rule và `CTX-`, artifact đó chưa thuộc delivery.

## Cách học một bài

1. Đọc bài.
2. Đọc template được chỉ. Luyện trên bản copy trong case.
3. Làm phần Thực hành. Đọc case Mailchimp để thấy hình dạng của "xong", đừng nộp lại chính case đó.
4. Đối chiếu mục **Xong khi nào**. Thiếu một ý là chưa xong, kể cả khi văn đã dài.
