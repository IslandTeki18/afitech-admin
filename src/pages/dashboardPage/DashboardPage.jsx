import React from "react";
import DashboardActionCard from "../../components/dashboardActionCard/DashboardActionCard";
import "./DashboardPage.scss";

const DashboardPage = () => {
    return (
        <div className="dkDashboardPage">
            <div className="container py-5 fullScreen">
                <h1 className="pb-4">Welcome back!</h1>
                <div className="row">
                    <div className="col-4 mb-2">
                        <DashboardActionCard
                            cardTitle="Blogs"
                            listViewUrl="/blog-list"
                            createViewUrl="/blog/create"
                            linkLabel="Blog"
                        />
                    </div>
                    <div className="col-4 mb-2">
                        <DashboardActionCard
                            cardTitle="Testimonials"
                            listViewUrl="/testimonial-list"
                            createViewUrl="/testimonial/create"
                            linkLabel="Testimonial"
                        />
                    </div>
                    <div className="col-4 mb-2">
                        <DashboardActionCard
                            cardTitle="Services"
                            listViewUrl="/service-list"
                            createViewUrl="/service/create"
                            linkLabel="Services"
                        />
                    </div>
                    <div className="col-4 mb-2">
                        <DashboardActionCard
                            cardTitle="Projects"
                            listViewUrl="/project-list"
                            createViewUrl="/project/create"
                            linkLabel="Project"
                        />
                    </div>
                    <div className="col-4 mb-2">
                        <DashboardActionCard
                            cardTitle="Employees"
                            listViewUrl="/employee-list"
                            createViewUrl="/employee/create"
                            linkLabel="Employee"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
