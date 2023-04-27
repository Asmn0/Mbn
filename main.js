let title = document.getElementById('title');

let price = document.getElementById('price');

let taxes = document.getElementById('taxes');

let ads = document.getElementById('ads');

let discount = document.getElementById('discount');

let total = document.getElementById('total');

let count = document.getElementById('count');

let category = document.getElementById('category');

let submit = document.getElementById('submit');

let mood ='ceart';

let madn;
//tottl

function gettotle()
{
 if(price.value !='')
 {
   let result = (+price.value + +taxes.value + +ads.value ) -+discount.value;
   
   total.innerHTML = result;
   total.style.background ='#06C80C';
   total.style.color = 'black'
 }
 else{
 total.innerHTML = '';
total.style.background ='red';
 }
}

//creat

let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product)
}else{
 dataPro = []; 
}

submit.onclick = function(){

let newPro = {
 title:title.value,
 price:price.value,
 taxes:taxes.value,
 ads:ads.value,
 discount:discount.value,
 total:total.innerHTML,
 count:count.value,
 category:category.value,
 
}  
//لا تنسى هاز👇👇

if (mood ==='ceart') {
  
if (newPro.count > 1) {
  for(let i =0; i <newPro.count;i++){
    dataPro.push(newPro);
  }
}else{
  dataPro.push(newPro);
}

  
  
  
} else {
dataPro[madn] = newPro;
mood = 'ceart';
count.style.display = 'black'
submit.innerHTML='ceart';
}











localStorage.setItem('product', JSON.stringify(dataPro))

ceart()


}


function ceart(){
  title.value = '';
  price.value = '';
  taxes.value = '';
  ads.value = '';
  discount.value = '';
  total.innerHTML = '';
  count.value = '';
  category.value = '';
  
}

function showedata(){
  
  
  
  let table = '';
  for(let i = 0;i < dataPro.length;i++ ){
    
   table +=`<tr>
         <td>${i}</td>
         <td>${dataPro[i].title }</td>
         <td>${dataPro[i].price }</td>
         <td>${dataPro[i].taxes }</td>
         <td>${dataPro[i].ads }</td>
         <td>${dataPro[i].discount }</td>
         <td>${dataPro[i].total }</td>
         <td>${dataPro[i].category }</td>
         <td><button onclick ="updatea(${i})" id="update">update  </button></td>
         
          <td>
          <button onclick = "deletbrn(${i})" id="bortn2">delete</button>
          
          </td>
          </tr>`
   
   
  }
 document.getElementById('tbody').innerHTML = table;
  let btnall = document.getElementById('deletall')
 if (dataPro.length > 0) {
   
   btnall.innerHTML =`
   <button onclick = 'deletall()'>deleteall${dataPro.length}</button>
   `
   
 }else{
   btnall.innerHTML =''
   
 }
 
 gettotle()
 
}





showedata()

//delet
function deletbrn(i){
  dataPro.splice(i,1);
  localStorage.product = JSON.stringify(dataPro);
  
  showedata()
}

//deletkl
function deletall(){
  localStorage.clear()
  dataPro.splice(0)
  showedata()
}


//update

function updatea(i){
  
  title.value = dataPro[i].title;
  price.value =dataPro[i].price;
  taxes.value = dataPro[i].taxes;
  ads.value = dataPro[i].ads;
  discount.value = dataPro[i].discount;
  category.value = dataPro[i].category;
  gettotle()
  count.style.display = 'none'
  submit.innerHTML='update';
  madn = i;
  mood = 'update';
  scroll({
    top:0,
    behavior:'smooth'
    
  })
}

showedata()
