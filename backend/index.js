const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const Pusher = require("pusher");
const bodyParser = require('body-parser');


app.use(cors());
app.use(express.json());
const pusher = new Pusher({
  appId: "1512944",
  key: "4878a7a1d217f890b537",
  secret: "e998d0bb6e3605b02917",
  cluster: "mt1",
  useTLS: true
});
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "restaurant_manage",
});

app.get("/categories", (req, res) => {
  console.log("kdnfn");
  db.query("SELECT * FROM category where active=0", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    
    }
  });
});

app.get("/products", (req, res) => {
  console.log("kdnfn");
  db.query("SELECT * FROM products where active=0", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    
    }
  });
});




app.post("/create", (req, res) => {
const cart = req.body.cart;
const userinfo = req.body.userDetail;
console.log(req.body.cart);
pusher.trigger('chat', 'message', cart);
cart.forEach(element => {
console.log(element.id + userinfo.name);
const total = element.price * element.quantity;
db.query(
  "INSERT INTO `orders`(`orderid`, `tableid`, `name`, `contact`, `item`, `quantity`, `rate`, `total`, `status`) VALUES (?,?,?,?,?,?,?,?,?)",
  ['#25',userinfo.table_id, userinfo.name,userinfo.phone,element.title,element.quantity,element.price,total,'Cooking'],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      // res.send(cart)
    }
  }
);
});
});

/////category///

app.post("/createcategory", (req, res) => {
  const data = req.body.data;
  console.log(data);
  db.query(
    "INSERT INTO `category`(`name`) VALUES (?)",
    [data.name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // res.send(cart)
      }
    }
  );
  });

  app.post("/deletecategory", (req, res) => {
    const id = req.body.id;
    console.log(id);
    db.query(
      "UPDATE `category` SET `active`='1' WHERE id=?",
      [id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          // res.send(cart)
        }
      }
    );
    });

    app.get("/selectcategory", (req, res) => {
      const id = req.body.id;
      console.log(id);
      db.query("SELECT * FROM category where id=?",
      [id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        
        }
      });
    });

    app.post("/updatecategory", (req, res) => {
      const data = req.body.data;
      console.log(id);
      db.query("UPDATE `category` SET `name`=? WHERE id =?",
      [data.name,data.id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        
        }
      });
    });

    ////product///

    app.post("/createproduct", (req, res) => {
      const data = req.body.data;
      console.log(data);
      db.query(
        "INSERT INTO `products`(`title`, `category`, `cover`, `price`, `currency`, `time`, `ingredients`) VALUES (?,?,?,?,?,?,?)",
        [data.title,data.category,data.cover,data.price,data.currency,data.time,data.ingredients],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
            // res.send(cart)
          }
        }
      );
      });

      app.get("/selectproduct", (req, res) => {
        const id = req.body.id;
        console.log(id);
        db.query(
          "SELECT *  FROM `products` WHERE id=?",
          [id],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
              // res.send(cart)
            }
          }
        );
        });

        app.post("/updateproduct", (req, res) => {
          const data = req.body.data;
          const id = req.body.id;
          console.log(data);
          db.query("UPDATE `products` SET `title`=?,`category`=?,`cover`=?,`price`=?,`currency`=?,`time`=?,`ingredients`=? WHERE id= ?",
          [data.title,data.category,data.cover,data.price,data.currency,data.time,data.ingredients,id],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            
            }
          });
        });

        app.post("/deleteproduct", (req, res) => {
          const id = req.body.id;
          console.log(id);
          db.query(
            "UPDATE `products` SET `active`='1' WHERE id=?",
            [id],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send(result);
                // res.send(cart)
              }
            }
          );
          });

 //////orders////
 
 app.get("/selectorder", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.query(
    "SELECT * FROM `orders` WHERE id=?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // res.send(cart)
      }
    }
  );
  });

  app.post("/updateorder", (req, res) => {
    const data = req.body.data;
    const id = req.body.id;
    console.log(id);
    db.query(
      "UPDATE `orders` SET `tableid`=?,`name`=?,`contact`=?,`item`=?,`quantity`=?,`variant`=?,`rate`=?,`total`=?,`status`=? WHERE id = ?",
      [data.tableid,data.name,data.contact,data.item,data.quantity,data.variant,data.rate,data.total,data.status,id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          // res.send(cart)
        }
      }
    );
    });

    app.post("/deleteorder", (req, res) => {
      const id = req.body.id;
      console.log(id);
      db.query(
        "UPDATE `orders` SET `trash`='1' WHERE id=?",
        [id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
            // res.send(cart)
          }
        }
      );
      });




app.listen(3009, () => {
  console.log("Yey, your server is running on port 3009");
});
