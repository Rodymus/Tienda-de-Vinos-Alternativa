
export const products = [
    {
        id: 1,
        title: "Vino Tinto",
        price: 1500,
        stock: 2,
        description: "El mejor vino sanjuanino",
        category: "tinto",
        img: "https://res.cloudinary.com/da5x6tuuw/image/upload/v1685658888/tinto_rlph9j.jpg"
    },
    {
        id: 2,
        title: "Vino Blanco",
        price: 1450,
        stock: 5,
        description: "Mejor vino blanco",
        category: "blanco",
        img: "https://res.cloudinary.com/da5x6tuuw/image/upload/v1685658887/blanco_kzwdhv.jpg"
    },
    {
        id: 3,
        title: "Vino Rosado",
        price: 1900,
        stock: 5,
        description: "Vino para la gente sofisticada",
        category: "rosado",
        img: "https://res.cloudinary.com/da5x6tuuw/image/upload/v1685658886/rosado_srocyf.jpg"
    },
    {
        id: 4,
        title: "Vino Tinto en Caja",
        price: 1780,
        stock: 5,
        description: "Vino para hombres de campo",
        category: "tinto",
        img: "https://res.cloudinary.com/da5x6tuuw/image/upload/v1685659338/tintoCaja_zcjgd8.jpg"
    }
    ,
    {
        id: 5,
        title: "Vino Blanco en Caja",
        price: 1780,
        stock: 5,
        description: "Vino blanco para todos",
        category: "tinto",
        img: "https://res.cloudinary.com/da5x6tuuw/image/upload/v1685659338/blancoCaja_bhnmbo.jpg"
    },
    {
        id: 6,
        title: "Vino Rosado en Caja",
        price: 1780,
        stock: 5,
        description: "Vino para hombres de ciudad",
        category: "tinto",
        img: "https://res.cloudinary.com/da5x6tuuw/image/upload/v1685659338/rosadoCaja_bwgywo.jpg"
    }
  ]

  export const getProductById = (productId)=> {
      return new Promise((resolve)=> {
          setTimeout(()=>{
              resolve(products.find(prod => prod.id === productId))
          }, 500)
      })
  }