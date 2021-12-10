import React from "react";
import DashboardActionCard from "../../components/dashboardActionCard/DashboardActionCard";
import "./DashboardPage.scss";

const DashboardPage = () => {
    return (
        <div className="dkDashboardPage">
            <div className="container py-5">
                <h1>Welcome Home!</h1>
                <div className="row">
                    <div className="col">
                        <DashboardActionCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
