import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiErrors } from "../utils/ApiErrors.js";

const registerUser = asyncHandler(async (req, res) => {
  const { email, fullName, username, password } = req.body;
  console.log("email", email);
  if (
    [fullName, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiErrors(400, "All Fields are required");
  }
});

export { registerUser };
