import gsap from 'gsap'

// Fade in from top
export const InFromTop = () => {
    gsap.from('.InFromTop', {duration: .5, yPercent: '-50', opacity: '0', stagger: .2})
}

// Fade in from bottom
export const InFromBottom = () => {
    gsap.from('.InFromBottom', {duration: .5, yPercent: '50', opacity: '0', stagger: .2})
}

// Fade in from left
export const InFromLeft = () => {
    gsap.from('.InFromLeft', {duration: .5, xPercent: '-50', opacity: '0', stagger: .2})
}


// Fade in from right
export const InFromRight = () => {
    gsap.from('.InFromRight', {duration: .5, xPercent: '50', opacity: '0', stagger: .2})
}


