const router = require('express').Router();
const { Entry, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const entryData = await Entry.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const entries = entrytData.map((entry) => entry.get({ plain: true }));

        res.render('homepage', {
            entries,
            // logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/entry/:id', async (req, res) => {
    try {
      const entrytData = await Entry.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const entry = entryData.get({ plain: true });
  
      res.render('entry', {
        ...entry,
        // logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });