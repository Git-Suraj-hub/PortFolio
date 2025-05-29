const navlinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo')
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');
    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    },1100);

    navlinks.forEach(link => {
        link.classList.remove('active');
    });
    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    },1100);
    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

}
navlinks.forEach((link, idx) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // prevent default anchor jump since you control display manually

        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');
        }

        setTimeout(() => {
            sections[idx].classList.add('active');
            sections[idx].scrollIntoView({ behavior: 'smooth' }); // scroll after showing section
        }, 1100);
    });
});


logoLink.addEventListener('click',() => {
    if(!navlinks[0].classList.contains('active')){
        activePage();

        navlinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        },1100);
    }
});


const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx) => {
    btn.addEventListener('click',() => {
        const resumeDetail = document.querySelectorAll('.resume-detail')
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        resumeDetail.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetail[idx].classList.add('active')
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
let index = 0;
const maxIndex = 1; // Total slides - 1

const activePortFolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portFolioDetails = document.querySelectorAll('.portfolio-detail')
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portFolioDetails.forEach(detail => {
        detail.classList.remove('active')
    });
    portFolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        arrowLeft.classList.remove  ('disabled')
    } else {
        index = maxIndex+1;
        arrowRight.classList.add('disabled')

    }
    activePortFolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled')
    } else {
        index = 0;
        arrowLeft.classList.add('disabled')
    }
    activePortFolio();
});
