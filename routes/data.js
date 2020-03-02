const express = require('express');

const router = express.Router();

/* Get all uploaded data */
router.get('/', async (req, res) => {
  req.context.models.Data.findAll()
    .then((data) => res.send(data))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Get all data from a particular buoy */
router.get('/buoy/:buoyId', async (req, res) => {
  req.context.models.Data.findAll({
    where: { buoyId: req.params.buoyId }
  }).then((data) => res.send(data))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Get all data from a particular user */
router.get('/user/:userId', async (req, res) => {
  req.context.models.Data.findAll({
    where: { userId: req.params.userId }
  }).then((data) => res.send(data))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Upload a new data record */
router.post('/', async (req, res) => {
  req.context.models.Data.create({
    timestamp: req.body.timestamp,
    surfTemp: req.body.surfTemp,
    surfSalinity: req.body.surfSalinity,
    surfInsolation: req.body.surfInsolation,
    depthTurbidity: req.body.depthTurbidity,
    buoyId: req.body.buoyId,
    userId: req.body.userId
  }).then((data) => res.send(data))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Upload multiple data records */

module.exports = router;
