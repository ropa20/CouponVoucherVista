import { executePost } from "../ServiceMethods";
import { userId } from "../LocalStorage";

const id = userId();

export const dashboardApi = async () => {
  const data = {
    user_id: parseInt(id),
    city_id: "1",
  };

  try {
    const dashboardData = await executePost("/vms/endUserDashboard", data);
    const DashboardData = dashboardData.data ? dashboardData.data : {};
    return DashboardData;
  } catch (error) {
    return false;
  }
};
