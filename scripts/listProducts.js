import { inventory } from "./product.js";

export const listProducts = () => {
  //const table = document.getElementById("invetory-table-events");
  const cleanTable2 = document.getElementById("clear-table");

  // Limpiar la tabla antes de agregar elementos
  while (cleanTable2.firstChild) {
    cleanTable2.removeChild(cleanTable2.firstChild);
  }

  inventory.forEach((item) => {
    const row = cleanTable2.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.innerText = item.nombre;
    cell2.innerText = item.cantidad;
    cell3.innerText = item.precio;
    cell4.className = "action-buttons";

    cleanTable2.appendChild(row);

    //Logica para crear un boton dentro de un foreach para que salga en el html
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Eliminar";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", () => {
      const deleteProduct = () => {
        const productIndex = inventory.findIndex(
          (product) => product.id === item.id
        );

        if (productIndex !== -1) {
          inventory.splice(productIndex, 1);
          row.remove();
        }
      };

      deleteProduct(item.id);
    });

    cell4.appendChild(deleteButton);

    /*Logica para editar */
    const editButton = document.createElement("button");
    editButton.innerText = "Editar";
    editButton.addEventListener("click", () => {});

    cell4.appendChild(editButton);
  });
};
