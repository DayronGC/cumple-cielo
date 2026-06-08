function startExperience(){

confetti({
particleCount:250,
spread:180
});

const container = document.getElementById("flower-container");

container.innerHTML = "";

const flower = document.createElement("div");

flower.className = "flower";

flower.innerHTML = "🌹";

container.appendChild(flower);

}

function createHeart(){

const heart = document.createElement("div");

heart.innerHTML = "💙";

heart.style.position = "fixed";
heart.style.left = Math.random()*100 + "vw";
heart.style.bottom = "-20px";
heart.style.fontSize = (20 + Math.random()*20) + "px";
heart.style.animation = "float 8s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,400);

const style = document.createElement("style");

style.innerHTML = `

@keyframes float{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(-110vh);
opacity:0;
}

}

`;

document.head.appendChild(style);
