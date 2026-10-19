# Bài 07 — Đặc tả

**Module:** 7. Specs
**Progression:** Requirements → User Stories → Screens → Acceptance Criteria → Validation → Delivery
**Template luyện:** [`templates/04-user-story.md`](../templates/04-user-story.md), [`templates/05-acceptance-criteria.md`](../templates/05-acceptance-criteria.md), và [`templates/07-traceability-matrix.md`](../templates/07-traceability-matrix.md). Why ở [`templates/01-brd.md`](../templates/01-brd.md). Có UI thì thêm [`templates/06-screen-mapping.md`](../templates/06-screen-mapping.md). Validation thì [`templates/08-uat.md`](../templates/08-uat.md).
**ID:** `BR-`, `US-`, `SCR-`, `AC-`, `UAT-`

## Mục tiêu

Bạn viết đặc tả mà người không ngồi cùng buổi họp vẫn kiểm được. Mọi mục trên roadmap lần được về một business requirement.

## BRD là why

BRD trả lời vì sao việc này đáng làm: revenue, compliance, risk, retention, hoặc một outcome khác có người chịu. BRD không phải danh sách màn hình. Background trỏ `CTX-` và không viết lại cuộc điều tra. Success criteria của BRD là thước nghiệp vụ. Thước kiểm thử là `AC-`, để ở template khác, cho khỏi trộn "kinh doanh đã đạt" với "kịch bản test đã pass".

Story không trỏ được `BR-` thì story đó chưa có why. Đưa nó về backlog dưới dạng câu hỏi, hoặc bỏ.

## Functional phải testable

**Functional requirement** mô tả hành vi quan sát được. "Hệ thống xử lý tốt" không test được. "Khi Mailchimp từ chối, hàng đợi lỗi có một dòng, và log SFCC không ghi success thường" thì test được.

Ở Agile, viết functional ở mức story và AC khi story đã tới lượt. Ở Waterfall, cùng các câu đó nằm trong FRS, và từng câu vẫn phải test được. Đổi tên tài liệu không làm một câu mơ hồ thành requirement.

## NFR phải có số

**NFR** không có ngưỡng thì chưa phải NFR. "Nhanh", "dễ dùng", "an toàn" là mong muốn. Một NFR đủ cụ thể có dạng: thời gian phản hồi dưới 2 giây với 1000 user đồng thời.

Ghi điều kiện đo: đo ở đâu, tải nào, thế nào là fail. Chưa có số thì để trong Open Questions. Đừng điền "phản hồi nhanh" vào BRD cho có dòng. NFR cần nguồn: ai cần ngưỡng đó, và ngưỡng vỡ thì hỏng outcome nào của `BR-`.

## User story và Given–When–Then

Một story:

**As a** [actor],
**I want** [capability],
**so that** [business outcome].

Mệnh đề so that không được là "để tôi dùng được tính năng". Đó là lặp lại I want. Outcome phải nối được tới `BR-`.

**Acceptance criteria** dùng **Given–When–Then**:

- **Given** trạng thái bắt đầu,
- **When** hành động,
- **Then** kết quả quan sát được.

Người test chưa thấy story vẫn phải ra pass hoặc fail mà không hỏi lại. Mỗi AC trỏ một `RULE-` hoặc một decision đã ghi. Có AC cho happy path và AC cho negative hoặc edge. AC không phụ thuộc open question chưa giải trong `CTX-`. Checklist này nằm trong `templates/05-acceptance-criteria.md`. Điền cho hết. Đừng xóa dòng.

Case mẫu đã có hình dạng này: `US-07` nối `BR-01.1`, `FLOW-03` bước 3–4, và `RULE-01`. `AC-07.1` là sync thành công. `AC-07.2` là sync bị từ chối thì phải hiện ra, không được nuốt lỗi.

## Backlog sống

**Backlog** không phải tài liệu đã ký rồi cất. Nó sống: thêm, tách, bỏ, sắp lại khi evidence mới tới. Story đã vào sprint thì AC ổn định trong sprint đó. Phần còn lại được đổi khi assumption gãy.

Story chưa đủ điều kiện vào sprint khi thiếu actor, outcome nối `BR-`, link tới bước `FLOW-`, rule, hoặc một AC Given–When–Then. Thiếu thì ghi trên story là chưa sẵn sàng. Đừng giao cho dev với câu "tự hiểu".

## Roadmap là priority

**Roadmap** xếp thứ gì trước thứ gì, và vì sao. Nó là **priority**, không phải một lịch các ngày. Một ngày trên roadmap chỉ là ngày khi có decision riêng về lịch, thường thuộc PM plan, và vẫn có thể đổi. Đừng dùng ngày để giả rằng đã ưu tiên xong.

Mỗi mục roadmap trace về một **business requirement** (`BR-`). Mục không có `BR-` là ý tưởng, giải pháp, hoặc việc của team khác. Nó không đứng trên roadmap của case này. Priority đổi thì mục Priority trên BRD và matrix đổi theo. Roadmap nói Must trong khi BRD nói Could là hai artifact đang mâu thuẫn.

## Màn hình và UAT

Story có chỗ người dùng nhìn và chạm thì map `SCR-`: màn hình giúp xong quyết định hoặc hành động nào, mỗi trường có nguồn dữ liệu và `RULE-`, đủ trạng thái empty, loading, error, success. High-fi chỉ tới đây khi elicitation đã cho thấy flow ổn định.

**UAT** (`UAT-`) là người thật làm theo AC, bằng ngôn ngữ nghiệp vụ, có evidence khi pass. Fail thì ghi defect trace về `BR-`, `RULE-`, `FLOW-`, `US-`, `AC-`, hoặc một gap trong `CTX-`, kèm next action. Chưa có ảnh, log, hoặc file thì chưa có Pass.

## Thực hành

1. Kiểm `BR-`: mỗi câu là why, có source, có success criteria nghiệp vụ.
2. Viết một functional requirement test được, và một NFR có số. NFR thiếu số thì là open question.
3. Viết một `US-`: As / I want / so that, link `BR-`, `FLOW-` (step N), `RULE-`. So that không lặp I want.
4. Viết `AC-` Given–When–Then cho happy path và một edge. Tick coverage check khi điều kiện đó đúng.
5. Nếu có UI, thêm `SCR-` với trạng thái lỗi, không chỉ trạng thái thành công.
6. Lập roadmap của case: mỗi mục có priority và một `BR-`. Không ghi ngày trừ khi đó là decision đã có chủ.
7. Điền `templates/07-traceability-matrix.md`. Ô trống ghi vào Gaps với owner. Dòng UAT chỉ xuất hiện khi một người thật đã chạy. Chưa chạy thì để trống UAT và status `Not started` hoặc `Ready for UAT`, đúng sự thật.

## Xong khi nào

- Mọi `BR-` nói why. Không có `BR-` nào chỉ là tên tính năng.
- Mọi functional requirement đưa vào delivery đều test được bằng một `AC-`.
- Mọi NFR trong delivery có ngưỡng và điều kiện đo, cụ thể tới mức "dưới 2 giây với 1000 user", với con số của chính case bạn.
- Story đúng dạng As / I want / so that. AC đúng Given–When–Then. Coverage check còn đủ: happy path, một negative, mỗi AC có rule hoặc decision, không AC nào dựa trên open question blocking.
- Backlog ghi item nào chưa sẵn sàng và vì sao.
- Roadmap là thứ tự ưu tiên. Mỗi mục có `BR-`. Không mục nào chỉ có một ngày.
- Traceability matrix là một nguồn: `BR` → `RULE` → `FLOW` → `US` → `SCR` → `AC` → `UAT`. Ô trống có trong Gaps, hoặc được điền. Status không nói `Validated` khi chưa có UAT pass kèm evidence.
- Giữ dạng chuỗi của lớp: `BR-01 → RULE-04 → FLOW-03 → US-07 → SCR-04 → AC-07.1 / AC-07.2 → UAT-12`. Case Mailchimp đã khóa các ID thật của nó: `CTX-01`, `BR-01.1`, `RULE-01`, `FLOW-03`, `US-07`, `SCR-04`, `AC-07.1`, `AC-07.2`, `UAT-12`. Đừng đánh lại số trong case mẫu cho khớp hàng mẫu.

## Traceability

Bài này đóng chuỗi. Artifact không vẽ được đường về business rule và business context thì chưa thuộc delivery. Quay lại evidence hoặc rule còn thiếu. Đổi một `RULE-` thì tìm mọi `AC-` và `SCR-` trỏ tới nó trước khi gọi là xong.

## Tự kiểm

- Mục roadmap này trỏ tới `BR-` nào? Không có `BR-` thì nó không nằm trên roadmap.
- Tester chưa gặp bạn có ra pass hoặc fail từ AC này không?
- Ô trống trên matrix đã có chủ trong Gaps chưa?
