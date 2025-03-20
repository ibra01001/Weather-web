const apikey = "56b131f7ed2085596fe9f0099662c590";
const latAlger = '36.7131';
const lonAlger = '3.1723';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latAlger}&lon=${lonAlger}&appid=${apikey}`;

const latBechar = '31.6094';
const lonBechar = '-2.1819';
const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latBechar}&lon=${lonBechar}&appid=${apikey}`;

const latDjelfa = '34.6567';
const lonDjelfa = '3.2503';
const url3 = `https://api.openweathermap.org/data/2.5/weather?lat=${latDjelfa}&lon=${lonDjelfa}&appid=${apikey}`;

const wilayas = {
    Adrar: `https://api.openweathermap.org/data/2.5/weather?lat=27.8744&lon=-0.2939&appid=${apikey}`,
    AinDefla: `https://api.openweathermap.org/data/2.5/weather?lat=36.25&lon=1.9667&appid=${apikey}`,
    AinTemouchent: `https://api.openweathermap.org/data/2.5/weather?lat=35.3&lon=-1.1333&appid=${apikey}`,
    Alger: `https://api.openweathermap.org/data/2.5/weather?lat=36.75&lon=3.0589&appid=${apikey}`,
    Annaba: `https://api.openweathermap.org/data/2.5/weather?lat=36.9&lon=7.7667&appid=${apikey}`,
    Batna: `https://api.openweathermap.org/data/2.5/weather?lat=35.55&lon=6.1667&appid=${apikey}`,
    Bechar: `https://api.openweathermap.org/data/2.5/weather?lat=31.6167&lon=-2.2167&appid=${apikey}`,
    Bejaia: `https://api.openweathermap.org/data/2.5/weather?lat=36.75&lon=5.0833&appid=${apikey}`,
    Biskra: `https://api.openweathermap.org/data/2.5/weather?lat=34.85&lon=5.7333&appid=${apikey}`,
    Blida: `https://api.openweathermap.org/data/2.5/weather?lat=36.4833&lon=2.85&appid=${apikey}`,
    BordjBouArreridj: `https://api.openweathermap.org/data/2.5/weather?lat=36.0667&lon=4.7667&appid=${apikey}`,
    Bouira: `https://api.openweathermap.org/data/2.5/weather?lat=36.3833&lon=3.9&appid=${apikey}`,
    Boumerdes: `https://api.openweathermap.org/data/2.5/weather?lat=36.7667&lon=3.4833&appid=${apikey}`,
    Chlef: `https://api.openweathermap.org/data/2.5/weather?lat=36.1667&lon=1.3333&appid=${apikey}`,
    Constantine: `https://api.openweathermap.org/data/2.5/weather?lat=36.3667&lon=6.6&appid=${apikey}`,
    Djelfa: `https://api.openweathermap.org/data/2.5/weather?lat=34.6667&lon=3.25&appid=${apikey}`,
    ElBayadh: `https://api.openweathermap.org/data/2.5/weather?lat=33.6833&lon=1.0167&appid=${apikey}`,
    ElMeghaier: `https://api.openweathermap.org/data/2.5/weather?lat=33.9500&lon=6.0833&appid=${apikey}`,
    ElMenia: `https://api.openweathermap.org/data/2.5/weather?lat=31.5167&lon=2.5833&appid=${apikey}`,
    ElOued: `https://api.openweathermap.org/data/2.5/weather?lat=33.3564&lon=6.8633&appid=${apikey}`,
    ElTarf: `https://api.openweathermap.org/data/2.5/weather?lat=36.75&lon=8.3&appid=${apikey}`,
    Ghardaia: `https://api.openweathermap.org/data/2.5/weather?lat=32.4891&lon=3.6739&appid=${apikey}`,
    Guelma: `https://api.openweathermap.org/data/2.5/weather?lat=36.45&lon=7.4333&appid=${apikey}`,
    Illizi: `https://api.openweathermap.org/data/2.5/weather?lat=26.4833&lon=8.4667&appid=${apikey}`,
    Jijel: `https://api.openweathermap.org/data/2.5/weather?lat=36.8&lon=5.7667&appid=${apikey}`,
    Khenchela: `https://api.openweathermap.org/data/2.5/weather?lat=35.4167&lon=7.15&appid=${apikey}`,
    Laghouat: `https://api.openweathermap.org/data/2.5/weather?lat=33.8&lon=2.8833&appid=${apikey}`,
    Mascara: `https://api.openweathermap.org/data/2.5/weather?lat=35.4&lon=0.1333&appid=${apikey}`,
    Medea: `https://api.openweathermap.org/data/2.5/weather?lat=36.2667&lon=2.75&appid=${apikey}`,
    Mila: `https://api.openweathermap.org/data/2.5/weather?lat=36.45&lon=6.2667&appid=${apikey}`,
    Mostaganem: `https://api.openweathermap.org/data/2.5/weather?lat=35.9&lon=0.0833&appid=${apikey}`,
    MSila: `https://api.openweathermap.org/data/2.5/weather?lat=35.7&lon=4.5333&appid=${apikey}`,
    Naama: `https://api.openweathermap.org/data/2.5/weather?lat=33.2667&lon=-0.3167&appid=${apikey}`,
    Oran: `https://api.openweathermap.org/data/2.5/weather?lat=35.7&lon=-0.6333&appid=${apikey}`,
    Ouargla: `https://api.openweathermap.org/data/2.5/weather?lat=31.9504&lon=5.3199&appid=${apikey}`,
    OuledDjellal: `https://api.openweathermap.org/data/2.5/weather?lat=34.4167&lon=5.4000&appid=${apikey}`,
    Relizane: `https://api.openweathermap.org/data/2.5/weather?lat=35.7333&lon=0.55&appid=${apikey}`,
    Saida: `https://api.openweathermap.org/data/2.5/weather?lat=34.8333&lon=0.15&appid=${apikey}`,
    Setif: `https://api.openweathermap.org/data/2.5/weather?lat=36.1833&lon=5.4&appid=${apikey}`,
    SidiBelAbbes: `https://api.openweathermap.org/data/2.5/weather?lat=35.2&lon=-0.65&appid=${apikey}`,
    Skikda: `https://api.openweathermap.org/data/2.5/weather?lat=36.8667&lon=6.9&appid=${apikey}`,
    SoukAhras: `https://api.openweathermap.org/data/2.5/weather?lat=36.2833&lon=7.95&appid=${apikey}`,
    Tamanrasset: `https://api.openweathermap.org/data/2.5/weather?lat=22.785&lon=5.5228&appid=${apikey}`,
    Tebessa: `https://api.openweathermap.org/data/2.5/weather?lat=35.4&lon=8.1167&appid=${apikey}`,
    Timimoun: `https://api.openweathermap.org/data/2.5/weather?lat=29.2639&lon=0.2300&appid=${apikey}`,
    Tindouf: `https://api.openweathermap.org/data/2.5/weather?lat=27.6711&lon=-8.1478&appid=${apikey}`,
    Tipaza: `https://api.openweathermap.org/data/2.5/weather?lat=36.6175&lon=2.3914&appid=${apikey}`,
    Tissemsilt: `https://api.openweathermap.org/data/2.5/weather?lat=35.6072&lon=1.8131&appid=${apikey}`,
    Touggourt: `https://api.openweathermap.org/data/2.5/weather?lat=33.1000&lon=6.0667&appid=${apikey}`,
    Tlemcen: `https://api.openweathermap.org/data/2.5/weather?lat=34.88&lon=-1.3167&appid=${apikey}`
};



// populating the select
const wilaya_select = document.getElementById('wilaya');
Object.keys(wilayas).forEach(key => {
    wilaya_select.innerHTML += '<option value="' + key + '">' + key + '</option>';
});


document.getElementById("wilaya").addEventListener("change", select);


function select() {
    const selectedWilaya = document.getElementById("wilaya").value; // selectedWilaya = 'Alger'
    let sentURl = wilayas[selectedWilaya];


    fetch(sentURl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const temp = data.main.temp;
            const tempMin = data.main.temp_min;
            const tempMax = data.main.temp_max;
            const humidity = data.main.humidity;

            const windSpeed = data.wind.speed;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            const wilayaname = document.querySelector('.wilayaname');
            wilayaname.innerHTML = `<h2>Weather in ${selectedWilaya}</h2>`;

            const weatherData = document.querySelector('#weather-data');
            weatherData.innerHTML = `
                    <li>Temperature: ${Math.round(temp - 273.15)}°C</li>
                    <li>Minimum Temperature: ${Math.round(tempMin - 273.15)}°C</li>
                    <li>Maximum Temperature: ${Math.round(tempMax - 273.15)}°C</li>
                    <li>Humidity: ${humidity} %</li>
                    
                    
                    <li>Wind Speed: ${windSpeed} m/s</li>
                    <li>Description: ${description}</li>
                    <li><img src="${iconUrl}" alt="${description}"></li>
                `;
        })
}

