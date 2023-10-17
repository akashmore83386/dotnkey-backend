import mongoose from "mongoose";

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    StateId: {
      type: String,
      ref: "State",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const City = mongoose.model("City", citySchema);

export default City;