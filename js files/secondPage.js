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
const url =
  "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2024-09-16&checkout=2024-09-16&adults=1&children=0&infants=0&pets=0&page=1&currency:USD";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2137c988e8msh1b8c6adb12c1b38p12139ajsn1ebf3e30136e",
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
function renderDate(resultArr) {
  let storage = document.getElementById("hotel");
  let locteArea = localStorage.getItem("location");
  for (let i = 0; i < 40; i++) {
    let city = resultArr[i].city;
    if (resultArr[i].city == locteArea) {
      let card = document.createElement("div");
      let image = new Image();
      image.src = resultArr[i].images[0];
      image.load = "not able to load the image";
      image.width = 300;
      image.height = 300;
      card.appendChild(image);
      card.style.marginTop = "20px";
      storage.appendChild(card);

      let cardBody = document.createElement("div");
      let h4 = document.createElement("h4");
      h4.innerText = "Entire home in Bordeaux";
      // apply style for h4
      h4.style.fontFamily = "Inter";
      h4.style.fontSize = "14px";
      h4.style.fontWeight = "400";
      h4.style.lineHeight = "20px";
      h4.style.letterSpacing = "0em";
      h4.style.textAlign = "left";
      h4.style.color = "#6B7280";
      cardBody.appendChild(h4);

      let name = document.createElement("h3");
      name.innerText = resultArr[i].name;
      name.style.fontFamily = "Inter";
      name.style.fontSize = "20px";
      name.style.fontWeight = 500;
      name.style.lineHheight = "32px";
      name.style.letterSpacing = "0em";
      name.style.textAlign = "left";
      cardBody.appendChild(name);

      let info = document.createElement("p");
      const guset = resultArr[i].persons + " " + "guests";
      const room = resultArr[i].type;
      const beds = resultArr[i].beds + " " + "bed";
      const bathRoom = resultArr[i].bathrooms + " " + "bath";
      info.style.color = "#6B7280";
      info.innerText =
        guset +
        " " +
        room +
        " " +
        beds +
        " " +
        bathRoom +
        "<br>" +
        "Wifi · Kitchen · Free Parking";
      info.style.fontFamily = "Inter";
      info.style.fontSize = "14px";
      info.style.fontWeight = "400";
      info.style.lineHeight = "20px";
      info.style.letterSpacing = "0em";
      info.style.textAlign = "left";
      info.style.color = "#6B7280";
      info.style.paddingTop = "50px";
      cardBody.appendChild(info);

      cardBody.style.flexDirection = "column";
      cardBody.style.height = "300px";
      cardBody.style.width = "600px";
      cardBody.style.paddingTop = "20px";
      cardBody.style.paddingLeft = "20px";
      cardBody.style.paddingRight = "30px";
      cardBody.style.justifyContent = "space-between";
      card.appendChild(cardBody);
      card.style.display = "flex";

      let footerDiv = document.createElement("div");

      let rattingDiv = document.createElement("div");
      const ratting = document.createElement("h5");
      let rate = document.createElement("h4");
      rate.classList.add("foot-div-property");
      rate.innerText = resultArr[i].rating;
      rattingDiv.appendChild(rate);
      ratting.innerHTML =
        '<i class="fa-solid fa-star" style="color:  #f6a818;"></i>';
      rattingDiv.appendChild(ratting);

      const review = document.createElement("h4");
      review.innerText = "( " + resultArr[i].reviewsCount + " " + "reviews )";
      rattingDiv.appendChild(review);
      review.classList.add("foot-div-property");
      footerDiv.appendChild(rattingDiv);
      rattingDiv.style.display = "flex";
      rattingDiv.style.alignItems = "center";
      rattingDiv.style.width = "50%";
      rattingDiv.style.gap = "15px";

      let price = document.createElement("h5");
      price.innerText = "$" + " " + resultArr[i].price.total + " " + "/night";
      footerDiv.appendChild(price);

      price.style.fontFamily = "Inter";
      price.style.fontSize = "18px";
      price.style.fontWeight = "500";
      price.style.lineHeight = "28px";
      price.style.letterSpacing = "0em";
      price.style.textAlign = "left";

      footerDiv.style.paddingTop = "70px";
      footerDiv.style.display = "flex";
      footerDiv.style.justifyContent = "space-between";
      footerDiv.style.alignItems = "center";

      cardBody.appendChild(footerDiv);
    }
  }
  let latitude = resultArr[0].lat;
  let longitude = resultArr[0].lng;
  console.log(latitude, longitude); 
  var map = L.map("map").setView([latitude, longitude], 13);

  // Add a tile layer using OpenStreetMap data
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  // Add a marker for the given latitude and longitude
  var marker = L.marker([latitude, longitude]).addTo(map);

  // Add a popup to the marker (optional)
  marker.bindPopup("Your Location").openPopup();
}
