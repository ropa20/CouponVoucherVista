import { executePost } from "../ServiceMethods";
import { getUser } from "../LocalStorage";

// const Data = {
//   user_id: 41,
// };

const dummyUserProfile = {
  email_address: "roparoy@meylah.com",
  first_name: "Ropa",
  last_name: "Roy",
  mobile_number: 9125777777,
};

export const UserProfile = async () => {
  const UserData = getUser();
  const UserId = { user_id: UserData.uid };

  try {
    const userprofile = await executePost("/vms/endUserProfile", UserId);
    const UserProfileData = userprofile.data
      ? userprofile.data
      : dummyUserProfile;
    return UserProfileData;
  } catch (err) {
    return false;
  }
};
