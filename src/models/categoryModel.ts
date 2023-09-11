import { db } from '../../utils/db.server';

export class Category {
  id?: number;
  name: string;

  constructor(name: string, id?: number) {
    this.name = name;
    if (id) {
      this.id = id;
    }
  }

  static async getAllCategories() {
    const categories = await db.category.findMany();
    return categories.map((category: any) => {
      return new Category(category.name, category.id);
    });
  }

  static async getCategory(id: number) {
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      throw new Error('Category not found');
    }

    return new Category(category.name, category.id);
  }

  async save() {
    if (this.id) {
      return await db.category.update({
        where: {
          id: this.id,
        },
        data: {
          name: this.name,
        },
      });
    } else {
      return await db.category.create({
        data: {
          name: this.name,
        },
      });
    }
  }

  async delete() {
    if (!this.id) {
      throw new Error('Trying to delete a non-existent item');
    }

    await db.category.delete({
      where: {
        id: this.id,
      },
    });
  }
}

export default Category;
