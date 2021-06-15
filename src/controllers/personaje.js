const router = require("express").Router();
const handler = require("../handlers/personaje");

router.get("/", async (req, res, next) => {
  try {
    const all = await handler.getAll();
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({ message: "Error getting news" });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const personaje = await handler.getOne(id);
    res.status(200).json(personaje);
  } catch (error) {
    res.status(500).json({ message: "Error getting news" });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const personaje = req.body;
    const result = await handler.create(personaje);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error getting news" });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await handler.deleted(id);
    response === null ? res.status(400).send("no se pudo encontrar") : res.status(200).send('se elimino correctamente');
  } catch (error) {
    res.status(500).json({ message: "Error getting news" });
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const personaje = req.body
    const id = req.params.id;
    const response = await handler.update(personaje, id);
    res.json(response)
  } catch (error) {
    res.status(500).json({ message: "Error getting news" });
  }
})

module.exports = router;
