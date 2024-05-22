import { executePost } from "../ServiceMethods";

export const SignUP = async (SignUpCredentials) => {
  try {
    const UserSignUp = await executePost("/vms/SignUp", SignUpCredentials);
    const UserSignUpData = UserSignUp.data.status ? UserSignUp.data.status : {};
    return UserSignUpData;
  } catch (error) {
    return false;
  }
};
