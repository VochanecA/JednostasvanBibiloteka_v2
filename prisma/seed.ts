import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Kreiranje slova
  const letter = await prisma.letter.create({
    data: {
      name: 'A',
    },
  });

  // Kreiranje jezika
  const language = await prisma.language.create({
    data: {
      name: 'Engleski',
    },
  });

  // Kreiranje poveza
  const binding = await prisma.binding.create({
    data: {
      name: 'Tvrdi povez',
    },
  });

  

  // Kreiranje formata
  const format = await prisma.format.create({
    data: {
      name: 'Meki povez',
    },
  });

  // Kreiranje izdavača
  const publisher = await prisma.publisher.create({
    data: {
      name: 'Penguin Random House',
    }
  });

  




  // Kreiranje knjige 1
  await prisma.book.create({
    data: {
      title: 'Veliki Getsbi',
      page_count: 180,
      letter: {
        connect: {
          id: letter.id,
        },
      },
      language: {
        connect: {
          id: language.id,
        },
      },
      binding: {
        connect: {
          id: binding.id,
        },
      },
      format: {
        connect: {
          id: format.id,
        },
      },
      publisher: {
        connect: {
          id: publisher.id,
        },
      },
      isbn: '978-3-16-148410-0',
      quantity_count: 10,
      rented_count: 0,
      reserved_count: 0,
      body: 'Veliki Getsbi je roman američkog pisca F. Scotta Fitzgeralda iz 1925. godine.',
      year: 1925,
      pdf: 'http:pdf',
    },
  });

  // Kreiranje knjige 2
  await prisma.book.create({
    data: {
      title: 'Ubiti pticu rugalicu',
      page_count: 281,
      letter: {
        connect: {
          id: letter.id,
        },
      },
      language: {
        connect: {
          id: language.id,
        },
      },
      binding: {
        connect: {
          id: binding.id,
        },
      },
      format: {
        connect: {
          id: format.id,
        },
      },
      publisher: {
        connect: {
          id: publisher.id,
        },
      },
      isbn: '978-0-06-112008-4',
      quantity_count: 5,
      rented_count: 0,
      reserved_count: 0,
      body: 'Ubiti pticu rugalicu je roman Harper Lee objavljen 1960. godine.',
      year: 1960,
      pdf: 'http:pdf',
    },
  });

  // Kreiranje knjige 3
  await prisma.book.create({
    data: {
      title: '1984',
      page_count: 328,
      letter: {
        connect: {
          id: letter.id,
        },
      },
      language: {
        connect: {
          id: language.id,
        },
      },
      binding: {
        connect: {
          id: binding.id,
        },
      },
      format: {
        connect: {
          id: format.id,
        },
      },
      publisher: {
        connect: {
          id: publisher.id,
        },
      },
      isbn: '978-0-14-103614-4',
      quantity_count: 7,
      rented_count: 0,
      reserved_count: 0,
      body: '1984 je distopijski roman Georgea Orwella objavljen 1949. godine.',
      year: 1949,
      pdf: 'http:pdf',
    },
  });

  // Kreiranje knjige 4
  await prisma.book.create({
    data: {
      title: 'Na Drini ćuprija',
      page_count: 314,
      letter: {
        connect: {
          id: letter.id,
        },
      },
      language: {
        connect: {
          id: language.id,
        },
      },
      binding: {
        connect: {
          id: binding.id,
        },
      },
      format: {
        connect: {
          id: format.id,
        },
      },
      publisher: {
        connect: {
          id: publisher.id,
        },
      },
      isbn: '978-0-226-84929-6',
      quantity_count: 3,
      rented_count: 0,
      reserved_count: 0,
      body: 'Na Drini ćuprija je historijski roman Ive Andrića.',
      year: 1945,
      pdf: 'http:pdf',
    },
  });

  // Kreiranje knjige 5
  await prisma.book.create({
    data: {
      title: 'Prokleta avlija',
      page_count: 256,
      letter: {
        connect: {
          id: letter.id,
        },
      },
      language: {
        connect: {
          id: language.id,
        },
      },
      binding: {
        connect: {
          id: binding.id,
        },
      },
      format: {
        connect: {
          id: format.id,
        },
      },
      publisher: {
        connect: {
          id: publisher.id,
        },
      },
      isbn: '978-0-86356-306-5',
      quantity_count: 2,
      rented_count: 0,
      reserved_count: 0,
      body: 'Prokleta avlija je roman Ive Andrića.',
      year: 1954,
      pdf: 'http:pdf',
    },
  });

  // Seed the Settings model
  await prisma.settings.create({
    data: {
      reservationExpiry: 7,
      returnDeadline: 30,
      conflictDeadline: 35,
    },
  });

  await prisma.author.createMany({
    data: [
      {
        nameSurname: 'Ivo Andrić',
        photo: 'slika1.jpg',
        biography: 'Ivo je psiac...',
        wikipedia: 'wiki1',
      },
      {
        nameSurname: 'Petar II Petrović Njegos',
        photo: 'slika4.jpg',
        biography: 'Petar je psiac...',
        wikipedia: 'wiki4',
      },
      {
        nameSurname: 'Džordž Orvel',
        photo: 'slika2.jpg',
        biography: 'Džordž je pisac....',
        wikipedia: 'wiki2',
      },
      {
        nameSurname: 'Harper Li',
        photo: 'slika3.jpg',
        biography: 'Harper je psac',
        wikipedia: 'wiki3',
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
