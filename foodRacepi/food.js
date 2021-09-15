const searchBtn = document.getElementById("search-btn");
const searchFiled = document.getElementById("search-filed");

searchFiled.addEventListener("keypress", function (event) {
    //event.preventDefault();
    if (event.key === 'Enter') {
        searchBtn.click();
    }

});



const searchFood = () => {
    const searchField = document.getElementById('search-filed');
    const searchText = searchField.value;
    //console.log(searchText);

    // search field clear
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}

const displaySearchResult = (foods) => {
    const searchResult = document.getElementById('search-result');
    //searchResult.
    foods.forEach(food => {
        //console.log(food);
        // if (food === null) {
        //     console.log("search Food note found");
        // }
        //console.log(food);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div onclick="foodDetails(${food.idMeal})">
      <div class="card">
      <img src="${food.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
      <h4 class="card-title">${food.strMeal}</h4>
      <h6>Category : ${food.strCategory}</h6>
      <p class="card-text">${food.strInstructions.slice(0, 150)}</p>
      </div>
    </div>
     
        `

        searchResult.appendChild(div);
    })

}

const foodDetails = (foodId) => {
    //console.log(foodId);

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
        .then(res => res.json())
        //.then(data => console.log(data.meals[0]));
        .then(data => displayFoodDetails(data.meals[0]));
    //must be api data chaking meals api fixt data 

}

const displayFoodDetails = (foodData) => {
    console.log(foodData);
    const foodDetails = document.getElementById('food-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${foodData.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${foodData.strMeal}</h5>
        <p class="card-text">${foodData.strInstructions.slice(0, 100)}</p>
        <a href="${foodData.strYoutube}" class="btn btn-primary">Go somewhere</a>   
    </div>
    `
    foodDetails.appendChild(div);
}