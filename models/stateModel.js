import mongoose from "mongoose";

const stateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    CountryId: {
      type: String,
      ref: "Country",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

stateSchema.pre(/^find/, function (next) {
  this.populate({
    path: "CountryId",
  });
  next();
});

const State = mongoose.model("State", stateSchema);

export default State;