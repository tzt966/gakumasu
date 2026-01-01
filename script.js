const video = document.getElementById("video");
const start = document.getElementById("start");

start.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
         facingMode: "environment" ,
         width: { ideal: 1179 },
         height: { ideal: 2556 },
         frameRate: { ideal: 30 },
         facingMode: "user"
    },
    audio: false
    });
    video.srcObject = stream;
  } catch (err) {
    alert("カメラを起動できません");
  }
});

const select = document.getElementById('character');
select.addEventListener('change', ()=> {
    select.className = select.value
});
