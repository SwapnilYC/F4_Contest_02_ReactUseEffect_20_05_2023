import React from "react";

function TableContent({ details }) {
  console.log('Inside tablecontent.js');
  return (
    <>
      <tr>
        <td><img src={details.image} alt={details.name} /></td>
        <td>{details.name}</td>
        <td>{details.symbol.toUpperCase()}</td>
        <td>{details.current_price}</td>
        <td>{details.total_volume}</td>
        <td>{details.market_cap}</td>
        <td>{details.market_cap_change_percentage_24h} %</td>
      </tr>
    </>
  );
}

export default TableContent;