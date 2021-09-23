//KEY - 0fea486d237a413eb5d8d7960ac0684b
//https://api.rawg.io/api/games?key=0fea486d237a413eb5d8d7960ac0684b,


//Base URL

const base_url = "https://api.rawg.io/api/";


//Getting the date month, day, year
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    }
    else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    }
    else {
        return day;
    }
}

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


//Selected Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=0fea486d237a413eb5d8d7960ac0684b`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=0fea486d237a413eb5d8d7960ac0684b`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=0fea486d237a413eb5d8d7960ac0684b`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

