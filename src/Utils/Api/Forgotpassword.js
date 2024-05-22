import { executePost } from "../ServiceMethods";

export const Forgotpassword = async (ForgotPsswordCredentials) => {
  try {
    const forgotPassword = await executePost(
      "/vms/forgotPasswordnew",
      ForgotPsswordCredentials
    );
    const forgotpasswordData = forgotPassword.data ? forgotPassword.data : {};
    return forgotpasswordData;
    // console.log(forgotpasswordData);
  } catch (error) {
    return false;
  }
};
