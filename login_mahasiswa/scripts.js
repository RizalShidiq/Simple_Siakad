document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validasi sederhana
    if (username === "mahasiswa" && password === "mahasiswa") {
      window.location.href = "input_data_mahasiswa/input_data_mahasiswa.html"; // Ganti dengan path yang sesuai
    } else {
      alert("Username atau password salah!");
    }
  });
