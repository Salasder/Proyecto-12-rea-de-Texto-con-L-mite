const textarea = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const caja = document.getElementById("box");
const MAX = 250;

textarea.addEventListener("input", actualizar);
function actualizar() {
    if (textarea.value.length > MAX) {
        textarea.value = textarea.value.slice(0, MAX);
    }
    const cantidad = textarea.value.length;
    contador.textContent = `${cantidad} / ${MAX}`;
    caja.classList.toggle("limite", cantidad === MAX);
}
textarea.addEventListener("input", actualizar);