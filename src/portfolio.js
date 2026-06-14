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
  github: "https://github.com/thachtaro",
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
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  subTitle_vi: "LẬP TRÌNH VIÊN FULL STACK ĐAM MÊ KHÁM PHÁ VÀ CHINH PHỤC MỌI CÔNG NGHỆ",
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
      desc: "Designed and developed high-performance backend APIs and databases.",
      desc_vi: "Thiết kế và phát triển các hệ thống API backend và cơ sở dữ liệu hiệu năng cao.",
      descBullets: [
        "Built RESTful APIs using Java Spring Boot and Node.js",
        "Optimized queries and schemas for PostgreSQL and MongoDB"
      ],
      descBullets_vi: [
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  subtitle_vi: "MỘT SỐ KHỞI NGHIỆP VÀ CÔNG TY MÀ MÌNH ĐÃ THAM GIA XÂY DỰNG CÔNG NGHỆ",
  projects: [
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
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectName_vi: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      projectDesc_vi: "Nền tảng hỗ trợ và chăm sóc sức khỏe tinh thần trực tuyến cho các tổ chức và doanh nghiệp.",
      footerLink: [
        {
          name: "Visit Website",
          name_vi: "Ghé thăm trang web",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectName_vi: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      projectDesc_vi: "Nền tảng công nghệ giúp kết nối và tự động hóa các quy trình tuyển dụng thông minh.",
      footerLink: [
        {
          name: "Visit Website",
          name_vi: "Ghé thăm trang web",
          url: "http://nextu.se/"
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
