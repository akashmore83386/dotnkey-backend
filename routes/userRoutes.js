import express from "express";
import {
  createUser,
  deleteCustomer,
  getAll,
  updateCustomer,
} from "../controllers/customer.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/", getAll);
router.put("/updateCustomer/:id", updateCustomer);
router.delete("/deleteCustomer/:id", deleteCustomer);

export default router;