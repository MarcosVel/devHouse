import Reserve from "../models/Reserve";

class ReserveController {
  async store(req, res) {
    const { user_id } = req.headers;
    const { house_id } = req.params;
    const { date } = req.body;

    let reserve = await Reserve.create({
      user: user_id,
      house: house_id,
      date,
    });

    reserve = await Reserve.populate(reserve, { path: "house" });
    reserve = await Reserve.populate(reserve, { path: "user" });

    return res.json(reserve);
  }
}

export default new ReserveController();
