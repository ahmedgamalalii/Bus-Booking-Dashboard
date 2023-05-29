const router = require("express").Router();
const connection = require("../db/dbConnection");
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper




// LIST routes
 router.get("", async (req, res) => {
    const query = util.promisify(connection.query).bind(connection);
    let search = "";
    if (req.query.search) {
      // QUERY PARAMS
      search = `where \`from\` LIKE '%${req.query.search}%' or \`to\` LIKE '%${req.query.search}%'`;
    }
    const busroutes = await query(`select * from routes ${search}`);
    res.status(200).json(busroutes);
  });
  





  
  
  module.exports = router;




