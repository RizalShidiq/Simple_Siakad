document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validasi sederhana
    if (username === "dosen" && password === "dosen") {
      window.location.href = "input_nilai_akhir/input_nilai_akhir.html";
    } else {
      alert("Username atau password salah!");
    }
  });
