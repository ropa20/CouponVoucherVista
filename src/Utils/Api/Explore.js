import { executePost } from "../ServiceMethods";
import { userId } from "../LocalStorage";

const uid = userId();

export const exploreApi = async (data) => {
  console.log(data,"api")

  try {
    const ExploreData = await executePost("/vms/voucherCouponLastest", data);
    const exploredata = ExploreData.data ? ExploreData.data : [];
    return(exploredata);
  } catch (error) {
    return false;
  }
};
