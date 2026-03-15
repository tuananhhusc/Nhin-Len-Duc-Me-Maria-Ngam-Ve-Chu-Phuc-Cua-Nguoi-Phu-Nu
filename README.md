# Đức Mẹ Maria - Báo Cáo Chuyên Sâu (Academic Report App)

Dự án web hiện đại trình bày báo cáo nghiên cứu thần học và văn hóa về Đức Mẹ Maria, tập trung vào chiều kích chữ "Phúc" của người phụ nữ qua lăng kính Công giáo và truyền thống Á Đông.

## 🌟 Tổng Quan Dự Án

Website được thiết kế với phong cách học thuật (Academic Styling), tối ưu hóa cho trải nghiệm đọc văn bản dài, kết hợp các công nghệ web hiện đại để mang lại sự trang trọng và chiều sâu.

**Chủ đề:** Nhìn Lên Đức Mẹ Maria, Ngẫm Về Chữ Phúc Của Người Phụ Nữ.

## 🛠️ Công Nghệ Sử Dụng

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Content:** Markdown (React-Markdown)
- **Typography:**
  - `Cormorant Garamond`: Cho các tiêu đề trang trọng.
  - `Source Serif 4`: Cho nội dung chính (body text) tối ưu đọc lâu.
  - `Be Vietnam Pro`: Cho các yếu tố giao diện (UI).
- **Phân tích nội dung:** `remark-gfm` cho bảng biểu và cú pháp markdown mở rộng.

## ✨ Tính Năng Nổi Bật

1.  **Giao diện Học thuật:** Thiết kế tối giản, sang trọng với các yếu tố như Drop Cap (chữ cái khởi đầu), Blockquote nghệ thuật và vạch ngăn cách (hr) cổ điển.
2.  **Mục lục Thông minh (TOC):** Tự động trích xuất các tiêu đề từ Markdown, hỗ trợ cuộn mượt và đánh dấu mục đang đọc.
3.  **Hệ thống Chú thích (Footnotes):** Chú thích hiển thị dạng Tooltip hiện đại khi di chuột, giúp người đọc không bị ngắt quãng dòng suy nghĩ.
4.  **Giải thuật Glossary:** Tự động nhận diện các thuật ngữ chuyên môn (Kecharitomene, Fiat, ...) và hiển thị định nghĩa khi tương tác.
5.  **Chế độ Tối (Dark Mode):** Tối ưu hóa độ tương phản cho việc đọc vào ban đêm, bảo vệ thị lực.
6.  **Responsive Design:** Giao diện co giãn hoàn hảo trên mọi thiết bị, từ máy tính để bàn đến điện thoại di động.

## 📂 Cấu Trúc Thư Mục

- `/app`: Chứa logic định tuyến, layout và metadata.
- `/components`: Các thành phần giao diện tái sử dụng.
- `/content`: File `report.md` - Nguồn nội dung chính của báo cáo.
- `/lib`: Các hàm tiện ích (Parser, Constants, Utils).
- `/public`: Chứa hình ảnh và tài nguyên tĩnh.

## 🚀 Hướng Dẫn Chạy Dự Án

1.  **Cài đặt dependencies:**
    ```bash
    npm install
    ```

2.  **Chạy môi trường phát triển:**
    ```bash
    npm run dev
    ```

3.  **Xây dựng bản sản xuất (Production):**
    ```bash
    npm run build
    ```

## 📝 Bản Quyền

© 2026 Báo Cáo Chuyên Sâu. Mọi nội dung thuộc về dự án "Đức Mẹ Maria".
"Ad Maiorem Dei Gloriam Cho Vinh Danh Chúa Hơn"
