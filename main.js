let height = document.querySelector('#height');
let weight = document.querySelector('#weight')
let btn = document.querySelector('#submit')
let result = document.querySelector('.result')
let clearBtn = document.querySelector('#clear')

let weightInput = null;
let heightInput = null; 
let bmi = null;
let show = null;

height.addEventListener('input', (e) => heightInput = e.target.value)
weight.addEventListener('input', (e) => weightInput = e.target.value)
btn.addEventListener('click', (e) => {
    e.preventDefault()
    bmi = (weightInput / ((heightInput * heightInput)/ 10000)).toFixed(2);
    check();
    result.innerHTML = show;
})
clearBtn.addEventListener('click', () => {
    document.getElementById('form').reset()
})

function check(){
    if(weightInput && heightInput){
    if(bmi< 16.6){
        show = "Severe malnutrition";
        result.style.color = "red"
    }
    else if(bmi > 16 && bmi < 16.9){
        show = "Moderate malnutrition";
        result.style.color = "indianred";        
    }
    else if(bmi > 17 && bmi < 18.4){
        show = "Mild malnutrition";
            result.style.color = "yellow";
    }
    else if(bmi > 18.5 && bmi < 24.9){
        show = "Correct body weight";
            result.style.color = "green";
    }
    else if(bmi > 25 && bmi < 29.9){
        show = "Overveight";
            result.style.color = "yellow";
    }
    else if(bmi > 30 && bmi < 34.9){
        show = "1st degree obesity";
            result.style.color = "indianred";
    }
    else if(bmi > 35 && bmi < 39.9){
        show = "2ns degree obesity";
            result.style.color = "red";
    }
    else if(bmi > 40){
        show = "3rd degree obesity";
        result.style.color = "darkred";
    }}
    
 }

