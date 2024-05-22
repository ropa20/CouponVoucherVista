import { executePost } from "../ServiceMethods";
import { userId } from "../LocalStorage";
export const VouchersApi = async () => {
  const id = userId();
  const data = {
    user_id: userId(),
    // location: "kirkland",
  };
  try {
    const activeVouchers = await executePost("/vms/myVouchers", {
      user_id: 18,
    });
    const activeVouchersData = activeVouchers.data ? activeVouchers.data : {};
    return activeVouchersData;
  } catch (error) {
    return false;
  }
};
