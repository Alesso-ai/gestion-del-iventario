import { inventory } from "./product.js"

export const listProducts = () => {

    const table = document.getElementById("invetory-table-events")

    
    inventory.forEach(item => {

        const row = table.insertRow();
        
        
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);



        cell1.innerText = item.nombre;
        cell2.innerText = item.cantidad;
        cell3.innerText = item.precio;
        cell4.className=("action-buttons");


        //Logica para crear un boton dentro de un foreach para que salga en el html
        const deleteButton = document.createElement("button");
        deleteButton.innerText=("Eliminar");
        deleteButton.className=("delete-btn");
        deleteButton.addEventListener("click", ()=>{
        });

        cell4.appendChild(deleteButton);


        /*Logica para editar */
        const editButton = document.createElement("button");
        editButton.innerText=("Editar");
        editButton.addEventListener("click", ()=>{
        });

        cell4.appendChild(editButton);



        

    });

}