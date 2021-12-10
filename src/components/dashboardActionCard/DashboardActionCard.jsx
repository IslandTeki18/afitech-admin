import React from 'react';
import PropTypes from 'prop-types';

const DashboardActionCard = props => {
    return (
        <div className="dkDashboardActionCard">
            <div className="card">
                <div className="card-header bg-primary">
                    <h4>{props.cardTitle}</h4>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                
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
    
};

export default DashboardActionCard;