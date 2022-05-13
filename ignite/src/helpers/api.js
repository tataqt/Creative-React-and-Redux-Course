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

// Query url games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=9&key=${process.env.REACT_APP_API_KEY}`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=9&key=${process.env.REACT_APP_API_KEY}`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=9&key=${process.env.REACT_APP_API_KEY}`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;
export const getDetailsURL = (gameID) => `${base_url}games/${gameID}?key=${process.env.REACT_APP_API_KEY}`;
export const getGameScreenshotURL = (gameID) => `${base_url}games/${gameID}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&key=${process.env.REACT_APP_API_KEY}&page_size=9`;