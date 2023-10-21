export{ inventory};

//Constante aleatoria para que me meta numeros aleatorios hasta 20

const getRandomCuantity = () =>{
    return Math.floor(Math.random() * 20) +1;
}


//Array tipo objeto
const inventory =[

    { id: 1 ,nombre:"Bruja", cantidad: getRandomCuantity(), precio: 55.99},
    { id: 2 ,nombre:"Payaso", cantidad: getRandomCuantity(), precio: 34.99},
    { id: 3 ,nombre:"Hulk", cantidad: getRandomCuantity(), precio: 78.99},
    { id: 4 ,nombre:"Skeleton", cantidad: getRandomCuantity(), precio: 12.99},
    { id: 5 ,nombre:"Capitan America", cantidad: getRandomCuantity(), precio: 90.99},
    { id: 6 ,nombre:"Megatron", cantidad: getRandomCuantity(), precio: 100.99},
    { id: 7 ,nombre:"Pedro Sanchez", cantidad: getRandomCuantity(), precio: 1.99},
    { id: 8 ,nombre:"Leticia Sabater", cantidad: getRandomCuantity(), precio: 0.99},
    { id: 9 ,nombre:"LLados", cantidad: getRandomCuantity(), precio: 34.99},

];