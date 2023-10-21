let area;
function constructSearcBar() {
  let loct = localStorage.getItem("location");
  const loc = document.getElementById("location");
  loc.innerText = loct;
  area = loct;
  const checkDay = document.getElementById("CheckIn");
  let chIn = localStorage.getItem("checkDate");
  let guest = localStorage.getItem("guests");
  checkDay.innerText = chIn;
  const people = document.getElementById("guest");
  people.innerText = guest;
}
constructSearcBar();
const url = "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2024-09-16&checkout=2024-09-16&adults=1&children=0&infants=0&pets=0&page=1&currency:USD";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c73618adf1msh26a72fedf026237p194b98jsnfa8bc80bc110",
    "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
  },
};
async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.results);
    renderDate(result.results);
  } catch (error) {
    console.error(error);
  }
}
getData();
const hotelName = document.getElementById('hotels').innerText;
function renderDate(resultArr){
  for(let i = 0; i < resultArr.length; i++){
    if(resultArr[i].city == hotelName){
        let card = document.createElement("div");
        card.style.width = '40%';
        card.style.display = 'flex';
        let image = document.createElement("img");
        image.src = 'resultArr[i].images[0]';
        image.style.flex = '1';
        card.appendChild(image);
        
    }
  }
}
