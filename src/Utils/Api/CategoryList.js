import { executePost } from "../ServiceMethods";

export const CategoryList = async () => {
  const data = {
    city_id: 1,
  };
  try {
    const categorylist = await executePost("/vms/categorieslist", data);
    const CategoryListData = categorylist.data ? categorylist.data : [];
    return CategoryListData;
  } catch (error) {
    return false;
  }
};
