const display = document.querySelector('#display');
const button = document.querySelectorAll('button');

button.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear'){
            display.innerText='';
        }else if (item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substring(0 , string.length - 1)
        }else if(display.innerText == '' && item.id == 'equal'){
            display.innerText='ingrese numero';
            setTimeout (() => (display.innerText=''), 2000);
        }else if (display.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText);
        }else{
            display.innerText+=item.id
        }
    
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculadora = document.querySelector('.calculadora');
const toggleIcono = document.querySelector('toggler-icon');
let isDark=true;

themeToggleBtn.onclick = () =>{
    calculadora.classList.toggle('dark')
    themeToggleBtn.classList.toggle('active')
    isDark=!isDark
}