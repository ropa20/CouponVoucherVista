import { executePost } from "../ServiceMethods";

export const OtherDealsApi = async (data) => {
  console.log(data, "dataother");
  try {
    const otherdeals = await executePost("/vms/otherDealsBasedOnCity", data);
    const otherdealsData = otherdeals.data ? otherdeals.data : {};
    return otherdealsData;
  } catch (error) {
    return false;
  }
};
