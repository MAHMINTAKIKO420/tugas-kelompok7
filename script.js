
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorBox = document.getElementById("login-error");

  if (username === "admin" && password === "1234") {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("main-app").style.display = "block";
  } else {
    errorBox.innerHTML = "❌ Username atau password salah!";
  }
}

function showSection(section) {
  document.getElementById("ride-section").style.display = "none";
  document.getElementById("food-section").style.display = "none";
  document.getElementById(section + "-section").style.display = "block";
}

function cariDriver() {
  const pickup = document.getElementById("pickup").value;
  const destination = document.getElementById("destination").value;
  const hasil = document.getElementById("ride-result");

  // Daftar driver
  const drivers = [
    { name: "Agus", vehicle: "Honda Beat" },
    { name: "Jamal", vehicle: "2 tak" },
    { name: "Rian", vehicle: "Supra Galon" },
    { name: "Lia", vehicle: "Vespav Jebret" },
    { name: "Budi", vehicle: "RX King" }
  ];

  if (pickup && destination) {
    // Pilih driver secara acak
    const driver = drivers[Math.floor(Math.random() * drivers.length)];

    hasil.innerHTML = `
      📍 Mencari driver dari <b>${pickup}</b> ke <b>${destination}</b>...<br><br>
      ✅ Driver ditemukan: <b>${driver.name} - ${driver.vehicle}</b><br>
      🚕 Estimasi tiba: ${Math.floor(Math.random() * 5) + 2} menit
    `;
  } else {
    hasil.innerHTML = "❗Mohon isi lokasi jemput dan tujuan.";
  }
}


function pesanMakanan() {
  const menu = document.getElementById("menu").value;
  const qty = parseInt(document.getElementById("qty").value);
  const hasil = document.getElementById("food-result");

  if (qty > 0) {
    hasil.innerHTML = `🍽️ Kamu memesan <b>${qty}</b> <b>${menu}</b><br>🛵 Pesanan sedang diproses...`;
  } else {
    hasil.innerHTML = "❗Jumlah tidak valid.";
  }
}
