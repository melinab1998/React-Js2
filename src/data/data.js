//Productos

const products = [
    {
        id: 0,
        name: "Cuaderno Setter",
        type: "Libreria",
        price: 570,
        img: "../../img2/producto0.jpg",
        des: "Formato: 21 x 29,7cm. Cuadriculado. Con espiral, tapa de colores y papel 70 grs." 
    },
    {
        id: 1,
        name: "Boligrafo Bic",
        type: "Libreria",
        price: 180,
        img: "../../img2/producto1.jpg",
        des: "Punta media de 0,8 mm ofrece una escritura impecable." 
    },
    {
        id: 2,
        name: "Goma Tablot",
        type: "Libreria",
        price: 190,
        img: "../../img2/producto2.jpg",
        des: "Goma Tablot Fusion blanca/azul x 2 unidades" 
    },
    {
        id: 3,
        name: "Resma Boreal",
        type: "Papeleria",
        price: 2290,
        img: "../../img2/producto3.jpg",
        des: "Papel Boreal 75 grs. Papel extra blanco. Formato: A4."  
    },
    {
        id: 4,
        name: "Rollo Etiqueta",
        type: "Papeleria",
        price: 550,
        img: "../../img2/producto4.jpg",
        des: "Etiquetas autoadhesivas en papel térmico." 
    },
    {
        id: 5,
        name: "Repuesto Rivadavia",
        type: "Papeleria",
        price: 4900,
        img: "../../img2/producto5.jpg",
        des: "Tamaño: Carta. Formato: Rayado. Contenido: 480 hojas."
    },
    {
        id: 6,
        name: "Monopoly",
        type: "Jugueteria",
        price: 9300,
        img: "../../img2/producto6.jpg",
        des: "Juego de Mesa Monopoly clásico con tablero." 
    },
    {
        id: 7,
        name: "Valija Juliana",
        type: "Jugueteria",
        price: 3300,
        img: "../../img2/producto7.jpg",
        des: "Valija Juliana Doctora. Accesorios con luz y sonido."  
    },
    {
        id: 8,
        name: "Juego de Cartas UNO",
        type: "Jugueteria",
        price: 1990,
        img: "../../img2/producto8.jpg",
        des: "¡El juego de cartas familiar No. 1 en el mundo!" 
    },
    {
        id: 9,
        name: "Mochila Klub Mode",
        type: "Marroquineria",
        price: 4290,
        img: "../../img2/producto9.jpg",
        des: "Mochila espalda reforzada con tiras regulables."  
    },
    {
        id: 10,
        name: "Mochila Everlast",
        type: "Marroquineria",
        price: 11900,
        img: "../../img2/producto10.jpg",
        des: "Mochila 16 pulgadas, incluye porta botellas y monedero."  
    },
    {
        id: 11,
        name: "Cartuchera Footy",
        type: "Marroquineria",
        price: 7500,
        img: "../../img2/producto11.jpg",
        des: "Cartuchera con 2 cierres, con estampa sobre holograma, luz led a pilas y frente de lentejuelas."  
    }
]

//promesa

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            products.length ? resolve(products) : reject ("No hay productos")
        }, 1000);
    });
};