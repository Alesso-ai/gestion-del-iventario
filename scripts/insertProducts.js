import { inventory } from "./product.js";
import { listProducts } from "./listProducts.js";

export const insertProducts = () => {
    const productForm = document.getElementById("product-form-events");
    productForm.addEventListener("submit", function(event){

        //Le quitamos las propiedades a la etiqueta form

        event.preventDefault();

        // Capturar los valores introducidos por el usuario
        const productName = document.getElementById("product-name").value;
        const productQuantity = parseInt(document.getElementById("product-quantity").value);
        const productPrice = parseFloat(document.getElementById("product-price").value);

        //validar para que los 3 datos sean correctos

        if(productName && !isNaN(productQuantity) && !isNaN(productPrice)){

            //Crear un nuevo objeto producto
            const newProduct = {
                
                id: inventory.length + 1,
                nombre: productName ,
                cantidad: productQuantity ,
                precio: productPrice ,

            }

            //Agregar el nuevo producto al inventario
            inventory.push(newProduct);
            
            const cleanTable2 = document.getElementById("clear-table");
            //Limpiar la tabla antes de la nueva inserccion
            cleanTable2.innerHTML = "";

            //Limpiar los campos del formulario
            productForm.reset();

            listProducts();

        }

    });

};