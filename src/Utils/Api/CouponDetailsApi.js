import { executePost } from "../ServiceMethods";
export const CouponDetailsApi = async (couponId) => {
  try {
    const coupondetail = await executePost("/vms/viewCouponDetails", couponId);
    const coupondetailData = coupondetail.data ? coupondetail.data : {};
    return coupondetailData;
  } catch (error) {
    return false;
  }
};
