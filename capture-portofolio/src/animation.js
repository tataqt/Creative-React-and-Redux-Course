export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.25,
            duration: 0.5,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        y: 300
    }
};

export const titleAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: 'tween', ease: 'easeOut', duration: 0.75 },
    }
}

export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.75
        },
    },
}

export const photoAnim = {
    hidden: { scale: 1.5, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.75
        },
    },
}