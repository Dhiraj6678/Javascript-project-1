                      // Answer=1


function calculateDiscount(totalCost, discountPercentage) {
  const discountAmount = (totalCost * discountPercentage) / 100;
  const discountedPrice = totalCost - discountAmount;
  return discountedPrice;
}

// Example usage:
const totalCost = 2000;
const discountPercentage = 20;
const discountedPrice = calculateDiscount(totalCost, discountPercentage);
console.log("Discounted Price:", discountedPrice);



                      // Answer=2


function login(username, password) {
  if (username === "admin" && password === "12345") {
    console.log("Login successful");
  } else {
    console.log("Invalid credentials");
  }
}

// Example usage:
const username = "admin";
const password = "12345";
login(username, password);



                      // Answer=3

// Answer=3

const inrAmount = 1000;
const usdAmount = inrAmount / 82;
console.log("Equivalent amount in USD:", usdAmount);


                        // Answer=4

function calculateTicketPrice(viewerType) {
  let price;
  switch (viewerType) {
    case "child":
      price = 100;
      break;
    case "adult":
      price = 150;
      break;
    case "senior":
      price = 120;
      break;
    default:
      price = 0;
      console.log("Invalid viewer type");
  }
  return price;
}

const viewerType = "adult"; // Example: Change this to "child", "adult", or "senior"
const ticketPrice = calculateTicketPrice(viewerType);
console.log("Total price to be paid:", ticketPrice);




                    // Answer=5
function calculateDeliveryTime(packageType) {
  let deliveryTime;
  switch (packageType) {
    case "standard":
      deliveryTime = "3-5 days";
      break;
    case "express":
      deliveryTime = "1-2 days";
      break;
    case "overnight":
      deliveryTime = "next day";
      break;
    default:
      deliveryTime = "Invalid package type";
      console.log("Invalid package type");
  }
  return deliveryTime;
}

const packageType = "express"; // Example: Change this to "standard", "express", or "overnight"
const estimatedDeliveryTime = calculateDeliveryTime(packageType);
console.log("Estimated delivery time:", estimatedDeliveryTime);





                           // Answer=6
function validateForm(name, email, age) {
  if (typeof name !== "string") {
    console.log("Name should be a string.");
  }
  if (typeof email !== "string") {
    console.log("Email should be a string.");
  }
  if (typeof age !== "number") {
    console.log("Age should be a number.");
  }
}

// Example usage:
const name = "John Doe";
const email = "john.doe@example.com";
const age = 30;
validateForm(name, email, age);




                          // Answer=7
const shoppingList = ["Milk", "Eggs", "Bread", "Cheese", "Apples"];

for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}


                          // Answer=8  


let count = 10;
while (count > 0) {
  console.log(count);
  count--;
}



                          //Answer=9



const mixedArray = [1, 2, "Mithun", 4, 5, "Pw"];

for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "string") {
    console.log("Found the First String:", mixedArray[i]);
    break;
  }
}




                          //Answer=10  


                          //Answer=10  

const numbers = [1, -2, 3, -4, 5, -6, 7];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    console.log(numbers[i]);
  }
}
