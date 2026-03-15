import { Footnote } from "@/components/FootnoteTooltip";

export interface ParsedContent {
  content: string;
  footnotes: Footnote[];
}

/** Chuẩn APA 7: Tác giả/Cơ quan. (Năm). Tiêu đề. Tên website. URL */
export interface APAReference {
  number: number;
  authors: string;
  year: string;
  title: string;
  siteName: string;
  url: string;
}

/** Trả về chuỗi APA đầy đủ cho mục tài liệu tham khảo */
export function formatAPA(ref: APAReference): string {
  return `${ref.authors}. (${ref.year}). ${ref.title}. ${ref.siteName}. ${ref.url}`;
}

const APA_SOURCES: Record<number, APAReference> = {
  1: {
    number: 1,
    authors: "Hội Đồng Giám Mục Việt Nam",
    year: "n.d.",
    title: "Đức Maria, hiền mẫu và gương mẫu của linh mục",
    siteName: "Hội Đồng Giám Mục Việt Nam",
    url: "https://hdgmvietnam.com/chi-tiet/duc-maria-hien-mau-va-guong-mau-cua-linh-muc-41904",
  },
  2: {
    number: 2,
    authors: "Hội Đồng Giám Mục Việt Nam",
    year: "n.d.",
    title: "Bài giảng Đức Thánh Cha - Lễ Đức Maria Mẹ Thiên Chúa",
    siteName: "Hội Đồng Giám Mục Việt Nam",
    url: "https://hdgmvietnam.com/chi-tiet/bai-giang-duc-thanh-cha-le-duc-maria-me-thien-chua-01-01--54225",
  },
  3: {
    number: 3,
    authors: "Chùa Ba Vàng",
    year: "n.d.",
    title: "Phúc đức tại mẫu: 3 điều mẹ nên làm để tích đức cho con",
    siteName: "Chùa Ba Vàng",
    url: "https://chuabavang.com/3-dieu-phu-nu-nen-lam-de-tich-duc-cho-con-chau-huong-phuc-ca-doi-d839.html",
  },
  4: {
    number: 4,
    authors: "Báo Mới",
    year: "n.d.",
    title: "Nữ giới và hạnh nguyện Bồ tát trong đời sống hiện đại",
    siteName: "Báo Mới",
    url: "https://baomoi.com/nu-gioi-va-hanh-nguyen-bo-tat-trong-doi-song-hien-dai-c51682852.epi",
  },
  5: {
    number: 5,
    authors: "Sống Với Mạc Khải",
    year: "n.d.",
    title: "Mầu nhiệm thinh lặng của Đức Maria",
    siteName: "Người Tin Hữu",
    url: "https://www.nguoitinhuu.org/chiase/TrangDo/maunhiemxinvang.html",
  },
  6: {
    number: 6,
    authors: "Trần Mỹ Duyệt",
    year: "2023",
    title: "Mẹ đứng dưới chân thập giá Chúa Giêsu",
    siteName: "Tin Mừng.net",
    url: "http://tinmung.net/THDC-Hai-%20Ngoai/Tran%20My%20Duyet/July-2023/Me-dung-duoi-chan-thap-gia.html",
  },
  7: {
    number: 7,
    authors: "Hội Đồng Giám Mục Việt Nam",
    year: "n.d.",
    title: "Mẹ Maria: Biểu tượng của lòng tin vâng phục",
    siteName: "Hội Đồng Giám Mục Việt Nam",
    url: "https://hdgmvietnam.com/chi-tiet/me-maria-bieu-tuong-cua-long-tin-vang-phuc-53101",
  },
  8: {
    number: 8,
    authors: "Giáo Phận Đà Lạt",
    year: "n.d.",
    title: "Maria Mẹ đầy ơn phúc",
    siteName: "Giáo Phận Đà Lạt",
    url: "https://giaophandalat.com/maria-me-day-on-phuc.html",
  },
  9: {
    number: 9,
    authors: "Giáo Phận Cần Thơ",
    year: "n.d.",
    title: "Maria diễm phúc hơn mọi người nữ",
    siteName: "Giáo Phận Cần Thơ",
    url: "https://gpcantho.com/maria-diem-phuc-hon-moi-nguoi-nu/",
  },
  10: {
    number: 10,
    authors: "Dòng Mân Côi Chí Hoà",
    year: "n.d.",
    title: "Đức Maria mẫu gương sự thánh thiện",
    siteName: "Dòng Mân Côi Chí Hoà",
    url: "https://mancoichihoavn.com/duc-maria-mau-guong-su-thanh-thien/",
  },
  11: {
    number: 11,
    authors: "Ban Tuyên Giáo Tỉnh ủy Lâm Đồng",
    year: "n.d.",
    title: "Nét đẹp Phụ nữ Việt Nam xưa và nay",
    siteName: "Cổng Thông tin Điện tử Tỉnh Lâm Đồng",
    url: "https://btgdvtu.lamdong.dcs.vn/tin-tuc-su-kien/nhip-cau-tuyen-giao-bien-dao-viet-nam/type/detail/id/31089/task/1710",
  },
  12: {
    number: 12,
    authors: "Phụ Nữ Today",
    year: "n.d.",
    title: "Phúc đức tại mẫu: Người phụ nữ sở hữu 3 nét tướng này vượng phu, ích tử ai lấy được phúc 3 đời",
    siteName: "Phụ Nữ Today",
    url: "https://phunutoday.vn/phuc-duc-tai-mau-nguoi-phu-nu-so-huu-3-net-tuong-nay-vuong-phu-ich-tu-ai-lay-duoc-phuc-3-doi-d439409.html",
  },
  13: {
    number: 13,
    authors: "Lòng Chúa Thương Xót",
    year: "n.d.",
    title: "Phúc đức tại mẫu",
    siteName: "Lòng Chúa Thương Xót",
    url: "https://longchuathuongxot.vn/v2/phuc-duc-tai-mau/",
  },
  14: {
    number: 14,
    authors: "Huynh Đoàn Đa Minh Việt Nam",
    year: "n.d.",
    title: "Các bài suy niệm Lễ Đức Maria, Mẹ Thiên Chúa (01.01)",
    siteName: "Huynh Đoàn Đa Minh",
    url: "https://hddmvn.net/cac-bai-suy-niem-le-duc-maria-me-thien-chua-01-01/",
  },
  15: {
    number: 15,
    authors: "Giáo Phận Cần Thơ",
    year: "n.d.",
    title: "Các bài suy niệm Lễ Đức Mẹ Hồn Xác Lên Trời",
    siteName: "Giáo Phận Cần Thơ",
    url: "https://gpcantho.com/cac-bai-suy-niem-le-duc-me-hon-xac-len-troi/",
  },
  16: {
    number: 16,
    authors: "Giáo Phận Thanh Hóa",
    year: "n.d.",
    title: "Đức Maria gương mẫu cho cuộc sống đức tin",
    siteName: "Giáo Phận Thanh Hóa",
    url: "https://giaophanthanhhoa.net/duc-maria/duc-maria-guong-mau-cho-cuoc-song-duc-tin-27135.html",
  },
  17: {
    number: 17,
    authors: "Giáo Phận Cần Thơ",
    year: "n.d.",
    title: "Các bài suy niệm Lễ Đức Maria Hồn Xác Lên Trời",
    siteName: "Giáo Phận Cần Thơ",
    url: "https://gpcantho.com/cac-bai-suy-niem-le-duc-maria-hon-xac-len-troi-2/",
  },
  18: {
    number: 18,
    authors: "Hội Đồng Giám Mục Việt Nam",
    year: "n.d.",
    title: "Vì tất cả phụ nữ và trẻ em gái: Phẩm giá, công lý và hành động",
    siteName: "Hội Đồng Giám Mục Việt Nam",
    url: "https://hdgmvietnam.com/chi-tiet/vi-tat-ca-phu-nu-va-tre-em-gai-pham-gia-cong-ly-va-hanh-dong",
  },
  19: {
    number: 19,
    authors: "Hội Đồng Giám Mục Việt Nam",
    year: "n.d.",
    title: "Đức Maria, hình ảnh của Giáo hội Hiệp hành: Bài 12 - Sự hiện diện trong cầu nguyện",
    siteName: "Hội Đồng Giám Mục Việt Nam",
    url: "https://hdgmvietnam.com/chi-tiet/duc-maria-hinh-anh-cua-giao-hoi-hiep-hanh-bai-12-su-hien-dien-trong-cau-nguyen",
  },
  20: {
    number: 20,
    authors: "Dòng Con Đức Mẹ Vô Nhiễm",
    year: "n.d.",
    title: "Gương mẫu Đức Maria qua các giai đoạn huấn luyện của người nữ tu",
    siteName: "Con Đức Mẹ Vô Nhiễm",
    url: "https://conducmevonhiem.org/bai-viet/16342-guong-mau-duc-maria-qua-cac-giai-doan-huan-luyen-cua-nguoi-nu-tu-con-duc-me-vo-nhiem",
  },
  21: {
    number: 21,
    authors: "Giáo Phận Cần Thơ",
    year: "n.d.",
    title: "Các bài suy niệm Lễ Đức Maria Hồn Xác Lên Trời",
    siteName: "Giáo Phận Cần Thơ",
    url: "https://gpcantho.com/cac-bai-suy-niem-le-duc-maria-hon-xac-len-troi-2/",
  },
  22: {
    number: 22,
    authors: "Hội Đồng Giám Mục Việt Nam",
    year: "n.d.",
    title: "Noi gương Đức Trinh Nữ Maria diễm phúc có thể dẫn chúng ta vào ân sủng",
    siteName: "Hội Đồng Giám Mục Việt Nam",
    url: "https://hdgmvietnam.com/chi-tiet/noi-guong-duc-trinh-nu-maria-diem-phuc-co-the-dan-chung-ta-vao-an-sung-41214",
  },
};

const FOOTNOTE_SOURCES: Record<number, { content: string; url: string }> = Object.fromEntries(
  Object.entries(APA_SOURCES).map(([k, v]) => [
    k,
    { content: `${v.authors}. ${v.title}. ${v.siteName}.`, url: v.url },
  ])
);

export function getFootnote(number: number): Footnote {
  const source = FOOTNOTE_SOURCES[number];
  return {
    id: `footnote-${number}`,
    number,
    content: source?.content || `Chú thích số ${number}`,
    url: source?.url,
  };
}

export function getAllFootnotes(): Footnote[] {
  return Object.keys(FOOTNOTE_SOURCES).map((key) => {
    const num = parseInt(key);
    return getFootnote(num);
  });
}

export function getAllAPAReferences(): APAReference[] {
  return Object.keys(APA_SOURCES)
    .map((key) => parseInt(key))
    .sort((a, b) => a - b)
    .map((num) => APA_SOURCES[num]);
}
