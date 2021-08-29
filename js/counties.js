const loadCountey = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCounteys(data));
}
loadCountey();

const displayCounteys = (countre) => {
    const countriesDiv = document.getElementById('countre');

    countre.forEach(cont => {
        //console.log(cont);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="${cont.flag}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h2 class="card-title">${cont.name}</h2>
                    <p class="card-text">Rregion: ${cont.region}</p>
                    <button onclick ="singleCountryLoadByName('${cont.name}')" type="button" class="btn btn-info">Details</button>
                </div>
            </div>
        </div>
        `
        countriesDiv.appendChild(div)
    });
}

const singleCountryLoadByName = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleCountryDetail(data[0]));
}

const displaySingleCountryDetail = (country) => {

    console.log(country);
    const detailsDiv = document.getElementById('single-country');

    detailsDiv.innerHTML = `
    <div class="card mb-3">
    <img src="${country.flag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title">Name : ${country.name}</h3>
      <p class="card-text">Capital : ${country.capital}</p>
      <p class="card-text">Population : ${country.population}</p>
      <p class="card-text">Area: ${country.area}</p>
      <p class="card-text">Region : ${country.region}</p>
    </div>
  </div>
    `

}