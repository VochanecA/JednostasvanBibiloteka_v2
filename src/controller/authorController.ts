import { Request, Response,NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import Author from '../models/authorModel';


const prisma = new PrismaClient();

// finckija za ProperCase za ime i prezime autora
function toProperCase(str: string) {
  return str.replace(/\w\S*/g, function(txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// kraj funkcije za ProperCase
export const getAuthorForm = async (req: Request, res: Response) => {
  try {
    res.render('autori/noviAutor');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error add autor');
  }
};

export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await Author.getAllAuthors();
    res.render('autori/autori', { authors });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const getAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.getAuthor(Number(req.params.id));
    res.render('autori/autorProfile', { author });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error profil');
  }
};


export async function addAuthor(req: Request, res: Response, next: NextFunction) {

  
  const { nameSurname, photo, biography, wikipedia } = req.body;

  try {
    const existingAuthor = await prisma.author.findUnique({
      where: {
        nameSurname: nameSurname,
      },
    });

    if (existingAuthor) {
      // update-uj ako vec postoji
      const updatedAuthor = await prisma.author.update({
        where: {
          id: existingAuthor.id,
        },
        data: {
          photo,
          biography,
          wikipedia,
        },
      });

      res.redirect('/authors');
    } else {
      // kreiraj novog autora
      const properNameSurname = toProperCase(nameSurname);
      const newAuthor = await prisma.author.create({
        data: {
          nameSurname: properNameSurname,
          photo,
          biography,
          wikipedia,
        },
      });

      res.redirect('/authors');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

  

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const { nameSurname, photo, biography, wikipedia } = req.body;
    const author = new Author(nameSurname, photo, biography, wikipedia, Number(req.params.id));
    await author.save();
    res.redirect('/authors');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const author = new Author('', '', '', '', Number(req.params.id));
    await author.delete();
    res.redirect('/authors');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
