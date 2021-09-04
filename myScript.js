const wInput = document.querySelector('input[name = "w"]');
const hInput = document.querySelector('input[name = "h"]');
const button = document.querySelector('button');
const resultDiv = document.querySelector('#result');
button.addEventListener('click', function () {
const w = parseFloat(wInput.value);
const h = parseFloat(hInput.value);
const b = (w / (h * h) * 703).toFixed(1); ////Rounding the number to one decimal only.
resultDiv.textContent = b;
    if (b < 18.5) {
        document.querySelector("#status").textContent = "Underweight";
    } else if (b >= 18.5 && b <= 24.9) {
        document.querySelector("#status").textContent = "Normal or Healthy Weight";
    } else if (b > 24.9 && b <=29.9) {
        document.querySelector("#status").textContent = "Overweight";
    } else {
        document.querySelector("#status").textContent = "Obesse";
    }

});
//adding date function to get the year in the footer
const d = new Date().getFullYear();
document.querySelector("#year").textContent = d;