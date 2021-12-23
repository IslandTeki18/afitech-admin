import React from "react";
import PropTypes from "prop-types";

const DataTable = (props) => {
  function renderTableHeader() {
    return props.tableHeaderColumns.map((item, idx) => (
      <th scope="col" key={idx}>
        {item}
      </th>
    ));
  }

  return (
    <div
      className={`rsDataTable ${props.isResponsive ? "table-responsive" : ""}`}
    >
      <table className="table table-striped">
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{props.tableBodyRows}</tbody>
      </table>
    </div>
  );
};

DataTable.propTypes = {
  isResponsive: PropTypes.bool,
  tableHeaderColumns: PropTypes.array.isRequired,
  tableBodyRows: PropTypes.node,
};

export default DataTable;
