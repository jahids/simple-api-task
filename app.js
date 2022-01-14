
// global scope hoisting
let apistore;


let url = `https://run.mocky.io/v3/4a8b3706-4c59-494a-a457-c91ec6914b93?fbclid=IwAR1mOVHF-Zu2jzqxOrkJitBZ8-Zz6aQuK7wYMoYGTe907ND2lrSe7qn2gOg`;
fetch(url)
.then(response => response.json())
.then(data => {api(data)});

//   This is a Api data
function api(data){
let information = data;
apistore = information;
let allobj = Object.keys(information);
for(let i = 0 ; i< allobj.length; i++){
    let value = allobj[i];
console.log(button(value));
}
}

// This a button function
function button(x){
let button = document.createElement('button');
button.type = 'button';
button.innerHTML = x;
button.className = 'btn btn-dark me-2 mb-2 mt-2 ';

// button hendaler
button.onclick = function() {
    console.log(this.onclick);
   
    // button.location.reload();
   
//    console.log('btn click',apistore[x]);
  
let trnsobj = apistore[x];
for(let i = 0 ; i< trnsobj.length; i++){
    console.log(trnsobj[i]);
    let datasName = trnsobj[i];
    console.log(this.onclick);
    console.log(datasName.id);
     let datasvalue =  datasName.id;

    //  if(datasvalue > 5){
    //     window.location.reload()
    // }

    
 let Cardparent = document.createElement('div');
 Cardparent.className = "p-4 col-4"
Cardparent.innerHTML = `


<div class="card">
  <img src=${datasName.thumbnail} class="card-img-top" alt="...">
  <div class="card-body col h-100">
    <h5 class="card-title"> Name :${datasName.title}</h5>
    <p class="card-text">price : ${datasName.price}</p>
    <p class="card-text">DiscountPercentage : ${datasName.discountPercentage}</p>
    <p class="card-text">Brand : ${datasName.brand}</p>
    <p class="card-text">Category : ${datasName.category}</p>
    <p class="card-text">Description : ${datasName.description}</p>
  </div>
</div>
</div>
`


let mainparent = document.getElementById('secound');

mainparent.append(Cardparent);




}

};

var container = document.getElementById('container');
container.appendChild(button);
}

