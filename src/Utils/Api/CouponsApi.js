import { executePost } from "../ServiceMethods";
import { userId } from "../LocalStorage";

const uid = userId();

export const CouponsApi = async () => {
  const data = {
    user_id: 18,
  };

  try {
    const couponsData = await executePost("/vms/myCoupons", data);
    const CouponsData = couponsData.data ? couponsData.data : [];
    return CouponsData;
  } catch (error) {
    return false;
  }
};
