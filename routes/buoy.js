const express = require('express');

const router = express.Router();

/* Get all buoys */
router.get('/', async (req, res) => {
  const buoys = await req.context.models.Buoy.findAll();

  res.send(buoys);
});

/* Get a specific buoy */
router.get('/buoyId', async (req, res) => {
  const buoy = await req.context.models.Buoy.findByPk(
    req.params.buoyId
  );

  res.send(buoy);
});

/* Create a buoy */
router.post('/', async (req, res) => {
  const buoy = await req.context.models.Buoy.create({
    name: req.body.name
  })
});

module.exports = router;
