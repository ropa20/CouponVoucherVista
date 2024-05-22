import { executePost } from "../ServiceMethods";

export const VerifyUserMobile = async (mobile) => {
  try {
    const mobileVerification = await executePost(
      "/vms/validateChangeMobileOtp",
      mobile
    );
    const mobileVerificationData = mobileVerification.data
      ? mobileVerification.data
      : {};
    return mobileVerificationData;
  } catch (err) {
    return false;
  }
};
