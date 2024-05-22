import { executePost } from "../ServiceMethods";

export const VerifyUserEmail = async (email) => {
  try {
    const emailVerification = await executePost(
      "/vms/validateChangeEmailOtp",
      email
    );
    const emailVerificationData = emailVerification.data
      ? emailVerification.data
      : {};
    return emailVerificationData;
  } catch (err) {
    return false;
  }
};
