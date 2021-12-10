import React from "react";
import DashboardActionCard from "../../components/dashboardActionCard/DashboardActionCard";
import "./DashboardPage.scss";

const DashboardPage = () => {
    return (
        <div className="dkDashboardPage">
            <div className="container py-5 fullScreen">
                <h1 className='pb-4'>Welcome back!</h1>
                <div className="row">
                    <div className="col-4 mb-2">
                        <DashboardActionCard
                            cardTitle="Blogs"
                            listViewUrl="/blogs-list"
                            createViewUrl="/blogs/create"
                            linkLabel="Blog"
                        />
                    </div>
                    <div className="col-4 mb-2">
                        <DashboardActionCard
                            cardTitle="Testimonials"
                            listViewUrl="/testimonials-list"
                            createViewUrl="/testimonials/create"
                            linkLabel="Testimonial"
                        />
                    </div>
                    <div className="col-4 mb-2">
                        <DashboardActionCard
                            cardTitle="Services"
                            listViewUrl="/services-list"
                            createViewUrl="/services/create"
                            linkLabel="Services"
                        />
                    </div>
                    <div className="col-4 mb-2">
                        <DashboardActionCard
                            cardTitle="Projects"
                            listViewUrl="/projects-list"
                            createViewUrl="/projects/create"
                            linkLabel="Project"
                        />
                    </div>
                    <div className="col-4 mb-2">
                        <DashboardActionCard
                            cardTitle="Employees"
                            listViewUrl="/employees-list"
                            createViewUrl="/employees/create"
                            linkLabel="Employee"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
