const router = require("express").Router();

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const shemas = require("../../schemas/contacts");

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(shemas.addSchema), ctrl.addContact);

router.delete("/:id", ctrl.removeContact);

router.put("/:id", validateBody(shemas.updateSchema), ctrl.updateContact);

module.exports = router;
