const video  = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx    = canvas.getContext("2d");
const start  = document.getElementById("start");

start.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
        width:  { ideal: 1280 }, // 横長で取得
        height: { ideal: 720 },
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

  // 高さ固定・横だけ狭める（例：4:3）
  const TARGET_RATIO = 4 / 3;
  const targetWidth = vh * TARGET_RATIO;

  canvas.width  = targetWidth;
  canvas.height = vh;

  const sx = (vw - targetWidth) / 2;

  ctx.drawImage(
    video,
    sx, 0,                 // 切り出し開始
    targetWidth, vh,       // 切り出しサイズ
    0, 0,
    targetWidth, vh        // 描画サイズ
  );

  requestAnimationFrame(draw);
}
