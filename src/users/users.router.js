const router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const cors = require("cors");

const corsGet = cors({ methods: "GET" });

router
  .route("/:userId")
  .get(corsGet, controller.read)
  .options(corsGet)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(corsGet, controller.list)
  .options(corsGet)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
