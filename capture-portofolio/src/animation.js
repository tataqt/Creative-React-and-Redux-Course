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
        transition: {
            duration: 0.5,
        },
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
        transition: {
            type: 'tween',
            ease: 'easeOut',
            duration: 0.75
        },
    }
}

export const fade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.75
        },
    },
}

export const photoAnim = {
    hidden: {
        scale: 1.5,
        opacity: 0
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.75
        },
    },
}

export const lineAnim = {
    hidden: {
        width: '0%'
    },
    show: {
        width: '100%',
        transition: {
            duration: 0.75
        },
    },
}

export const sliderAnim = {
    hidden: {
        x: '-130%',
        skew: '45deg'
    },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            ease: 'easeOut',
            duration: 1
        },
    },
}


export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.2
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        },
    },
}