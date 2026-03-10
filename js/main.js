'use strict';

import Model from "./models/UsersModel.js";
import Controller from "./controllers/UsersController.js";
import View from "./views/UsersView.js";

const userModel = {
    id: Number,
    name: String,
    email: String,
    phone: String,
    company: Object
};

const modelInstance = new Model();
const viewInstance = new View();
const controllerInstance = new Controller(modelInstance, viewInstance);
controllerInstance.init();

