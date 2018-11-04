const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmail(data.title)) {
    errors.title = "Job title is required";
  }

  if (Validator.isEmail(data.company)) {
    errors.company = "Company is required";
  }
  if (Validator.isEmail(data.from)) {
    errors.from = "Start date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};