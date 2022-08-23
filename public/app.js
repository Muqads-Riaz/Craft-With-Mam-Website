  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  import { getDatabase, ref, set , push , onValue } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyALF4vEsZOUEVRRCi8WhTkTIKE9Rt-PghI",
    authDomain: "craftwithmam-e94cd.firebaseapp.com",
    projectId: "craftwithmam-e94cd",
    storageBucket: "craftwithmam-e94cd.appspot.com",
    messagingSenderId: "73490853123",
    appId: "1:73490853123:web:30385a418f8c13b486cd36",
    measurementId: "G-KR2JNLJ1Q9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();

  window.login =  function(){
    var password = document.getElementById("password");
    var adminName = document.getElementById("Admin Name");
    if(password.value == "123456" && adminName.value == "Admin"){
 window.location.href = "detail.html"
    }else{
        alert("Incorrect Data")
    }
}

window.payment = function(){
  window.location.href = "payment.html"
}
window.detail = function(){
  window.location.href = "detail.html"
}
window.loginCard =  function(){
  var loginForm = document.querySelector('.loginForm');

  loginForm.style.transform = "rotateY(180deg)";
  loginForm.style.boxShadow = "-30px 40px 50px rgba(0,0,0,0.2)";
}

window.cancelCard = function(){
  var loginForm = document.querySelector('.loginForm');

  loginForm.style.transform = "rotateY(0deg)";
  loginForm.style.boxShadow = "30px 40px 50px rgba(0,0,0,0.2)";
}



  window.sendData = function(){
    var name= document.getElementById("name");
    var email= document.getElementById("email");
    var address= document.getElementById("address");
    var phoneNumber= document.getElementById("phone number");
    var noOfItems= document.getElementById("no of items");
    var idOfProduct= document.getElementById("Id of product");
    var message= document.getElementById("message");
    var obj = {
    name :name.value,
    email :email.value,
    address: address.value,
    phoneNumber :phoneNumber.value,
    noOfItems: noOfItems.value,
    idOfProduct: idOfProduct.value,
    message : message.value,
    }
    if(obj.name == "" || obj.email == "" || obj.address == "" ||  obj.phoneNumber == "" ||  obj.noOfItems == "" ||  obj.idOfProduct == "" ||  obj.message == "" ){
      alert("please! fill it completely" )
    }else{
    var reference = ref(db ,"Orders/");
    var newRef = push(reference);
    set(newRef,obj)
    name.value = "";
    email.value = "";
    address.value = "";
    phoneNumber.value = "";
    noOfItems.value = "";
    idOfProduct.value = "";
    message.value = "";
alert("Order placed successfully")
  }
  
}


  var ordersDetail ;
function renderDetail(){
    var parent = document.getElementById("parent");
    parent.innerHTML ="";
    parent.innerHTML = `<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Phone Number</th>
    <th>No of items</th>
    <th>Id of Product</th>
    <th>Message(All Detail Of Product)</th>
    </tr>`
    for(var i = 0; i < ordersDetail.length ; i++){
parent.innerHTML += `  
<tr><td>${ordersDetail[i].name}</td>
<td>${ordersDetail[i].email}</td>
<td>${ordersDetail[i].address}</td>
<td>${ordersDetail[i].phoneNumber}</td>
<td>${ordersDetail[i].noOfItems}</td>
<td>${ordersDetail[i].idOfProduct}</td>
<td>${ordersDetail[i].message}</td>

</tr>`
    }
}

function getDetail(){
    var reference = ref(db,"Orders/");
    onValue(reference, function (data) {
      ordersDetail = Object.values(data.val());
        console.log(ordersDetail);
        renderDetail();
    }) 
}
getDetail();
renderDetail();


