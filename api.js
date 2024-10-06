// api.js

import express from "express";
import {getCollection} from "../test-database/database.objects.js";

const app = express();
const port = 8080;

app.get("/collection", async (req,res) => {
  const collection = await getCollection();
  res.send(collection);
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})

/*
# Functions to Add
* Get a Card
* Post a Card
* Error Handling
*/