import defaultImage from '../img/default.jpg';

export const smallImage = (imagePath, size) =>{
    if (!imagePath) {
        return defaultImage;
    }
    const image = imagePath.match(/media\/screenshots/) ?
    imagePath.replace('/media/screenshots', `/media/resize/${size}/-/screenshots`) :
    imagePath.replace('/media/games', `/media/resize/${size}/-/games`)

    return image;
}