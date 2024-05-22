import { executePost } from "../ServiceMethods";

const dummyresponse = {
  first_name: "Sid",
  last_name: "Sid",
  message: "Your Profile Updated",
  status: 200,
  success: true,
};

export const UpdateName = async (data) => {
  console.log(data);
  try {
    const updatename = await executePost("/vms/updateProfile", data);
    const updateName = updatename.data ? updatename.data : dummyresponse;
    return updateName;
  } catch (error) {
    return false;
  }
};
