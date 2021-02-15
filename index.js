/// var obj = {
//   meals: [{}, {}, {}]
//}


function searchRecipe() {

    var search = document.getElementById('search');
    console.log(search.value)
    var api2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    console.log(api2)
    /// api call
    fetch(api2) // Call the fetch function passing the url of the API as a parameter
        .then(res => res.json())
        .then(function (data) {
            // Your code for handling the data you get from the API
            console.log(data.meals)
            const recipesArr = data.meals;
            var row = document.getElementById('row');
            row.innerHTML = "";
            for (let i = 0; i < recipesArr.length; i++) {
                var div = document.createElement('div')
                div.className = 'box';
                var text = document.createTextNode(recipesArr[i].strMeal)
                div.appendChild(text)
                row.appendChild(div)
                var img = document.createElement('img');
                img.setAttribute("src", recipesArr[i].strMealThumb);
                img.setAttribute("width", "200")
                img.setAttribute("height", "150")
                div.appendChild(img)
                row.appendChild(div)
            }




        })
        .catch(function (error) {
            // This is where you run code if the server returns any errors
            console.log(error)
        });
    search.value = '';
}

function searchRandom() {

    var api = 'https://www.themealdb.com/api/json/v1/1/random.php'
    console.log(api)
    fetch(api)
        .then(res => res.json())
        .then(function (data) {
            var row = document.getElementById('row');
            row.innerHTML = "";
         // Your code for handling the data you get from the API
            console.log(data.meals)
            const singleRecepie = data.meals;
            var row = document.getElementById('row');
            var div = document.createElement('div')
            div.className = 'randomBox';
            var text = document.createTextNode(singleRecepie[0].strMeal)
            div.appendChild(text)
            row.appendChild(div)
            var img = document.createElement('img');
            console.log(img)
            img.setAttribute("src", singleRecepie[0].strMealThumb);
            img.setAttribute("width", "200")
            img.setAttribute("height", "150")
            div.appendChild(img)
            row.appendChild(div)
            var div = document.createElement('div')
            div.classname = 'recepie';
            var text = document.createTextNode(singleRecepie[0].strInstructions)
            div.appendChild(text)
            row.appendChild(div)


        })

}