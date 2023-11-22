 document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded')
      let text = 'Hello';
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        text = data.drinks[0].strDrink;
      
        let imgUrl = data.drinks[0].strDrinkThumb;
document.getElementById("image").src= imgUrl;
        document.getElementById('cocktail-name').innerText = text;
      })
    })