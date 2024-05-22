import { executePost } from "../ServiceMethods";

export const RelatedDealsApi = async (data) => {
  try {
    const relateddeals = await executePost(
      "/vms/voucherCouponRelatedDeals",
      data
    );
    const relateddealsData = relateddeals.data ? relateddeals.data : {};
    return relateddealsData;
  } catch (error) {
    return false;
  }
};
