import { executePost } from "../ServiceMethods";

export const ResetUserEmail = async (email) => {
  console.log("email", email);
  try {
    const EmailVerification = await executePost(
      "/vms/changeEmailAddress",
      email
    );
    const EmailVerificationData = EmailVerification.data
      ? EmailVerification.data
      : {};
    return EmailVerificationData;
  } catch (err) {
    return false;
  }
};
