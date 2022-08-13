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

const getAutorById = (idAutor, callback) => {
  const id = idAutor;
  const autor = autorDb.find((autor) => autor.id === id);
  if (autor) {
    // callback(null, book);
    console.log(`Autor ${autor.name}`);
  } else {
    const error = new Error();
    error.message = `Autor with id ${id} not found`;
    console.log("Autor not found");
    callback(error);
  }
};

const getBookById = (id2, callback) => {
  const id = id2;
  const book = books.find((book) => book.id === id);
  if (book) {
    // callback(null, book);
    console.log(`Book ${book.title}`);
  } else {
    const error = new Error();
    error.message = `Book with id ${id} not found`;
    console.log("Book not found");
    callback(error);
  }
};

const callback = (error, result) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(result);
  }
};
getBookById(5, callback);
getAutorById(5, callback);
