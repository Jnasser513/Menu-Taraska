const Task = require("@internal/models/Task");
const ServiceResponse = require("@internal/classes/ServiceResponse");

const service = {};

//Insert method
service.insert = async (text) => { 
    try { 
        const task = new Task({
            text: text
        });

        const taskSaved = await task.save();

        if (!taskSaved) return new ServiceResponse(false);
        return new ServiceResponse(true);
    }
    catch (error) { 
        throw error;
    }
}

//Find all method
service.findAll = async () => { 
    try {
        const tasks = await Task.find({});

        return new ServiceResponse(true, tasks);
    } catch (error) {
        throw error;
    }
}

//Find one by ID method
service.findOneById = async (id) => {
    try {
        const task = await Task.findById(id);

        if (!task) return new ServiceResponse(false);
        return new ServiceResponse(true, task);

    } catch (error) {
        throw error;
    }
}

//Update method
service.updateText = async (task, text) => { 
    try {
        task.text = text;

        const taskUpdated = await task.save();

        if (!taskUpdated) return new ServiceResponse(false);
        return new ServiceResponse(true);
    } catch (error) {
        throw error;
    }
}

//Toggle active method
service.toggleActive = async (task) => { 
    try {
        const newValue = !(task.active);
        task.active = newValue;

        const taskUpdated = await task.save();

        if (!taskUpdated) return new ServiceResponse(false);
        return new ServiceResponse(true);
    } catch (error) {
        throw error;
    }
}

//Delete one by ID method
service.deleteOneById = async (id) => { 
    try {
        const taksDeleted = await Task.findByIdAndDelete(id);
        
        if (!taksDeleted) return new ServiceResponse(false);
        return new ServiceResponse(true);
    } catch (error) {
        throw error;
    }
}

module.exports = service;