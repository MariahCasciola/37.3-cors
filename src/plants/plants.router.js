const router = require("express").Router();
const controller = require("./plants.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const cors = require("cors");

router
  .route("/:plantId")
  .all(cors())
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .all(cors())
  .get(cors(), controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
