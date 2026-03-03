'use strict';

import Model from "./MVS/model.js";
import Controller from "./MVS/controller.js";
import View from "./MVS/view.js";

const userModel = {
    id: Number,
    name: String,
    email: String,
    phone: String,
    company: String
}


const modelInstance = new Model();
const viewInstance = new View();
const controllerInstance = new Controller(modelInstance, viewInstance);
controllerInstance.init();

