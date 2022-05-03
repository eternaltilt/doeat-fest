const router = require("express").Router();

router.route("/").get((req, res) => {
  req.session.destroy();
  if (!req.session) {
    const AdminSession = "";
    res.json({ AdminSession });
  } else {
    res.json({ message: "Ошибка удаления сессии!" });
  }
});
module.exports = router;
