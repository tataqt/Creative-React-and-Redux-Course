import { playstation, nintendo, steam, xbox, apple, gamepad, starEmpty, starFull } from '../helpers/allImages'

export const getPlatform = (platform) => {
    switch (platform) {
        case 'Xbox':
            return xbox;
        case 'PlayStation':
            return playstation;
        case 'Nintendo':
            return nintendo;
        case 'iOS':
            return apple;
        case 'PC':
            return steam;

        default:
            return gamepad;
    }
}

export const getStars = (rating) => {
    const stars = [];
    const floorRatimg = Math.floor(rating);
    for (let index = 1; index <= 5; index++) {
        index <= floorRatimg ? stars.push(<img alt='star' key={index} src={starFull} />) : stars.push(<img alt='star' key={index} src={starEmpty} />)
    }
    return stars;
}