import { executePost } from "../ServiceMethods";
export const DownloadCouponApi = async (data) => {
  try {
    const downloadcoupon = await executePost("/vms/downloadCoupon", data);
    const downloadcouponData = downloadcoupon.data ? downloadcoupon.data : {};
    return downloadcouponData;
  } catch (error) {
    return false;
  }
};
