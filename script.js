var heading = document.querySelector(".text")
var updateBtn = document.querySelector(".change")

const imgUrls = [
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-20-1.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-16.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-23.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-08.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-36-1.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-38.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-37.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-24.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-32.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-31.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-30.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-12-1.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-06.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-14.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-39.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-29.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-15.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-13.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-35.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-10.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-11.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-09.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-38-1.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-01.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-04.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-28.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-26.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-05.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-19.jpg"
];

const fetchName = function () {

    document.body.setAttribute("background", "src/default-bg.jpg")

    heading.textContent = "Loading adventure...";

    let urlList = [];
    let apiNumChar = Math.ceil(Math.random() * 80);
    urlList.push(`https://swapi.dev/api/people/${apiNumChar}/`)

    apiNumChar = Math.ceil(Math.random() * 80);
    urlList.push(`https://swapi.dev/api/people/${apiNumChar}/`)

    let apiNumPlanet = Math.ceil(Math.random() * 60);
    urlList.push(`https://swapi.dev/api/planets/${apiNumPlanet}/`)

    let apiNumShip = Math.ceil(Math.random() * 36);
    urlList.push(`https://swapi.dev/api/starships/${apiNumShip}/`)

    let apiNumSpecies = Math.ceil(Math.random() * 37);
    urlList.push(`https://swapi.dev/api/species/${apiNumSpecies}/`)

    let apiNumVehicle = Math.ceil(Math.random() * 39);
    urlList.push(`https://swapi.dev/api/vehicles/${apiNumVehicle}/`)

    const imgUrl = imgUrls[Math.ceil(Math.random() * imgUrls.length)];

    const setThat = async function () {
        try {
            let [character, character2, planet, starship, species, vehicle] =
            await Promise.all(urlList.map(url => fetch(url).then(resp => resp.json().then(val => val.name))))

            character = (typeof character === 'undefined') ? "Yoda" : character;
            character2 = (typeof character2 === 'undefined') ? "Yoda" : character2;
            planet = (typeof planet === 'undefined') ? "Tatooine" : planet;
            starship = (typeof starship === 'undefined') ? "X-Wing" : starship;
            species = (typeof species === 'undefined') ? "Gungan" : species;
            vehicle = (typeof vehicle === 'undefined') ? "Speeder" : vehicle;

            let text = `
            <p>You are with <span class="variable">${character}</span>, 
            going to <span class="variable">${planet}</span> in a 
            <span class="variable">${starship}</span> to rescue your pet 
            <span class="variable">${species}</span> which was kidnapped 
            by <span class="variable">${character2}</span> while it was out, 
            riding its <span class="variable">${vehicle}</span>
            </p>`

            heading.textContent = "";
            heading.insertAdjacentHTML("afterbegin", text);

        } catch (e) {
            heading.textContent = "";
            heading.insertAdjacentHTML("afterbegin", "Couldn't fetch data");
            console.log("oops", e)
        }
    }

    // objImg = new Image();
    // objImg.url = `${imgUrl}`;
    // objImg.onload = function () {
    // }
    
    setThat();
    // document.body.setAttribute("background", `${imgUrl}`)
}

updateBtn.addEventListener("click", fetchName);