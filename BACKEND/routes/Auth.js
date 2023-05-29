const router = require("express").Router();
const connection = require("../db/dbConnection");
const { body, validationResult } = require("express-validator");
const util = require("util"); 
const bcrypt = require("bcrypt");
const crypto = require("crypto");


class Auth{ 
  constructor(database){this.database = database}
  Login()
  { return (body("email").isEmail().withMessage("please enter a valid email!"),
body("password")
  .isLength({ min: 8, max: 12 })
  .withMessage("password should be between (8-12) character"),
async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await this.database.get_users(req.body.email)
    if (user.length == 0) {
      res.status(404).json({
        errors: [
          {
            msg: "email or password not found !",
          },
        ],
      });
      return;
    }


    const checkPassword = await bcrypt.compare(
      req.body.password,
      user[0].password
    );
    if (checkPassword) {
      delete user[0].password;
      res.status(200).json(user[0]);
    } else {
      res.status(404).json({
        errors: [
          {
            msg: "email or password not found !",
          },
        ],
      });
    }
  } catch (err) {
    res.status(500).json({ err: err });
  }
})
}
    Register(){
      return(body("email").isEmail().withMessage("please enter a valid email!"),
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
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          
          const query = util.promisify(connection.query).bind(connection);
          const checkEmailExists = await this.database.get_users(req.body.email)
          
          if (checkEmailExists.length > 0) {
            res.status(400).json({
              errors: [
                {
                  msg: "email already exists !",
                  
                },
              ],
            });
            return;
          }
          
    
          const userData = {
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            phone: req.body.phone,
            token: crypto.randomBytes(16).toString("hex"), 
          };
    
          await this.database.create_users(userData)
          delete userData.password;
          res.status(200).json(userData);
        } catch (err) {
          res.status(500).json({ err: err });
        }
      })
    }
}


class mySql_auth{
  constructor(){
    this.query = util.promisify(connection.query).bind(connection);
  }
  async get_users(email){
    const user = await this.query("select * from users where email = ?", [
      email,
    ])
    return( user )
  }
  async create_users(userData){
    return(await this.query("insert into users set ? ", userData))
  }
}
const auth = new Auth(new mySql_auth());
router.post(
  "/login",auth.Login()
);

router.post(
  "/register",
  auth.Register()
);

module.exports = router;
