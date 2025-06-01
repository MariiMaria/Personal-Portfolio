// ==== SHOW SIDEBAR ==== //

// ==== SIDEBAR SHOW ==== //
/* Validates If Constant Exist */

// ==== SIDEBAR HIDDEN ==== //
/* Validates If Constant Exist */

// ==== TYPEWRITER EFFECT FOR ROLE TEXT ==== //
const wordEl = document.getElementById("typewriter-word");
const words = ["Developer", "Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriterEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
    wordEl.textContent = currentWord.substring(0, charIndex);
  } else {
    charIndex++;
    wordEl.textContent = currentWord.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => isDeleting = true, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const speed = isDeleting ? 50 : 120;
  setTimeout(typeWriterEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeWriterEffect);

// ==== SKILLS TABS ==== //
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click" , () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
        })
    })

// ==== MIXITUP FILTER PORTFOLIO ==== //
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
})

// ==== Link Active Work ==== //
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L=> L.addEventListener("click", activeWork))

// ==== Work Pop Up ==== //
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("portfolio__popup-open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}


// ==== INPUT ANIMATION ==== //
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

// ==== SCROLL SECTIONS ACTIVE LINK ==== //
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

//add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    //get current scroll position
    let scrollY = window.pageYOffset;
    //loop thru sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

// ==== SHOW SCROLL UP ==== //

