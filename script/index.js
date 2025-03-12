console.log("index is connected");

function loadCategories(){

    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>console.log(data.categories));
    // console.log("category is loading");
}

function displayCategories(categories){

    console.log(categories);
}

loadCategories();