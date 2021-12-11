import React from "react";
import PropTypes from "prop-types";

const DataTable = (props) => {
    function renderTableHeader() {
        return props.tableHeaderColumns.map((item) => (
            <th scope="col">{item}</th>
        ));
    }

    // function renderTableRows() {
    //     return props.tableBodyRows.map((item) => (
    //         <tr>
    //             <th scope="row">{item.id}</th>
    //             <td>{item.name}</td>
    //             <td>{item.company}</td>
    //             <td>{item.location}</td>
    //             <td>
    //                 <button className="btn btn-primary btn-sm">View</button>
    //             </td>
    //             <td>
    //                 <button className="btn btn-warning btn-sm">Edit</button>
    //             </td>
    //             <td>
    //                 <button className="btn btn-danger btn-sm">Delete</button>
    //             </td>
    //         </tr>
    //     ));
    // }
    return (
        <div className="rsDataTable">
            <table className="table">
                <thead>
                    <tr>{renderTableHeader()}</tr>
                </thead>
                <tbody>{props.tableBodyRows}</tbody>
            </table>
        </div>
    );
};

DataTable.propTypes = {
    tableHeaderColumns: PropTypes.array.isRequired,
    tableBodyRows: PropTypes.node,
};

export default DataTable;
