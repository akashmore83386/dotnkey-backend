import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    CountryId: {
      type: String,
      ref: "Country",
    },
    StateId: {
      type: String,
      ref: "State",
    },
    CityId: {
      type: String,
      ref: "City",
    },
    LanguageIds: [
      {
        type: String,
        ref: "Language",
      },
    ],
    isActive: {
      type: "boolean",
      default: true,
    },
    CreatedDate: {
      type: Date,
      default: Date.now(),
    },
    ModifiedDate: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

customerSchema.pre(/^find/, function (next) {
  this.populate({
    path: "CountryId StateId CityId LanguageIds",
  });
  next();
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;