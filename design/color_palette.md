# Tổng Quan Bảng Màu (Color Palette Specification) - developerFolio

Tài liệu này tổng hợp toàn bộ bảng màu sắc (cả Light Mode và Dark Mode), ý nghĩa sử dụng và cách ánh xạ từ mã màu CSS Custom Properties sang các biến SCSS trong dự án.

---

## 1. Bảng Màu Hệ Thống (System Themes)

Dưới đây là chi tiết mã màu HEX cho cả hai chế độ giao diện được khai báo trong `src/index.css`.

### 1.1. Bảng so sánh Light Mode và Dark Mode

| CSS Variable | Ý nghĩa / Vai trò | Light Mode (Sáng) | Dark Mode (Tối) |
| :--- | :--- | :--- | :--- |
| **`--bg`** | Nền chính của toàn trang | `#faf7f2` (Kem sáng) | `#130e0c` (Nâu đen ấm) |
| **`--header-bg`** | Nền của thanh menu điều hướng | `rgba(250, 247, 242, 0.75)` | `rgba(26, 20, 16, 0.75)` |
| **`--surface`** | Nền của các thẻ card nội dung | `#fffdf9` (Trắng ngà) | `#1e1715` (Nâu gỗ trầm) |
| **`--surface-muted`** | Nền vùng phụ / thanh cuộn / progress | `#f4eee7` (Bột kem gỗ) | `#2a201c` (Nâu gỗ tối) |
| **`--surface-raised`** | Nền card nâng cao hoặc modal | `#fffdf9` | `#1e1715` |
| **`--fg`** | Màu chữ chính (Tiêu đề, tên) | `#2b211e` (Nâu đen đậm) | `#faf7f2` (Trắng ngà mềm) |
| **`--muted`** | Màu chữ phụ, mô tả dự án | `#7a6a61` (Nâu đất nhạt) | `#a49389` (Xám nâu sáng) |
| **`--subtle`** | Màu chữ rất nhạt, mốc thời gian ít nổi bật | `#a49389` | `#7a6a61` |
| **`--border`** | Đường viền mảnh hoặc chia ngăn | `#e3d8d0` | `#332723` |
| **`--border-strong`** | Đường viền phân cấp đậm hơn | `#c9b8ae` | `#4a3a34` |
| **`--primary`** | Màu nhấn hành động chính (Cam đất) | `#c65a3a` | `#c65a3a` |
| **`--primary-hover`** | Màu hover của nút / liên kết chính | `#9f3f2a` | `#e59e56` |
| **`--primary-soft`** | Nền nhãn/tag màu cam dịu nhẹ | `#f5e3dc` | `#2d1d19` |
| **`--control`** | Màu nền của nút điều khiển chính | `#9f3f2a` | `#c65a3a` |
| **`--on-control`** | Chữ hiển thị trên nền nút điều khiển | `#fffdf9` | `#faf7f2` |
| **`--accent`** | Điểm nhấn đặc biệt (Vàng cát hổ phách) | `#f2b66d` | `#f2b66d` |
| **`--accent-soft`** | Nền nhãn/tag màu vàng cát dịu nhẹ | `#fcebd4` | `#35261d` |

---

## 2. Màu Phản Hồi Trạng Thái (Status Colors)

Sử dụng cho các thông báo, nhãn trạng thái (ví dụ trong Form liên hệ hoặc các nhãn kinh nghiệm):

| Trạng thái | CSS Variable | Light Mode | Dark Mode | Ý nghĩa sử dụng |
| :--- | :--- | :--- | :--- | :--- |
| **Success** | `--success`<br>`--success-soft` | `#6b8e4e`<br>`#e8f0df` | `#6b8e4e`<br>`#1d2618` | Trạng thái Thành công / Hoàn thành (Ví dụ: Đã gửi email) |
| **Warning** | `--warning`<br>`--warning-soft` | `#e9a23b`<br>`#fbedcf` | `#e9a23b`<br>`#382813` | Cảnh báo / Đang xử lý |
| **Danger** | `--danger`<br>`--danger-soft` | `#d64545`<br>`#f8dfdf` | `#d64545`<br>`#381616` | Trạng thái Lỗi / Thất bại (Ví dụ: Nhập thiếu form) |
| **Info** | `--info`<br>`--info-soft` | `#7a6a61`<br>`#eee8e4` | `#a49389`<br>`#231c1a` | Thông tin chú thích bổ sung |

---

## 3. Màu Thương Hiệu Mạng Xã Hội (Social Media Brand Colors)

Được cấu hình cố định trong `src/_globalColor.scss` (không bị thay đổi theo Light/Dark Mode) để giữ đúng nhận diện thương hiệu của từng nền tảng:

- **Facebook**: `#3b5998`
- **LinkedIn**: `#0e76a8`
- **GitHub**: `#333333`
- **GitLab**: `#fca326`
- **Google Mail**: `#ea4335`
- **Twitter**: `#1da1f2`
- **Medium**: `#000000`
- **Stack Overflow**: `#f48024`
- **Instagram**: `#c13584`
- **Kaggle**: `#20beff`

---

## 4. Ánh Xạ Biến SCSS Toàn Cục (`_globalColor.scss`)

Dưới đây là một số ví dụ điển hình về cách dự án ánh xạ các biến CSS Custom Properties vào các biến SCSS để sử dụng thống nhất ở các component:

```scss
// Nút bấm
$buttonColor: var(--primary);           // Màu cam đất (#c65a3a)
$buttonHover: var(--primary-hover);     // Cam đậm (#9f3f2a) / Vàng hổ phách (#e59e56)

// Chữ
$textColor: var(--fg);                  // Nâu đen (#2b211e) hoặc Trắng ngà (#faf7f2)
$subTitle: var(--muted);                // Nâu đất nhạt (#7a6a61) hoặc Xám nâu (#a49389)

// Thẻ dự án Github
$githubRepoCardLanguageColorBG: var(--primary);
$githubRepoCardColor: var(--muted);
$githubRepoCardRepoNameColor: var(--fg);
```

---

## 5. Màu Sắc Hình Nền & Đường Nét Vẽ Nền (Background & Pattern Colors)

Các chi tiết hình học và đốm sáng ở hình nền (`BackgroundPatterns.js`) được phối màu hài hòa để tạo chiều sâu giao diện:

### 5.1. Chế độ Sáng (Light Mode Background)
* **Lưới kiến trúc (Architectural Grid)**: Sử dụng màu `#2b211e` (trùng với màu chữ chính `--fg`) vẽ nét lưới mảnh `0.5px` với độ mờ `opacity: 0.035` để tạo cảm giác bản vẽ kỹ thuật.
* **Đốm sáng lan tỏa (Accents Glow)**:
  - Phía dưới phải: Màu cam đất `#c65a3a` (trùng `--primary`) ở độ mờ 10% (`rgba(198, 90, 58, 0.10)`).
  - Phía trên trái: Màu vàng hổ phách `#f2b66d` (trùng `--accent`) ở độ mờ 8% (`rgba(242, 182, 109, 0.08)`).

### 5.2. Chế độ Tối (Dark Mode Background)
* **Dải màu nền (Gradient Base)**: Phối hợp 4 tông sắc ấm chuyển dần từ `#1a1410` (nâu cực tối) -> `#2b211e` (nâu đất ấm) -> `#3d2e26` (nâu gỗ trầm) -> `#4a3228` (nâu đồng gỗ đậm).
* **Đường nét Topo (Contour rings)**: Sử dụng màu `#faf7f2` (trùng với chữ chính `--fg` chế độ tối) vẽ các vòng đồng mức mô phỏng bản đồ địa hình ở các độ mờ cực nhỏ từ `0.06` đến `0.15`.
* **Đốm sáng lan tỏa (Accents Glow)**:
  - Phía trên phải: Màu cam đất `#c65a3a` (trùng `--primary`) ở độ mờ 15% (`rgba(198, 90, 58, 0.15)`).
  - Phía dưới trái: Màu vàng cát `#f2b66d` (trùng `--accent`) ở độ mờ 10% (`rgba(242, 182, 109, 0.10)`).
  - Phía trên giữa: Màu xanh lá olive `#6b8e4e` (trùng `--success`) ở độ mờ 6% (`rgba(107, 142, 78, 0.06)`).

---

## 6. Mẹo Khi Làm Việc Với Màu Sắc Trong Dự Án
1. **Thay đổi theme**: Chỉ cần tinh chỉnh mã màu trong file `src/index.css`. Mọi component khác sẽ tự động thay đổi theo nhờ sử dụng biến CSS.
2. **Khi viết mã CSS/SCSS mới**: Không dùng màu cố định (VD: `color: #2b211e;`). Thay vào đó hãy dùng `color: var(--fg);` hoặc `color: $textColor;` (nhớ `@import "../../_globalColor";` ở đầu file SCSS).

