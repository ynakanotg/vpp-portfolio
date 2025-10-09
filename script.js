// フェードイン
document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".fade-in");
  setTimeout(() => {
    img.classList.add("visible");
  }, 500);
});

// ボタン動作
function showAlert() {
  alert("VPPは再生可能エネルギーの活用を促進します！");
}
