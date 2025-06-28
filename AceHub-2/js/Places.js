function toggleAddresses(btn) {
  const addresses = btn.nextElementSibling;
  if (addresses.style.display === "block") {
    addresses.style.display = "none";
    btn.textContent = "Places Nearby";
  } else {
    document.querySelectorAll('.addresses').forEach(a => a.style.display = "none");
    document.querySelectorAll('.places-btn').forEach(b => b.textContent = "Places Nearby");
    addresses.style.display = "block";
    btn.textContent = "Hide Addresses";
  }
}

function goHome() {
  window.location.href = "finalhtml.html#footer"; 
}
