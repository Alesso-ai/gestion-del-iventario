//Importar un JS
/*Alejandro Ruiz Prieto:
    Git hub: https://github.com/Alesso-ai/gestion-del-iventario.git
    Listar Productos
*/

/*Importaciones con otros JS*/
import { listProducts } from "./listProducts.js";
import { inventory } from "./product.js";
import { insertProducts } from "./insertProducts.js"

document.addEventListener("DOMContentLoaded", listProducts);


const searchProduct = () => {
  // Limpiar las clases "highlighted" de las filas anteriores
  const rows = document.querySelectorAll("#clear-table tr");
  rows.forEach((row) => {
    row.classList.remove("highlighted");
  });

  const productSearched = document.getElementById("busqueda").value.toLowerCase(); // Convertir a minúsculas para ser insensible a mayúsculas/minúsculas

  // Recorre el inventario, que es un array de productos
  inventory.forEach((product) => {
    const productName = product.nombre.toLowerCase(); // Convertir a minúsculas para ser insensible a mayúsculas/minúsculas

    if (productName.includes(productSearched) || productName.charAt(0) === productSearched) {
      console.log("Producto encontrado: " + product.nombre);

      // Agregar una clase para resaltar el producto encontrado
      rows.forEach((row) => {
        if (row.cells[0].innerText.toLowerCase().includes(productSearched) || row.cells[0].innerText.toLowerCase().charAt(0) === productSearched) {
          row.classList.add("highlighted"); // Clase CSS para resaltar
        }
      });
    }
  });
};

const searchButton = document.getElementById("busquedaBtn");
searchButton.addEventListener("click", searchProduct);







//Accion para agregar boton

document.addEventListener("DOMContentLoaded", () => {
  const btnForm = document.getElementById("product-form-events");

  btnForm.addEventListener("click", () => {
    insertProducts();
  });

});



