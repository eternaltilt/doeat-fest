const router = require("express").Router();

router.route("/").get((req, res) => {
  req.session.destroy();
  if (!req.session) {
    const AdminSession = "";
    return res.json({ AdminSession });
  } else {
    return res.json({ message: "Ошибка удаления сессии!" });
  }
});
module.exports = router;
