const express = require('express');

const router = express.Router();

/* Get all buoys */
router.get('/', async (req, res) => {
  req.context.models.Buoy.findAll()
    .then((buoys) => res.send(buoys))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Get a specific buoy */
router.get('/buoyId', async (req, res) => {
  req.context.models.Buoy.findByPk(
    req.params.buoyId
  ).then((buoy) => res.send(buoy))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Create a buoy */
router.post('/', async (req, res) => {
  req.context.models.Buoy.create({
    name: req.body.name
  }).then((buoy) => res.send(buoy))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Remove a buoy */
router.post('/remove', async (req, res) => {
  req.context.models.Buoy.destroy({
    where: { name: req.body.name }
  }).then((n) => {
    if (n) {
      res.send(true);
    }
    else {
      res.send(false);
    }
  }).catch((err) => {
    console.error(err);
    res.send(err);
  });
});

module.exports = router;
