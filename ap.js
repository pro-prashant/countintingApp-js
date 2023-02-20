const getColor = () => {

const randomnumber = Math.floor(Math.random()*16777215);

// console.log(randomnumber);

const randomcode = "#" + randomnumber. toString(16);

// console.log(randomcode);

document.body.style.backgroundColor = randomcode;
document.getElementById('colorcode').innerText = randomcode; 
navigator.clipboard.writeText(randomcode); 

}

document.getElementById('btn').addEventListener("click",getColor)

getColor();



