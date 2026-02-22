import Controller from "./notes/Controller.js";
import View from "./notes/View.js";
import Model from "./notes/Model.js";

const modelNote = {
    id: Number,
    title: String,
    category: ["Work" , "Study" , "Personal"],
    important: Boolean,
    createdAt: String
};

const modelInstance = new Model('notes',  modelNote);
const viewInstance = new View();

const controllerInstance = new Controller(modelInstance, viewInstance);
controllerInstance.init();

