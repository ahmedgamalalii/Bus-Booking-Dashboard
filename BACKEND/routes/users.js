const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const bcrypt = require("bcrypt")
const connection = require("../db/dbConnection");
const router = require("express").Router();


class USERS{
  constructor(){

  }

  getUsers(){
    return(
      async (req, res) => {
        const query = util.promisify(connection.query).bind(connection);
        let search = "";
        if (req.query.search) {
          // QUERY PARAMS
          search = `where name LIKE '%${req.query.search}%' `;
        }
        const users = await query(`select * from users ${search}`);
        res.status(200).json(users);
      }
    )
  }

  deleteUser(){
    return(
      async (req, res) => {
        try {
          // 1- CHECK IF user EXISTS OR NOT
          const query = util.promisify(connection.query).bind(connection);
          const user = await query("select * from users where id = ?", [
            req.params.id,
          ]);
          if (!user[0]) {
            res.status(404).json({ ms: "user not found !" });
          }
          await query("delete from users where id = ?", [user[0].id]);
          res.status(200).json({
            msg: "user delete successfully",
          });
        } catch (err) {
          res.status(500).json(err);
        }
      }
    )
  }

  updateUser(){
    return(
      body("email").isEmail().withMessage("please enter a valid email!"),
      body("name")
        .isString()
        .withMessage("please enter a valid name")
        .isLength({ min: 10, max: 20 })
        .withMessage("name should be between (10-20) character"),
      body("password")
        .isLength({ min: 8, max: 12 })
        .withMessage("password should be between (8-12) character"),
      body("phone").isMobilePhone().withMessage("please enter a valid phone!"),
      async (req, res) => {
        try {
          // 1- VALIDATION REQUEST [manual, express validation]
          const query = util.promisify(connection.query).bind(connection);
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
      
          // 2- CHECK IF user EXISTS OR NOT
          const user = await query("select * from users where id = ?", [
            req.params.id,
          ]);
          if (!user[0]) {
            res.status(404).json({ msg: "user not found !" });
      
          }
          // 3- PREPARE user OBJECT
          const userData = {
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            phone: req.body.phone,
      
          };
          // 4- UPDATE user
          await query("update users set ? where id = ?", [userData, user[0].id]);
      
          return res.status(200).json({
            msg: "user updated successfully",
          });
        } catch (err) {
          res.status(500).json(err);
        }
      }
    )
  }
}

const users = new USERS()
router.get("", admin, users.getUsers());


//delete user
router.delete(
  "/:id",admin, // params
  users.deleteUser()
  
);

// UPDATE user [ADMIN]
router.put(
"/:id",admin, // params
users.updateUser()
);





module.exports = router;
