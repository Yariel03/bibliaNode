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

const getAutorById = (idAutor) => {
  return new Promise((resolve, reject) => {
    const id = idAutor;
    const autor = autorDb.find((autor) => autor.id === id);
    if (autor) {
      console.log(`Autor ${autor.name}`);
      resolve(autor);
    } else {
      const error = new Error();
      error.message = `Autor with id ${id} not found`;
      console.log("Autor not found");
      reject(error);
    }
  });
};

const getBookById = (id2) => {
  return new Promise((resolve, reject) => {
    const id = id2;
    const book = books.find((book) => book.id === id);
    if (book) {
      console.log(`Book ${book.title}`);
      resolve(book);
    } else {
      const error = new Error();
      error.message = `Book with id ${id} not found`;
      console.log("Book not found");
      reject(error);
    }
  });
};

const callback = (error, result) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(result);
  }
};
getBookById(1).then(callback).catch(callback);
getAutorById(5).then(callback).catch(callback);
