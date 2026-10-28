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
    "Phát triển Web, Mobile",
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
      desc_vi:
        "Tập trung vào các nguyên lý kỹ thuật phần mềm nâng cao, kiến trúc hệ thống và phát triển ứng dụng Web/Mobile Full-Stack.",
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
      role: "Full-Stack Developer",
      role_vi: "Lập trình viên Full-Stack",
      company: "19T Digital",
      company_vi: "19T Digital",
      companylogo: require("./assets/images/nineteenDigitalLogo.png"),
      date: "May 2026 – November 2026",
      date_vi: "Tháng 5, 2026 – Tháng 11, 2026",
      location: "Ho Chi Minh City · On-site / Hybrid",
      location_vi: "TP. Hồ Chí Minh · On-site / Hybrid",
      desc: "",
      desc_vi: "",
      descBullets: [
        {
          project: "GEMS - Multi-Plant EHS Management System",
          bullets: [
            "Architected and developed a full-stack multi-plant EHS system across 17 modules and 8 user roles, replacing scattered spreadsheets for a 5-factory manufacturing group.",
            "Built responsive analytics dashboards with Recharts, multi-plant permission scopes, and automated Excel reporting using ExcelJS and TanStack Query."
          ]
        },
        {
          project: "19T Digital - Company Portal & Block CMS",
          bullets: [
            "Built the official agency website and custom headless CMS with Next.js 16, React 19, Prisma, and Tailwind CSS 4 (11 public pages, 8 admin management screens).",
            "Implemented drag-and-drop case study layout builder (dnd-kit), Bunny Stream video hosting integration, and automated lead capture workflows."
          ]
        },
        {
          project: "Lucia Learning - Teacher Training LMS",
          bullets: [
            "Engineered end-to-end LMS platform with 25 modules and 204 API routes for early-childhood teacher training, migrating manual Zoom classes into an automated learning portal.",
            "Developed sequential course progression, timed examination engines with automatic grading, and comprehensive classroom administration."
          ]
        }
      ],
      descBullets_vi: [
        {
          project: "GEMS - Hệ thống EHS Quản lý Đa Nhà máy",
          bullets: [
            "Thiết kế và phát triển full-stack hệ thống quản lý An toàn - Sức khỏe - Môi trường (EHS) gồm 17 phân hệ và 8 nhóm vai trò cho tập đoàn sản xuất 5 nhà máy.",
            "Xây dựng dashboard trực quan hóa dữ liệu với Recharts, cơ chế chuyển đổi phạm vi nhà máy linh hoạt và module xuất báo cáo Excel tự động bằng ExcelJS."
          ]
        },
        {
          project: "19T Digital - Website Công ty & CMS Quản trị Nội dung",
          bullets: [
            "Xây dựng toàn diện website công ty và hệ thống CMS tùy biến linh hoạt trên nền Next.js 16, React 19, Prisma và Tailwind CSS 4 (11 trang public, 8 màn hình quản trị).",
            "Phát triển tính năng kéo-thả sắp xếp block dự án (dnd-kit), tích hợp stream video qua Bunny Stream và tự động hóa xử lý khách hàng tiềm năng."
          ]
        },
        {
          project: "Lucia Learning - Nền tảng LMS Đào tạo Giáo viên",
          bullets: [
            "Phát triển hệ thống E-learning chuyên sâu với 25 phân hệ chức năng và 204 API route, chuyển đổi hoàn toàn mô hình dạy học thủ công sang nền tảng số hóa.",
            "Hiện thực cơ chế khóa bài học tuần tự, hệ thống thi trắc nghiệm bấm giờ tự động chấm điểm và module quản trị lớp học, khóa học trực quan."
          ]
        }
      ]
    },
    {
      role: "Intern Back End Developer",
      role_vi: "Lập trình viên Backend (Intern)",
      company: "Intrepid Asia",
      company_vi: "Intrepid Asia",
      companylogo: require("./assets/images/intrepidAsiaLogo.png"),
      date: "Sep 2025 – Dec 2025",
      date_vi: "Tháng 9, 2025 – Tháng 12, 2025",
      location: "Vietnam · Remote",
      location_vi: "Việt Nam · Từ xa",
      desc: "",
      desc_vi: "",
      descBullets: [
        {
          project: "Internal ERP System",
          bullets: [
            "Developed and maintained RESTful APIs for internal business operations.",
            "Implemented backend features for data management and frontend integration."
          ]
        },
        {
          project: "SPA Web Application",
          bullets: [
            "Developed backend APIs and business logic for a SPA web application.",
            "Integrated APIs with the frontend and handled data processing."
          ]
        },
        {
          project: "Villa Sales & Rental Platform",
          bullets: [
            "Developed backend services for a villa sales and rental platform.",
            "Implemented property listings, search, booking, and customer management features.",
            "Designed RESTful APIs for frontend integration."
          ]
        }
      ],
      descBullets_vi: [
        {
          project: "Internal ERP System",
          bullets: [
            "Phát triển và duy trì các RESTful API phục vụ quy trình vận hành nội bộ doanh nghiệp.",
            "Xây dựng các tính năng backend quản lý dữ liệu và tích hợp đồng bộ với frontend."
          ]
        },
        {
          project: "SPA Web Application",
          bullets: [
            "Phát triển các API backend và xử lý toàn bộ luồng nghiệp vụ cho ứng dụng web SPA.",
            "Tích hợp API với giao diện frontend và kiểm soát luồng xử lý dữ liệu."
          ]
        },
        {
          project: "Villa Sales & Rental Platform",
          bullets: [
            "Phát triển các dịch vụ backend cho nền tảng quản lý, mua bán và cho thuê villa.",
            "Triển khai tính năng danh sách bất động sản, tìm kiếm, đặt phòng và quản lý khách hàng.",
            "Thiết kế và chuẩn hóa hệ thống RESTful API kết nối liền mạch với frontend."
          ]
        }
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
  subtitle_vi:
    "MỘT SỐ DỰ ÁN CÁ NHÂN VÀ DỰ ÁN NHÓM MÀ MÌNH ĐÃ THAM GIA PHÁT TRIỂN",
  projects: [
    {
      image: require("./assets/images/era.png"),
      badge: "",
      badge_vi: "",
      summary:
        "Real estate rental & sales platform with blockchain escrow deposits, 360° VR tours, real-time chat and OCR identity verification.",
      summary_vi:
        "Nền tảng thuê và mua bán bất động sản với bảo chứng đặt cọc blockchain, xem nhà 360° VR, chat thời gian thực và xác thực CCCD bằng OCR.",
      tech: ["React", "Spring Boot", "PostgreSQL", "Solidity", "WebSocket"],
      id: "apartment",
      projectName: "Apartment & Real Estate Platform",
      projectName_vi: "Hệ thống Quản lý & Giao dịch Bất động sản (Apartment)",
      projectDesc:
        "Timeline: October 2025 - Present\n\nDescription: An enterprise-grade, high-performance real estate rental and sales platform (PropTech) featuring real-time interactive maps, 360-degree VR property tours, automated tenant identity verification, and on-chain escrow contract integration for secure security deposit protection.\n\nTech Stack:\n- Frontend: React.js (Vite), TypeScript, Ethers.js, Zustand, Tailwind CSS, Leaflet & Leaflet Draw, Three.js & Photo Sphere Viewer (360° VR Tour), Framer Motion, Tesseract.js (OCR), JSPDF, i18next (19+ languages).\n- Backend: Java 21, Spring Boot 3.5.6, Spring Security (JWT Access/Refresh token rotation, session tracking), Web3j (Ethereum integration), WebSockets (STOMP), Redis & Bucket4j (Rate Limiting), AWS S3, Google Gemini AI, PostgreSQL.\n- Smart Contract: Solidity, Hardhat, Ethers.js (RealEstateEscrow.sol for decentralized, lock-and-release escrow deposit).\n\nKey Features:\n- Secure Blockchain Escrow: RealEstateEscrow contract to securely hold tenancy deposits in ETH, releasing them on tenant confirmation or refunding them upon dispute resolution.\n- 360° VR Virtual Tour: Immersive virtual view of rooms using Three.js and Photo Sphere Viewer.\n- Real-time STOMP Messaging: Instant messaging and notifications between landlords/agents and tenants.\n- Geofenced Map Search: Interactive map integration using Leaflet allowing users to draw search boundaries.\n- Identity OCR Verification: Automated extraction of ID information from national identity cards using Tesseract.js.\n- Distributed Rate Limiting: High-performance endpoint protection via Bucket4j and Redis.",
      projectDesc_vi:
        "Thời gian thực hiện: Tháng 10/2025 - Hiện tại\n\nMô tả dự án: Hệ thống quản lý và giao dịch bất động sản toàn diện (PropTech) với tính năng bảo chứng đặt cọc thông qua Smart Contract trên blockchain, hỗ trợ xem nhà ảo 360° VR, nhắn tin thời gian thực, quét căn cước công dân tự động (OCR) và bản đồ tìm kiếm tương tác cao.\n\nCông nghệ sử dụng (Tech Stack):\n- Frontend: React.js (Vite), TypeScript, Ethers.js, Zustand, Tailwind CSS, Leaflet Map & Leaflet Draw (Vẽ vùng tìm kiếm), Three.js & Photo Sphere Viewer (Xem phòng 360°), Framer Motion, Tesseract.js (OCR nhận diện CCCD), JSPDF (Xuất hợp đồng), i18next (Hỗ trợ 19 ngôn ngữ).\n- Backend: Java 21, Spring Boot 3.5.6, Spring Security (JWT, Cơ chế xoay vòng Access/Refresh token, giám sát phiên thiết bị), Web3j (Tương tác blockchain), WebSockets (STOMP Chat), Redis & Bucket4j (Giới hạn lưu lượng), AWS S3 (Lưu trữ ảnh), Google Gemini AI, PostgreSQL.\n- Smart Contract: Solidity, Hardhat (RealEstateEscrow.sol - ký quỹ bảo chứng, tự động giải ngân hoặc hoàn tiền).\n\nCác tính năng nổi bật (Key Features):\n- Giao dịch bảo chứng Blockchain: Ký quỹ tiền cọc (ETH) trên Smart Contract, giải ngân cho chủ nhà khi nhận bàn giao, hoặc hoàn cọc khi hủy/giải quyết tranh chấp bởi bên thứ ba (Arbitrator).\n- Tham quan ảo 360° VR: Tích hợp thư viện đồ họa Three.js xem căn hộ góc nhìn toàn cảnh trực quan.\n- Nhắn tin trực tuyến thời gian thực: Kênh chat STOMP WebSocket mượt mà giữa khách thuê và môi giới.\n- Bản đồ tương tác nâng cao: Tìm kiếm bất động sản theo tọa độ và vẽ khoanh vùng khu vực mong muốn trên bản đồ Leaflet.\n- Xác thực danh tính OCR: Tự động trích xuất thông tin giấy tờ tùy thân của khách thuê/chủ nhà.\n- Bảo mật & Rate Limiting cấp cao: Chống spam và tấn công brute force bằng Bucket4j + Redis, mã hóa mật khẩu BCrypt và bảo mật API nâng cao.",
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
      badge: "",
      badge_vi: "",
      summary:
        "PC components e-commerce with a build compatibility checker, Gemini-powered AI assistant and semantic vector search.",
      summary_vi:
        "Thương mại điện tử linh kiện PC với bộ kiểm tra tương thích, trợ lý AI Gemini và tìm kiếm ngữ nghĩa bằng vector.",
      tech: ["React", "Spring Boot", "MongoDB", "Node.js", "FAISS"],
      id: "shoppc",
      projectName: "ShopPC - AI-Powered Custom PC E-Commerce Platform",
      projectName_vi:
        "ShopPC - Hệ thống Thương mại Điện tử & Lắp ráp PC Tích hợp AI",
      projectDesc:
        "Role: Full-Stack Developer\n\nTimeline: December 11, 2025 - Present\n\nDescription: A state-of-the-art e-commerce platform dedicated to PC components and custom PC building, featuring an automated compatibility validator (socket, RAM generation, PSU wattage capacity), AI-driven customer support (Gemini LLM), and semantic search engine with vector database search.\n\nTech Stack:\n- Frontend: React 19, Vite 6, Tailwind CSS 4, Redux Toolkit, React Router DOM, SockJS & StompJS (WebSockets), Recharts, Leaflet Map, i18next, jsQR, Tesseract.js.\n- Backend Monolith: Java 21, Spring Boot 3.4.4, Spring Security (JWT, OAuth2 Client/Resource Server), MongoDB, Redis, WebSockets, Spring AI (OpenAI Moderation), OpenPDF, MapStruct.\n- AI Chat Service: Node.js, Express, Google Gemini AI, Xenova Transformers (MiniLM-L6-v2), FAISS Vector Store, Tesseract OCR, Google Cloud Vision API.\n\nKey Features:\n- Custom PC Builder & Validator: Real-time compatibility checking using regex matching to verify CPU socket match with motherboard, DDR4/DDR5 memory check, and system power requirements calculation.\n- AI Assistant Chatbot: Context-aware customer service agent powered by Google Gemini, capable of product identification from uploaded images using Google Cloud Vision and OCR.\n- Semantic Product Search: Local semantic search using Xenova transformers to generate 384-dimensional text embeddings and FAISS for fast cosine similarity search.\n- Multi-step Checkout & Gateways: Secure multi-step checkout flow (Address -> Shipping -> Payment -> Confirm) integrated with VNPay sandbox payment notification (IPN) system.\n- Real-time Order Tracking: Live order status timeline and instant updates push using WebSocket (STOMP) connections.\n- Enterprise-Grade Security: Device-based session tracking, token rotation (Access/Refresh), and IP-based rate limiting.",
      projectDesc_vi:
        "Vai trò: Lập trình viên Full-Stack\n\nThời gian thực hiện: 11/12/2025 - Hiện tại\n\nMô tả dự án: Hệ thống thương mại điện tử chuyên biệt về linh kiện và lắp ráp máy tính (Custom PC builder), tích hợp bộ kiểm tra tương thích tự động (Socket, loại RAM, công suất nguồn), trợ lý ảo tư vấn AI (Gemini LLM) và công cụ tìm kiếm ngữ nghĩa thông minh sử dụng cơ sở dữ liệu vector.\n\nCông nghệ sử dụng (Tech Stack):\n- Frontend: React 19, Vite 6, Tailwind CSS 4, Redux Toolkit, React Router DOM, SockJS & StompJS (WebSocket Chat), Recharts (Biểu đồ), Leaflet Map (Bản đồ), i18next, jsQR, Tesseract.js (OCR).\n- Backend Monolith: Java 21, Spring Boot 3.4.4, Spring Security (JWT, OAuth2 Client/Resource Server), MongoDB, Redis, WebSockets, Spring AI (OpenAI Moderation), OpenPDF, MapStruct.\n- AI Chat Service: Node.js, Express, Google Gemini AI, Xenova Transformers (MiniLM-L6-v2), FAISS Vector Store, Tesseract OCR, Google Cloud Vision API.\n\nCác tính năng nổi bật (Key Features):\n- Bộ tự dựng cấu hình PC & Kiểm tra tương thích: Tự động trích xuất thông tin Socket CPU/Mainboard, chuẩn RAM (DDR4/DDR5) bằng Regex, tính toán tổng công suất tiêu thụ ước lượng và cảnh báo nguồn yếu (PSU) thời gian thực.\n- Trợ lý Chatbot AI đa năng: Nhận diện linh kiện máy tính từ hình ảnh tải lên (Google Cloud Vision), trích xuất thông tin chữ viết (Tesseract OCR) và trò chuyện thông minh dựa trên ngữ cảnh với Google Gemini AI.\n- Tìm kiếm sản phẩm ngữ nghĩa: Sử dụng Xenova Transformers tạo vector nhúng 384 chiều cho mô tả sản phẩm và FAISS tìm kiếm tương tự (Similarity Search) theo ý nghĩa câu hỏi thay vì chỉ từ khóa khớp.\n- Quy trình thanh toán đa bước & Cổng thanh toán: Thanh toán chuẩn hóa (Địa chỉ -> Vận chuyển -> Thanh toán -> Xác nhận), tích hợp cổng thanh toán VNPay và đồng bộ trạng thái qua IPN.\n- Theo dõi đơn hàng thời gian thực: Hiển thị trạng thái đơn hàng (Chuẩn bị -> Đang giao -> Đã giao) cập nhật tức thời qua kết nối WebSocket (STOMP).\n- Bảo mật cấp doanh nghiệp: Theo dõi và quản lý phiên đăng nhập theo thiết bị, cơ chế xoay vòng Token JWT và bộ lọc giới hạn lưu lượng (Rate Limiting) theo IP.",
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
      badge: "",
      badge_vi: "",
      summary:
        "Multi-platform real-time messaging app with JWT auth, WebSocket chat and video calls. Led the team.",
      summary_vi:
        "Ứng dụng nhắn tin đa nền tảng thời gian thực với JWT, chat WebSocket và gọi video. Làm trưởng nhóm.",
      tech: ["React Native", "Node.js", "Socket.IO", "MongoDB", "Kafka"],
      id: "zala",
      projectName: "Zala - Multi-Platform Messaging System",
      projectName_vi: "Zala - Hệ thống Tin nhắn Đa nền tảng",
      projectDesc:
        "Role: Leader\n\nDescription: Developed a multi-platform messaging application supporting real-time user interaction. Implemented secure authentication and user management using JWT. Built robust real-time chat functionality using WebSocket (Socket.IO). Designed responsive UI components using ReactJS and Tailwind CSS.\n\nTech Stack:\n- Node.js, TypeScript, React Native, Expo, Socket.IO, WebRTC, LiveKit, Kafka, MongoDB, Redis, Docker, AWS, DigitalOcean, Nginx, GitHub Actions, Vercel, SePay.",
      projectDesc_vi:
        "Vai trò: Trưởng nhóm (Leader)\n\nMô tả dự án: Phát triển ứng dụng nhắn tin đa nền tảng hỗ trợ tương tác người dùng thời gian thực. Triển khai cơ chế xác thực bảo mật và quản lý người dùng sử dụng JWT. Xây dựng tính năng chat thời gian thực mạnh mẽ sử dụng WebSocket (Socket.IO). Thiết kế các thành phần UI phản hồi nhanh sử dụng ReactJS và Tailwind CSS.\n\nCông nghệ sử dụng (Tech Stack):\n- Node.js, TypeScript, React Native, Expo, Socket.IO, WebRTC, LiveKit, Kafka, MongoDB, Redis, Docker, AWS, DigitalOcean, Nginx, GitHub Actions, Vercel, SePay.",
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
      badge: "",
      badge_vi: "",
      summary:
        "Student attendance with offline face recognition, anti-spoofing liveness detection and rotating QR/OTP. Promising Award at faculty research conference.",
      summary_vi:
        "Điểm danh sinh viên bằng nhận diện khuôn mặt, chống giả mạo, QR/OTP động. Đạt giải Triển vọng NCKH cấp Khoa.",
      tech: ["React Native", "Spring Boot", "FastAPI", "ONNX", "MongoDB"],
      id: "attendance",
      projectName: "Smart Attendance & Anti-Spoofing Face Recognition System",
      projectName_vi:
        "Hệ thống Điểm danh Thông minh & Nhận diện Khuôn mặt Chống Giả mạo",
      projectDesc:
        "Role: Leader\n\nTimeline: Student Scientific Research Project (Won Promising Award - Best Presentation in Room)\n\nDescription: A secure, multi-method student attendance system featuring local deep learning-based face recognition, liveness detection (anti-spoofing), dynamic QR codes, and real-time synchronization. Developed with a robust decoupled architecture consisting of a React Native/Expo client, a Java Spring Boot backend, and a Python FastAPI AI microservice.\n\nTech Stack:\n- Frontend: React Native (Expo supporting Web/Mobile), TypeScript, NativeWind (Tailwind CSS), Axios, Socket.IO Client, Expo Camera.\n- Backend: Java 21, Spring Boot 3.4.3, Spring Security (JWT Auth), Netty-SocketIO (Real-time updates), Redis (OTP & QR cache), MongoDB (main database), Apache POI (Excel import/export).\n- AI Microservice: Python, FastAPI, ONNX Runtime, OpenCV, InsightFace.\n\nKey Features:\n- Secure Face Recognition: Integrates SCRFD (10G ONNX) for face/landmark detection, ArcFace (ResNet50) for generating 512D unit embeddings, and Cosine Similarity for verification.\n- Multi-Layered Anti-Spoofing: Implements MiniFASNet (antispoof_80x80.onnx) for liveness detection (detecting paper prints & video replays) alongside quality gates (Laplacian variance for blur detection, face size check, bilateral filtering, CLAHE, and image sharpening).\n- Anti-Fraud Attendance: Dynamic QR codes rotating in real-time via Socket.IO to prevent screenshot sharing, combined with time-based One-Time Passwords (OTP).\n- Real-Time Synchronization: Instant WebSocket-based connection to display and update attendance status between teacher dashboard and student screens.\n- Multi-Role Portal: Complete workflow for Admin, Department, Teacher, and Student roles with Excel-based scheduling, student list imports, and automated report exports.",
      projectDesc_vi:
        "Vai trò: Trưởng nhóm (Leader)\n\nThời gian thực hiện: Đề tài Nghiên cứu Khoa học Sinh viên (Đạt giải Triển Vọng - Nhất phòng báo cáo)\n\nMô tả dự án: Hệ thống quản lý điểm danh bảo mật 2 lớp dành cho sinh viên thông qua nhận diện khuôn mặt ngoại tuyến (chạy local), nhận diện thực thể sống (chống giả mạo), kết hợp mã QR động và mã OTP thời gian thực. Giải pháp được triển khai dưới cấu trúc microservice tách biệt gồm client React Native/Expo, server Spring Boot và microservice AI Python FastAPI.\n\nCông nghệ sử dụng (Tech Stack):\n- Frontend: React Native (Expo hỗ trợ Web/Mobile), TypeScript, NativeWind (Tailwind CSS), Axios, Socket.IO Client, Expo Camera.\n- Backend: Java 21, Spring Boot 3.4.3, Spring Security (Xác thực JWT), Netty-SocketIO (Đồng bộ thời gian thực), Redis (Bộ nhớ đệm OTP & QR), MongoDB (Cơ sở dữ liệu chính), Apache POI (Xử lý file Excel).\n- AI Microservice: Python, FastAPI, ONNX Runtime (Tối ưu hóa phần cứng), OpenCV, InsightFace.\n\nCác tính năng nổi bật (Key Features):\n- Nhận diện khuôn mặt chính xác: Sử dụng mô hình SCRFD (10G ONNX) phát hiện mặt và 5 điểm landmarks, kết hợp ArcFace (ResNet50) trích xuất đặc trưng vector 512 chiều để so sánh Cosine Similarity.\n- Chống giả mạo đa lớp (Anti-Spoofing): Tích hợp MiniFASNet phân biệt mặt thật/ảnh in/video replay cùng các rào cản chất lượng (độ nét Laplacian variance, kích thước mặt tối thiểu, bộ lọc khử nhiễu Bilateral và cân bằng sáng CLAHE).\n- Điểm danh chống gian lận: Mã QR động tự động làm mới liên tục qua WebSocket để chống chụp ảnh chia sẻ từ xa, kết hợp mã OTP ngắn hạn tạo bởi giảng viên.\n- Đồng bộ thời gian thực: Đồng bộ hóa lập tức trạng thái điểm danh của sinh viên lên màn hình quản lý của giảng viên qua Socket.IO.\n- Hệ thống phân quyền đầy đủ: Cung cấp đầy đủ phân hệ chức năng cho Admin, Khoa, Giảng viên (tạo buổi điểm danh, xem danh sách lớp, xuất báo cáo Excel) và Sinh viên (xem lịch học, thực hiện quét camera điểm danh).",
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
      badge: "",
      badge_vi: "",
      summary:
        "Online flower shop with gift notes, coupons, VNPay payment and live order tracking.",
      summary_vi:
        "Cửa hàng hoa trực tuyến với thiệp chúc, mã giảm giá, thanh toán VNPay và theo dõi đơn hàng.",
      tech: ["React", "Node.js", "Express", "MongoDB", "VNPay"],
      id: "flower",
      projectName: "Flower E-Commerce System",
      projectName_vi: "Hệ thống Cửa hàng Hoa trực tuyến (Flower E-Commerce)",
      projectDesc:
        "Timeline: December 2024 - March 2025\n\nDescription: A specialized e-commerce web application designed for online flower shopping, featuring gift note personalization, coupon system, online payment gateway (VNPay) integration, and real-time order tracking.\n\nTech Stack:\n- Frontend: React.js (Vite), Context API, Custom Hooks, Vanilla CSS (Responsive Design, Light/Dark Modes with Topographic SVG accents).\n- Backend: Node.js, Express.js, JWT Authentication, Cloudinary API.\n- Database: MongoDB, Mongoose ODM.\n- Payment: VNPay Online Payment Gateway.\n\nKey Features:\n- Premium Aesthetics: Smooth Earthy Warm design with seamless Light/Dark mode transitions and dynamic UI elements.\n- Smart Gift Wrapper: Allows customers to select delivery time slots and attach personalized greeting notes to their orders.\n- Dynamic Coupon System: Automatic client-side and server-side coupon calculations supporting discounts and free shipping.\n- Visual Order Stepper: An interactive order progress timeline from placement to final delivery.\n- User Reviews: Tabbed review and rating systems on product detail pages.",
      projectDesc_vi:
        "Thời gian thực hiện: Tháng 12/2024 - Tháng 3/2025\n\nMô tả dự án: Website Thương mại Điện tử chuyên biệt phục vụ mua sắm hoa tươi, hỗ trợ đặt quà tặng kèm thiệp chúc mừng, thanh toán trực tuyến qua cổng VNPay và quản lý trạng thái đơn hàng thời gian thực.\n\nCông nghệ sử dụng (Tech Stack):\n- Frontend: React.js (Vite), Context API (Quản lý State), Custom Hooks, CSS Vanilla (Thiết kế Responsive & Light/Dark Theme, hình Contours Topography nền).\n- Backend: Node.js, Express.js, JWT Authentication, Cloudinary API (Quản lý hình ảnh).\n- Database: MongoDB, Mongoose ODM.\n- Thanh toán: Tích hợp Cổng thanh toán quốc tế VNPay.\n\nCác tính năng nổi bật (Key Features):\n- Trải nghiệm người dùng cao cấp: Giao diện thiết kế theo phong cách ấm áp (Earthy Warm), hỗ trợ Light/Dark Mode mượt mà kết hợp hiệu ứng topography độc đáo.\n- Tùy chọn Quà tặng thông minh: Hỗ trợ khách hàng gửi tặng hoa kèm thiệp chúc mừng (ghi lời chúc) và chọn khung giờ giao hàng mong muốn.\n- Hệ thống Mã giảm giá: Áp dụng mã giảm giá trực tiếp tại giỏ hàng (FLOWERNEW, XMAS20,...) với cơ chế tự động tính tiền & freeship.\n- Theo dõi đơn hàng trực quan: Trình stepper trực quan theo dõi tiến trình đơn hàng (Đã đặt -> Xác nhận -> Đang giao -> Đã giao).\n- Hệ thống Đánh giá & Bình luận: Cho phép người dùng đánh giá sao và gửi nhận xét thực tế về sản phẩm.",
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

// Company projects (featured case studies)

// Screenshots and demo videos are hosted on R2, not committed to this repo.
const R2 = "https://pub-0e820f9648c44b9287ba41be64a35ed6.r2.dev/";

const gemsProject = {
  id: "gems",
  cover: require("./assets/images/ehs_logo.png"),
  company: "19T Digital",
  status: "Staging environment",
  status_vi: "Môi trường staging",
  mediaEnv: "Staging",
  name: "GEMS - Multi-Plant EHS Management System",
  name_vi:
    "GEMS - Hệ thống Quản lý An toàn, Sức khỏe & Môi trường (EHS) đa nhà máy",
  role: "Full-Stack Developer",
  role_vi: "Lập trình viên Full-Stack",
  summary:
    "A multi-plant web application that puts all EHS (Environment, Health & Safety) operations of a manufacturing group in one place, replacing scattered Excel files and paper logs.",
  summary_vi:
    "Ứng dụng web nhiều nhà máy gom toàn bộ nghiệp vụ EHS (An toàn, Sức khỏe, Môi trường) của một tập đoàn sản xuất vào một nơi, thay cho Excel và sổ giấy rời rạc.",
  stats: [
    {value: "17", label: "Modules", label_vi: "Phân hệ"},
    {value: "8", label: "Roles", label_vi: "Vai trò"},
    {
      value: "Multi",
      label: "Plants, 1 account",
      label_vi: "Nhà máy, 1 tài khoản"
    }
  ],
  tech: [
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "TanStack Query",
    "Recharts",
    "Zod",
    "ExcelJS",
    "Laravel 13",
    "PHP 8.3",
    "Sanctum",
    "MariaDB"
  ],
  gallery: [
    {
      type: "image",
      name: "Command Center",
      name_vi: "Command Center",
      url: "https://pub-0e820f9648c44b9287ba41be64a35ed6.r2.dev/round-2/01_command-center.png"
    },
    {
      type: "image",
      name: "EHS Plan",
      name_vi: "Kế hoạch EHS",
      url: "https://pub-0e820f9648c44b9287ba41be64a35ed6.r2.dev/round-2/02_ke-hoach-ehs.png"
    },
    {
      type: "image",
      name: "Inspections",
      name_vi: "Kiểm tra",
      url: "https://pub-0e820f9648c44b9287ba41be64a35ed6.r2.dev/round-2/04_kiem-tra.png"
    },
    {
      type: "video",
      name: "Tour: all pages",
      name_vi: "Tour toàn bộ trang",
      url: "https://pub-0e820f9648c44b9287ba41be64a35ed6.r2.dev/demo_tour_all_pages.webm"
    },
    {
      type: "video",
      name: "EHS staff walkthrough",
      name_vi: "Luồng nhân viên EHS",
      url: "https://pub-0e820f9648c44b9287ba41be64a35ed6.r2.dev/demo_testhien_nhan-vien-ehs.webm"
    }
  ],
  story: [
    {
      title: "Context",
      title_vi: "Bối cảnh",
      intro:
        "A manufacturing group with 5 plants ran its EHS operations on Google Sheets and Apps Script: about 75 tables in one workbook, 11 modules, and paper logs on the side. The customer wanted to move to a real system without losing the data model they already knew.",
      intro_vi:
        "Một tập đoàn sản xuất có 5 nhà máy vận hành EHS trên Google Sheets và Apps Script: khoảng 75 bảng trong một file, 11 phân hệ, kèm sổ giấy. Khách muốn chuyển sang hệ thống thật mà không bỏ mô hình dữ liệu họ đã quen."
    },
    {
      title: "Problems to solve",
      title_vi: "Vấn đề đặt ra",
      items: [
        {
          title: "Scattered data",
          title_vi: "Dữ liệu rời rạc",
          desc: "Each plant kept its own sheets, so there was no single view of safety, health and environment across the group.",
          desc_vi:
            "Mỗi nhà máy giữ file riêng nên không có cái nhìn chung về an toàn, sức khỏe, môi trường toàn tập đoàn."
        },
        {
          title: "No real accounts or permissions",
          title_vi: "Chưa có tài khoản và phân quyền thật",
          desc: "Accounts issued by an admin, each with a role and a list of plants they may access.",
          desc_vi:
            "Cần tài khoản do admin cấp, mỗi tài khoản có vai trò và danh sách nhà máy được truy cập."
        },
        {
          title: "Use on phones",
          title_vi: "Dùng trên điện thoại",
          desc: "Inspectors and EHS staff work on the floor, not at a desk.",
          desc_vi:
            "Người kiểm tra và nhân viên EHS làm việc tại hiện trường, không ngồi bàn."
        },
        {
          title: "Large manual data entry",
          title_vi: "Nhập liệu thủ công quá lớn",
          desc: "Health-check records run to thousands of rows. Excel import and export were required.",
          desc_vi:
            "Hồ sơ khám sức khỏe lên tới hàng nghìn dòng. Bắt buộc có nhập và xuất Excel."
        },
        {
          title: "Modules did not talk to each other",
          title_vi: "Các phân hệ không liên thông",
          desc: "A failed inspection, an expiring permit or a medicine dispensed should trigger work elsewhere, but people did it by hand.",
          desc_vi:
            "Kiểm tra không đạt, giấy phép sắp hết hạn hay cấp thuốc đều phải kéo theo việc ở phân hệ khác, nhưng đang làm tay."
        },
        {
          title: "Ownership",
          title_vi: "Quyền sở hữu",
          desc: "Data and source code belong to the customer. Later upgrades are handled separately.",
          desc_vi:
            "Dữ liệu và mã nguồn thuộc về khách. Nâng cấp sau này tính riêng."
        }
      ]
    },
    {
      title: "Analysis",
      title_vi: "Phân tích",
      items: [
        {
          title: "Business logic was already separate from the UI",
          title_vi: "Nghiệp vụ đã tách khỏi giao diện",
          desc: "Every write went through one service function, every side effect through an event bus, every deadline alert through one scheduled sweep. That made it possible to move all three layers to a server without rewriting the rules.",
          desc_vi:
            "Mọi thao tác ghi đi qua một hàm service, mọi hiệu ứng dây chuyền qua event bus, mọi cảnh báo hạn qua một lượt quét định kỳ. Nhờ vậy dời cả ba lớp lên server mà không phải viết lại nghiệp vụ."
        },
        {
          title: "Permission = Role × Module × Action × Plant",
          title_vi: "Quyền = Vai trò × Phân hệ × Hành động × Nhà máy",
          desc: "Permissions attach to roles, never to individuals. Both the frontend and the API check them, because hiding a button is not security.",
          desc_vi:
            "Quyền gán cho vai trò, không gán cho từng người. Cả frontend và API đều kiểm tra, vì ẩn nút không phải là bảo mật."
        },
        {
          title: "Keep the customer's data model",
          title_vi: "Giữ mô hình dữ liệu của khách",
          desc: "Same PascalCase fields and string IDs as the original sheets, so existing data and reports map one to one.",
          desc_vi:
            "Giữ tên trường PascalCase và ID dạng chuỗi như file gốc, để dữ liệu và báo cáo cũ ánh xạ một-một."
        }
      ]
    },
    {
      evidence: [
        "Command Center",
        "EHS Plan",
        "Inspections",
        "Tour: all pages"
      ],
      title: "Main business flows",
      title_vi: "Luồng nghiệp vụ chính",
      intro:
        "The core is a trigger engine: modules react to each other's events instead of relying on people to remember. These are the flows I built end to end.",
      intro_vi:
        "Trọng tâm là trigger engine: các phân hệ tự phản ứng theo sự kiện của nhau thay vì trông chờ con người nhớ. Đây là các luồng mình đã làm trọn vẹn.",
      flows: [
        {
          title: "From plan to tasks to KPI",
          title_vi: "Từ kế hoạch đến công việc và KPI",
          desc: "An EHS plan activity carries its frequency (once, daily, weekly, monthly, quarterly). The system generates the task for each period, assigns the owner and rolls completion into the KPI dashboard. Date or owner changes need a reason and go through approval.",
          desc_vi:
            "Mỗi hoạt động trong kế hoạch EHS có tần suất (một lần, hàng ngày, hàng tuần, hàng tháng, hàng quý). Hệ thống tự sinh công việc cho từng kỳ, giao người thực hiện và đưa tiến độ vào KPI. Đổi ngày hoặc người thực hiện phải có lý do và qua duyệt.",
          steps: [
            "EHS plan activity",
            "Tasks generated per period",
            "Progress update with reviewer feedback",
            "KPI",
            "Dashboard"
          ],
          steps_vi: [
            "Hoạt động kế hoạch EHS",
            "Tự sinh công việc theo kỳ",
            "Cập nhật tiến độ, có phản hồi của người duyệt",
            "KPI",
            "Dashboard"
          ]
        },
        {
          title: "Inspection to corrective action",
          title_vi: "Từ kiểm tra đến hành động khắc phục",
          desc: "An inspector fills a checklist on the phone with photos. Every failed item becomes a finding, and each finding opens a corrective action with an owner and a deadline. A per-plant PDF report with charts and photos can be exported.",
          desc_vi:
            "Người kiểm tra điền checklist trên điện thoại kèm ảnh. Mỗi hạng mục không đạt thành một phát hiện, mỗi phát hiện mở một hành động khắc phục có người phụ trách và hạn. Có thể xuất báo cáo PDF theo nhà máy kèm biểu đồ và ảnh.",
          steps: [
            "Checklist with photos",
            "Item fails",
            "Finding",
            "Corrective action",
            "Notification",
            "Verified and closed"
          ],
          steps_vi: [
            "Checklist kèm ảnh",
            "Hạng mục không đạt",
            "Phát hiện",
            "Hành động khắc phục",
            "Thông báo",
            "Xác minh và đóng"
          ]
        },
        {
          title: "Incident investigation with 5-Why",
          title_vi: "Điều tra sự cố bằng 5-Why",
          desc: "Accidents and incidents share one workflow. The investigation step records a 5-Why root-cause table, and the corrective step keeps before and after photos, the owner and the completion date.",
          desc_vi:
            "Tai nạn và sự cố dùng chung một quy trình. Bước điều tra ghi bảng phân tích nguyên nhân gốc 5-Why, bước khắc phục lưu ảnh trước và sau cải thiện, người phụ trách và ngày hoàn thành.",
          steps: [
            "Report",
            "Investigation and 5-Why",
            "Corrective action with before/after photos",
            "Follow-up"
          ],
          steps_vi: [
            "Khởi tạo",
            "Điều tra và 5-Why",
            "Khắc phục kèm ảnh trước/sau",
            "Theo dõi"
          ]
        },
        {
          title: "Clinic and medicine stock",
          title_vi: "Y tế và kho thuốc",
          desc: "Dispensing medicine deducts stock lot by lot and raises low-stock and expiry alerts. A clinic visit flagged as a work accident drafts an incident automatically. Health-check data of thousands of rows comes in through Excel import.",
          desc_vi:
            "Cấp thuốc trừ kho theo từng lô và báo tồn thấp, sắp hết hạn. Lượt khám đánh dấu là tai nạn lao động sẽ tự tạo nháp sự cố. Dữ liệu khám sức khỏe hàng nghìn dòng nhập qua Excel.",
          steps: [
            "Medicine dispensed",
            "Stock deducted by lot",
            "Low-stock and expiry alert",
            "Work accident flagged",
            "Incident draft"
          ],
          steps_vi: [
            "Cấp thuốc",
            "Trừ kho theo lô",
            "Cảnh báo tồn thấp và hết hạn",
            "Đánh dấu tai nạn lao động",
            "Nháp sự cố"
          ]
        },
        {
          title: "Equipment and permit deadlines",
          title_vi: "Hạn thiết bị và giấy phép",
          desc: "Strict-control equipment, fire-safety equipment, permits and contractor records all carry an expiry date. When an inspection is recorded the next due date moves forward, and a daily sweep warns before anything lapses.",
          desc_vi:
            "Thiết bị nghiêm ngặt, thiết bị PCCC, giấy phép và hồ sơ nhà thầu đều có ngày hết hạn. Khi ghi nhận kiểm định, hạn kế tiếp tự dời, và một lượt quét hằng ngày cảnh báo trước khi quá hạn.",
          steps: [
            "Inspection recorded",
            "Next due date updated",
            "Daily sweep",
            "Alert before expiry"
          ],
          steps_vi: [
            "Ghi nhận kiểm định",
            "Cập nhật hạn kế tiếp",
            "Quét hằng ngày",
            "Cảnh báo trước hạn"
          ]
        },
        {
          title: "Chemicals, legal check and labels",
          title_vi: "Hóa chất, kiểm tra pháp lý và tem nhãn",
          desc: "Each chemical is matched against legal references by normalized CAS number. Stock-in creates lots, and a label can be printed per lot from a dedicated print page. A command rechecks every chemical after the legal catalogue changes.",
          desc_vi:
            "Mỗi hóa chất được đối chiếu danh mục pháp lý theo số CAS đã chuẩn hóa. Nhập kho tạo lô, và có thể in tem cho từng lô từ trang in riêng. Có lệnh kiểm tra lại toàn bộ hóa chất khi danh mục pháp lý đổi.",
          steps: [
            "Chemical and MSDS",
            "Legal check by CAS",
            "Stock-in by lot",
            "Label printed",
            "Recheck after catalogue change"
          ],
          steps_vi: [
            "Hóa chất và MSDS",
            "Kiểm tra pháp lý theo CAS",
            "Nhập kho theo lô",
            "In tem",
            "Kiểm tra lại khi danh mục đổi"
          ]
        },
        {
          title: "Energy and emissions with an audit trail",
          title_vi: "Năng lượng và phát thải có dấu vết kiểm toán",
          desc: "Energy bills are converted to MJ and to emissions with configured factors. The annual total mixes MANUAL rows (reason required) and CALCULATED rows (read-only), and a calculated row opens the exact calculations and attached receipts behind it.",
          desc_vi:
            "Hóa đơn năng lượng được quy đổi ra MJ và phát thải theo hệ số đã cấu hình. Tổng năm gồm dòng MANUAL (bắt buộc lý do) và dòng CALCULATED (chỉ đọc), và bấm vào dòng tính toán sẽ thấy đúng các phép tính và biên lai phía sau.",
          steps: [
            "Bill and receipt attached",
            "Convert to MJ",
            "Apply emission factor",
            "Aggregate by source",
            "View sources"
          ],
          steps_vi: [
            "Hóa đơn kèm biên lai",
            "Quy đổi ra MJ",
            "Áp hệ số phát thải",
            "Tổng hợp theo nguồn",
            "Xem nguồn"
          ]
        },
        {
          title: "Roles, plants and approvals",
          title_vi: "Vai trò, nhà máy và phê duyệt",
          desc: "Permissions follow Role × Module × Action × Plant, and the matrix is editable in the UI with custom roles. The API enforces plant scope. Sensitive changes such as task reassignment follow request, leader review, then manager approval.",
          desc_vi:
            "Quyền theo Vai trò × Phân hệ × Hành động × Nhà máy, ma trận sửa được trên giao diện kèm vai trò tùy biến. API quyết định phạm vi nhà máy. Thay đổi nhạy cảm như đổi người thực hiện đi theo luồng gửi yêu cầu, Leader xem xét, Manager phê duyệt.",
          steps: [
            "Admin creates account",
            "Assign role and plants",
            "User acts",
            "Request needs approval?",
            "Leader review",
            "Manager approval",
            "Applied and logged"
          ],
          steps_vi: [
            "Admin tạo tài khoản",
            "Gán vai trò và nhà máy",
            "Người dùng thao tác",
            "Cần duyệt?",
            "Leader xem xét",
            "Manager phê duyệt",
            "Áp dụng và ghi log"
          ]
        }
      ]
    },
    {
      evidence: ["EHS staff walkthrough"],
      title: "How it evolved",
      title_vi: "Quá trình phát triển",
      numbered: true,
      items: [
        {
          title: "Offline-first PWA proof of concept",
          title_vi: "PoC dạng PWA offline-first",
          desc: "React, TypeScript, Dexie (IndexedDB), installable on a phone. Rebuilt the 11 original modules plus the trigger engine so the customer could test quickly.",
          desc_vi:
            "React, TypeScript, Dexie (IndexedDB), cài được lên điện thoại. Dựng lại 11 phân hệ gốc cùng trigger engine để khách test nhanh."
        },
        {
          title: "Five rounds of customer feedback",
          title_vi: "Năm vòng phản hồi của khách",
          desc: "Each round came as slides with red-circled screenshots. I traced every comment to a task, fixed real bugs first, and added modules such as chemicals, water and wastewater, and incident reports with 5-Why analysis. The permission matrix grew from fixed roles to custom roles.",
          desc_vi:
            "Mỗi vòng khách gửi slide kèm ảnh khoanh đỏ. Mình truy từng góp ý về task, sửa lỗi thật trước, rồi thêm phân hệ như hóa chất, nước và nước thải, báo cáo sự cố với phân tích 5-Why. Ma trận phân quyền đi từ vai trò cố định tới vai trò tùy biến."
        },
        {
          title: "Laravel backend and API migration",
          title_vi: "Backend Laravel và chuyển sang API",
          desc: "Moved the rules to a Laravel API on MariaDB with Sanctum tokens, then switched the frontend from Dexie to REST. Now many people across plants share one dataset.",
          desc_vi:
            "Dời nghiệp vụ lên API Laravel trên MariaDB với token Sanctum, rồi đổi frontend từ Dexie sang REST. Giờ nhiều người ở nhiều nhà máy dùng chung một bộ dữ liệu."
        }
      ]
    },
    {
      title: "Technical highlights",
      title_vi: "Điểm kỹ thuật nổi bật",
      items: [
        {
          title: "Emissions you can trace to a receipt",
          title_vi: "Phát thải truy vết được về biên lai",
          desc: "The customer rejected totals that could not be audited. Annual rows are now either MANUAL (a reason is mandatory) or CALCULATED (read-only, rebuilt incrementally, never touching manual rows), and each calculated row opens its exact sources and attached invoices.",
          desc_vi:
            "Khách không chấp nhận tổng số không kiểm chứng được. Giờ mỗi dòng năm là MANUAL (bắt buộc ghi lý do) hoặc CALCULATED (chỉ đọc, cập nhật tăng dần, không đụng dòng nhập tay), và bấm vào dòng tính toán sẽ thấy đúng nguồn kèm hóa đơn đính kèm."
        },
        {
          title: "Previews on the client, truth on the server",
          title_vi: "Xem trước ở client, kết quả đúng ở server",
          desc: "Calculations like GHG, lot status and legal checks still run in the form for instant preview, but the server always recomputes on save, so the two can never disagree.",
          desc_vi:
            "Các phép tính như GHG, trạng thái lô, kiểm tra pháp lý vẫn chạy ở form để xem trước tức thì, nhưng server luôn tính lại khi lưu nên hai bên không thể lệch nhau."
        },
        {
          title: "Plant scope enforced in the API",
          title_vi: "Phạm vi nhà máy do API quyết định",
          desc: "Filtering by plant lives in the backend. The UI only reflects it, so a user cannot see another plant by editing a request.",
          desc_vi:
            "Việc lọc theo nhà máy nằm ở backend. Giao diện chỉ phản ánh lại, nên không ai xem được nhà máy khác bằng cách sửa request."
        },
        {
          title: "Trade-off: online only",
          title_vi: "Đánh đổi: chỉ chạy khi có mạng",
          desc: "Dropping offline-first meant notifications poll every 30 seconds and data screens need the API. In exchange there is one shared dataset, real accounts and server-side jobs.",
          desc_vi:
            "Bỏ offline-first nghĩa là thông báo cập nhật mỗi 30 giây và màn hình dữ liệu cần API. Đổi lại có một bộ dữ liệu chung, tài khoản thật và tác vụ chạy trên server."
        }
      ]
    }
  ],
  scope: [
    {
      group: "Overview",
      group_vi: "Tổng quan",
      items: ["Command Center", "EHS plan", "Task board"],
      items_vi: ["Command Center", "Kế hoạch EHS", "Bảng công việc"]
    },
    {
      group: "Safety",
      group_vi: "An toàn",
      items: [
        "Inspections",
        "Accidents & incidents",
        "Strict-control equipment",
        "Fire safety (PCCC)",
        "Contractors",
        "External audits"
      ],
      items_vi: [
        "Kiểm tra",
        "Tai nạn & sự cố",
        "Thiết bị nghiêm ngặt",
        "PCCC",
        "Nhà thầu",
        "Đánh giá bên ngoài"
      ]
    },
    {
      group: "Environment & Health",
      group_vi: "Môi trường & Sức khỏe",
      items: [
        "Occupational health",
        "Working-environment monitoring",
        "Waste",
        "Chemicals",
        "Water & wastewater",
        "Energy & GHG"
      ],
      items_vi: [
        "Y tế",
        "Quan trắc môi trường lao động",
        "Chất thải",
        "Hoá chất",
        "Nước & nước thải",
        "Năng lượng & khí nhà kính"
      ]
    },
    {
      group: "Organization",
      group_vi: "Tổ chức",
      items: ["EHS training with online exams", "Personnel"],
      items_vi: ["Đào tạo EHS (có thi trực tuyến)", "Nhân sự"]
    }
  ],
  highlights: [
    {
      title: "Role & plant based access",
      title_vi: "Phân quyền theo vai trò và nhà máy",
      desc: "8 roles: system admin, EHS Manager, EHS Leader, EHS staff, medical staff, auditor, view-only and contractor. Menus and data change by role and plant scope.",
      desc_vi:
        "8 vai trò: quản trị hệ thống, EHS Manager, EHS Leader, nhân viên EHS, nhân viên y tế, auditor, chỉ xem, nhà thầu. Menu và dữ liệu thay đổi theo vai trò và phạm vi nhà máy."
    },
    {
      title: "Multi-plant in one account",
      title_vi: "Nhiều nhà máy trong một tài khoản",
      desc: "Switch plant scope directly in the UI.",
      desc_vi: "Chuyển phạm vi nhà máy ngay trên giao diện."
    },
    {
      title: "Expiry alerts",
      title_vi: "Cảnh báo hạn",
      desc: "Warnings for equipment inspections, permits and contractor competency records.",
      desc_vi:
        "Cảnh báo cho thiết bị kiểm định, giấy phép và hồ sơ năng lực của nhà thầu."
    },
    {
      title: "Reports & printing",
      title_vi: "Báo cáo & in ấn",
      desc: "Excel and PDF export, print-ready pages for inspection reports and wastewater logs.",
      desc_vi:
        "Xuất Excel và PDF, trang in cho báo cáo kiểm tra và nhật ký nước thải."
    },
    {
      title: "REST API migration",
      title_vi: "Chuyển sang REST API",
      desc: "Moved the frontend from local storage to a Laravel REST API.",
      desc_vi: "Chuyển frontend từ lưu trữ cục bộ sang REST API Laravel."
    },
    {
      title: "Vietnamese UI, multi-language, PWA",
      title_vi: "Tiếng Việt, đa ngôn ngữ, PWA",
      desc: "Installable as a PWA. Features built over several rounds of customer feedback.",
      desc_vi:
        "Cài được như ứng dụng PWA. Tính năng xây dựng theo phản hồi của khách qua nhiều vòng."
    }
  ]
};

const nineteenSiteProject = {
  id: "19t-web",
  cover: R2 + "19t/19t_01_home.webp",
  company: "19T Digital",
  status: "Staging environment",
  status_vi: "Môi trường staging",
  mediaEnv: "Staging",
  name: "19T Digital - Company Website & Content CMS",
  name_vi: "19T Digital - Website công ty & CMS quản trị nội dung",
  role: "Full-Stack Developer",
  role_vi: "Lập trình viên Full-Stack",
  summary:
    "The company website for a software agency, with every page driven by an in-house CMS: portfolio case studies, PoC and website demos, blog, job posts and inbound leads.",
  summary_vi:
    "Website công ty cho một agency phần mềm, mọi trang đều lấy nội dung từ CMS tự xây: hồ sơ dự án, demo PoC và website mẫu, blog, tin tuyển dụng và khách hàng tiềm năng.",
  stats: [
    {value: "11", label: "Public pages", label_vi: "Trang public"},
    {value: "8", label: "Admin screens", label_vi: "Màn hình quản trị"},
    {value: "12", label: "Data models", label_vi: "Mô hình dữ liệu"}
  ],
  tech: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Prisma 5",
    "MySQL / MariaDB",
    "Zod",
    "dnd-kit",
    "Motion",
    "Bunny Stream",
    "S3 (Cloudfly)",
    "Nodemailer"
  ],
  gallery: [
    {
      type: "image",
      name: "Homepage",
      name_vi: "Trang chủ",
      url: R2 + "19t/19t_01_home.webp"
    },
    {
      type: "image",
      name: "Case study page",
      name_vi: "Trang chi tiết dự án",
      url: R2 + "19t/19t_02_project.webp"
    },
    {
      type: "video",
      name: "Tour: public site and admin",
      name_vi: "Tour: trang public và trang quản trị",
      url: R2 + "demo_19t_tour.webm"
    }
  ],
  story: [
    {
      title: "Context",
      title_vi: "Bối cảnh",
      intro:
        "An agency sells web apps, websites and Zalo Mini Apps. Its own site had to show that work and be editable by the sales team, not by a developer pushing code for every new case study or job post.",
      intro_vi:
        "Agency bán web app, website và Zalo Mini App. Website của chính họ phải trưng bày được các dự án đó và để đội sales tự sửa, thay vì mỗi lần thêm dự án hay tin tuyển dụng lại phải nhờ dev đẩy code."
    },
    {
      title: "Problems to solve",
      title_vi: "Vấn đề đặt ra",
      items: [
        {
          title: "Content locked in code",
          title_vi: "Nội dung nằm trong code",
          desc: "Headings, stats and section copy were hard-coded, so any wording change needed a deploy.",
          desc_vi:
            "Tiêu đề, số liệu và nội dung từng khối đều hard-code, đổi một câu chữ cũng phải deploy lại."
        },
        {
          title: "Case studies have different shapes",
          title_vi: "Mỗi dự án một hình dạng khác nhau",
          desc: "Some projects need a full-bleed image, some a text-image split. The editor had to pick a layout per section instead of writing raw HTML.",
          desc_vi:
            "Có dự án cần ảnh tràn viền, có dự án cần bố cục chữ bên ảnh. Người biên tập phải chọn được bố cục cho từng khối thay vì gõ HTML thô."
        },
        {
          title: "Demos are the sales pitch",
          title_vi: "Demo chính là thứ đi bán",
          desc: "PoCs and website templates needed their own detail pages with problem, solution, features, timeline and screenshots.",
          desc_vi:
            "PoC và website mẫu cần trang chi tiết riêng, có vấn đề, giải pháp, tính năng, lộ trình và hình ảnh màn hình."
        },
        {
          title: "Leads must not be lost",
          title_vi: "Không được rơi khách",
          desc: "Contact and job applications had to land in the database and in the inbox at the same time.",
          desc_vi:
            "Liên hệ tư vấn và hồ sơ ứng tuyển phải vào cả database lẫn hộp thư cùng lúc."
        }
      ]
    },
    {
      evidence: ["Homepage", "Case study page", "Tour: public site and admin"],
      title: "What I built",
      title_vi: "Những gì đã xây",
      intro:
        "One Next.js App Router codebase holds both the public site and the admin area. Every public page reads from Prisma, so nothing on screen is hard-coded copy.",
      intro_vi:
        "Một codebase Next.js App Router chứa cả trang public lẫn khu quản trị. Mọi trang public đều đọc dữ liệu qua Prisma nên không còn nội dung hard-code trên màn hình.",
      items: [
        {
          title: "Key-value content store",
          title_vi: "Kho nội dung dạng key-value",
          desc: "A Content model keyed by page and key feeds every heading, stat and block of copy, edited from one admin screen.",
          desc_vi:
            "Model Content đánh khóa theo trang và key, cung cấp mọi tiêu đề, số liệu và đoạn nội dung, sửa tại một màn hình quản trị duy nhất."
        },
        {
          title: "Section layouts instead of raw HTML",
          title_vi: "Bố cục khối thay cho HTML thô",
          desc: "Case study sections are stored as markup carrying a layout key and image slots, parsed back into a typed structure before rendering.",
          desc_vi:
            "Các khối của trang dự án được lưu dưới dạng markup mang khóa bố cục và ô ảnh, parse lại thành cấu trúc có kiểu trước khi render."
        },
        {
          title: "Drag-to-reorder listings",
          title_vi: "Kéo thả sắp xếp danh sách",
          desc: "Portfolio and PoC order is set by dragging rows in admin and previewing the public order before saving.",
          desc_vi:
            "Thứ tự dự án và PoC đặt bằng cách kéo thả hàng trong trang quản trị, xem trước thứ tự hiển thị rồi mới lưu."
        },
        {
          title: "Media pipeline",
          title_vi: "Luồng xử lý media",
          desc: "Images go to S3-compatible storage with presigned uploads; demo videos go to Bunny Stream with token-signed embeds.",
          desc_vi:
            "Ảnh đẩy lên lưu trữ chuẩn S3 bằng presigned URL; video demo đẩy lên Bunny Stream, nhúng bằng link ký token."
        }
      ]
    }
  ],
  scope: [
    {
      group: "Public site",
      group_vi: "Trang public",
      items: [
        "Home, services, process, hosting, about",
        "Portfolio list and case study pages",
        "PoC and website demo detail pages",
        "Blog with categories",
        "Careers with application form",
        "Contact form with lead capture"
      ],
      items_vi: [
        "Trang chủ, dịch vụ, quy trình, hosting, giới thiệu",
        "Danh sách dự án và trang chi tiết dự án",
        "Trang chi tiết PoC và website demo",
        "Blog có phân loại chuyên mục",
        "Tuyển dụng kèm form ứng tuyển",
        "Form liên hệ thu khách tiềm năng"
      ]
    },
    {
      group: "Admin",
      group_vi: "Quản trị",
      items: [
        "Portfolio and platform manager",
        "PoC and website demo manager",
        "Blog and blog categories",
        "Job posts and applications",
        "Site content editor",
        "Inbound contact list"
      ],
      items_vi: [
        "Quản lý dự án và nền tảng",
        "Quản lý PoC và website demo",
        "Bài viết và chuyên mục",
        "Tin tuyển dụng và hồ sơ ứng tuyển",
        "Trình sửa nội dung toàn site",
        "Danh sách liên hệ gửi về"
      ]
    }
  ],
  highlights: [
    {
      title: "No deploy to change copy",
      title_vi: "Đổi nội dung không cần deploy",
      desc: "Every public heading and stat is a content row, so the sales team edits the site themselves.",
      desc_vi:
        "Mọi tiêu đề và số liệu trên trang public đều là một bản ghi nội dung, đội sales tự sửa được."
    },
    {
      title: "Typed data end to end",
      title_vi: "Dữ liệu có kiểu xuyên suốt",
      desc: "Prisma models plus Zod validation on the API routes keep admin input and page rendering in sync.",
      desc_vi:
        "Model Prisma cộng với kiểm tra Zod ở API giữ cho dữ liệu nhập vào và phần hiển thị luôn khớp nhau."
    },
    {
      title: "Demo-ready in one command",
      title_vi: "Dựng bản demo bằng một lệnh",
      desc: "A seed script fills the database with presentable mock content, which is what the staging screenshots and the tour video show.",
      desc_vi:
        "Một script seed đổ sẵn dữ liệu mẫu trình bày được, đây cũng là dữ liệu trong ảnh chụp và video tour trên staging."
    }
  ]
};

const luciaProject = {
  id: "lucia-lms",
  cover: R2 + "lucia_01_admin_overview.webp",
  coverFit: "cover",
  company: "19T Digital",
  status: "Staging environment",
  status_vi: "Môi trường staging",
  mediaEnv: "Staging",
  name: "Lucia Learning - E-learning Platform for Teacher Training",
  name_vi: "Lucia Learning - Nền tảng E-learning đào tạo giáo viên mầm non",
  role: "Full-Stack Developer",
  role_vi: "Lập trình viên Full-Stack",
  summary:
    "An LMS for an early-childhood teacher training academy that had been teaching by hand over Zoom. Students follow locked lessons, take quizzes and sit scheduled exams; admins manage courses, classes, grading and the public landing page.",
  summary_vi:
    "Hệ thống LMS cho một học viện đào tạo giáo viên mầm non vốn dạy thủ công qua Zoom. Học viên học theo bài bị khóa tuần tự, làm quiz và thi theo lịch; quản trị viên quản lý khóa học, lớp, chấm bài và trang chủ công khai.",
  stats: [
    {value: "25", label: "Feature modules", label_vi: "Phân hệ chức năng"},
    {value: "204", label: "API routes", label_vi: "API route"},
    {value: "310", label: "UAT test cases", label_vi: "Test case UAT"}
  ],
  tech: [
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Material UI",
    "TanStack Query",
    "React Hook Form",
    "Zod",
    "pdf.js",
    "Laravel 13",
    "PHP 8.3",
    "Sanctum",
    "Bunny Stream",
    "Playwright"
  ],
  gallery: [
    {
      type: "image",
      name: "Admin: system overview",
      name_vi: "Admin: tổng quan hệ thống",
      url: R2 + "lucia_01_admin_overview.webp"
    },
    {
      type: "image",
      name: "Admin: course management",
      name_vi: "Admin: quản lý khóa học",
      url: R2 + "lucia_02_admin_courses.webp"
    },
    {
      type: "image",
      name: "Student: online class schedule",
      name_vi: "Học viên: lịch học trực tuyến",
      url: R2 + "lucia_03_student_schedule.webp"
    },
    {
      type: "video",
      name: "Admin walkthrough",
      name_vi: "Demo quản trị viên",
      url: R2 + "lucia_demo_admin.webm"
    },
    {
      type: "video",
      name: "Student walkthrough",
      name_vi: "Demo học viên",
      url: R2 + "lucia_demo_student.webm"
    }
  ],
  story: [
    {
      title: "Context",
      title_vi: "Bối cảnh",
      intro:
        "The academy taught teachers live and by hand over Zoom. It wanted a self-paced platform in the style of a course marketplace: finish one video to unlock the next, a test after every module, and course content that cannot simply be shared or downloaded.",
      intro_vi:
        "Học viện đang dạy giáo viên trực tiếp, thủ công qua Zoom. Họ muốn một nền tảng tự học theo kiểu sàn khóa học: xem hết video mới sang bài sau, hết mỗi học phần có bài kiểm tra, và nội dung khóa học không thể bị chia sẻ hay tải về tùy ý."
    },
    {
      title: "Problems to solve",
      title_vi: "Vấn đề đặt ra",
      items: [
        {
          title: "Content must not leak",
          title_vi: "Chống lộ nội dung",
          desc: "No video download, documents are view-only (printable, not downloadable), and each viewer is identified on screen.",
          desc_vi:
            "Không tải được video, tài liệu chỉ xem (in được, không tải được) và mỗi học viên được đánh dấu ngay trên màn hình."
        },
        {
          title: "Learning must be enforced, not honoured",
          title_vi: "Học phải được ép theo lộ trình",
          desc: "Progress, unlocking and quiz answers cannot be trusted from the browser, or a student could skip ahead by editing a request.",
          desc_vi:
            "Tiến độ, mở khóa và đáp án quiz không thể tin vào trình duyệt, nếu không học viên sửa request là nhảy cóc được."
        },
        {
          title: "Real exams, not just quizzes",
          title_vi: "Thi thật chứ không chỉ quiz",
          desc: "Exams need a time window, a deadline, a countdown room, mixed multiple-choice and essay questions, and manual grading.",
          desc_vi:
            "Bài thi cần khung giờ, hạn nộp, phòng thi có đếm ngược, câu hỏi trắc nghiệm lẫn tự luận và chấm tay."
        },
        {
          title: "Staff run it without a developer",
          title_vi: "Nhân sự tự vận hành",
          desc: "Courses, classes, timetables, the public landing page and accounts all had to be editable from an admin area.",
          desc_vi:
            "Khóa học, lớp, thời khóa biểu, trang chủ công khai và tài khoản đều phải sửa được từ khu quản trị."
        }
      ]
    },
    {
      title: "Analysis",
      title_vi: "Phân tích",
      items: [
        {
          title: "The server is the only source of truth",
          title_vi: "Server là nguồn sự thật duy nhất",
          desc: "Watch progress, lesson unlocking, quiz marking, exam windows and scoring are decided by the Laravel API. The React app only displays them.",
          desc_vi:
            "Tiến độ xem, mở khóa bài, chấm quiz, khung giờ thi và tính điểm đều do API Laravel quyết định. App React chỉ hiển thị."
        },
        {
          title: "Cookie sessions, nothing sensitive in the browser",
          title_vi: "Phiên cookie, không lưu gì nhạy cảm ở trình duyệt",
          desc: "Sanctum session cookies instead of tokens in localStorage, so neither the token nor the role can be read or edited from the client.",
          desc_vi:
            "Dùng cookie session Sanctum thay vì token trong localStorage, nên token và vai trò đều không đọc hay sửa được từ phía client."
        },
        {
          title: "Spec first, test last",
          title_vi: "Đặc tả trước, kiểm thử sau cùng",
          desc: "Changes went through OpenSpec proposals, and the finished system was checked by a 310-case UAT plan automated with Playwright.",
          desc_vi:
            "Các thay đổi đi qua đề xuất OpenSpec, và hệ thống hoàn thiện được kiểm bằng bộ UAT 310 test case tự động hóa bằng Playwright."
        }
      ]
    },
    {
      title: "Main business flows",
      title_vi: "Luồng nghiệp vụ chính",
      intro:
        "These are the flows I built end to end, from account to certified result.",
      intro_vi:
        "Đây là các luồng mình xây dựng trọn vẹn, từ cấp tài khoản đến kết quả.",
      flows: [
        {
          title: "Account to class to course",
          title_vi: "Từ tài khoản đến lớp và khóa học",
          desc: "Accounts are issued by the academy, not self-registered. Adding a student to a class opens that class's course and its timetable for them.",
          desc_vi:
            "Tài khoản do học viện cấp, không tự đăng ký. Thêm học viên vào lớp là mở luôn khóa học và thời khóa biểu của lớp cho họ.",
          steps: [
            "Registration request or admin creates account",
            "Add student to a class",
            "Course and timetable appear",
            "Notification sent"
          ],
          steps_vi: [
            "Yêu cầu đăng ký hoặc admin tạo tài khoản",
            "Thêm học viên vào lớp",
            "Khóa học và thời khóa biểu hiện ra",
            "Gửi thông báo"
          ]
        },
        {
          title: "Locked lesson progression",
          title_vi: "Học tuần tự, bài sau bị khóa",
          desc: "The player sends a heartbeat while a lesson plays. The next lesson unlocks only when the server has recorded enough watched time and the end-of-lesson quiz is passed.",
          desc_vi:
            "Player gửi heartbeat khi bài đang phát. Bài kế chỉ mở khi server ghi nhận đủ thời gian xem và đã qua quiz cuối bài.",
          steps: [
            "Lesson plays with heartbeat",
            "Server records watched time",
            "End-of-lesson quiz",
            "Pass",
            "Next lesson unlocks"
          ],
          steps_vi: [
            "Phát bài kèm heartbeat",
            "Server ghi nhận thời gian xem",
            "Quiz cuối bài",
            "Đạt",
            "Mở bài kế tiếp"
          ]
        },
        {
          title: "Protected viewing",
          title_vi: "Xem nội dung có bảo vệ",
          desc: "Videos play from signed, short-lived embeds with the viewer's name and email overlaid. Documents are streamed to a viewer with no download button.",
          desc_vi:
            "Video phát từ embed có ký, hết hạn nhanh, chèn tên và email người xem lên hình. Tài liệu được stream vào trình xem, không có nút tải.",
          steps: [
            "Request lesson media",
            "Server signs a temporary URL",
            "Player shows watermark",
            "Document streams in viewer",
            "Download needs the academy"
          ],
          steps_vi: [
            "Yêu cầu media bài học",
            "Server ký URL tạm thời",
            "Player hiện watermark",
            "Tài liệu stream trong trình xem",
            "Muốn tải phải liên hệ trung tâm"
          ]
        },
        {
          title: "Module test to exam to grading",
          title_vi: "Kiểm tra học phần, thi và chấm bài",
          desc: "Each module ends with a test. Official exams are scheduled per class, run in a timed room, and anything essay-style lands in a grading queue.",
          desc_vi:
            "Mỗi học phần kết thúc bằng bài kiểm tra. Kỳ thi chính thức được lên lịch theo lớp, làm trong phòng thi có đếm giờ, câu tự luận rơi vào hàng chờ chấm.",
          steps: [
            "Question bank",
            "Exam scheduled for a class",
            "Student enters timed room",
            "Server scores multiple-choice",
            "Teacher grades essays",
            "Result published"
          ],
          steps_vi: [
            "Ngân hàng câu hỏi",
            "Lên lịch thi cho lớp",
            "Học viên vào phòng thi có đếm giờ",
            "Server chấm trắc nghiệm",
            "Giáo viên chấm tự luận",
            "Công bố kết quả"
          ]
        },
        {
          title: "Landing page CMS with rollback",
          title_vi: "CMS trang chủ có khôi phục phiên bản",
          desc: "The public page is built from sections edited in admin. Drafts are previewed, published as a revision, and any earlier revision can be restored.",
          desc_vi:
            "Trang chủ công khai ghép từ các section sửa ngay trong admin. Bản nháp xem trước được, xuất bản thành một revision và khôi phục được revision cũ.",
          steps: [
            "Edit section draft",
            "Preview",
            "Publish revision",
            "Roll back if needed"
          ],
          steps_vi: [
            "Sửa section bản nháp",
            "Xem trước",
            "Xuất bản revision",
            "Khôi phục nếu cần"
          ]
        }
      ]
    },
    {
      title: "Admin and student, on screen",
      title_vi: "Admin và học viên trên màn hình",
      intro:
        "Both walkthroughs were recorded from the staging environment on seeded data: the admin tour adds students to a class and visits every management area, the student tour covers dashboard, classes, timetable, exams, results and account.",
      intro_vi:
        "Cả hai video demo được quay từ môi trường staging trên dữ liệu mẫu: video admin thêm học viên vào lớp và đi qua mọi khu quản trị, video học viên đi qua tổng quan, lớp học, lịch học, lịch thi, kết quả và tài khoản.",
      evidence: [
        "Admin: system overview",
        "Admin: course management",
        "Student: online class schedule",
        "Admin walkthrough",
        "Student walkthrough"
      ]
    },
    {
      title: "Technical highlights",
      title_vi: "Điểm nhấn kỹ thuật",
      items: [
        {
          title: "Server-authoritative progress",
          title_vi: "Tiến độ do server quyết định",
          desc: "Because the API owns progress and answers, editing a request in the browser cannot unlock a lesson or change a score.",
          desc_vi:
            "Vì API nắm tiến độ và đáp án nên sửa request ở trình duyệt cũng không mở được bài hay đổi được điểm."
        },
        {
          title: "Contract-checked API",
          title_vi: "API có kiểm tra hợp đồng",
          desc: "An OpenAPI contract is synced and validated against the frontend, and a secrets scan and a fake-outcome scan run before hand-over.",
          desc_vi:
            "Hợp đồng OpenAPI được đồng bộ và đối chiếu với frontend, kèm quét lộ bí mật và quét kết quả giả trước khi bàn giao."
        },
        {
          title: "Tables become cards on phones",
          title_vi: "Bảng thành thẻ trên điện thoại",
          desc: "Mobile-first layout where desktop data tables collapse into cards, and all colours come from one token file shared by Tailwind and Material UI.",
          desc_vi:
            "Bố cục mobile-first, bảng dữ liệu desktop gập thành thẻ, mọi màu đến từ một file token dùng chung cho Tailwind và Material UI."
        }
      ]
    }
  ],
  scope: [
    {
      group: "Student",
      group_vi: "Học viên",
      items: [
        "Dashboard and course catalogue",
        "Lesson player with locked progression",
        "End-of-lesson quiz and module test",
        "Exam schedule and timed exam room",
        "Practice sets",
        "Online class timetable",
        "Results, notifications, account"
      ],
      items_vi: [
        "Tổng quan và danh mục khóa học",
        "Player bài học khóa tuần tự",
        "Quiz cuối bài và kiểm tra học phần",
        "Lịch thi và phòng thi có đếm giờ",
        "Bộ đề luyện tập",
        "Lịch học trực tuyến",
        "Kết quả, thông báo, tài khoản"
      ]
    },
    {
      group: "Admin",
      group_vi: "Quản trị",
      items: [
        "Courses, chapters and lessons",
        "Users, students, teachers and classes",
        "Question bank, exams and grading",
        "Timetable and notifications",
        "Registration requests",
        "Landing page CMS with revision history",
        "Roles and permissions, audit log, settings"
      ],
      items_vi: [
        "Khóa học, chương và bài học",
        "Người dùng, học viên, giáo viên và lớp",
        "Ngân hàng câu hỏi, đề thi và chấm bài",
        "Thời khóa biểu và thông báo",
        "Yêu cầu đăng ký",
        "CMS trang chủ có lịch sử revision",
        "Phân quyền, audit log, cài đặt"
      ]
    }
  ],
  highlights: [
    {
      title: "Anti-leak by design",
      title_vi: "Chống lộ nội dung ngay từ thiết kế",
      desc: "No video download, view-only documents, signed short-lived media URLs and a per-viewer watermark.",
      desc_vi:
        "Không tải video, tài liệu chỉ xem, URL media có ký và hết hạn nhanh, watermark theo từng người xem."
    },
    {
      title: "Tested end to end",
      title_vi: "Kiểm thử trọn vòng",
      desc: "81 backend tests, 156 frontend tests and a 310-case UAT plan automated with Playwright.",
      desc_vi:
        "81 test backend, 156 test frontend và bộ UAT 310 test case tự động hóa bằng Playwright."
    },
    {
      title: "Operable by staff",
      title_vi: "Nhân sự tự vận hành được",
      desc: "Admins manage courses, classes, exams, grading and the public landing page without a developer.",
      desc_vi:
        "Admin tự quản lý khóa học, lớp, kỳ thi, chấm bài và trang chủ công khai mà không cần dev."
    },
    {
      title: "Audit trail",
      title_vi: "Nhật ký kiểm toán",
      desc: "Sensitive actions are written to an audit log that admins can review.",
      desc_vi: "Các thao tác nhạy cảm được ghi vào audit log để admin xem lại."
    }
  ]
};

const companyProjects = {
  title: "Company Projects",
  title_vi: "Dự án tại công ty",
  subtitle: "REAL SYSTEMS I BUILT AND SHIPPED AT WORK",
  subtitle_vi: "NHỮNG HỆ THỐNG THỰC TẾ MÌNH ĐÃ XÂY DỰNG TẠI CÔNG TY",
  display: true,
  projects: [gemsProject, nineteenSiteProject, luciaProject]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  title_vi: emoji("Thành tựu & Chứng chỉ 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  subtitle_vi:
    "Những cột mốc, chứng chỉ chuyên môn và giải thưởng nổi bật mà mình đã đạt được!",

  achievementsCards: [
    {
      title: "Promising Award in Faculty Scientific Research",
      title_vi: "Giải Triển Vọng Nghiên Cứu Khoa Học (Nhất phòng báo cáo)",
      subtitle:
        "Received the Promising Award (Best Presentation in Room) in the Student Scientific Research Conference and published a faculty-level research paper.",
      subtitle_vi:
        "Đạt giải Triển vọng (Nhất phòng báo cáo) trong Hội nghị Nghiên cứu Khoa học Sinh viên cấp Khoa và công bố bài báo khoa học cấp Khoa.",
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
  subtitle_vi:
    "Với đam mê lập trình và công nghệ, mình rất thích viết lách và chia sẻ kiến thức hữu ích đến mọi người.",
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
  companyProjects,
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
