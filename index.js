let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

// Increment and Display count
function increment() {
    console.log("Clicked");
    count += 1;
    countEl.textContent = count;
}

// Save and Display count
function save() {
    let entry = count + " - ";
    saveEl.textContent += entry;

    count = 0;
    countEl.textContent = count;
}
