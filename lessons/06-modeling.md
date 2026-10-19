# Bài 06 — Mô hình

**Module:** 6. Modeling
**Progression:** Process
**Template luyện:** [`templates/03-process-flow.md`](../templates/03-process-flow.md)
**ID:** `FLOW-`

## Mục tiêu

Bạn mô hình được hành vi và dữ liệu đủ để người khác tìm chỗ gãy. Bạn bắt cardinality nào làm đổi business logic trước khi nó bị chôn trong một bảng.

Mô hình là cách kiểm. Sơ đồ không trỏ được tới evidence, rule, hoặc open question thì chưa thuộc case.

## Use case

**Use case** kể một actor đạt một goal qua hệ thống.

- **Actor** là người hoặc hệ thống bên ngoài có goal. "User" không cụ thể thì chưa phải actor. "E-commerce ops admin" là actor.
- **Goal** là việc actor cần xong, không phải tên màn hình.
- **Main** là đường đi khi các điều kiện đã biết đều đúng.
- **Alternate** là biến thể vẫn có thể đạt goal, theo đường khác main.
- **Exception** là đường goal không đạt: từ chối, timeout, dữ liệu bị cấm, thiếu quyền.

Use case không thay business requirement. Nó kiểm rằng `FLOW-` có actor và có chỗ cho exception. Main và exception đi vào Current State hoặc Target State của process flow. Alternate hoặc exception chưa có evidence thì là open question trên `CTX-`. Đừng vẽ thêm nhánh cho đủ hình.

## Class diagram và cardinality

**Class diagram** ở mức phân tích cho thấy khái niệm nghiệp vụ và quan hệ. Nó chưa phải bảng vật lý. **Cardinality** (một-một, một-nhiều, nhiều-nhiều) là một câu về nghiệp vụ: một signup tương ứng mấy bản ghi subscriber, một email được phép ở mấy trạng thái.

Thách thức mọi cardinality làm đổi **business logic**. "Một email chỉ có một trạng thái trên một audience" và "một email vừa subscribed vừa cleaned" không cùng đúng. Chọn sai thì rule, màn hình, và AC sai theo. Hỏi ai xác nhận, hệ thống đang làm gì, hợp đồng nói gì.

Câu trả lời làm đổi rule thì ghi vào `RULE-` khi đã có authority, hoặc vào Conflicts & Open Questions khi chưa. Đừng để trong chú thích của sơ đồ.

## Activity diagram và BPMN

**Activity diagram** và **BPMN** cho thấy việc diễn ra theo thời gian, gồm nhánh và điểm dừng. **Swimlane** chia việc theo actor. Cột Actor trong `templates/03-process-flow.md` là swimlane dạng bảng. Khối mermaid trong template là hình đi kèm bảng. Hai bản không được mâu thuẫn nhau.

Vẽ as-is trước. Mỗi bước có actor, hành động, hệ thống. Failure point trỏ evidence và open question `CTX-`. To-be chỉ bắt đầu khi current-state và business rule đã đứng. Mô hình đẹp rất dễ thành to-be giả dạng as-is. Giữ Target State trống cho đến khi chỗ gãy đã có evidence.

## Conceptual data model

**Conceptual data model** đặt tên sự vật nghiệp vụ và quan hệ, bằng chữ của stakeholder. Chưa chọn công nghệ, chưa có khóa, kiểu dữ liệu, hay index. ERD vật lý là bước sau.

Dùng model này để đối chiếu class diagram và rule. Model nói "một signup tạo một kết quả sync" trong khi as-is nuốt lỗi và vẫn ghi success, thì model đang mô tả điều người ta tin, không phải điều hệ thống làm. Ghi cả hai. Ghi cái nào là fact.

## Cardinality sai trên ERD thì đắt về sau

**ERD** là lúc cardinality thành bảng và khóa. Sai ở đây không ở lại trên giấy. Nó thành dữ liệu: không lưu được quan hệ nhiều-nhiều, nhân bản khách, hoặc không phân biệt "chưa sync" với "bị từ chối". Sửa sau khi đã có dữ liệu production đắt hơn sửa một câu trong `RULE-` bây giờ.

Cardinality không phải chi tiết để developer "xem rồi chỉnh" một mình. Nó đổi ai được tính là subscriber thì đó là việc của BA, và nó cần authority.

## Thực hành

1. Chọn một goal. Viết use case ngắn: actor, goal, main, và một alternate hoặc một exception.
2. Điền `FLOW-` as-is khớp use case đó: trigger, actor, precondition, từng bước, sơ đồ. Failure point có evidence, hoặc được ghi là chưa có evidence.
3. Viết một conceptual data model vừa đủ cho flow: vài khái niệm và cardinality giữa chúng.
4. Chọn một cardinality. Viết: nếu nó sai, business logic nào đổi, `RULE-` nào đổ, `AC-` nào sau này sẽ pass nhầm.
5. Để trống Target State, trừ khi `RULE-` liên quan đã có authority và failure boundary không còn là đoán.

## Xong khi nào

- `FLOW-` trỏ `BR-` và `RULE-` đã có. Bước as-is không chứa giải pháp.
- Use case có actor cụ thể, một main, và ít nhất một alternate hoặc exception.
- Cột Actor không có bước "hệ thống tự làm" khi một người đang xử lý tay.
- Một cardinality được thách thức bằng văn bản: sai thì đổi logic nào. Chưa ai xác nhận thì nó đang ở open question, không nằm im trong sơ đồ.
- Conceptual data model dùng chữ nghiệp vụ. Chỗ model khác as-is được ghi là gap.
- Target State trống, hoặc mỗi bước to-be trỏ một `RULE-`.

## Traceability

`FLOW-` nằm giữa rule và story: `BR-` → `RULE-` → `FLOW-` → `US-`. Story ở bài sau phải nói nó thuộc bước nào (`FLOW-, step N`). Bước không có trong flow thì story không có chỗ đứng. Cardinality còn mở thì chưa được khóa trong `AC-`.

Chuỗi lớp học giữ dạng `BR-01 → RULE-04 → FLOW-03 → US-07 → SCR-04 → AC-07.1 / AC-07.2 → UAT-12`. Case Mailchimp đã điền một đường thật: `BR-01.1 → RULE-01 → FLOW-03 → US-07`.

## Tự kiểm

- Sơ đồ này mô tả việc đang chạy, hay việc bạn muốn họ chạy?
- Cardinality này do ai xác nhận? AC nào thành rác nếu họ xác nhận ngược lại?
