import { executePost } from "../ServiceMethods";

export const CreatePswdApi = async (data) => {
  try {
    const CreatePswd = await executePost("/vms/resetPassword_U", data);
    const CreatePswdRes = CreatePswd.data ? CreatePswd.data : {};
    return CreatePswdRes;
  } catch (error) {
    return false;
  }
};
