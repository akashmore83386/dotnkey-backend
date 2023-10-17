import Language from "../models/languageModel.js";

// create a language name
export const createLanguage = async (req, res) => {
  const { name } = req.body;

  try {
    const existingLanguage = await Language.findOne({ name });
    if (existingLanguage) {
      return res.status(400).json({ message: "Language name already exists" });
    }

    const result = await Language.create({ name });
    res.status(200).json({ message: "Language created successfully", result });
  } catch (error) {
    console.log("Error creating language", error.message);
  }
};

// get languages
export const getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.status(200).json({ languages });
  } catch (error) {
    console.log("Error getting languages", error.message);
  }
};