const express = require("express");

const UserModel = require("../src/models/user.models");

const app = express();
app.use(express.json());

app.use((req, res, next) =>{
    console.log(`Request Type: ${req.method} at ${new Date()}`);
    next();
})

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`));
