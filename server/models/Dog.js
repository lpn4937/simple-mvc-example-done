const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

const DogScema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    min: 0,
    required: true,
  },

  age: {
    type: Number,
    min: 0,
  },

  createdData: {
    type: Date,
    default: Date.now,
  },

});

DogScema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

DogScema.statics.readAllDogs = callback => DogModel.find(callback);

DogModel = mongoose.model('Dog', DogScema);

module.exports = { DogModel, DogScema };
