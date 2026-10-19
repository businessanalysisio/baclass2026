# Bài 02 — SDLC: viết đúng thứ, đúng lúc

**Module:** 2. SDLC
**Progression:** Problem, và quyết định lúc nào problem được phép đi tới Delivery
**Template luyện:** [`templates/01-brd.md`](../templates/01-brd.md) khi scope đi Waterfall. Khi đi Agile, luyện [`templates/04-user-story.md`](../templates/04-user-story.md) và [`templates/05-acceptance-criteria.md`](../templates/05-acceptance-criteria.md). Defect lộ ở UAT thì đối chiếu [`templates/08-uat.md`](../templates/08-uat.md).
**ID:** `BR-`, hoặc `US-` / `AC-`

## Mục tiêu

Bạn chọn được Waterfall hay Agile cho một scope, và bạn biết tài liệu nào phải có trước, tài liệu nào viết vừa đủ và vừa kịp.

## Waterfall

Waterfall **front-load** hồ sơ: **BRD**, **FRS** (Functional Requirements Specification), rồi **sign-off**. Requirement được khóa trước khi xây. Thay đổi sau sign-off đi qua một vòng chính thức, vì kế hoạch, hợp đồng, hoặc kiểm thử đã dựa trên bản đã khóa.

**Cost of change** cộng dồn. Sửa một câu trong BRD lúc đang viết thì rẻ. Cùng câu đó, khi đã có code, dữ liệu, và một vòng UAT, thì đắt hơn toàn bộ phần đã xây phía trên: làm lại thiết kế, làm lại test, trễ lịch, đôi khi sửa hợp đồng.

Dùng Waterfall khi scope **ổn định**, khi môi trường **regulated** (hồ sơ và phê duyệt là điều kiện), hoặc khi hợp đồng **fixed-price** (giá gắn với một scope đã nêu).

Rủi ro đặc trưng: defect bị tìm thấy ở **UAT**. Người dùng nghiệp vụ lần đầu thấy hệ thống ở cuối, nên lỗi nhu cầu cũng lộ ở cuối. `UAT-` trong [`templates/08-uat.md`](../templates/08-uat.md) ghi `Fail` và trace ngược. UAT là lúc xác nhận, không phải lúc phát hiện problem ngay từ đầu đã sai. Chọn Waterfall nghĩa là Context Package và BRD phải chịu câu hỏi đó sớm.

## Agile

Agile chia việc thành **sprint** 1–2 tuần. Scope chi tiết không bị khóa hết từ ngày đầu. Thứ bị khóa trong một sprint là phần team cam kết làm trong sprint đó.

BA hỗ trợ Product Owner (PO). BA không thay PO. Việc hỗ trợ gồm:

- giữ **backlog** là danh sách sống,
- viết **user story**,
- viết **acceptance criteria**,
- tham gia **refinement** để story đủ rõ trước khi vào sprint.

Tài liệu theo **just-in-time** và **just-enough**: viết khi một quyết định cần nó, và chỉ đủ để người làm cùng người kiểm không hiểu hai nghĩa. Một BRD đầy đủ cho story sẽ đổi sau hai lần nói chuyện với user là tài liệu thừa, và thường là tài liệu sai.

Năm ceremony:

| Ceremony | BA làm gì ở đó |
|---|---|
| Planning | Giúp PO và team chọn story đã có AC. Story còn open question blocking thì chưa vào sprint |
| Standup | Gỡ vướng về rule hoặc nghĩa của AC |
| Review | Nghe phản ứng với phần đã chạy được. Gap mới là fact hoặc open question. Không vá requirement trong lúc demo |
| Retro | Nhìn cách team tìm hiểu nhu cầu |
| Refinement | Làm story sẵn sàng: actor, outcome, AC, rule liên kết, câu hỏi còn mở |

## Chọn bằng evidence

Câu hỏi là: scope này có ổn định, bị điều tiết, hoặc bị khóa giá không? Một sản phẩm có thể đi Agile trong khi một báo cáo nộp cơ quan quản lý vẫn đi Waterfall. Ghi lựa chọn như một decision trong `CTX-`, kèm rationale. Chưa đủ fact để chọn thì đó là open question. Im lặng của team không phải một decision rằng scope này đi Agile.

Case Mailchimp là điều tra một lỗi đang sống trên sản phẩm, không phải hợp đồng fixed-price cho toàn bộ SFCC. Viết một FRS đầy đủ trước khi trả lời double opt-in và batch window là front-load sai chỗ. `BR-01.1` ngắn, nói outcome nghiệp vụ, là vừa đủ cho why. Story và AC chỉ xuất hiện sau khi failure boundary có evidence.

## Thực hành

Trên `CTX-` của bạn:

1. Viết một decision: Waterfall hoặc Agile cho đúng scope này, với rationale. Chưa chọn được thì ghi open question và dừng. Đừng viết requirement.
2. Nếu Waterfall: copy `templates/01-brd.md`. Điền Business Objective và Background (trỏ `CTX-`, đừng kể lại evidence). Chỉ những `BR-` đã có nguồn. Kéo assumption từ CTX sang, đừng chép cả package. Sign-off để trống đến khi có agreement.
3. Nếu Agile: đừng viết FRS. Chỉ viết một `US-` và một `AC-` khi story đó không còn open question blocking. Phần còn lại nằm trong backlog như câu hỏi, chưa phải cam kết sprint.
4. Ghi một dòng: defect nào sẽ chỉ lộ ở UAT nếu bạn sign-off hôm nay. Đó là kiểm tra cost of change.

## Xong khi nào

- Decision về SDLC nằm trong `CTX-`, có rationale gắn với scope ổn định, regulated, hoặc fixed-price. Một câu "vì team hay dùng" không đủ.
- Waterfall: có `BR-` liên kết `CTX-`. Success criteria viết bằng ngôn ngữ nghiệp vụ, chưa phải AC. Assumption nào làm đổi requirement thì được kéo sang. Điều chưa biết không bị viết thành requirement.
- Agile: không có tài liệu dày hơn quyết định đang cần. Story được viết thì có `US-` trỏ `BR-` khi BR đã có, và AC dạng Given–When–Then. Phần thiếu evidence thì chưa có ID.
- Bạn chỉ ra được một thay đổi sẽ đắt nếu để đến UAT, và artifact nào phải gánh câu hỏi đó bây giờ: `CTX-` hoặc `BR-`.

## Traceability

Waterfall khóa sớm, nên chuỗi phải có mặt sớm: `CTX-` → `BR-`, rồi mới tới `RULE-`, `FLOW-`, `US-`, `AC-`, `UAT-`.

Agile không bỏ chuỗi đó. Nó từ chối điền hết một lúc. Ô trống trên traceability matrix là gap. Bài 07 mới yêu cầu matrix đầy đủ. Bài này cấm bịa ID cho phần chưa điều tra.

## Tự kiểm

- Sign-off hôm nay sẽ khóa điều gì bạn vẫn chỉ đang assume?
- Story này just-enough cho quyết định hiện tại, hay chỉ đủ dài để trông xong?
