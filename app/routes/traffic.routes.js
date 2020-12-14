module.exports = app => {
  const traffics = require("../controllers/traffic.controller.js");

  var router = require("express").Router();
  // Retrieve all traffic
  router.get("/", traffics.findAll);

  app.use('/api/traffics', router);
};
