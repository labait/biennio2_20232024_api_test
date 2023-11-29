var shakeThreshold = 15; // Adjust this threshold value as needed
var lastAcceleration = { x: null, y: null, z: null };
var shakeCount = 0;

// Function to handle the "devicemotion" event
function handleDeviceMotion(event) {
  var acceleration = event.accelerationIncludingGravity;
  if (!lastAcceleration.x) {
    lastAcceleration = acceleration;
    return;
  }

  var deltaX = Math.abs(acceleration.x - lastAcceleration.x);
  var deltaY = Math.abs(acceleration.y - lastAcceleration.y);
  var deltaZ = Math.abs(acceleration.z - lastAcceleration.z);

  if (deltaX > shakeThreshold || deltaY > shakeThreshold || deltaZ > shakeThreshold) {
    shakeCount++;
    // You can set a minimum shake count to avoid false positives
    if (shakeCount >= 3) {
      // Device has been shaken
      console.log("Shake detected!");
      
      // You can perform any action you want here when a shake is detected

      // Reset the shake count to avoid multiple triggers
      shakeCount = 0;
    }
  }

  lastAcceleration = acceleration;
}





document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  window.addEventListener("devicemotion", handleDeviceMotion);
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

