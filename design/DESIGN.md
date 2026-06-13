# TH-Portfolio Design System Spec

Tài liệu này định nghĩa hệ thống design tokens, nguyên tắc giao diện và các component chuẩn cho trang Portfolio cá nhân (Developer Portfolio). Mục tiêu chính của hệ thống là trình bày hồ sơ chuyên môn, dự án nổi bật, kỹ năng công nghệ và kinh nghiệm làm việc một cách trực quan, hiện đại và tạo dựng sự tin cậy đối với nhà tuyển dụng hoặc đối tác.

---

## 1. Product Direction

TH-Portfolio theo đuổi định hướng **Earthy Trust Portfolio**: sáng, ấm áp, tối giản nhưng giàu thông tin và dễ tương tác. 

Hệ thống hỗ trợ cả hai chế độ giao diện:
- **Light Mode (Mặc định)**: Sử dụng nền kem sáng, các khối nội dung (surface) màu trắng ngà và sắc cam đất làm điểm nhấn hành động để tạo cảm giác gần gũi, dễ chịu nhưng vẫn giữ nguyên tính chuyên nghiệp của một hồ sơ kỹ sư phần mềm.
- **Dark Mode (Chế độ tối)**: Sử dụng phong cách **Warm Dark Charcoal / Charcoal Brown** lấy cảm hứng từ gỗ và than củi ấm, mang tông nền nâu đen trầm ấm pha chút ánh đỏ/cam ấm, kết hợp cùng các chi tiết viền đồng và chữ vàng cam hổ phách. Điều này giúp giảm mỏi mắt, duy trì sự đồng bộ thương hiệu và tạo hiệu ứng thị giác sang trọng.

Các từ khóa thiết kế:

- **Tính minh bạch**: Thông tin về dự án (đặc biệt là các liên kết mã nguồn GitHub, số sao, lượt fork) phải hiển thị rõ ràng, dễ đối chiếu.
- **Sự tập trung**: Bố cục phân mảnh hợp lý giúp người đọc (nhà tuyển dụng) nhanh chóng nắm bắt các thông tin chính như kinh nghiệm, kỹ năng và học vấn mà không bị xao nhãng.
- **Độ phản hồi cao**: Các hiệu ứng hover nhẹ nhàng, nút cuộn lên đầu trang (ScrollToTop) và thanh menu thông minh giúp điều hướng mượt mà.
- **Hiện đại nhưng ấm áp**: Sự kết hợp hài hòa giữa các gam màu tự nhiên và các hình ảnh hoạt họa Lottie sinh động.

---

## 2. Core Design Tokens

Sử dụng CSS custom properties làm nguồn token chính. Hệ thống tự động chuyển đổi giữa hai chế độ dựa trên lớp `.dark-mode` được gắn vào thẻ container chính.

```css
/* ==========================================================================
   Light Mode (Mặc định)
   ========================================================================== */
:root {
  --bg: #faf7f2;
  --surface: #fffdf9;
  --surface-muted: #f4eee7;
  --surface-raised: #fffdf9;

  --fg: #2b211e;
  --muted: #7a6a61;
  --subtle: #a49389;
  --border: #e3d8d0;
  --border-strong: #c9b8ae;

  --primary: #c65a3a;
  --primary-hover: #9f3f2a;
  --primary-soft: #f5e3dc;
  --control: #9f3f2a;
  --on-control: #fffdf9;

  --accent: #f2b66d;
  --accent-soft: #fcebd4;

  --success: #6b8e4e;
  --success-soft: #e8f0df;
  --warning: #e9a23b;
  --warning-soft: #fbedcf;
  --danger: #d64545;
  --danger-soft: #f8dfdf;
  --info: #7a6a61;
  --info-soft: #eee8e4;

  --font-display: 'Space Grotesk', 'Be Vietnam Pro', 'Segoe UI', sans-serif;
  --font-body: 'Be Vietnam Pro', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;

  --shadow-sm: 0 1px 2px rgba(43, 33, 30, 0.06);
  --shadow-md: 0 12px 32px rgba(43, 33, 30, 0.08);
  --shadow-lg: 0 20px 48px rgba(43, 33, 30, 0.12);

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
}

/* ==========================================================================
   Dark Mode (Khi class .dark-mode được kích hoạt)
   ========================================================================== */
.dark-mode {
  --bg: #130e0c; /* Màu nâu đen trầm ấm làm nền */
  --surface: #1e1715; /* Màu surface nâu gỗ ấm sáng hơn nền để nâng các khối card */
  --surface-muted: #2a201c;
  --surface-raised: #1e1715;

  --fg: #faf7f2; /* Chữ trắng ngà mềm mại, tránh chói */
  --muted: #a49389;
  --subtle: #7a6a61;
  --border: #332723; /* Đường viền đồng/nâu tối */
  --border-strong: #4a3a34;

  --primary: #c65a3a; /* Giữ sắc cam đất đặc trưng thương hiệu */
  --primary-hover: #e59e56; /* Hover chuyển sang sắc cam vàng ấm sáng */
  --primary-soft: #2d1d19;
  --control: #c65a3a;
  --on-control: #faf7f2;

  --accent: #f2b66d; /* Màu vàng cát/hổ phách ánh kim */
  --accent-soft: #35261d;

  --success: #6b8e4e; /* Màu xanh olive cho trạng thái thành công */
  --success-soft: #1d2618;
  --warning: #e9a23b;
  --warning-soft: #382813;
  --danger: #d64545;
  --danger-soft: #381616;
  --info: #a49389;
  --info-soft: #231c1a;
}
```

### Color Roles

- `--bg`: Nền chính của toàn bộ trang web Portfolio.
- `--surface`: Nền của các thẻ thông tin (card), biểu mẫu (form) hoặc các cửa sổ bật lên (modal).
- `--surface-muted`: Vùng phụ, thanh menu hoặc vùng lọc danh mục dự án.
- `--fg`: Chữ chính, tiêu đề các mục lớn, tên ứng viên.
- `--muted`: Chữ mô tả dự án, thông tin phụ, mốc thời gian.
- `--primary`: Sắc cam đất cho các nút kêu gọi hành động (CTA) chính như tải CV hoặc xem mã nguồn.
- `--control`: Nền nâu đỏ đất hoặc cam đất dành riêng cho nút nhấn chính; chữ trên nút luôn dùng màu `--on-control`.
- `--accent`: Sắc vàng cát hổ phách tạo điểm nhấn cho nhãn trạng thái hoặc chữ nhấn mạnh đặc biệt (ví dụ: `& tin cậy`).
- `--success`, `--warning`, `--danger`, `--info`: Sử dụng cho các chỉ báo trạng thái nghiệp vụ.

---

## 3. Typography

Cấu trúc font chữ ưu tiên tính hiển thị rõ nét trên các giao diện lập trình và kỹ thuật:

- **Tiêu đề lớn / Đề mục phần**: `Space Grotesk`, mang cảm giác hiện đại và cấu trúc rõ ràng.
- **Nội dung / Giới thiệu bản thân**: `Be Vietnam Pro` hoặc các font sans-serif hệ thống để đọc dễ dàng trên cả máy tính và điện thoại.
- **Số liệu / Thống kê / Mã nguồn**: `JetBrains Mono` hoặc `SF Mono` hiển thị số sao GitHub, lượt tải hoặc mã băm của sản phẩm.
- Sử dụng `font-variant-numeric: tabular-nums` cho các thông số định lượng trong phần kỹ năng hoặc thống kê dự án.

Kích thước chữ đề xuất:
- Tên ứng viên (Hero Name): `32px` đến `42px`, đậm nét.
- Tiêu đề mục lớn (Section Header): `26px` đến `32px`.
- Tên dự án / Thẻ kinh nghiệm: `18px` đến `22px`.
- Văn bản mô tả (Body text): `14px` đến `16px`.

---

## 4. Layout Principles

### Single-Page Layout
- **Header**: Thiết kế thông minh (sử dụng headroom), tự động ẩn đi khi cuộn xuống và hiện lại khi cuộn lên để tối ưu diện tích đọc dữ liệu. Có nút bật/tắt chế độ sáng tối hoặc nút điều hướng nhanh đến các mục.
- **Hero / Greeting Section**: Nằm ngay đầu trang với ảnh minh họa Lottie sinh động bên phải và dòng giới thiệu ngắn kèm nút mạng xã hội ở bên trái.
- **Main Content Area**: Các section như Skills, Work Experience, Projects xếp nối tiếp nhau với khoảng cách vừa phải để tạo nhịp đọc tốt.
- **Footer**: Chứa thông tin bản quyền, tình trạng tìm việc (Hireable Status) và liên kết liên hệ.

### Responsive Breakpoints
- Điện thoại di động (Compact & Standard): `360px` đến `430px`. Các thẻ dự án sẽ chuyển sang bố cục một cột, menu co gọn thành nút nhấn mở rộng.
- Máy tính bảng (Tablet): `768px` đến `1024px`. Grid dự án hiển thị 2 cột.
- Máy tính để bàn (Desktop): `1280px` trở lên. Grid dự án hiển thị 3 cột, hiển thị đầy đủ menu điều hướng trên Header.

---

## 5. Component Standards

### Greeting (Hero Section)
- Hiển thị lời chào cá nhân, vai trò ứng viên và mô tả ngắn gọn về năng lực.
- Bắt buộc có các liên kết mạng xã hội chính (GitHub, LinkedIn, Medium, Email) dưới dạng các nút icon tối giản.
- Có nút CTA lớn để tải xuống hồ sơ năng lực (Resume PDF).

### SkillProgress (Thanh Kỹ Năng)
- Hiển thị mức độ tự tin/thành thạo đối với các mảng công nghệ chính (như Frontend, Backend, Mobile Development).
- Sử dụng dải màu nhẹ nhàng khớp với token `--progressBarSpanBG` và nền `--progressBarBackground`.

### ExperienceCard (Kinh Nghiệm Làm Việc)
- Dành cho từng mốc công việc: bao gồm vai trò, tên công ty, logo công ty, thời gian và mô tả công việc (bullet points).
- Sử dụng các hiệu ứng chuyển màu nền nhẹ (linear gradient) và bo góc mượt mà để phân biệt các mốc thời gian rõ ràng.

### GithubRepoCard (Dự Án Open Source)
- Hiển thị các dự án được ghim trực tiếp từ tài khoản GitHub (lấy tự động qua API).
- Bắt buộc có: tên kho lưu trữ, mô tả dự án, ngôn ngữ lập trình chính kèm vòng tròn màu đặc trưng, số sao (stars) và lượt fork.
- Toàn bộ card có hiệu ứng hover nâng nhẹ để thôi thúc người dùng click truy cập mã nguồn.

### BigProjectCard (Dự Án Lớn)
- Dành cho các dự án khởi nghiệp hoặc ứng dụng thực tế quy mô lớn mà ứng viên trực tiếp thiết kế/phát triển.
- Hiển thị ảnh minh họa dự án, tên dự án, mô tả chi tiết các công nghệ sử dụng và liên kết trực tiếp tới sản phẩm thực tế.

### AchievementCard (Thành Tích & Chứng Chỉ)
- Trình bày chứng chỉ nghề nghiệp hoặc giải thưởng đạt được.
- Có ảnh thu nhỏ của chứng nhận, thông tin đơn vị cấp và nút liên kết xem chứng chỉ gốc.

### BlogCard (Bài Viết Chia Sẻ)
- Hiển thị các bài viết kỹ thuật từ Medium hoặc blog cá nhân.
- Gồm ảnh đại diện bài viết, tiêu đề, tóm tắt nội dung ngắn gọn và ngày đăng tải.

---

## 6. Forms & Contact

### ContactInfo
- Chứa các thông tin liên hệ trực tiếp như số điện thoại, địa chỉ email cá nhân và vị trí địa lý.
- Tích hợp liên kết mở ứng dụng gửi mail tự động hoặc quay số nhanh.

### ContactForm (Biểu mẫu gửi tin nhắn)
- Label rõ ràng cho từng ô nhập liệu (Họ tên, Email, Lời nhắn).
- Trạng thái phản hồi cụ thể khi gửi thư thành công (success) hoặc thất bại (danger) giúp người dùng an tâm.

---

## 7. Motion & Interaction

- **Splash Screen**: Hoạt họa mở đầu dài khoảng 2000ms giúp tạo ấn tượng đầu tiên về sự chau chuốt của trang web.
- **Scroll reveal**: Các phần nội dung sẽ trượt nhẹ hoặc mờ dần khi người dùng cuộn tới (sử dụng hiệu ứng Fade) để tạo trải nghiệm đọc tự nhiên.
- **Hover effects**: Tất cả các thẻ thông tin (card) nâng nhẹ `translateY(-2px)` kết hợp đổ bóng nhẹ để tạo chiều sâu giao diện.
- **Button transitions**: Các nút thay đổi độ đậm nhạt của màu nền khi hover, thời gian chuyển đổi khoảng `160ms` đến `220ms`.

---

## 8. Do's and Don't's

### Nên
- Giữ các mã màu nhất quán ở mọi section tương ứng với từng theme để giữ được tinh thần Earthy/Warm tự nhiên.
- Trình bày thông tin dự án ngắn gọn, đi thẳng vào các công nghệ cốt lõi và kết quả đạt được.
- Cập nhật định kỳ các dự án GitHub thông qua API để trang web luôn tươi mới và chân thực.
- Cung cấp liên kết tải CV trực tiếp ở vị trí dễ nhìn thấy nhất.

### Không nên
- Không hardcode các màu sắc rực rỡ ngoài bảng màu được định nghĩa trong token.
- Không sử dụng màu nền tối lạnh (xanh dương đậm/xám lạnh) cho Dark Mode; luôn bám sát tông màu **Warm Dark Charcoal / Charcoal Brown** đất ấm.
- Không đưa các thông tin dự án chưa có mã nguồn hoặc chưa hoàn thiện mà không ghi rõ trạng thái (để tránh mất uy tín).
- Không lạm dụng quá nhiều hiệu ứng chuyển động cùng lúc gây rối mắt và làm chậm tốc độ tải trang.
- Không bỏ qua phần liên kết kiểm chứng (luôn cung cấp link GitHub hoặc link website demo cho mỗi dự án).

---

## 9. Agent Prompt Guide

Khi yêu cầu AI hỗ trợ chỉnh sửa giao diện cho TH-Portfolio, sử dụng chỉ dẫn sau:

> Hãy chỉnh sửa giao diện Portfolio cá nhân theo design system TH-Portfolio hướng Earthy Trust hỗ trợ cả Light Mode và Dark Mode. 
> - **Light Mode**: Nền kem sáng `#FAF7F2`, surface trắng ngà `#FFFDF9`, chữ nâu đen `#2B211E`, text phụ `#7A6A61`, primary cam đất `#C65A3A`.
> - **Dark Mode**: Nền nâu đen trầm ấm `#130E0C`, surface nâu gỗ ấm `#1E1715`, chữ trắng ngà `#FAF7F2`, text phụ `#A49389`, primary cam đất `#C65A3A`, accent cam vàng hổ phách `#F2B66D` làm nổi bật nét vẽ/text nhấn.
> Typography sử dụng `Space Grotesk` cho tiêu đề và `Be Vietnam Pro` cho nội dung văn bản. Tập trung thiết kế các thẻ dự án GitHub, kinh nghiệm làm việc, thẻ học vấn, chứng chỉ thành tích và form liên hệ. Đảm bảo cấu trúc trang đơn phản hồi tốt trên mobile, các hiệu ứng hover mượt mà và thông tin hiển thị mạch lạc, tin cậy.
