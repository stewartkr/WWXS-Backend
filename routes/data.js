const express = require('express');

const router = express.Router();

/* Get all uploaded data */
router.get('/', async (req, res) => {
  const data = await req.context.models.Data.findAll();

  res.send(data);
});

/* Get all data from a particular buoy */
router.get('/:buoyId', async (req, res) => {
  const data = await req.context.models.Data.findAll({
    where: { buoyId: req.params.buoyId }
  });

  res.send(data);
});

/* Upload new data */
router.post('/', async (req, res) => {
  const data = await req.context.models.Data.create({
    timestamp: req.body.timestamp,
    surfTemp: req.body.surfTemp,
    surfSalinity: req.body.surfSalinity,
    surfInsolation: req.body.surfInsolation,
    depthTurbidity: req.body.depthTurbidity,
    buoyId: req.body.buoyId,
    userId: req.body.userId
  });

  res.send(data);
});

module.exports = router;
