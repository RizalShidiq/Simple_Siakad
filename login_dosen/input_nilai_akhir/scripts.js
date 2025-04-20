let no = 1;

function addRow() {
  const table = document
    .getElementById("nilaiTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);
  const cell7 = newRow.insertCell(6);
  const cell8 = newRow.insertCell(7);
  const cell9 = newRow.insertCell(8);

  cell1.textContent = no++;
  cell2.innerHTML = `<input type="text" class="nim">`;
  cell3.innerHTML = `<input type="text" class="nama">`;
  cell4.innerHTML = `<input type="number" class="absen">`;
  cell5.innerHTML = `<input type="number" class="tugas">`;
  cell6.innerHTML = `<input type="number" class="uts">`;
  cell7.innerHTML = `<input type="number" class="uas">`;
  cell8.innerHTML = `<span class="nilai-akhir"></span>`;
  cell9.innerHTML = `<span class="nilai-huruf"></span>`;
}

function calculate() {
  const rows = document.querySelectorAll("#nilaiTable tbody tr");

  rows.forEach((row) => {
    const absen = parseFloat(row.querySelector(".absen").value) || 0;
    const tugas = parseFloat(row.querySelector(".tugas").value) || 0;
    const uts = parseFloat(row.querySelector(".uts").value) || 0;
    const uas = parseFloat(row.querySelector(".uas").value) || 0;

    const nilaiAkhir = absen * 0.1 + tugas * 0.2 + uts * 0.3 + uas * 0.4;
    const nilaiHuruf = grade(nilaiAkhir);

    row.querySelector(".nilai-akhir").textContent = nilaiAkhir.toFixed(2);
    row.querySelector(".nilai-huruf").textContent = nilaiHuruf;
  });
}

function grade(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 70) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function resetTable() {
  const table = document
    .getElementById("nilaiTable")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  no = 1;
}

addRow();
