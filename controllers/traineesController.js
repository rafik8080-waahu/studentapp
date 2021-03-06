const Trainee = require("../models/traineeSchema");

const createTrainee = async (req, res) => {
  const newTrainee = new Trainee({
    name: req.body.name,
    destination: req.body.destination,
    email: req.body.email,
    dob: req.body.dob,
  });

  await newTrainee.save();
  res.status(202).json(newTrainee);
};
//get all trainees
const getAllTrainees = async (req, res) => {
  const trainees = await Trainee.find();
  res.json(trainees);
};

//get a trainee
const getSingleTrainee = async (req, res) => {
  const trainee = await Trainee.findById(req.params._id);
  res.json(trainee);
};

//update a trainee
const updateTrainee = async (req, res) => {
  const foundTrainee = await Trainee.findById(req.params._id);
  if (foundTrainee) {
    foundTrainee.name = req.body.destination;
    foundTrainee.email.req.body.email;
    foundTrainee.dob.req.body.dob;

    const updatedTrainee = await foundTrainee.save();
    res.json({ updateTrainee: updateTrainee });
  }
};
//delete a trainee
const deleteTrainee = async(req, res) =>{
  const foundTrainee = await Trainee.findById(req.params._id)
  if(foundTrainee){
    foundTrainee.remove()
  
  }
}

module.exports = {
  createTrainee,
  getAllTrainees,
  getSingleTrainee,
  updateTrainee,
};
