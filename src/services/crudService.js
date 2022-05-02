const create = async (model, data) => {
    try {
        const response = await new model(data).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}

const destroy = async (model, id) => {
    try {
        const response = await model.findByIdAndDelete(id);
        return response;
    } catch (err) {
        console.log(err);
    }
}

const update = async (model, id, data) => {
    try {
        const response = await model.findByIdAndUpdate(id, data);
        return response;
    } catch (err) {
        console.log(err);
    }
}

const getAll = async (model) => {
    try {
        const response = await model.find();
        return response;
    } catch (err) {
        console.log(err);
    }
}

const getById = async (model, id) => {
    try {
        const response = await model.findById(id);
        return response;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    create,
    destroy,
    update,
    getAll,
    getById
}