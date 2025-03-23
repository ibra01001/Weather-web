const apikey = "56b131f7ed2085596fe9f0099662c590";


const wilayas = {
    Select:'',
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
    wilaya_select.innerHTML += '<option class="option" value="' + key + '">' + key + '</option>';
});

const backgrounds = {
    'Algeria' : './images/Algeria.jpg',
    'Alger': "./images/La_Grande_Poste.jpg",
    'Tipaza' : 'https://images.unsplash.com/photo-1673738535933-1fb52ab408e9?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&h=1000',
    'Biskra' : 'https://images.unsplash.com/photo-1705680713868-fcd836752c6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&h=1000',
    'Oran':'https://images.unsplash.com/photo-1651894299519-f9604fc03cc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&h=1000',
    'Ghardaia' : 'https://images.unsplash.com/photo-1681445714444-123678aa1220?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&h=1000',
    'Bechar' : 'https://images.unsplash.com/photo-1627477574861-1426f26e82dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Jijel' : './images/JIJLE.jpg',
 }
 
 let backgroundImage = document.body.style.backgroundImage;
 const changeBackground = () => {
    const selectedWilaya = document.getElementById("wilaya").value;
 
 if(selectedWilaya === "Alger"){
     backgroundImage = `url(${backgrounds['Alger']})`;
     document.documentElement.style.backgroundImage = backgroundImage;
     
 }else if(selectedWilaya === "Tipaza"){
     backgroundImage = `url(${backgrounds['Tipaza']})`;
     document.documentElement.style.backgroundImage = backgroundImage;
 }else if(selectedWilaya === "Biskra"){
     backgroundImage = `url(${backgrounds['Biskra']})`;
     document.documentElement.style.backgroundImage = backgroundImage;
 }else if(selectedWilaya === "Oran"){
     backgroundImage = `url(${backgrounds['Oran']})`;
     document.documentElement.style.backgroundImage = backgroundImage;
 }else if(selectedWilaya === "Ghardaia"){
     backgroundImage = `url(${backgrounds['Ghardaia']})`;
     document.documentElement.style.backgroundImage = backgroundImage;
 }else if(selectedWilaya === "Bechar"){
     backgroundImage = `url(${backgrounds['Bechar']})`;
     document.documentElement.style.backgroundImage = backgroundImage;
 }else if(selectedWilaya === "Jijel"){
     backgroundImage = `url(${backgrounds['Jijel']})`;
     document.documentElement.style.backgroundImage = backgroundImage;
 }else{
     backgroundImage = `url(${backgrounds['Algeria']})`;
     document.documentElement.style.backgroundImage = backgroundImage;
     
 }
}


document.getElementById("wilaya").addEventListener("change", select);
document.getElementById("wilaya").addEventListener("change", changeBackground);


function select() {
    const selectedWilaya = document.getElementById("wilaya").value; // selectedWilaya = 'Alger'
    let sentURl = wilayas[selectedWilaya];


    fetch(sentURl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const temp = data.main.temp;

            const humidity = data.main.humidity;

            const windSpeed = data.wind.speed;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            const about = {
                'Adrar': "Known for its vast desert landscapes, Adrar is a gateway to the Sahara and home to stunning oasis towns like Timimoun.",
                'AinDefla': "Ain Defla is famous for its agricultural richness, particularly in olive and cereal production.",
                'AinTemouchent': "Located along the Mediterranean, Ain Temouchent boasts beautiful beaches and is known for its winemaking industry.",
                'Alger': "The capital of Algeria, Algiers, is a mix of French colonial architecture and traditional Casbah, a UNESCO World Heritage site.",
                'Annaba': "Home to Algeria’s largest steel complex, Annaba is also known for its scenic beaches and the historic Basilica of St. Augustine.",
                'Batna': "The heart of the Aurès Mountains, Batna is close to the famous Roman ruins of Timgad, often called 'The African Pompeii'.",
                'Bechar': "A desert city with a rich musical heritage, Bechar is famous for its folklore and the mesmerizing Taghit oasis.",
                'Bejaia': "Known for its breathtaking coastal scenery, Bejaia is a major port city and home to the beautiful Cap Carbon lighthouse.",
                'Biskra': "Nicknamed the 'Gateway to the Sahara,' Biskra is famous for its delicious Deglet Nour dates and warm climate.",
                'Blida': "Surrounded by orange and olive groves, Blida is often called the 'City of Roses' and is known for its proximity to Chréa National Park.",
                'BordjBouArreridj': "A major hub for electronics and technology in Algeria, Bordj Bou Arréridj is often referred to as 'Algeria’s Silicon Valley'.",
                'Bouira': "Home to the majestic Djurdjura Mountains, Bouira is known for its hiking trails and the beautiful Lake Agoulmime.",
                'Boumerdes': "A coastal province near Algiers, Boumerdes is famous for its pristine beaches and vibrant fishing industry.",
                'Chlef': "Known for its agricultural production, Chlef is a major producer of citrus fruits and olives in Algeria.",
                'Constantine': "The 'City of Bridges,' Constantine is built on dramatic cliffs and has stunning bridges, including the iconic Sidi M'Cid bridge.",
                'Djelfa': "Located in the Hauts Plateaux region, Djelfa is famous for its rock carvings dating back thousands of years.",
                'ElBayadh': "A vast province with beautiful steppe landscapes, El Bayadh is home to the mysterious Taghit cave paintings.",
                'ElMeghaier': "A desert oasis rich in palm groves, El Meghaier is known for its natural hot springs and traditional handicrafts.",
                'ElMenia': "A small but beautiful desert town, El Menia is famous for its sand dunes and lush oases.",
                'ElOued': "Nicknamed the 'City of a Thousand Domes,' El Oued is known for its unique architecture and high-quality date production.",
                'ElTarf': "Rich in biodiversity, El Tarf is home to El Kala National Park, which hosts rare species like the Barbary red deer.",
                'Ghardaia': "A UNESCO-listed city, Ghardaia is known for its stunning M'zab Valley and unique Saharan architecture.",
                'Guelma': "Home to hot springs and Roman ruins, Guelma is famous for the Hammam Debagh waterfalls, a natural thermal wonder.",
                'Illizi': "A remote desert province, Illizi is the gateway to the stunning Tassili n'Ajjer National Park, famous for its prehistoric rock art.",
                'Jijel': "Jijel boasts some of Algeria’s most stunning beaches, along with the unique limestone caves of Aouana.",
                'Khenchela': "Surrounded by mountains, Khenchela is famous for its historical Berber heritage and hot springs.",
                'Laghouat': "An oasis city blending desert and greenery, Laghouat is a cultural mix of Arab and Amazigh traditions.",
                'Mascara': "The birthplace of Emir Abdelkader, Mascara is famous for its vineyards and olive oil production.",
                'Medea': "Nestled in the Tell Atlas mountains, Medea is known for its cool climate and rich agricultural lands.",
                'Mila': "Home to the ancient Roman city of Milev, Mila is rich in history and natural beauty.",
                'Mostaganem': "A coastal gem, Mostaganem is known for its lively cultural scene and stunning Mediterranean beaches.",
                'Msila': "Famous for the ruins of Beni Hammad, a UNESCO World Heritage Site, Msila is a historical treasure.",
                'Naama': "A land of vast steppe landscapes, Naama is home to nomadic traditions and Saharan wildlife.",
                'Oran': "Nicknamed 'The Radiant,' Oran is Algeria’s second-largest city, famous for its music, culture, and the Santa Cruz fortress.",
                'Ouargla': "A desert city with a rich trading history, Ouargla is known for its palm groves and traditional markets.",
                'OuedSouf': "An oasis town famous for its underground houses and date palm plantations.",
                'Relizane': "Known for its fertile lands, Relizane is a major center for agriculture and textile production.",
                'Saida': "A charming town with a mix of Ottoman and French colonial history, Saïda is also known for its mineral water sources.",
                'Setif': "A major commercial hub, Setif is home to the impressive Roman ruins of Djemila, a UNESCO World Heritage site.",
                'SidiBelAbbes': "Often called 'The French Oxford,' Sidi Bel Abbes is known for its university and military history.",
                'Skikda': "A coastal city with beautiful beaches, Skikda is also an important oil and gas hub.",
                'SoukAhras': "The birthplace of Saint Augustine, Souk Ahras is rich in Roman history and archaeological sites.",
                'Tamanrasset': "The heart of the Sahara, Tamanrasset is home to the Tuareg people and the stunning Hoggar Mountains.",
                'Tebessa': "A city with a rich Roman heritage, Tebessa is famous for its ancient basilicas and historical ruins.",
                'Timimoun': "A breathtaking oasis town, Timimoun is known for its red mudbrick architecture and stunning desert scenery.",
                'Tindouf': "A remote desert town, Tindouf is an important center for Sahrawi refugee camps and trade routes.",
                'Tipaza': "Famous for its ancient Phoenician and Roman ruins, Tipaza is a UNESCO World Heritage site by the sea.",
                'Tissemsilt': "Home to the stunning Theniet El Had National Park, Tissemsilt is a hidden paradise for nature lovers.",
                'TiziOuzou': "The heart of Kabylie, Tizi Ouzou is known for its Amazigh culture, mountainous landscapes, and delicious olive oil.",
                'Tlemcen': "A historic city with Andalusian influences, Tlemcen is famous for its mosques, palaces, and waterfalls.",
                'Touggourt': "A desert city with a strong Saharan identity, Touggourt is an important date-producing region in Algeria."
            }
            const wilayaname = document.querySelector('.wilayaname');
            wilayaname.innerHTML = `<h2>Weather in ${selectedWilaya}</h2>`;

            const weatherData = document.querySelector('#weather-data');
            weatherData.innerHTML = `
                    <li class="temp">Temperature: ${Math.round(temp - 273.15)}°C</li>
                    <li>Humidity: ${humidity} %</li>
                    
                    
                    <li>Wind Speed: ${windSpeed} m/s</li>
                    <li>Description: ${description}</li>
                    <li><img src="${iconUrl}" alt="${description}"></li>
                    <p class="about">${about[selectedWilaya]}</p>   
                `;
        })
}


