function showAlert() {
  alert("VPPは再生可能エネルギーの活用を促進します！");
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("learnMoreBtn");
  if (btn) btn.addEventListener("click", showAlert);
});
