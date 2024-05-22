import { executePost } from "../ServiceMethods";

export const ResetUserMobile = async (mobile) => {
  console.log("mobile", mobile);
  try {
    const mobileVerification = await executePost(
      "/vms/changeMobileNumber",
      mobile
    );
    const mobileVerificationData = mobileVerification.data
      ? mobileVerification.data
      : {};
    console.log();
    return mobileVerificationData;
  } catch (err) {
    return false;
  }
};
