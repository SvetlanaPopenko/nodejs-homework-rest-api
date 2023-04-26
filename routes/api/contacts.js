const router = require("express").Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const {schemas} = require("../../models/contact");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put("/:id", isValidId, validateBody(schemas.updateSchema), ctrl.updateContact);

router.patch("/:id/favorite", validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

module.exports = router;
