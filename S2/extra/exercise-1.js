const movies = [
  {
    title: "Madaraspar",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spiderpan",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categorias = [];
for (const pelicula of movies) {
  for (const cate of pelicula.categories) {
    // console.log(cate);
    if (!categorias.includes(cate)) {
      categorias.push(cate);
    }
  }
}

console.log(categorias)




