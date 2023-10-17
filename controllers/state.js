import State from "../models/stateModel.js";

// create a country name
export const createState = async (req, res) => {
  const { name, CountryId } = req.body;

  try {
    const existingState = await State.findOne({ name });
    if (existingState) {
      return res.status(400).json({ message: "State name already exists" });
    }

    const result = await State.create({ name, CountryId });
    res.status(200).json({ message: "State created successfully", result });
  } catch (error) {
    console.log("Error creating State", error.message);
  }
};

// get States
export const getStates = async (req, res) => {
  try {
    const state = await State.find();
    res.status(200).json({ state });
  } catch (error) {
    console.log("Error getting States", error.message);
  }
};