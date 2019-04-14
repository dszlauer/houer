module.exports = {
  getHouses: (req, res, next) => {
    req.app
      .get("db")
      .get_houses()
      .then(houses => {
        res.status(200).json(houses);
      })
      .catch(err => console.log("Could not retrive info from DB", err));
  },

  addHouse: (req, res, next) => {
    const { name, address, city, state, zip } = req.body;

    const db = req.app.get("db");
    db.add_house([name, address, city, state, zip])
      .then(houses => {
        res.status(200).json(houses);
      })
      .catch(err => console.log("Cannot process ADD", err));
  },

  deleteHouse: (req, res, next) => {
    const db = req.app.get("db");
    const { property_id } = req.params;

    db.delete_house([property_id])
      .then(houses => {
        res.status(200).json(houses);
      })
      .catch(err => console.log("Could not delete", err));
  }
};
