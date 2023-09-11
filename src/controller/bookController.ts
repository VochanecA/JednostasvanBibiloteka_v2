import { Request, Response } from 'express';
import { Book } from '../models/bookModel';



export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.getAllBooks();
    res.render('knjige/evidencijaKnjiga', { books });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.getBook(Number(req.params.id));
    res.render('book', { book });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const {
      title,
      page_count,
      letterId,
      languageId,
      bindingId,
      formatId,
      publisherId,
      isbn,
      quantity_count,
      rented_count,
      reserved_count,
      body,
      year,
      pdf,
    } = req.body;

    const book = new Book(
      title,
      page_count,
      letterId,
      languageId,
      bindingId,
      formatId,
      publisherId,
      isbn,
      quantity_count,
      rented_count,
      reserved_count,
      body,
      year,
      pdf,
      0, // add the id parameter here
    );

    await book.save();
    res.redirect('/books');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const {
      title,
      page_count,
      letterId,
      languageId,
      bindingId,
      formatId,
      publisherId,
      isbn,
      quantity_count,
      rented_count,
      reserved_count,
      body,
      year,
      pdf,
    } = req.body;

    const book = new Book(
      title,
      page_count,
      letterId,
      languageId,
      bindingId,
      formatId,
      publisherId,
      isbn,
      quantity_count,
      rented_count,
      reserved_count,
      body,
      year,
      pdf,
      Number(req.params.id), // add the id parameter here
    );

    await book.save();
    res.redirect('/books');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = new Book('', 0, 0, 0, 0, 0, 0, '', 0, 0, 0, '', 0, '', Number(req.params.id)); // add the id parameter here
    await book.delete();
    res.redirect('/books');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
