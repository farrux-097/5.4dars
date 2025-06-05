// Select part
let elSelect = document.querySelector(".capital-choose");
let elCountrylist = document.querySelector(".country-list")

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
    <li class "w = [260px] shadow-md rounded-md">
    <img class = "h-[160px] w-[264px] object-cover" src = "${item.flag}" alt = "countery flag">
      <div class = "p - [24px]"> 
    <strong class = "text[#111517] text - [18px] font-extrabold">${item.name}</strong>
    <p class = "text[#111517] text - [14px] mt - [16px]">Population : <span>${item.population}</span></p>
    <p class = "text[#111517] text - [14px] mt - [16px]">Region : <span>${item.region}</span></p>
    <p class = "text[#111517] text - [14px] mt - [16px]">Capital : <span>${item.capital}</span></p>
    </div>
    <div class="flex justify-between px-5 pb-5">
<button class="w-[30%] py-[5px] border-[1px] broder-slate-500 rounded-md">Like</button>
<button class="w-[30%] py-[5px] border-[1px] broder-slate-500 rounded-md">Save</button>
<button class="w-[30%] py-[5px] border-[1px] broder-slate-500 rounded-md">More</button>
</div>
    </li>
    `
  })

}
 
renderCountry(countries,elCountrylist)

// main part 
