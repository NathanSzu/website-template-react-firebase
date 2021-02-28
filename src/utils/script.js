import gsap from 'gsap'

// Fade in from top
export const InFromTop = () => {
    gsap.from('.InFromTop', {duration: .5, yPercent: '-100', opacity: '0', stagger: .2})
}

export const InFromBottom = () => {
    gsap.from('.InFromBottom', {duration: .5, y: '100', opacity: '0', stagger: .2})
}

