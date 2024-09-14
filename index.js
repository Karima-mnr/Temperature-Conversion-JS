const textBox = document.getElementById(`textBox`);
const fah = document.getElementById(`fah`);
const cel = document.getElementById(`cel`);
const result = document.getElementById(`result`);
let temp ;

function convert(){
    if(fah.checked){
        temp = Number(textBox.value);
        temp = (temp * 9/5 ) + (32) ;
        result.textContent =  temp.toFixed(1) + "°F" ;
    }
    else if(cel.checked){
        temp = Number(textBox.value);
        temp = (5/9) * (temp - 32);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = 'Select a unit ';
    }
}