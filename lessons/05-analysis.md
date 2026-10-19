# Bài 05 — Phân tích requirement

**Module:** 5. Analysis
**Progression:** Requirements, và Business Rules khi câu đó phải đúng dù flow bị xây lại
**Template luyện:** [`templates/01-brd.md`](../templates/01-brd.md) và [`templates/02-business-rules.md`](../templates/02-business-rules.md)
**ID:** `BR-`, `RULE-`

## Mục tiêu

Bạn sinh ý rồi mới đánh giá, nhóm được nhu cầu, gọi đúng loại requirement, và viết assumption, constraint, dependency để người review đọc chúng trước.

## Brainstorm, rồi mới evaluate

Hai việc này không làm cùng lúc. **Brainstorm** thu ý: nhu cầu, chỗ đau, rule còn nghi, cách làm. Chưa chấm đúng sai, chưa ưu tiên, chưa biến thành `BR-`. **Evaluate** mới hỏi: đây là fact, assumption, hay ý tưởng? Nguồn nào? Có trong scope không? Có trái rule đã biết không?

Làm cả hai cùng lúc thì phòng chỉ còn những ý an toàn. Assumption của người nói nhiều nhất trở thành requirement.

## Affinity diagram

**Affinity diagram** nhóm các mẩu sau brainstorm theo sự gần nghĩa, không theo thứ tự người ta nói. Đặt tên nhóm sau khi các mẩu đã ngồi cạnh nhau. Tên nhóm thường lộ requirement: không phải "màn hình lỗi", mà "ops phải thấy sync bị từ chối".

Một nhóm chưa được tách thì chưa phải requirement. Nó có thể là một đống lẫn fact và solution. Tách trước khi cho ID.

## Năm loại

Giữ tên tiếng Anh. Sai loại thì sai mức, và sai chỗ trong chuỗi artifact.

| Loại | Câu nó trả lời | Chỗ trong repo này |
|---|---|---|
| **Business requirement** | Outcome nghiệp vụ, vì sao đáng làm | `BR-` trong BRD |
| **Stakeholder requirement** | Một nhóm người cần gì để outcome đó xảy ra | Thành `BR-` chi tiết, hoặc thành `US-` khi đã có một actor. Chưa tới thì ở lại `CTX-` |
| **Functional requirement** | Hệ thống làm được hành vi nào | Về sau là `US-` và `AC-`. Phải kiểm được. Bài 07 |
| **NFR** (non-functional requirement) | Chất lượng: tốc độ, bảo mật, tải, khả năng dùng | Trong BRD khi nó ràng buộc outcome, kèm con số. Bài 07 |
| **Transition requirement** | Việc để đi từ as-is sang trạng thái mới: dữ liệu cũ, đào tạo, chạy song song | Trong scope, hoặc một `BR-` riêng. Không giấu trong story tính năng |

Business requirement không chứa thiết kế màn hình. Functional requirement không thay câu vì sao. Transition requirement bị quên thì tới ngày chuyển đổi mới thấy dữ liệu cũ không có chỗ ở.

## Assumption, constraint, dependency

Reviewer đọc ba mục này trước. Gọi tắt là A/C/D.

- **Assumption** là điều bạn coi là đúng để requirement có nghĩa. Kéo từ `CTX-`, chỉ những dòng làm đổi requirement này. Mỗi dòng có "nếu sai thì sao".
- **Constraint** là giới hạn đã biết: kỹ thuật, luật, ngân sách, thời gian. Constraint không phải assumption. Một điều luật không được "giả định". Chưa đọc văn bản thì đó là open question.
- **Dependency** là thứ phải có trước: quyết định của người khác, hệ thống khác, story khác, chữ ký khác. Dependency chưa xong thì requirement có thể đúng mà vẫn không làm được.

Trong `templates/02-business-rules.md`, rule là điều vẫn đúng nếu workflow bị xây lại từ đầu. "Nút nằm bên phải" không phải rule. "Signup chỉ thành công khi SFCC đã ghi nhận và Mailchimp đã acknowledge" là rule: đổi màn hình cũng không đổi điều đó. **Authority** (SOP, luật, SME, hành vi hệ thống đã xác nhận) phải có tên. Chưa có authority thì để ở Conflicts & Open Questions và trỏ về open question trong `CTX-`.

## Reviewer đọc A/C/D trước

Đưa BRD hoặc bộ rule cho người review. Nhờ họ đọc Assumptions, Constraints, Dependencies trước phần requirement. A/C/D sai thì các câu `BR-` và `RULE-` bên dưới chưa đáng sửa chữ. Các mục này đã có trong `01-brd.md` (Assumptions, Constraints) và trong user story (Dependencies). Rule mâu thuẫn nằm ở Conflicts & Open Questions.

## Thực hành

Từ evidence của bài 04:

1. Brainstorm riêng. Sau đó evaluate: mỗi mẩu là fact, assumption, solution, hay out of scope.
2. Lập affinity diagram và đặt tên nhóm.
3. Viết business requirement vào BRD. `BR-` có rationale, priority Must / Should / Could, và source trỏ `CTX-` hoặc evidence.
4. Viết ít nhất một `RULE-` với applies when, does not apply when, và source of authority. Chưa có authority thì đừng cho ID. Ghi open question.
5. Điền assumption, constraint, dependency. Transition requirement nào có thật mà chưa ai nhận thì ghi thành `BR-` hoặc vào scope.
6. Nhờ một người đọc A/C/D trước và chỉ requirement nào đổ nếu một dòng A/C/D sai.

## Xong khi nào

- Danh sách brainstorm còn giữ được, tách khỏi danh sách đã evaluate.
- Affinity diagram có tên nhóm. Mỗi `BR-` trỏ về một nhóm hoặc một evidence.
- Loại của từng câu đứng đúng chỗ: business requirement nói why, rule còn đúng khi flow đổi, NFR chưa có số thì chưa được coi là xong (bài 07), transition không nằm lẫn trong story tính năng.
- Assumptions trên BRD là tập con của `CTX-`. Chúng không phải bản chép cả package, và không phải fact.
- Mỗi `RULE-` có authority. Rule chưa có authority nằm ở Conflicts & Open Questions.
- Một reviewer đã đọc A/C/D trước, và bạn ghi điều họ làm gãy. Chưa có reviewer thì đó là open question. Đừng tự ký thay.

## Traceability

`BR-` trỏ `CTX-`. `RULE-` trỏ `BR-`. Chưa cần `US-` khi stakeholder requirement chưa có actor nhận, hoặc failure boundary còn mở. Ô trống là gap có chủ.

Hình dạng đã đứng trong case mẫu: `BR-01.1` nguồn là Marketing report và `CTX-01`. `RULE-01` trỏ `BR-01.1`, authority là Engineering và Marketing xác nhận trong lúc điều tra.

## Tự kiểm

- Câu này còn đúng không nếu ngày mai team xây lại toàn bộ workflow?
- Reviewer có bác được requirement này chỉ bằng cách bác một assumption không?
