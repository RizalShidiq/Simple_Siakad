document
  .getElementById("mahasiswaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const jurusan = document.getElementById("jurusan").value;
    const jenisKelamin = document.querySelector(
      'input[name="jenis_kelamin"]:checked'
    ).value;
    const agama = document.getElementById("agama").value;
    const hobi = Array.from(
      document.querySelectorAll('input[name="hobi"]:checked')
    )
      .map((checkbox) => checkbox.value)
      .join(", ");

    const output = document.getElementById("output");
    output.innerHTML = `
        <h3>Data Mahasiswa</h3>
        <p>NIM: ${nim}</p>
        <p>Nama: ${nama}</p>
        <p>Jurusan: ${jurusan}</p>
        <p>Jenis Kelamin: ${jenisKelamin}</p>
        <p>Agama: ${agama}</p>
        <p>Hobi: ${hobi}</p>
    `;
  });

document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("output").innerHTML = "";
});
