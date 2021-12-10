import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DashboardActionCard = (props) => {
    return (
        <div className="dkDashboardActionCard">
            <div className="card">
                <div className="card-header bg-primary">
                    <h4 className="text-white">{props.cardTitle}</h4>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <div className="mb-3">
                                    <Link
                                        to={props.listViewUrl || "/dashboard"}
                                    >
                                        View {props.linkLabel || "Null"} List
                                    </Link>
                                </div>
                                <div className="mb-3">
                                    <Link
                                        to={props.createViewUrl || "/dashboard"}
                                    >
                                        Create {props.linkLabel || "Null"}
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DashboardActionCard.propTypes = {
    cardTitle: PropTypes.string,
    listViewUrl: PropTypes.string,
    createViewUrl: PropTypes.string,
    linkLabel: PropTypes.string,
};

export default DashboardActionCard;
