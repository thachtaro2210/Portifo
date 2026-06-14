/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Tống Phan Kim Thạch",
  title: "Hi all, I'm Tống Phan Kim Thạch",
  title_vi: "Xin chào, mình là Tống Phan Kim Thạch",
  subTitle: emoji(
    "A passionate Software Developer 🚀 specializing in building high-performance Backend systems with Java / Spring Boot / Node.js and modern Frontends with ReactJS / Tailwind CSS, along with cloud database integration."
  ),
  subTitle_vi: emoji(
    "Một nhà phát triển phần mềm nhiệt huyết 🚀 chuyên xây dựng hệ thống Backend vững chắc với Java / Spring Boot / Node.js và giao diện Frontend với ReactJS / Tailwind CSS, kết hợp dịch vụ đám mây và cơ sở dữ liệu."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thachtaro2210",
  linkedin: "https://www.linkedin.com/in/thachtaro/?skipRedirect=true",
  gmail: "thatchjeager@gmail.com",
  leetcode: "https://leetcode.com/u/thachtaro/",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  title_vi: "Mình làm được những gì",
  subTitle: "TECH STACK",
  subTitle_vi: "TECH STACK",
  skills: [
    "Build interactive user interfaces for web and mobile apps",
    "Develop progressive web applications (PWA)",
    "Integrate cloud and database services (AWS S3/EC2, DigitalOcean, SQL/NoSQL)"
  ],
  skills_vi: [
    "Xây dựng giao diện Web và Mobile tương tác cao",
    "Phát triển ứng dụng web tiến trình (PWA)",
    "Tích hợp các dịch vụ đám mây và cơ sở dữ liệu (AWS, DigitalOcean, SQL/NoSQL)"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      iconifyClassname: "simple-icons:springboot"
    },
    {
      skillName: "React JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node JS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PostgreSQL",
      iconifyClassname: "simple-icons:postgresql"
    },
    {
      skillName: "MongoDB",
      iconifyClassname: "simple-icons:mongodb"
    },
    {
      skillName: "DigitalOcean",
      iconifyClassname: "simple-icons:digitalocean"
    },
    {
      skillName: "AWS S3",
      iconifyClassname: "simple-icons:amazons3"
    },
    {
      skillName: "AWS EC2",
      iconifyClassname: "simple-icons:amazonec2"
    },
    {
      skillName: "Tailwind CSS",
      iconifyClassname: "simple-icons:tailwindcss"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Industrial University of Ho Chi Minh City (IUH)",
      schoolName_vi: "Trường Đại học Công nghiệp Thành phố Hồ Chí Minh (IUH)",
      logo: require("./assets/images/iuhLogo.png"),
      subHeader: "Kỹ thuật phần mềm (Software Engineering)",
      subHeader_vi: "Kỹ thuật phần mềm (Software Engineering)",
      duration: "2022 - 2026 (Expected)",
      duration_vi: "2022 - 2026 (Dự kiến)",
      desc: "Focusing on advanced Software Engineering principles, System Architecture, and Full-Stack Web/Mobile Application Development.",
      desc_vi: "Tập trung vào các nguyên lý kỹ thuật phần mềm nâng cao, kiến trúc hệ thống và phát triển ứng dụng Web/Mobile Full-Stack.",
      descBullets: [
        "In-depth study of Data Structures & Algorithms, Database Management Systems (SQL & NoSQL), and Clean Architecture.",
        "Hands-on experience in building enterprise-grade applications, real-time messaging, and rental/property management platforms."
      ],
      descBullets_vi: [
        "Nghiên cứu chuyên sâu về Cấu trúc dữ liệu & Giải thuật, Hệ quản trị cơ sở dữ liệu (SQL & NoSQL), và Kiến trúc phần mềm sạch (Clean Architecture).",
        "Kinh nghiệm thực tiễn trong việc xây dựng các ứng dụng cấp doanh nghiệp, hệ thống tin nhắn thời gian thực và nền tảng PropTech quản lý bất động sản."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      Stack_vi: "Thiết kế & Giao diện (Frontend)",
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      Stack_vi: "Hệ thống & Cơ sở dữ liệu (Backend)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      Stack_vi: "Tư duy Lập trình (Programming)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      role_vi: "Lập trình viên Backend",
      company: "Asia Soft",
      company_vi: "Asia Soft",
      date: "July 2025 – September 2025",
      date_vi: "Tháng 7, 2025 – Tháng 9, 2025",
      desc: "",
      desc_vi: "",
      descBullets: [
        "Designed and developed high-performance backend APIs and databases.",
        "Built RESTful APIs using Java Spring Boot and Node.js",
        "Optimized queries and schemas for PostgreSQL and MongoDB"
      ],
      descBullets_vi: [
        "Thiết kế và phát triển các hệ thống API backend và cơ sở dữ liệu hiệu năng cao.",
        "Xây dựng các RESTful API sử dụng Java Spring Boot và Node.js",
        "Tối ưu hóa truy vấn và cấu trúc cơ sở dữ liệu PostgreSQL và MongoDB"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  title_vi: "Dự án",
  subtitle: "SOME PERSONAL AND TEAM PROJECTS THAT I HAVE DEVELOPED",
  subtitle_vi: "MỘT SỐ DỰ ÁN CÁ NHÂN VÀ DỰ ÁN NHÓM MÀ MÌNH ĐÃ THAM GIA PHÁT TRIỂN",
  projects: [
    {
      image: require("./assets/images/era.png"),
      projectName: "Apartment & Real Estate Platform",
      projectName_vi: "Hệ thống Quản lý & Giao dịch Bất động sản (Apartment)",
      projectDesc: "Timeline: October 2025 - Present\n\nDescription: An enterprise-grade, high-performance real estate rental and sales platform (PropTech) featuring real-time interactive maps, 360-degree VR property tours, automated tenant identity verification, and on-chain escrow contract integration for secure security deposit protection.\n\nTech Stack:\n- Frontend: React.js (Vite), TypeScript, Ethers.js, Zustand, Tailwind CSS, Leaflet & Leaflet Draw, Three.js & Photo Sphere Viewer (360° VR Tour), Framer Motion, Tesseract.js (OCR), JSPDF, i18next (19+ languages).\n- Backend: Java 21, Spring Boot 3.5.6, Spring Security (JWT Access/Refresh token rotation, session tracking), Web3j (Ethereum integration), WebSockets (STOMP), Redis & Bucket4j (Rate Limiting), AWS S3, Google Gemini AI, PostgreSQL.\n- Smart Contract: Solidity, Hardhat, Ethers.js (RealEstateEscrow.sol for decentralized, lock-and-release escrow deposit).\n\nKey Features:\n- Secure Blockchain Escrow: RealEstateEscrow contract to securely hold tenancy deposits in ETH, releasing them on tenant confirmation or refunding them upon dispute resolution.\n- 360° VR Virtual Tour: Immersive virtual view of rooms using Three.js and Photo Sphere Viewer.\n- Real-time STOMP Messaging: Instant messaging and notifications between landlords/agents and tenants.\n- Geofenced Map Search: Interactive map integration using Leaflet allowing users to draw search boundaries.\n- Identity OCR Verification: Automated extraction of ID information from national identity cards using Tesseract.js.\n- Distributed Rate Limiting: High-performance endpoint protection via Bucket4j and Redis.",
      projectDesc_vi: "Thời gian thực hiện: Tháng 10/2025 - Hiện tại\n\nMô tả dự án: Hệ thống quản lý và giao dịch bất động sản toàn diện (PropTech) với tính năng bảo chứng đặt cọc thông qua Smart Contract trên blockchain, hỗ trợ xem nhà ảo 360° VR, nhắn tin thời gian thực, quét căn cước công dân tự động (OCR) và bản đồ tìm kiếm tương tác cao.\n\nCông nghệ sử dụng (Tech Stack):\n- Frontend: React.js (Vite), TypeScript, Ethers.js, Zustand, Tailwind CSS, Leaflet Map & Leaflet Draw (Vẽ vùng tìm kiếm), Three.js & Photo Sphere Viewer (Xem phòng 360°), Framer Motion, Tesseract.js (OCR nhận diện CCCD), JSPDF (Xuất hợp đồng), i18next (Hỗ trợ 19 ngôn ngữ).\n- Backend: Java 21, Spring Boot 3.5.6, Spring Security (JWT, Cơ chế xoay vòng Access/Refresh token, giám sát phiên thiết bị), Web3j (Tương tác blockchain), WebSockets (STOMP Chat), Redis & Bucket4j (Giới hạn lưu lượng), AWS S3 (Lưu trữ ảnh), Google Gemini AI, PostgreSQL.\n- Smart Contract: Solidity, Hardhat (RealEstateEscrow.sol - ký quỹ bảo chứng, tự động giải ngân hoặc hoàn tiền).\n\nCác tính năng nổi bật (Key Features):\n- Giao dịch bảo chứng Blockchain: Ký quỹ tiền cọc (ETH) trên Smart Contract, giải ngân cho chủ nhà khi nhận bàn giao, hoặc hoàn cọc khi hủy/giải quyết tranh chấp bởi bên thứ ba (Arbitrator).\n- Tham quan ảo 360° VR: Tích hợp thư viện đồ họa Three.js xem căn hộ góc nhìn toàn cảnh trực quan.\n- Nhắn tin trực tuyến thời gian thực: Kênh chat STOMP WebSocket mượt mà giữa khách thuê và môi giới.\n- Bản đồ tương tác nâng cao: Tìm kiếm bất động sản theo tọa độ và vẽ khoanh vùng khu vực mong muốn trên bản đồ Leaflet.\n- Xác thực danh tính OCR: Tự động trích xuất thông tin giấy tờ tùy thân của khách thuê/chủ nhà.\n- Bảo mật & Rate Limiting cấp cao: Chống spam và tấn công brute force bằng Bucket4j + Redis, mã hóa mật khẩu BCrypt và bảo mật API nâng cao.",
      footerLink: [
        {
          name: "Client Repo (FE)",
          name_vi: "Mã nguồn Frontend (FE)",
          url: "https://github.com/EraEstate/FrontEnd"
        },
        {
          name: "Server Repo (BE)",
          name_vi: "Mã nguồn Backend (BE)",
          url: "https://github.com/EraEstate/BackEnd"
        },
        {
          name: "Smart Contract",
          name_vi: "Hợp đồng thông minh",
          url: "https://github.com/EraEstate/realestate-contract"
        }
      ]
    },
    {
      image: require("./assets/images/shoppc_logo.png"),
      projectName: "ShopPC - AI-Powered Custom PC E-Commerce Platform",
      projectName_vi: "ShopPC - Hệ thống Thương mại Điện tử & Lắp ráp PC Tích hợp AI",
      projectDesc: "Role: Full-Stack Developer\n\nTimeline: December 11, 2025 - Present\n\nDescription: A state-of-the-art e-commerce platform dedicated to PC components and custom PC building, featuring an automated compatibility validator (socket, RAM generation, PSU wattage capacity), AI-driven customer support (Gemini LLM), and semantic search engine with vector database search.\n\nTech Stack:\n- Frontend: React 19, Vite 6, Tailwind CSS 4, Redux Toolkit, React Router DOM, SockJS & StompJS (WebSockets), Recharts, Leaflet Map, i18next, jsQR, Tesseract.js.\n- Backend Monolith: Java 21, Spring Boot 3.4.4, Spring Security (JWT, OAuth2 Client/Resource Server), MongoDB, Redis, WebSockets, Spring AI (OpenAI Moderation), OpenPDF, MapStruct.\n- AI Chat Service: Node.js, Express, Google Gemini AI, Xenova Transformers (MiniLM-L6-v2), FAISS Vector Store, Tesseract OCR, Google Cloud Vision API.\n\nKey Features:\n- Custom PC Builder & Validator: Real-time compatibility checking using regex matching to verify CPU socket match with motherboard, DDR4/DDR5 memory check, and system power requirements calculation.\n- AI Assistant Chatbot: Context-aware customer service agent powered by Google Gemini, capable of product identification from uploaded images using Google Cloud Vision and OCR.\n- Semantic Product Search: Local semantic search using Xenova transformers to generate 384-dimensional text embeddings and FAISS for fast cosine similarity search.\n- Multi-step Checkout & Gateways: Secure multi-step checkout flow (Address -> Shipping -> Payment -> Confirm) integrated with VNPay sandbox payment notification (IPN) system.\n- Real-time Order Tracking: Live order status timeline and instant updates push using WebSocket (STOMP) connections.\n- Enterprise-Grade Security: Device-based session tracking, token rotation (Access/Refresh), and IP-based rate limiting.",
      projectDesc_vi: "Vai trò: Lập trình viên Full-Stack\n\nThời gian thực hiện: 11/12/2025 - Hiện tại\n\nMô tả dự án: Hệ thống thương mại điện tử chuyên biệt về linh kiện và lắp ráp máy tính (Custom PC builder), tích hợp bộ kiểm tra tương thích tự động (Socket, loại RAM, công suất nguồn), trợ lý ảo tư vấn AI (Gemini LLM) và công cụ tìm kiếm ngữ nghĩa thông minh sử dụng cơ sở dữ liệu vector.\n\nCông nghệ sử dụng (Tech Stack):\n- Frontend: React 19, Vite 6, Tailwind CSS 4, Redux Toolkit, React Router DOM, SockJS & StompJS (WebSocket Chat), Recharts (Biểu đồ), Leaflet Map (Bản đồ), i18next, jsQR, Tesseract.js (OCR).\n- Backend Monolith: Java 21, Spring Boot 3.4.4, Spring Security (JWT, OAuth2 Client/Resource Server), MongoDB, Redis, WebSockets, Spring AI (OpenAI Moderation), OpenPDF, MapStruct.\n- AI Chat Service: Node.js, Express, Google Gemini AI, Xenova Transformers (MiniLM-L6-v2), FAISS Vector Store, Tesseract OCR, Google Cloud Vision API.\n\nCác tính năng nổi bật (Key Features):\n- Bộ tự dựng cấu hình PC & Kiểm tra tương thích: Tự động trích xuất thông tin Socket CPU/Mainboard, chuẩn RAM (DDR4/DDR5) bằng Regex, tính toán tổng công suất tiêu thụ ước lượng và cảnh báo nguồn yếu (PSU) thời gian thực.\n- Trợ lý Chatbot AI đa năng: Nhận diện linh kiện máy tính từ hình ảnh tải lên (Google Cloud Vision), trích xuất thông tin chữ viết (Tesseract OCR) và trò chuyện thông minh dựa trên ngữ cảnh với Google Gemini AI.\n- Tìm kiếm sản phẩm ngữ nghĩa: Sử dụng Xenova Transformers tạo vector nhúng 384 chiều cho mô tả sản phẩm và FAISS tìm kiếm tương tự (Similarity Search) theo ý nghĩa câu hỏi thay vì chỉ từ khóa khớp.\n- Quy trình thanh toán đa bước & Cổng thanh toán: Thanh toán chuẩn hóa (Địa chỉ -> Vận chuyển -> Thanh toán -> Xác nhận), tích hợp cổng thanh toán VNPay và đồng bộ trạng thái qua IPN.\n- Theo dõi đơn hàng thời gian thực: Hiển thị trạng thái đơn hàng (Chuẩn bị -> Đang giao -> Đã giao) cập nhật tức thời qua kết nối WebSocket (STOMP).\n- Bảo mật cấp doanh nghiệp: Theo dõi và quản lý phiên đăng nhập theo thiết bị, cơ chế xoay vòng Token JWT và bộ lọc giới hạn lưu lượng (Rate Limiting) theo IP.",
      footerLink: [
        {
          name: "Client Repo (FE)",
          name_vi: "Mã nguồn Frontend (FE)",
          url: "https://github.com/ShopTechTPKT/FrontEnd"
        },
        {
          name: "Server Repo (BE)",
          name_vi: "Mã nguồn Backend (BE)",
          url: "https://github.com/ShopTechTPKT/BackEnd"
        },
        {
          name: "AI Chat Service",
          name_vi: "Mã nguồn AI Chat Service",
          url: "https://github.com/ShopTechTPKT/CauHinhChat"
        }
      ]
    },
    {
      image: require("./assets/images/zala_logo.png"),
      projectName: "Zala - Multi-Platform Messaging System",
      projectName_vi: "Zala - Hệ thống Tin nhắn Đa nền tảng",
      projectDesc: "Role: Leader\n\nDescription: Developed a multi-platform messaging application supporting real-time user interaction. Implemented secure authentication and user management using JWT. Built robust real-time chat functionality using WebSocket (Socket.IO). Designed responsive UI components using ReactJS and Tailwind CSS.\n\nTech Stack:\n- Node.js, TypeScript, React Native, Expo, Socket.IO, WebRTC, LiveKit, Kafka, MongoDB, Redis, Docker, AWS, DigitalOcean, Nginx, GitHub Actions, Vercel, SePay.",
      projectDesc_vi: "Vai trò: Trưởng nhóm (Leader)\n\nMô tả dự án: Phát triển ứng dụng nhắn tin đa nền tảng hỗ trợ tương tác người dùng thời gian thực. Triển khai cơ chế xác thực bảo mật và quản lý người dùng sử dụng JWT. Xây dựng tính năng chat thời gian thực mạnh mẽ sử dụng WebSocket (Socket.IO). Thiết kế các thành phần UI phản hồi nhanh sử dụng ReactJS và Tailwind CSS.\n\nCông nghệ sử dụng (Tech Stack):\n- Node.js, TypeScript, React Native, Expo, Socket.IO, WebRTC, LiveKit, Kafka, MongoDB, Redis, Docker, AWS, DigitalOcean, Nginx, GitHub Actions, Vercel, SePay.",
      footerLink: [
        {
          name: "Client Repo (FE)",
          name_vi: "Mã nguồn Frontend (FE)",
          url: "https://github.com/IUH-CNM-TEAM08/FrontEnd"
        },
        {
          name: "Server Repo (BE)",
          name_vi: "Mã nguồn Backend (BE)",
          url: "https://github.com/IUH-CNM-TEAM08/Backend"
        },
        {
          name: "Host Frontend",
          name_vi: "Mã nguồn Host Frontend",
          url: "https://github.com/IUH-CNM-TEAM08/Host_Frontend"
        }
      ]
    },
    {
      image: require("./assets/images/iuhLogo.png"),
      projectName: "Smart Attendance & Anti-Spoofing Face Recognition System",
      projectName_vi: "Hệ thống Điểm danh Thông minh & Nhận diện Khuôn mặt Chống Giả mạo",
      projectDesc: "Role: Leader\n\nTimeline: Student Scientific Research Project (Won Promising Award - Best Presentation in Room)\n\nDescription: A secure, multi-method student attendance system featuring local deep learning-based face recognition, liveness detection (anti-spoofing), dynamic QR codes, and real-time synchronization. Developed with a robust decoupled architecture consisting of a React Native/Expo client, a Java Spring Boot backend, and a Python FastAPI AI microservice.\n\nTech Stack:\n- Frontend: React Native (Expo supporting Web/Mobile), TypeScript, NativeWind (Tailwind CSS), Axios, Socket.IO Client, Expo Camera.\n- Backend: Java 21, Spring Boot 3.4.3, Spring Security (JWT Auth), Netty-SocketIO (Real-time updates), Redis (OTP & QR cache), MongoDB (main database), Apache POI (Excel import/export).\n- AI Microservice: Python, FastAPI, ONNX Runtime, OpenCV, InsightFace.\n\nKey Features:\n- Secure Face Recognition: Integrates SCRFD (10G ONNX) for face/landmark detection, ArcFace (ResNet50) for generating 512D unit embeddings, and Cosine Similarity for verification.\n- Multi-Layered Anti-Spoofing: Implements MiniFASNet (antispoof_80x80.onnx) for liveness detection (detecting paper prints & video replays) alongside quality gates (Laplacian variance for blur detection, face size check, bilateral filtering, CLAHE, and image sharpening).\n- Anti-Fraud Attendance: Dynamic QR codes rotating in real-time via Socket.IO to prevent screenshot sharing, combined with time-based One-Time Passwords (OTP).\n- Real-Time Synchronization: Instant WebSocket-based connection to display and update attendance status between teacher dashboard and student screens.\n- Multi-Role Portal: Complete workflow for Admin, Department, Teacher, and Student roles with Excel-based scheduling, student list imports, and automated report exports.",
      projectDesc_vi: "Vai trò: Trưởng nhóm (Leader)\n\nThời gian thực hiện: Đề tài Nghiên cứu Khoa học Sinh viên (Đạt giải Triển Vọng - Nhất phòng báo cáo)\n\nMô tả dự án: Hệ thống quản lý điểm danh bảo mật 2 lớp dành cho sinh viên thông qua nhận diện khuôn mặt ngoại tuyến (chạy local), nhận diện thực thể sống (chống giả mạo), kết hợp mã QR động và mã OTP thời gian thực. Giải pháp được triển khai dưới cấu trúc microservice tách biệt gồm client React Native/Expo, server Spring Boot và microservice AI Python FastAPI.\n\nCông nghệ sử dụng (Tech Stack):\n- Frontend: React Native (Expo hỗ trợ Web/Mobile), TypeScript, NativeWind (Tailwind CSS), Axios, Socket.IO Client, Expo Camera.\n- Backend: Java 21, Spring Boot 3.4.3, Spring Security (Xác thực JWT), Netty-SocketIO (Đồng bộ thời gian thực), Redis (Bộ nhớ đệm OTP & QR), MongoDB (Cơ sở dữ liệu chính), Apache POI (Xử lý file Excel).\n- AI Microservice: Python, FastAPI, ONNX Runtime (Tối ưu hóa phần cứng), OpenCV, InsightFace.\n\nCác tính năng nổi bật (Key Features):\n- Nhận diện khuôn mặt chính xác: Sử dụng mô hình SCRFD (10G ONNX) phát hiện mặt và 5 điểm landmarks, kết hợp ArcFace (ResNet50) trích xuất đặc trưng vector 512 chiều để so sánh Cosine Similarity.\n- Chống giả mạo đa lớp (Anti-Spoofing): Tích hợp MiniFASNet phân biệt mặt thật/ảnh in/video replay cùng các rào cản chất lượng (độ nét Laplacian variance, kích thước mặt tối thiểu, bộ lọc khử nhiễu Bilateral và cân bằng sáng CLAHE).\n- Điểm danh chống gian lận: Mã QR động tự động làm mới liên tục qua WebSocket để chống chụp ảnh chia sẻ từ xa, kết hợp mã OTP ngắn hạn tạo bởi giảng viên.\n- Đồng bộ thời gian thực: Đồng bộ hóa lập tức trạng thái điểm danh của sinh viên lên màn hình quản lý của giảng viên qua Socket.IO.\n- Hệ thống phân quyền đầy đủ: Cung cấp đầy đủ phân hệ chức năng cho Admin, Khoa, Giảng viên (tạo buổi điểm danh, xem danh sách lớp, xuất báo cáo Excel) và Sinh viên (xem lịch học, thực hiện quét camera điểm danh).",
      footerLink: [
        {
          name: "Client Repo (FE)",
          name_vi: "Mã nguồn Frontend (FE)",
          url: "https://github.com/NCKH-PTS-QROTP-Team/FrontEnd_NCKH_PTS_Team"
        },
        {
          name: "Server Repo (BE)",
          name_vi: "Mã nguồn Backend (BE)",
          url: "https://github.com/NCKH-PTS-QROTP-Team/BackEnd"
        },
        {
          name: "AI Service",
          name_vi: "Dịch vụ AI (Python)",
          url: "https://github.com/NCKH-PTS-QROTP-Team/python"
        },
        {
          name: "View Research Paper",
          name_vi: "Xem bài báo khoa học",
          url: "https://ssrc.fit.iuh.edu.vn/conf/article/view/281"
        }
      ]
    },
    {
      image: require("./assets/images/flower_ecom_logo.png"),
      projectName: "Flower E-Commerce System",
      projectName_vi: "Hệ thống Cửa hàng Hoa trực tuyến (Flower E-Commerce)",
      projectDesc: "Timeline: December 2024 - March 2025\n\nDescription: A specialized e-commerce web application designed for online flower shopping, featuring gift note personalization, coupon system, online payment gateway (VNPay) integration, and real-time order tracking.\n\nTech Stack:\n- Frontend: React.js (Vite), Context API, Custom Hooks, Vanilla CSS (Responsive Design, Light/Dark Modes with Topographic SVG accents).\n- Backend: Node.js, Express.js, JWT Authentication, Cloudinary API.\n- Database: MongoDB, Mongoose ODM.\n- Payment: VNPay Online Payment Gateway.\n\nKey Features:\n- Premium Aesthetics: Smooth Earthy Warm design with seamless Light/Dark mode transitions and dynamic UI elements.\n- Smart Gift Wrapper: Allows customers to select delivery time slots and attach personalized greeting notes to their orders.\n- Dynamic Coupon System: Automatic client-side and server-side coupon calculations supporting discounts and free shipping.\n- Visual Order Stepper: An interactive order progress timeline from placement to final delivery.\n- User Reviews: Tabbed review and rating systems on product detail pages.",
      projectDesc_vi: "Thời gian thực hiện: Tháng 12/2024 - Tháng 3/2025\n\nMô tả dự án: Website Thương mại Điện tử chuyên biệt phục vụ mua sắm hoa tươi, hỗ trợ đặt quà tặng kèm thiệp chúc mừng, thanh toán trực tuyến qua cổng VNPay và quản lý trạng thái đơn hàng thời gian thực.\n\nCông nghệ sử dụng (Tech Stack):\n- Frontend: React.js (Vite), Context API (Quản lý State), Custom Hooks, CSS Vanilla (Thiết kế Responsive & Light/Dark Theme, hình Contours Topography nền).\n- Backend: Node.js, Express.js, JWT Authentication, Cloudinary API (Quản lý hình ảnh).\n- Database: MongoDB, Mongoose ODM.\n- Thanh toán: Tích hợp Cổng thanh toán quốc tế VNPay.\n\nCác tính năng nổi bật (Key Features):\n- Trải nghiệm người dùng cao cấp: Giao diện thiết kế theo phong cách ấm áp (Earthy Warm), hỗ trợ Light/Dark Mode mượt mà kết hợp hiệu ứng topography độc đáo.\n- Tùy chọn Quà tặng thông minh: Hỗ trợ khách hàng gửi tặng hoa kèm thiệp chúc mừng (ghi lời chúc) và chọn khung giờ giao hàng mong muốn.\n- Hệ thống Mã giảm giá: Áp dụng mã giảm giá trực tiếp tại giỏ hàng (FLOWERNEW, XMAS20,...) với cơ chế tự động tính tiền & freeship.\n- Theo dõi đơn hàng trực quan: Trình stepper trực quan theo dõi tiến trình đơn hàng (Đã đặt -> Xác nhận -> Đang giao -> Đã giao).\n- Hệ thống Đánh giá & Bình luận: Cho phép người dùng đánh giá sao và gửi nhận xét thực tế về sản phẩm.",
      footerLink: [
        {
          name: "Client Repo (FE)",
          name_vi: "Mã nguồn Frontend (FE)",
          url: "https://github.com/thachtaro2210/Flower-Ecom-Client"
        },
        {
          name: "Server Repo (BE)",
          name_vi: "Mã nguồn Backend (BE)",
          url: "https://github.com/thachtaro2210/Flower-Ecom-Server"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  title_vi: emoji("Thành tựu & Chứng chỉ 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  subtitle_vi: "Những cột mốc, chứng chỉ chuyên môn và giải thưởng nổi bật mà mình đã đạt được!",

  achievementsCards: [
    {
      title: "Promising Award in Faculty Scientific Research",
      title_vi: "Giải Triển Vọng Nghiên Cứu Khoa Học (Nhất phòng báo cáo)",
      subtitle:
        "Received the Promising Award (Best Presentation in Room) in the Student Scientific Research Conference and published a faculty-level research paper.",
      subtitle_vi: "Đạt giải Triển vọng (Nhất phòng báo cáo) trong Hội nghị Nghiên cứu Khoa học Sinh viên cấp Khoa và công bố bài báo khoa học cấp Khoa.",
      image: require("./assets/images/iuhLogo.png"),
      imageAlt: "IUH Scientific Research logo",
      footerLink: [
        {
          name: "View Paper",
          name_vi: "Xem bài báo khoa học",
          url: "https://ssrc.fit.iuh.edu.vn/conf/article/view/281"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  title_vi: "Bài viết",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  subtitle_vi: "Với đam mê lập trình và công nghệ, mình rất thích viết lách và chia sẻ kiến thức hữu ích đến mọi người.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  title_vi: "THUYẾT TRÌNH",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  subtitle_vi: emoji(
    "MÌNH RẤT YÊU THÍCH CHIA SẺ KIẾN THỨC VÀ GIAO LƯU HỌC HỎI TẠI CÁC SỰ KIỆN 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  title_vi: emoji("Liên hệ với mình ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  subtitle_vi:
    "Nếu bạn có dự án cần trao đổi hoặc chỉ muốn gửi lời chào, hộp thư của mình luôn luôn chào đón bạn!",
  number: "0384589387",
  email_address: "thatchjeager@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

// build stamp: 2025-08-16T08:39:16

// build stamp: 2025-09-04T11:44:04

// build stamp: 2025-09-30T22:28:43

// build stamp: 2025-11-15T09:21:12

// build stamp: 2025-12-04T18:14:40

// build stamp: 2025-12-16T10:38:08

// build stamp: 2026-03-06T10:15:23

// build stamp: 2026-03-07T14:09:35

// build stamp: 2026-04-07T22:00:07

// build stamp: 2026-04-11T08:30:10

// build stamp: 2026-04-18T12:16:35

// build stamp: 2026-05-08T17:28:52

// build stamp: 2026-05-28T09:26:00

// build stamp: 2026-06-07T11:33:21

// build stamp: 2026-06-07T12:24:59
