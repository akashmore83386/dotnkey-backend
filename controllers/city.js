import City from "../models/cityModel.js";

// create a country name
export const createCity = async (req, res) => {
  const { name, StateId } = req.body;

  try {
    const existingCity = await City.findOne({ name });
    if (existingCity) {
      return res.status(400).json({ message: "City name already exists" });
    }

    const result = await City.create({ name, StateId });
    res.status(200).json({ message: "City created successfully", result });
  } catch (error) {
    console.log("Error creating City", error.message);
  }
};

// get Citys
export const getAllCitiesByState = async (req, res) => {
  try {
    const city = await City.find();
    res.status(200).json({ city });
  } catch (error) {
    console.log("Error getting Citys", error.message);
  }
};