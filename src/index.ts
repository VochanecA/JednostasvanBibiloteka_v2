import express from 'express';
import path from 'path';
import methodOverride from 'method-override';
import { getAuthorForm, getAllAuthors, getAuthor, addAuthor, updateAuthor, deleteAuthor } from './controller/authorController';
import { getAllBooks, getBook, addBook, updateBook, deleteBook } from './controller/bookController';

const app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static(__dirname + "/public"));
app.use('/public/img', express.static(__dirname + "/public/img"));



app.use(methodOverride('_method'));

//autori
app.get('/', async (req, res) => {
  try {   
    res.render('welcome');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
app.get('/authors', getAllAuthors);
app.get('/authors/add', getAuthorForm); //// mora biti prije get('/:id', getAuthor) inace ce uvjek ucitavati getAuthor
app.get('/authors/:id', getAuthor);
app.post('/authors', addAuthor);
app.patch('/authors/:id', updateAuthor);
app.delete('/authors/:id', deleteAuthor);



//knjige

app.get('/books', getAllBooks);
app.get('/books/:id', getBook);
app.post('/books', addBook);
app.put('/books/:id', updateBook);
app.delete('/books/:id', deleteBook);


app.listen(3000, () => {
  console.log('Server pokrenut na portu 3000');
});
