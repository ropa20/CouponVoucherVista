import { executePost } from "../ServiceMethods";
export const VoucherDetailsApi = async (voucherId) => {
  console.log("click");
  try {
    const voucherdetail = await executePost("/vms/voucherdetail", voucherId);
    const voucherdetailData = voucherdetail.data ? voucherdetail.data : {};
    return voucherdetailData;
  } catch (error) {
    return false;
  }
};
