const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    autorid: 1,
  },
  {
    id: 2,
    title: "The Catcher in the Rye",
    autorid: 2,
  },
  {
    id: 3,
    title: "The Great Gatsby3",
    autorid: 3,
  },
];

const autorDb = [
  {
    id: 1,
    name: "F. Scott Fitzgerald",
  },
  {
    id: 2,
    name: "J. D. Salinger",
  },
  {
    id: 3,
    name: "F. Scott Fitzgerald3",
  },
];

const getAutorById = async (idAutor) => {
  const id = idAutor;
  const autor = autorDb.find((autor) => autor.id === id);
  if (autor) {
    console.log(`Autor ${autor.name}`);
  } else {
    const error = new Error();
    error.message = `Autor with id ${id} not found`;
    console.log("Autor not found");
    throw error;
  }
  return autor;
};

const getBookById = async (id2) => {
  const id = id2;
  const book = books.find((book) => book.id === id);
  if (book) {
    console.log(`Book ${book.title}`);
  } else {
    const error = new Error();
    error.message = `Book with id ${id} not found`;
    console.log("Book not found");
    throw error;
  }
  return book;
  S;
};

const callback = (error, result) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(result);
  }
};

const main = async () => {
  try {
    const autor = await getAutorById(2);
    const book = await getBookById(5);
    callback(null, { autor, book });
  } catch (error) {
    callback(error);
  }
};
main();
