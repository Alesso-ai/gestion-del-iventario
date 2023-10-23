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
  const row = inventory.getElemetByTagName("tr");
  const productSearched = document.getElementById("busqueda").value;

  inventory.forEach((product) => {
    if (productSearched === product.nombre) {
      console.log("Producto encontrado: " + productSearched);
      productFound = true;
      return;
    }
    console.log("Producto no encontrado");
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
