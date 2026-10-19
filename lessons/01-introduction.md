# Bài 01 — BA tìm nhu cầu thật

**Module:** 1. Introduction
**Progression:** Context
**Template luyện:** [`templates/00-context-package.md`](../templates/00-context-package.md)
**ID:** `CTX-`

## Mục tiêu

Sau bài này bạn nói được BA làm gì, output của BA là gì, và vì sao người chỉ ghi chép thì chưa làm BA. Bạn mở được một Context Package mà problem không chứa solution.

## BA không phải một job title

Business Analysis (BA) là việc tìm **nhu cầu thật** và một **solution** tạo ra giá trị. Chức danh không quyết định việc đó. Developer, Product Owner, hay consultant đều đang làm BA khi họ từ chối giải pháp cho đến khi nhu cầu đứng vững.

Nhu cầu thật không phải câu đầu tiên stakeholder nói. "Subscriber không thấy trong Mailchimp" là một report. Nhu cầu có thể là: Marketing phải chạm được người đã opt-in, hoặc phải thấy lỗi thay vì mất dữ liệu trong im lặng. Solution (sửa job, thêm màn hình, đổi audience) chỉ có giá trị sau khi nhu cầu đó được kiểm.

## Sáu mảng của BABOK

BABOK chia việc BA thành sáu knowledge area. Giữ tên tiếng Anh:

| Knowledge area | Việc đang làm |
|---|---|
| Business Analysis Planning and Monitoring | Chọn cách làm việc với stakeholder, cách ghi requirement, cách biết mình xong |
| Elicitation and Collaboration | Lấy thông tin từ người đang giữ nó, và làm việc cùng họ |
| Requirements Life Cycle Management | Giữ requirement sống: trace, đổi, ưu tiên, bỏ |
| Strategy Analysis | Nhìn hiện trạng và trạng thái đáng làm, rồi chọn change |
| Requirements Analysis and Design Definition | Đưa nhu cầu thành requirement và design đủ để làm |
| Solution Evaluation | Đo solution đã giao có tạo giá trị đã hứa không |

Các bài sau đi vào từng mảng. Bài này cần bạn thấy chúng là một chuỗi việc. Chúng không cộng lại thành một cuốn tài liệu.

## Output là agreement

Output của BA là **agreement**: những người chịu hậu quả cùng chấp nhận nhu cầu, phạm vi, và những điều còn chưa biết. Độ dày của BRD không đo được agreement.

Agreement đứng được khi ba cột tách bạch trong Context Package:

- **Fact** có nguồn và ngày, ở mục What We Know.
- **Assumption** có câu "nếu sai thì gãy gì", ở mục What We Assume.
- **Open question** có người trả lời và cờ blocking, ở mục What We Don't Know / Open Questions.

Trộn ba cột là cách một tài liệu trông chuyên nghiệp mà vẫn sai. Template cố tình có chỗ cho cả ba. Bỏ các mục đó không phải là viết gọn. Đó là giấu lỗ hổng.

## Vì sao học BA

- Bạn phải nói được với exec, finance, user, và dev. Exec hỏi giá trị. Finance hỏi chi phí và rủi ro. User hỏi việc hàng ngày có gãy không. Dev hỏi điều kiện nào là đúng, điều kiện nào là lỗi.
- Phần lớn thất bại của dự án phần mềm đến từ **bad requirements**: nhu cầu sai, thiếu, hoặc không kiểm được. Code đúng cho nhu cầu sai vẫn là thất bại.
- Kỹ năng này chuyển được sang vai khác. Elicitation, tách assumption, và traceability dùng được ở product, operations, và consulting.
- Ở Việt Nam, nhu cầu người làm được việc này là có thật. Nhiều team có người ghi yêu cầu. Ít người chịu trách nhiệm cho nhu cầu.

## Rủi ro: thành note-taker

Người mới dễ ngồi họp, ghi trung thành, rồi gửi biên bản. Note-taker lưu lời nói. BA kiểm lời nói.

Hỏi **tại sao** cho đến khi một assumption xấu gãy. Dừng khi câu trả lời là fact có nguồn, hoặc khi câu hỏi trở thành open question mà chưa ai trả lời được. Phòng họp im chưa phải là agreement.

Case Mailchimp ([`cases/example-sfcc-mailchimp/`](../cases/example-sfcc-mailchimp/README.md)) có ít nhất ba nguyên nhân nghe hợp lý cho cùng một report: batch delay, double opt-in, và API từ chối trong im lặng. Viết user story "sửa sync" ngay lúc đó cho ra một artifact hợp dạng, đứng trên problem sai. Cột assumption là chỗ assumption xấu bị bẻ.

## Thực hành

Copy `templates/00-context-package.md` vào case của bạn. Đặt ID `CTX-01` (hoặc số tiếp theo nếu case đã có context). Điền, và chưa viết requirement:

1. **Problem Statement** — lời người báo, rồi một câu nói lại cho chính xác. Không có solution trong mục này.
2. **What We Know** — chỉ fact. Mỗi dòng có nguồn.
3. **What We Assume** — mỗi assumption có rủi ro nếu sai, và confidence High / Medium / Low.
4. **What We Don't Know / Open Questions** — ai trả lời, có blocking không.
5. Một câu agreement ở **Decisions Made So Far** chỉ khi đã có người chịu trách nhiệm đồng ý. Chưa có thì để trống và ghi open question. Câu agreement nói nhu cầu.

Dùng case Mailchimp để đối chiếu hình dạng. Đừng nộp lại case đó như bài của bạn.

Hình dạng của một CTX đã tách cột, lấy từ case mẫu:

| Cột | Ví dụ |
|---|---|
| Fact | Marketing xác nhận những email cụ thể không có trong Mailchimp audience. Nguồn: audience export |
| Assumption | Sync chạy trên mọi signup, không theo batch. Nếu sai, "missing" có thể chỉ là chưa tới giờ chạy |
| Open question | Mailchimp double opt-in có bật trên audience này không? Blocking: Yes |

## Xong khi nào

- Có `CTX-` với problem không chứa solution.
- Fact, assumption, và open question nằm ở ba mục khác nhau. Không có dòng fact nào thiếu nguồn.
- Ít nhất một assumption ghi điều gì gãy nếu nó sai. Nếu chưa bẻ được assumption nào, bạn chưa hỏi tại sao đủ sâu.
- Open question blocking được đánh dấu. **Failure Boundary** để trống khi còn câu blocking. Template cấm đoán chỗ này.
- Một câu nhu cầu mà stakeholder có thể gật hoặc bác. Chưa có agreement thì Decisions trống, lý do nằm ở open question.
- Bạn chưa mở BRD. Context chưa đứng thì requirement là đoán.

## Traceability

`CTX-` là đầu chuỗi. Chưa cần `BR-`. Khi sang bài sau, BRD trỏ `Linked Context Package: CTX-`. Đừng phát sinh `US-` hay `AC-` ở bài này.

## Tự kiểm

- Xóa mọi solution trong đầu bạn, problem còn đọc được không?
- Assumption nào, nếu sai, làm cả case đổi nghĩa?
- Bạn đang lưu lời stakeholder, hay đang kiểm lời đó?
