import { executeGET } from "../ServiceMethods";

export const CountryList = async () => {
  try {
    const countrylist = await executeGET("/vms/listofcountries");
    const CountryListData = countrylist.data ? countrylist.data : [];
    return CountryListData;
  } catch (error) {
    return false;
  }
};
