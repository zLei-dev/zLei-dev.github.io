const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const yesBranch = document.getElementById("yesBranch");
const finalCard = document.getElementById("finalCard");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
// Music
const bgm1 = document.getElementById("bgm1");
const bgm2 = document.getElementById("bgm2");
const bgm3 = document.getElementById("bgm3");

document.getElementById("c1next").addEventListener("click", () => {
    card1.classList.remove("show");
    bgm1.muted = false;
    bgm1.play();
    card1.classList.add("hidden");
  
    card2.classList.add("show");
    card2.classList.remove("hidden");
  
    window.scrollTo({top: 0, behavior: "smooth"});
  });
  
  document.getElementById("c2next").addEventListener("click", () => {
    card2.classList.remove("show");
    card2.classList.add("hidden");
  
    card3.classList.add("show");
    card3.classList.remove("hidden");
  
    window.scrollTo({top: 0, behavior: "smooth"});
  });
  
  document.getElementById("yes").addEventListener("click", () => {
    card3.classList.remove("show");
    bgm1.pause();
    bgm2.currentTime = 0;
    bgm2.muted = false;
    bgm2.play();
    card3.classList.add("hidden");
  
    yesBranch.classList.add("show");
    yesBranch.classList.remove("hidden");
  
    setTimeout(() => {
      finalCard.classList.add("show");
      finalCard.classList.remove("hidden");
      finalCard.style.marginTop = "800px";
    }, 500);
  });
  

const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  const offsetX = Math.random() * 500 - 150;
  const offsetY = Math.random() * 500 - 150;
  noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

document.getElementById("iloveyoutoo").addEventListener("click", () => {
  popup.classList.add("show");
  bgm1.pause();
  bgm2.pause();
  bgm1.currentTime = 0;
  bgm2.currentTime = 0;
  bgm3.muted = false;
  bgm3.play();
});

closePopup.addEventListener("click", () => {
  window.location.href = "about:blank";
  popup.classList.remove("show");
});

// yes button


const yesBtn = document.getElementById("yes");
let scale = 1;
let growing = true;
let animationId;

function grow() {
  if (!growing) return; // stop if clicked
  scale += 0.001; // increase scale slowly
  yesBtn.style.transform = `scale(${scale})`;
  animationId = requestAnimationFrame(grow);
}

// start growing
grow();

yesBtn.addEventListener("click", () => {
  growing = false;
  cancelAnimationFrame(animationId);
  yesBtn.style.transform = "scale(1)"; 

  card3.classList.remove("show");
  card3.classList.add("hidden");

  yesBranch.classList.add("show");
  yesBranch.classList.remove("hidden");

  setTimeout(() => {
    finalCard.classList.add("show");
    finalCard.classList.remove("hidden");
    finalCard.style.marginTop = "800px";
  }, 500);
});


// disable context menu
document.addEventListener("contextmenu", (e) => e.preventDefault());