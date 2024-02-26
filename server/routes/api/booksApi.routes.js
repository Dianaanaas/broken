const express = require('express');
const { Book, Genre } = require('../../db/models');
const fileupload = require('../../utils/fileupload');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      title, description, author, genreId, img,
    } = req.body;
    console.log(req.body, '---');
    if (title && description && author && genreId && img) {
      const book = await Book.create({
        title, description, img, author, genreId: +genreId, userId: 1,
      });

      res.json({ message: 'ok', book });
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    console.log(message);
    res.json({ message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Book.destroy({ where: { id } });
    if (data) {
      res.json({ message: 'ok' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ message });
  }
});
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    title, description, img, author, genreId,
  } = req.body;
  if (title && description && img && author && genreId) {
    const data = await Book.update({
      title, description, img, author, genreId,
    }, { where: { id, userId: res.locals.user.id } });
    res.json({ data });
  } else {
    res.status(400).json({ message: 'Заполните все поля' });
  }
});
router.get('/', async (req, res) => {
  const books = await Book.findAll();
  res.json({ books });
});
router.get('/categories', async (req, res) => {
  const genres = await Genre.findAll();
  res.json({ genres });
});
module.exports = router;
