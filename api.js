// api.js

import express from "express";
import {getCollection} from "../test-database/database.objects.js"; // Comment out when testing Docker container creation

const app = express();
const port = process.env.PORT || 8080;

/* 
# For Docker Testing
app.get("/", (req,res) => {
  res.json({ message: `Docker is working! =)` });
});
*/

app.get("/collection", async (req,res) => {
  const collection = await getCollection();
  res.send(collection);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/*
# Functions to Add
* Get a Card
* Post a Card
* Error Handling
*/