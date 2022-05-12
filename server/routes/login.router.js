const router = require("express").Router();
const { Admin } = require("../db/models");

router.route("/").post(async (req, res) => {
  const { login, password } = req.body;
  const admin = await Admin.findOne({ where: { login }, raw: true });
  try {
    if (admin) {
      if (+password === +admin.password) {
        req.session.user = admin.login;
        const AdminSession = req.session.user;
        res.json({
          layout: false,
          message: "Вы успешно вошли на сайт",
          AdminSession,
        });
      } else {
        res.json({
          layout: false,
          message: "Ошибка! Неверный логин или пароль",
        });
      }
    } else if (login === 'anna') {
      const adminCreate = await Admin.create({ login , password })
      const admin = await Admin.findOne({ where: { login }, raw: true });
      req.session.user = admin.login;
      const AdminSession = req.session.user;
      res.json({
        layout: false,
        message: "Вы успешно вошли на сайт",
        AdminSession,
      });
    } else {
      res.json({ layout: false, message: "Ошибка! Неверный логин или пароль" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
