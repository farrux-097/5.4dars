let elSelect = document.querySelector(".capital-choose");
let elCountrylist = document.querySelector(".country-list")
const elSearchInput = document.querySelector(".search-input")


// Select part
function createOptionToSelect(arr, list) {
  arr.forEach(item => {
    let elOption = document.createElement("option");
    elOption.value = item.capital.toLowerCase();
    elOption.textContent = item.capital;
    list.appendChild(elOption);
  });
}

createOptionToSelect(countries, elSelect);
// Select part


// main part 
function renderCountry(arr , list){
   list.innerHTML = ""
  arr.forEach(item => {
    let elItem = document.createElement("li")
    list.appendChild(elItem)
    elItem.outerHTML = `
    <li class "w = [260px] shadow-md rounded-md ">
    <img class = "h-[160px] w-[264px] object-cover rounded-t-[30px]" src = "${item.flag}" alt = "countery flag">
      <div class = "p - [24px] bg-pink-200 rounded-b-[30px] p-[10px] mb-[15px]"> 
    <strong class = "text[#111517] text - [18px] font-extrabold">${item.name}</strong>
    <p class = "text[#111517] text - [14px] mt - [16px]">Population : <span>${item.population}</span></p>
    <p class = "text[#111517] text - [14px] mt - [16px]">Region : <span>${item.region}</span></p>
    <p class = "text[#111517] text - [14px] mt - [16px]">Capital : <span>${item.capital}</span></p>
     <div class="flex justify-between px-1 pb-1">
<button onclick = "handleLikeBtn(${item.id})" class="${item.isLiked ? "bg-red-500 text-white" : ""} w-[30%] py-[5px] border-[1px] mt-[5px] broder-slate-800 rounded-[20px] bg-pink-100">Like</button>
<button class="w-[30%] py-[5px] border-[1px] mt-[5px] broder-slate-800 rounded-[20px] bg-pink-100">Save</button>
<button class="w-[30%] py-[5px] border-[1px] mt-[5px] broder-slate-800 rounded-[20px] bg-pink-100">More</button>
</div>
    </div>
   
    </li>
    `
  })

}
 
renderCountry(countries,elCountrylist)

// main part 


// select change
elSelect.addEventListener("change", function(evt){
  let changeValue = evt.target.value
  if(changeValue == "all"){
    renderCountry(countries, elCountrylist)
  }else{
    let filterdList = countries.filter(item => item.capital.toLowerCase() == changeValue)
    renderCountry(filterdList, elCountrylist)
  }
})

// select change

//search part
elSearchInput.addEventListener("input" , function(evt){
  let result = countries.filter(item => item.name.toLowerCase().includes(evt.target.value.toLowerCase()) || item.population.toString().includes(evt.target.value))
  renderCountry(result,elCountrylist)
  
})


//search part


// like part 
 function handleLikeBtn(id){
  let findObj = countries.find(item => item.id == id)
  findObj.isLiked = !findObj.isLiked

  renderCountry(countries,elCountrylist)
  
  
 }
// like part 