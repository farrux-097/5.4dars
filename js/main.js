// Select part
let elSelect = document.querySelector(".capital-choose");

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