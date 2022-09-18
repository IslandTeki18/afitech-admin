import React from "react";
import DashboardActionCard from "../../components/dashboardActionCard/DashboardActionCard";
import "./DashboardPage.scss";

const DashboardPage = () => {
  return (
    <div className="dkDashboardPage">
      <div className="container py-5 fullScreen">
        <h1 className="pb-4">Welcome back!</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <DashboardActionCard
              cardTitle="Blogs"
              listViewUrl="/blogs/list"
              createViewUrl="/blog/create"
              linkLabel="Blog"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <DashboardActionCard
              cardTitle="Testimonials"
              listViewUrl="/testimonials/list"
              createViewUrl="/testimonial/create"
              linkLabel="Testimonial"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <DashboardActionCard
              cardTitle="Services"
              listViewUrl="/services/list"
              createViewUrl="/service/create"
              linkLabel="Services"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <DashboardActionCard
              cardTitle="Projects"
              listViewUrl="/projects/list"
              createViewUrl="/project/create"
              linkLabel="Project"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <DashboardActionCard
              cardTitle="Employees"
              listViewUrl="/employees/list"
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
