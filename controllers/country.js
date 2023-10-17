import Country from "../models/countryModel.js";

// create a country name
export const createCountry = async (req, res) => {
  const { name } = req.body;

  try {
    const existingCountry = await Country.findOne({ name });
    if (existingCountry) {
      return res.status(400).json({ message: "Country name already exists" });
    }

    const result = await Country.create({ name });
    res.status(200).json({ message: "Country created successfully", result });
  } catch (error) {
    console.log("Error creating Country", error.message);
  }
};

// get Countrys
export const getAllCountries = async (req, res) => {
  try {
    const country = await Country.find();
    res.status(200).json({ country });
  } catch (error) {
    console.log("Error getting Countrys", error.message);
  }
};