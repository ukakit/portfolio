const landingPage = document.querySelector(".landing-page");
const landingName = document.querySelector("#landing-name");
const aboutMePage = document.querySelector(".about-me-container");
const projectPage = document.querySelector(".projects-container");
const contactMePage = document.querySelector(".contact-me-container")
const sidenav = document.querySelector(".sidenav");
// modals
const projectOneModal = document.querySelector('#modalOne')
const openProjectOneModal = document.querySelector('#openModalOne');
const closeProjectOneModal = document.querySelector('#close')

const projectTwoModal = document.querySelector('#modalTwo')
const openProjectTwoModal = document.querySelector('#openModalTwo');
const closeProjectTwoModal = document.querySelector('#close')

const projectThreeModal = document.querySelector('#modalThree')
const openProjectThreeModal = document.querySelector('#openModalThree');
const closeProjectThreeModal = document.querySelector('#close')

const allPage = [landingPage,aboutMePage,projectPage,contactMePage]
// const contactMeNav = document.querySelector("#landing-name")

// contactMeNav.addEventListener('click', ()=> contactMeNav.classList.toggle('hidden'))

// const resumeNav = document.querySelector("#landing-name")

// resumeNav.addEventListener('click', ()=> resumeNav.classList.toggle('hidden'))



const openNav = function() {
    sidenav.style.width = "250px";
}
  
const closeNav = function() {
    sidenav.style.width = "0";
}

const backToLanding = function() {
    for (page of allPage) {
        if (page != landingPage) {
            page.classList.add('hidden')
        }
    }
    landingPage.classList.remove('hidden')
    closeNav()
}

const openModalOne = () => {
    modalOne.style.display = 'block';
  }

const closeModalOne = () => {
    modalOne.style.display = 'none'
}

const openModalTwo = () => {
    modalTwo.style.display = 'block';
  }

const closeModalTwo = () => {
    modalTwo.style.display = 'none'
}
const openModalThree = () => {
    modalThree.style.display = 'block';
  }

const closeModalThree = () => {
    modalThree.style.display = 'none'
}
const openAboutMe = function() {
    for (page of allPage) {
        if (page != aboutMePage) {
            page.classList.add('hidden')
        }
    }
    aboutMePage.classList.remove('hidden')
    closeNav()
}

const openProject = function() {
    for (page of allPage) {
        if (page != projectPage) {
            page.classList.add('hidden')
        }
    }
    projectPage.classList.remove('hidden')
    closeNav()
}

const openContactMe = function() {
    for (page of allPage) {
        if (page != contactMePage) {
            page.classList.add('hidden')
        }
    }
    contactMePage.classList.remove('hidden')
    closeNav()
}

// const openContactMe = function() {
//     for (page of allPage) {
//         if (page != aboutMePage) {
//             page.classList.add('hidden')
//         }
//     }
//     aboutMePage.classList.remove('hidden')
// }

landingName.addEventListener('click', ()=> landingName.classList.toggle('hidden'))