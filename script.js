const urlCSV = "https://raw.githubusercontent.com/202000790-alt/biometrico2/main/registros.csv";

async function cargarCSV() {
  const response = await fetch(urlCSV);
  const data = await response.text();

  const filas = data.split("\n");
  const tabla = document.querySelector("#tabla tbody");
  tabla.innerHTML = "";

  filas.slice(1).forEach(fila => {
    if (fila.trim() !== "") {
      const columnas = fila.split(",");
      const tr = document.createElement("tr");

      columnas.forEach(col => {
        const td = document.createElement("td");
        td.textContent = col;
        tr.appendChild(td);
      });

      tabla.appendChild(tr);
    }
  });
}

function descargarCSV() {
  window.open(urlCSV, "_blank");
}

cargarCSV();
