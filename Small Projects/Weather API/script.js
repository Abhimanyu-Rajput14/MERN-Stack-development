const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=da6231781014488984281538242708&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);
  cityName.innerText = `City: ${result.location.name}, ${result.location.region}, ${result.location.country}`;
  cityTime.innerText = `LocalTime: ${result.location.localtime}`;
  cityTemp.innerText = `Current Temperature: ${result.current.temp_c} °C`;
});
