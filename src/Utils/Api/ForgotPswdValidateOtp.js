import { executePost } from "../ServiceMethods";

export const ForgotPswdValidateOtp = async (data) => {
  try {
    const validateOtp = await executePost("/vms/validateOtpForgot", data);
    const validateOtpData = validateOtp.data ? validateOtp.data : {};
    return validateOtpData;
  } catch (error) {
    return false;
  }
};
