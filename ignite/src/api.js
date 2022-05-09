const base_url = `${process.env.REACT_APP_API_BASE_URL}`;

// Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    }

    return month;
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    }

    return day;
}

const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;

//Populr games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=20&key=${process.env.REACT_APP_API_KEY}`;

export const popularGamesUrl = () => `${base_url}${popular_games}`