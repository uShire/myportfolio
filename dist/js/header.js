const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

// ----------HEADER NAV--------------

const headerNav = document.querySelectorAll(".header__nav ul li");
headerNav.forEach((header) => {
  header.addEventListener("click", () => {
    removeActiveHeader();
    header.classList.add("active");
  });
});

function removeActiveHeader() {
  headerNav.forEach((header) => {
    header.classList.remove("active");
  });
}

// const header = document.querySelector(".header");
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset >= 20) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// });

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav .container ul li");
// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (scrollY >= sectionTop - 60) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };

// ----------SKILLS--------------

// const skillsNav = document.querySelectorAll(".skills__icon__nav");
// const skillsContent = document.querySelectorAll(".language__content__text");
// skillsNav.forEach((skills) => {
//   skills.addEventListener("click", () => {
//     removeActiveSkills();
//     skills.classList.add("active");
//     const activeContent1 = document.querySelector(`#${skills.id}-content`);
//     removeActiveContent1();
//     activeContent1.classList.add("active");
//   });
// });

// function removeActiveSkills() {
//   skillsNav.forEach((skills) => {
//     skills.classList.remove("active");
//   });
// }

// function removeActiveContent1() {
//   skillsContent.forEach((skills) => {
//     skills.classList.remove("active");
//   });
// }

// ----------PROJECTS--------------

// const projectsNav = document.querySelectorAll(".projects__icon__nav");
// const projectsContent = document.querySelectorAll(".projects__item__wrapper");
// projectsNav.forEach((projects) => {
//   projects.addEventListener("click", () => {
//     removeActiveProjects();
//     projects.classList.add("active");
//     const activeContent2 = document.querySelector(`#${projects.id}-content`);
//     removeActiveContent2();
//     activeContent2.classList.add("active");
//   });
// });

// function removeActiveProjects() {
//   projectsNav.forEach((projects) => {
//     projects.classList.remove("active");
//   });
// }

// function removeActiveContent2() {
//   projectsContent.forEach((projects) => {
//     projects.classList.remove("active");
//   });
// }
