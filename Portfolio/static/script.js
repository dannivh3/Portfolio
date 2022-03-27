// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Detecting Anchor points
const SELECTOR =".watched";
const ANIMATE_CLASS_NAME = 'slide-in'

const animate = element => (
    element.classList.add(ANIMATE_CLASS_NAME)
);

const isAnimated = element => (
    element.classList.contains(ANIMATE_CLASS_NAME)
);

const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            animate(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

const elements = [].filter.call(
    document.querySelectorAll(SELECTOR),
    element => !isAnimated(element, ANIMATE_CLASS_NAME)
);
elements.forEach((element) => intersectionObserver.observe(element));