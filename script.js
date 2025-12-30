const video = document.getElementById("video");
const start = document.getElementById("start");

start.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }
    });
    video.srcObject = stream;
  } catch (err) {
    alert("カメラを起動できません");
  }
});
