export{ inventory};

//Constante aleatoria para que me meta numeros aleatorios hasta 20

const getRandomCuantity = () =>{
    return Math.floor(Math.random() * 20) +1;
}


//Array tipo objeto
const inventory =[

    { id: 1 ,nombre:"Lamzu Atlantis", cantidad: getRandomCuantity(), precio: 100.99},
    { id: 2 ,nombre:"Razer Viper S.E", cantidad: getRandomCuantity(), precio: 320.99},
    { id: 3 ,nombre:"Razer Orochi V2", cantidad: getRandomCuantity(), precio: 78.99},
    { id: 4 ,nombre:"End Game XMR1", cantidad: getRandomCuantity(), precio: 70.99},
    { id: 5 ,nombre:"Ninjutso Sora", cantidad: getRandomCuantity(), precio: 99.99},
    { id: 6 ,nombre:"Logitech G PRO W", cantidad: getRandomCuantity(), precio: 95.99},
    { id: 7 ,nombre:"Asus ROG AIM LAB Edition", cantidad: getRandomCuantity(), precio: 110.99},
    { id: 8 ,nombre:"Lamzu Thorn", cantidad: getRandomCuantity(), precio: 120.99},
    { id: 9 ,nombre:"Razer Viper V2", cantidad: getRandomCuantity(), precio: 105.99},

];