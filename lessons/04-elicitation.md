# Bài 04 — Elicitation

**Module:** 4. Elicitation
**Progression:** Evidence
**Template luyện:** [`templates/00-context-package.md`](../templates/00-context-package.md) — Evidence Log và What We Know. Document analysis thì điền thêm Current State trong [`templates/03-process-flow.md`](../templates/03-process-flow.md).
**ID:** `CTX-`, và `FLOW-` chỉ cho as-is khi bạn đã đọc tài liệu vận hành

## Mục tiêu

Bạn lấy được evidence bằng survey, document analysis, hoặc prototype. Bạn không biến câu trả lời thành requirement trước khi biết nó là fact, assumption, hay một gap.

Elicitation thuộc knowledge area Elicitation and Collaboration. Bài này yêu cầu ba kỹ thuật dưới đây.

## Survey

Survey hỏi nhiều người cùng một bộ câu. Nó cho **what**: tần suất, lựa chọn, mức độ. Nó không cho **why**. Một tỷ lệ không nói được người ta đang né một bước, đang hiểu sai chữ, hay đang làm cho xong.

- **Closed question** chọn trong các đáp án. Dễ đếm, dễ mất câu bạn không nghĩ tới. Thêm một đường thoát ("không làm việc này", "khác") khi bạn chưa chắc danh sách đã đủ.
- **Open question** để người trả lời tự viết. Bạn lấy được ngôn ngữ thật của họ. Đọc tốn công hơn. Câu mở không thay một cuộc nói chuyện khi bạn cần hỏi tiếp tại sao.
- **Leading question** đã chứa câu trả lời người viết muốn nghe. Đừng dùng. "Bước xác nhận hiện tại có rất chậm không?" không đo được gì. "Lần gần nhất, bước xác nhận kéo dài bao lâu?" để fact tự đứng.
- **Pilot** gửi cho vài người trước khi gửi cả nhóm. Pilot tìm câu hiểu hai nghĩa, đáp án thiếu, và câu chỉ người viết survey mới hiểu. Sửa câu. Đừng sửa câu trả lời cho khớp biểu.

Kết quả vào Evidence Log: ngày, nguồn, và nó confirms hay contradicts điều gì. Biểu đồ không kèm câu hỏi gốc thì không phải evidence. Điều survey không giải thích được là open question. Nó blocking nếu bạn định viết requirement từ nó.

## Document analysis

Đọc trước khi nhờ người ta kể bằng trí nhớ. Nguồn tối thiểu:

- **SOP** — quy trình chính thức họ nói là đang chạy,
- hệ thống **legacy** — màn hình, log, trường dữ liệu, thông báo lỗi,
- **contract** — nghĩa vụ đã ký, SLA, điều khoản từ chối,
- **luật** và quy định nội bộ — thứ không được bỏ vì bất tiện.

Học **as-is** trước. As-is gồm cả bước vòng, bước thủ công, và bước chẳng ai muốn đưa vào slide. Đừng vẽ to-be trong buổi bạn vừa mở SOP.

Ghi **gap**: SOP nói một đằng, log hoặc người vận hành cho thấy một nẻo. Gap không phải requirement. Gap là một dòng Evidence Log, và thường là một open question: cái nào là authority? Business rule cần authority thì mới thành rule, không phải sở thích. Chưa biết authority thì chưa có `RULE-`.

Khi document analysis là kỹ thuật bạn dùng, mở `templates/03-process-flow.md` và chỉ điền Trigger, Actors, Preconditions, và Current State. Failure / Exception Points cần evidence. Target State để trống. Template cấm thiết kế bản sửa trước khi hiểu chỗ gãy.

## Prototype

Prototype là công cụ để hỏi. Nó chưa phải bản giao.

- **Low-fi** là giấy, khung xám, dòng chữ. Dùng để khám phá: người dùng có nhận ra việc của họ không, bước nào thừa, từ nào sai. Rẻ nên vứt được. Chưa tranh luận màu và pixel.
- **High-fi** gần sản phẩm thật. Chỉ làm khi flow và nghĩa của trường đã ổn định. Làm sớm, người xem sẽ góp ý nút bấm và bỏ qua assumption sai bên dưới.

High-fi đã ổn định thì map sang [`templates/06-screen-mapping.md`](../templates/06-screen-mapping.md) (`SCR-`), mỗi trường trỏ `RULE-` nếu có rule. Low-fi chưa được cấp `SCR-`. Evidence Log ghi ai đã xem, họ làm được việc gì, họ vấp ở đâu. Câu "nhìn được" không phải evidence.

## Thực hành

Chọn một kỹ thuật và làm trên case của bạn. Bài này xong với một kỹ thuật làm thật.

1. Survey: tối đa năm câu, có closed và open, không leading. Pilot với một người. Ghi điều pilot buộc bạn sửa.
2. Hoặc document analysis: một SOP, một màn hình legacy, hoặc một điều khoản. Điền as-is vào `FLOW-`. Ghi ít nhất một gap.
3. Hoặc prototype: một low-fi cho một việc người dùng cần hoàn thành. Một người thử. Ghi chỗ họ không làm được.

Mọi kết quả vào Evidence Log. Chỉ đưa sang What We Know khi có nguồn. What mà survey không giải thích, gap chưa có authority, và chỗ prototype còn rối: để ở Open Questions.

## Xong khi nào

- Evidence Log có ít nhất một dòng từ kỹ thuật bạn đã làm: ngày, nguồn, confirms hoặc contradicts.
- Không có kết quả survey nào bị viết thành why khi bạn chưa hỏi tiếp.
- Bộ câu không còn leading question, hoặc bạn đã sửa sau pilot và giữ cả hai bản.
- As-is, nếu có, không chứa to-be. Target State trống cho đến khi rule và chỗ gãy đứng yên.
- Gap được ghi là gap. Bạn chưa sinh `RULE-` hay `BR-` chỉ từ một tài liệu vừa đọc.
- Prototype low-fi không có ID `SCR-`. Bạn ghi được người thử không hoàn thành việc gì.

## Traceability

Evidence nuôi `CTX-`. `FLOW-` as-is trỏ `CTX-` ở cột evidence của failure point. Chưa có đường tới `US-` hay `AC-`. Case Mailchimp viết story sau khi batch delay và double opt-in đã thành câu hỏi blocking, không phải sau khi có một bản vẽ.

## Tự kiểm

- Dòng này là what hay why?
- Tài liệu nói vậy, hay hệ thống đang chạy vậy? Hai bên khác nhau thì gap đã được ghi chưa?
- Prototype này để học, hay để bảo vệ một solution đã chọn từ trước?
