import { executePost } from "../ServiceMethods";
import { setUserCredentials } from "../LocalStorage";

export const LoginUser = async (LoginCredentials) => {
  try {
    const UserLogin = await executePost("/vms/SignIn", LoginCredentials);
    const UserLoginData = UserLogin.data ? UserLogin.data : {};
    setUserCredentials(UserLoginData);
    return UserLoginData;
  } catch (err) {
    return false;
  }
};
