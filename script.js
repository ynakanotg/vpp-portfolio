// 画像をフェードイン
document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".fade-in");
  setTimeout(() => {
    img.classList.add("visible");
  }, 500);
});

// ボタンのクリックイベント
function showAlert() {
  alert("VPPは再生可能エネルギーの活用を促進します！");
}
