const API_URL = "https://majazocom.github.io/Data/games.json";

const fetchGames = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status code: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(`An error occured:`, error)
    }
};


fetchGames();
//++++++++++++++++++++++++++++++++++++++++++
const renderGamesToUI = (games) => {
    console.log(games);

    const gamesContainerEl = document.getElementById(`games-container`);
    games.forEach(game => {
        console.log(game);

        const gameImg = document.createElement(`img`);
        gameImg.src = game.url;
        gameImg.alt = `${game.title} cover`;
        gamesContainerEl.appendChild(gameImg);

        const gameTitleEl = document.createElement("h2");
        gameTitleEl.innerText = game.title;
        gamesContainerEl.appendChild(gameTitleEl);

        gamesContainerEl.appendChild(gamesContainerEl);
    });

};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", " +obj.city;

