# Hướng dẫn Thiết kế Giao diện (Design System & Styling Guide) - developerFolio

Tài liệu này tổng hợp chi tiết cách tổ chức và thiết kế màu sắc, nút bấm, hình nền, font chữ và các hiệu ứng động trong dự án **developerFolio** của bạn.

---

## 1. Kiến Trúc Hệ Thống Styling

Dự án sử dụng cơ chế kết hợp giữa **CSS Custom Properties (CSS Variables)** để quản lý theme động và **SCSS Variables** cho việc áp dụng phong cách cụ thể tại từng component:

```
[index.css] ──────────────> [_globalColor.scss] ────────────> [Component.scss]
(Định nghĩa CSS            (Ánh xạ CSS Variables           (Sử dụng biến SCSS
Variables theo theme)      thành SCSS Variables toàn cục)    để style giao diện)
```

- Chế độ theme (Sáng/Tối) được kiểm soát bởi class `.dark-mode` gắn trên thẻ body (`document.body.classList.add("dark-mode")` từ file `Main.js`).

---

## 2. Hệ Thống Màu Sắc (Color Palette)

Dự án theo phong cách **Earthy Trust** (Tự nhiên, ấm áp và đáng tin cậy) với tông màu đất và than củi làm chủ đạo.

### 2.1. Light Mode (Chế độ Sáng - Mặc định)
Được định nghĩa tại `:root` trong `src/index.css`:

| CSS Variable | Mã màu HEX | Vai trò / Mô tả |
| :--- | :--- | :--- |
| `--bg` | `#faf7f2` | Màu nền chính (kem sáng dịu mắt) |
| `--surface` | `#fffdf9` | Nền các khối nội dung (trắng ngà) |
| `--surface-muted`| `#f4eee7` | Vùng nền phụ hoặc thanh điều hướng |
| `--fg` | `#2b211e` | Màu chữ chính (nâu đen đậm) |
| `--muted` | `#7a6a61` | Màu chữ phụ, mô tả dự án (nâu đất nhạt) |
| `--border` | `#e3d8d0` | Đường viền ngăn cách nhẹ |
| `--primary` | `#c65a3a` | Màu thương hiệu chính (cam đất) |
| `--primary-hover`| `#9f3f2a` | Trạng thái hover của màu chính |
| `--accent` | `#f2b66d` | Điểm nhấn nổi bật (vàng cát hổ phách) |

### 2.2. Dark Mode (Chế độ Tối)
Được định nghĩa tại `.dark-mode` trong `src/index.css`:

| CSS Variable | Mã màu HEX | Vai trò / Mô tả |
| :--- | :--- | :--- |
| `--bg` | `#130e0c` | Màu nền chính (nâu đen trầm ấm) |
| `--surface` | `#1e1715` | Nền các khối nội dung (nâu gỗ ấm nâng khối) |
| `--surface-muted`| `#2a201c` | Vùng nền phụ hoặc thanh điều hướng tối |
| `--fg` | `#faf7f2` | Màu chữ chính (trắng ngà mềm mại, không chói) |
| `--muted` | `#a49389` | Màu chữ phụ, mốc thời gian (xám nâu sáng) |
| `--border` | `#332723` | Đường viền đồng/nâu tối |
| `--primary` | `#c65a3a` | Màu thương hiệu chính (cam đất - giữ nguyên) |
| `--primary-hover`| `#e59e56` | Trạng thái hover ở dark mode (vàng cam ấm) |
| `--accent` | `#f2b66d` | Điểm nhấn hổ phách ánh kim |

---

## 3. Thiết Kế Nút & Trạng Thái Tương Tác (Buttons & Interactivity)

### 3.1. Nút chính (`.main-button` trong `Button.scss`)
Nút chính (dùng cho các CTA như "Tải xuống CV", "Liên hệ với tôi") được thiết kế chuyên nghiệp với các thuộc tính:
- **Nền & Viền**: Đồng nhất sử dụng `$buttonColor` (`var(--primary)` - cam đất).
- **Màu chữ**: Sử dụng `var(--on-control)` (`#fffdf9` hoặc `#faf7f2` tùy theme).
- **Độ bo góc**: `6px` (`border-radius`).
- **Kích thước / Padding**: `13px 22px` (Mobile co về `12px 18px` hoặc chữ nhỏ hơn).
- **Hiệu ứng Hover**:
  - Dịch chuyển nhẹ lên trên: `transform: translateY(-3px)` kết hợp chuyển đổi mượt mà `transition: all 0.3s ease-in-out`.
  - Thay đổi màu nền thành đậm hơn (`$darkBoxShadow2`), chữ đổi thành màu cam đất để đảo ngược tương phản.
  - Sử dụng GPU Hardware Acceleration (trong `index.css`) để hiệu ứng trượt cực kỳ mượt mà:
    ```css
    .main-button {
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0);
      will-change: transform, opacity;
    }
    ```

### 3.2. Nút chuyển đổi giao diện sáng/tối (`.theme-toggle-btn` trong `ToggleSwitch.scss`)
Nút chuyển đổi giao diện được tinh chỉnh chuyển động tỉ mỉ:
- **Hình dáng**: Tròn hoàn hảo (`width: 36px; height: 36px; border-radius: 50%`).
- **Nền**: Nền mờ nhẹ `rgba(43, 33, 30, 0.06)` ở Light Mode và `rgba(255, 255, 255, 0.1)` ở Dark Mode.
- **Hiệu ứng Hover**: Phóng to nhẹ (`transform: scale(1.08)`) và đổi màu nền đậm hơn.
- **Hiệu ứng Active (Khi bấm vào)**: SVG icon bên trong tự động xoay `45deg` và co nhẹ (`scale(0.95)`) tạo cảm giác bấm phản hồi vật lý rất chân thực:
  ```css
  .theme-toggle-btn:active svg {
    transform: rotate(45deg) scale(0.95);
  }
  ```

---

## 4. Hình Nền Động (Background Patterns)

Thành phần `BackgroundPatterns.js` tạo chiều sâu thị giác ấn tượng với cấu trúc tách biệt cho hai chế độ theme:

### 4.1. Light Mode Background
- **Grid kiến trúc (Architectural Grid)**: Sử dụng mẫu SVG lặp lại kích thước `80x80px` vẽ các đường lưới vuông mờ tinh tế (`opacity: 0.035`) gợi cảm giác bản vẽ kỹ thuật.
- **Accents**: Hai đốm màu lan tỏa dịu nhẹ ở hai góc chéo (góc trên trái màu vàng cát hổ phách, góc dưới phải màu cam đất).

### 4.2. Dark Mode Background
- **Dải màu chuyển động**: Kết hợp gradient chéo từ `#1a1410` qua `#2b211e` tới `#4a3228`.
- **Đường đồng mức Topo**: Các hình ellipse đồng tâm lồng vào nhau bằng SVG lặp lại (`#topo`) mô phỏng bản đồ địa hình đồi núi với độ mờ cực thấp (`0.06` đến `0.15`) mang đậm tính "Earthy".
- **Hạt Grain (Texture nhiễu hạt)**: Sử dụng SVG bộ lọc nhiễu hạt (`feTurbulence`) với độ mờ `0.03` để làm mịn dải màu chuyển tối và tạo cảm giác giao diện cao cấp như giấy mỹ thuật.

---

## 5. Hệ Thống Typography (Phông Chữ)

Dự án sử dụng các phông chữ hiện đại tải từ Google Fonts:

1. **Space Grotesk**: Sử dụng cho tiêu đề các đề mục lớn (`--font-display`). Đây là font sans-serif hình học mang tính công nghệ và cấu trúc rõ nét.
2. **Be Vietnam Pro**: Sử dụng cho nội dung văn bản thường (`--font-body`), dễ đọc và tối ưu hóa tốt cho hiển thị tiếng Việt trên mọi kích thước màn hình.
3. **JetBrains Mono / SF Mono**: Phông chữ monospace (`--font-mono`) chuyên dụng hiển thị các khối code, số liệu thống kê từ GitHub để đảm bảo tính thẳng hàng và chuyên nghiệp.

---

## 6. Lưu Ý Khi Chỉnh Sửa Hoặc Thêm Mới Components

Để giữ tính nhất quán thiết kế trên toàn trang web:
1. **Không hardcode màu sắc**: Tránh viết trực tiếp mã màu như `#ff0000` hay `blue`. Luôn sử dụng biến từ `_globalColor.scss` hoặc CSS variable `var(--variable-name)`.
2. **Sử dụng đúng vai trò biến**:
   - Sử dụng `--primary` cho CTA, các vùng cần tương tác chính.
   - Sử dụng `--surface` cho các thẻ card, không dùng màu trắng tuyệt đối `#ffffff` ở chế độ tối.
3. **Responsive**: Đảm bảo sử dụng các breakpoint chuẩn (Mobile `< 768px`, Desktop `> 1280px`) để tinh chỉnh padding và font-size cho phù hợp (Ví dụ: `main-button` thu nhỏ kích thước padding trên màn hình nhỏ).
