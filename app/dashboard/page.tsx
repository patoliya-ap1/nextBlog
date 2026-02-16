
import DashboardChart from "../components/DashboardChart";
import DashboardPanel from "../components/DashboardPanel";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardChart user={"john@gmail.com"} />
     <DashboardPanel />
    </div>
  );
};
export default Dashboard;
