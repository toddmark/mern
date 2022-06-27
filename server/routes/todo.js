
const { response } = require("express");
const express = require("express");
const recordRoutes = express.Router();
const ObjectId = require("mongodb").ObjectId;

// This will help us connect to the database
const dbo = require("../db/conn");

recordRoutes.route("/api/addtodo").post(async function (req, response) {

  let db_connect = dbo.getDb();
  let resObj = {
    text: req.body.text,
    id: req.body.id,
    complete: req.body.complete
  };

  db_connect.collection('todos').insertOne(resObj, function(err,res) {
    if(err) throw err;
    response.json(res);
  })
});

module.exports = recordRoutes;
