import express from "express";
import cors from "cors";
import connectDB from "./mongoose.js";

import userRoutes from "./routes/userRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";
import stateRoutes from "./routes/stateRoute.js";
import countryRoutes from "./routes/countryRoutes.js";
import languageRoutes from "./routes/languageRoutes.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

connectDB();

//define routes
app.use(userRoutes);
app.use(cityRoutes);
app.use(stateRoutes);
app.use(countryRoutes);
app.use(languageRoutes);

const PORT = process.env.PORT || 5000;

// listen on port
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});