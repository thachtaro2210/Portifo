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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  subTitle_vi: emoji(
    "Một nhà phát triển phần mềm Full Stack đầy nhiệt huyết 🚀 chuyên phát triển các ứng dụng Web và Mobile với JavaScript / ReactJS / NodeJS / React Native cùng các thư viện và framework hiện đại khác."
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
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],
  skills_vi: [
    emoji(
      "⚡ Phát triển các giao diện người dùng (Front end / UI) trực quan, có tính tương tác cao cho các ứng dụng web và di động"
    ),
    emoji("⚡ Tối ưu hóa ứng dụng web tiến trình (PWA) trên cả cấu trúc ứng dụng Single Page App (SPA) và thông thường"),
    emoji(
      "⚡ Tích hợp mượt mà các dịch vụ bên thứ ba như Firebase, AWS và Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
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
      role: "Software Engineer",
      role_vi: "Kỹ sư Phần mềm",
      company: "Facebook",
      company_vi: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      date_vi: "Tháng 6, 2018 – Hiện tại",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      desc_vi: "Phát triển và tối ưu hóa các tính năng trên trang chủ Facebook, cải thiện hiệu suất tải trang và tương tác người dùng.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ],
      descBullets_vi: [
        "Phát triển các giao diện người dùng bằng ReactJS",
        "Tối ưu hóa API GraphQL tăng tốc độ phản hồi 20%"
      ]
    },
    {
      role: "Front-End Developer",
      role_vi: "Lập trình viên Front-End",
      company: "Quora",
      company_vi: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      date_vi: "Tháng 5, 2017 – Tháng 5, 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      desc_vi: "Xây dựng các thành phần UI tái sử dụng, cải thiện trải nghiệm đọc và tương tác của người dùng trên nền tảng hỏi đáp Quora."
    },
    {
      role: "Software Engineer Intern",
      role_vi: "Thực tập sinh Kỹ sư Phần mềm",
      company: "Airbnb",
      company_vi: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      date_vi: "Tháng 1, 2015 – Tháng 9, 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      desc_vi: "Tham gia nghiên cứu và phát triển hệ thống tìm kiếm phòng nghỉ, tối ưu hóa các bộ lọc và tìm kiếm thông minh."
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
