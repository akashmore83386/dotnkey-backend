import express from "express";
import { createCity, getAllCitiesByState } from "../controllers/city.js";

const router = express.Router();

router.post("/createCity", createCity);
router.get("/cities/:stateId", getAllCitiesByState);

export default router;