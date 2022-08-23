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

  window.sendPayment = function(){
    var name= document.getElementById("name2");
    var payment= document.getElementById("payment");
    var accountPhone= document.getElementById("Account/Phone");
    var amount= document.getElementById("amount");
    var trxId= document.getElementById("Trx ID");
    var obj2 = {
        name : name.value,
      payment : payment.value,
      accountPhone : accountPhone.value,
      amount : amount.value,
      trxId : trxId.value,
    }
    console.log(obj2)
    if(obj2.name == "" || obj2.payment == "" || obj2.accountPhone == "" ||  obj2.amount == "" ||  obj2.trxId == "" ){
        alert("please! fill it completely" )
      }else{
    var reference = ref(db ,"payment/");
    var newRef = push(reference);
    set(newRef,obj2)
    name.value = "";
    payment.value = "";
    accountPhone.value = "";
    amount.value = "";
    trxId.value = "";
    alert("Payment Detail Saved ")
  }
  
  }
  
  
  var paymentDetail;
  
  
  function renderPaymentDetail(){
      var parent2 = document.getElementById('parent2');
      parent2.innerHTML = "";
      parent2.innerHTML = `<tr>
      <th>Name</th>
      <th>Account/Phone</th>
      <th>Amount</th>
      <th>Payment</th>
      <th>Trx Id</th>
      </tr>`
      for(var i = 0; i < paymentDetail.length ; i++){
  parent2.innerHTML += `  
  <tr><td>${paymentDetail[i].name}</td>
  <td>${paymentDetail[i].accountPhone}</td>
  <td>${paymentDetail[i].amount}</td>
  <td>${paymentDetail[i].payment}</td>
  <td>${paymentDetail[i].trxId}</td>
  </tr>`
      }
  }
  function getPayment(){
      var reference = ref(db,"payment/");
      onValue(reference, function (data) {
        paymentDetail = Object.values(data.val());
          console.log(paymentDetail);
          renderPaymentDetail()
      }) 
  }
  getPayment();
  renderPaymentDetail();
  
   
