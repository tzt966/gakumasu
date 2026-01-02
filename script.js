const video  = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx    = canvas.getContext("2d");
const start  = document.getElementById("start");

start.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
        frameRate: { ideal: 30 }
      },
      audio: false
    });

    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
      draw(); // ← canvas描画開始
    };

  } catch (err) {
    alert("カメラを起動できません");
  }
});

function draw() {
  const vw = video.videoWidth;
  const vh = video.videoHeight;

  if (!vw || !vh) {
    requestAnimationFrame(draw);
    return;
  }


  requestAnimationFrame(draw);
}


