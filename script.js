// elements for side nav bar / home
const landingPage = document.querySelector(".landing-page");
const aboutMePage = document.querySelector(".about-me-container");
const projectPage = document.querySelector(".projects-container");
const contactMePage = document.querySelector(".contact-me-container")
const sidenav = document.querySelector(".sidenav");
const hamburger = document.querySelector(".hamburger")

// modals within projects
const projectOneModal = document.querySelector('#modalOne')
const openProjectOneModal = document.querySelector('#openModalOne');
const closeProjectOneModal = document.querySelector('#close')

const projectTwoModal = document.querySelector('#modalTwo')
const openProjectTwoModal = document.querySelector('#openModalTwo');
const closeProjectTwoModal = document.querySelector('#close')

const projectThreeModal = document.querySelector('#modalThree')
const openProjectThreeModal = document.querySelector('#openModalThree');
const closeProjectThreeModal = document.querySelector('#close')

// projects carousel one buttons & global variable for keeping track of index
const carouselOneNext = document.querySelector('.carousel-one-next')
const carouselOnePrev = document.querySelector('.carousel-one-prev')
let carouselOneCurrentImgIndex = 0;
let carouselOnePreviousImgIndex = 0;
const carouselOneImages = document.getElementsByClassName('carousel-one-images')

// projects carousel two buttons & global variable for keeping track of index
const carouselTwoNext = document.querySelector('.carousel-two-next')
const carouselTwoPrev = document.querySelector('.carousel-two-prev')
let carouselTwoCurrentImgIndex = 0;
let carouselTwoPreviousImgIndex = 0;
const carouselTwoImages = document.getElementsByClassName('carousel-two-images')

// projects carousel three buttons & global variable for keeping track of index
const carouselThreeNext = document.querySelector('.carousel-three-next')
const carouselThreePrev = document.querySelector('.carousel-three-prev')
let carouselThreeCurrentImgIndex = 0;
let carouselThreePreviousImgIndex = 0;
const carouselThreeImages = document.getElementsByClassName('carousel-three-images')

// contact me page
const contactMeSubmit = document.querySelector(".contact-me-submit")
const allPage = [landingPage,aboutMePage,projectPage,contactMePage]

// const resumeNav = document.querySelector("#landing-name")

// resumeNav.addEventListener('click', ()=> resumeNav.classList.toggle('hidden'))


// functions for event handlers
const openNav = function() {
    sidenav.style.width = "250px";
    hamburger.style.display = "none";
}
  
const closeNav = function() {
    sidenav.style.width = "0";
    hamburger.style.display = "inline";
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

const openModalOne = () => {
    modalOne.style.display = 'block';
  }

const closeModalOne = () => {
    modalOne.style.display = 'none'
    carouselOneCurrentImgIndex = 0;
    carouselOnePreviousImgIndex = 0;
}

const openModalTwo = () => {
    modalTwo.style.display = 'block';
  }

const closeModalTwo = () => {
    modalTwo.style.display = 'none'
    carouselTwoCurrentImgIndex = 0;
    carouselTwoPreviousImgIndex = 0;
}
const openModalThree = () => {
    modalThree.style.display = 'block';
  }

const closeModalThree = () => {
    modalThree.style.display = 'none'
    carouselThreeCurrentImgIndex = 0;
    carouselThreePreviousImgIndex = 0;
}



const handleSubmit = (event) => {
    event.preventDefault()
}

// event listeners for carousels
carouselOneNext.addEventListener('click', () => {
    carouselOnePreviousImgIndex = carouselOneCurrentImgIndex
    carouselOneCurrentImgIndex ++
    carouselOneImages[carouselOnePreviousImgIndex].style.display = "none";
    if(carouselOneCurrentImgIndex >= carouselOneImages.length) {
        carouselOneCurrentImgIndex = 0;
    }
    carouselOneImages[carouselOneCurrentImgIndex].style.display = "block";
})

carouselOnePrev.addEventListener('click', () => {
    carouselOnePreviousImgIndex = carouselOneCurrentImgIndex
    carouselOneCurrentImgIndex --
    carouselOneImages[carouselOnePreviousImgIndex].style.display = "none";
    if(carouselOneCurrentImgIndex < 0) {
        carouselOneCurrentImgIndex = carouselOneImages.length -1;
    }
    carouselOneImages[carouselOneCurrentImgIndex].style.display = "block";
})

carouselTwoNext.addEventListener('click', () => {
    carouselTwoPreviousImgIndex = carouselTwoCurrentImgIndex
    carouselTwoCurrentImgIndex ++
    carouselTwoImages[carouselTwoPreviousImgIndex].style.display = "none";
    if(carouselTwoCurrentImgIndex >= carouselTwoImages.length) {
        carouselTwoCurrentImgIndex = 0;
    }
    carouselTwoImages[carouselTwoCurrentImgIndex].style.display = "block";
})

carouselTwoPrev.addEventListener('click', () => {
    carouselTwoPreviousImgIndex = carouselTwoCurrentImgIndex
    carouselTwoCurrentImgIndex --
    carouselTwoImages[carouselTwoPreviousImgIndex].style.display = "none";
    if(carouselTwoCurrentImgIndex < 0) {
        carouselTwoCurrentImgIndex = carouselTwoImages.length -1;
    }
    carouselTwoImages[carouselTwoCurrentImgIndex].style.display = "block";
})

carouselThreeNext.addEventListener('click', () => {
    carouselThreePreviousImgIndex = carouselThreeCurrentImgIndex
    carouselThreeCurrentImgIndex ++
    carouselThreeImages[carouselThreePreviousImgIndex].style.display = "none";
    if(carouselThreeCurrentImgIndex >= carouselThreeImages.length) {
        carouselThreeCurrentImgIndex = 0;
    }
    carouselThreeImages[carouselThreeCurrentImgIndex].style.display = "block";
})

carouselThreePrev.addEventListener('click', () => {
    carouselThreePreviousImgIndex = carouselThreeCurrentImgIndex
    carouselThreeCurrentImgIndex --
    carouselThreeImages[carouselThreePreviousImgIndex].style.display = "none";
    if(carouselThreeCurrentImgIndex < 0) {
        carouselThreeCurrentImgIndex = carouselThreeImages.length -1;
    }
    carouselThreeImages[carouselThreeCurrentImgIndex].style.display = "block";
})

// event handler for contact me page submission
contactMeSubmit.addEventListener('click', handleSubmit)