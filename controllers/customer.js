import Customer from "../models/customerModel.js";

// create a customer
export const createUser = async (req, res) => {
  const {
    FullName,
    Email,
    Password,
    CountryId,
    StateId,
    CityId,
    LanguageIds,
    isActive,
  } = req.body;

  try {
    const oldUser = await Customer.findOne({ Email });
    if (oldUser) {
      return res.status(400).json({ message: "Customer already exists" });
    }

    const result = await Customer.create({
      FullName,
      Email,
      Password,
      CountryId,
      StateId,
      CityId,
      LanguageIds,
      isActive,
    });

    res.status(201).json({ result });
  } catch (error) {
    console.log("Error creating customer", error.message);
  }
};

// get all customers
export const getAll = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({ customers });
  } catch (error) {
    console.log("Error getting customers", error.message);
  }
};

// update a customer by id
export const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ updatedCustomer });
  } catch (error) {
    res.status(404).json({ error: "Customer Not Found" });
  }
};

// delete a customer by id
export const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: "Customer Not Found" });
  }
};