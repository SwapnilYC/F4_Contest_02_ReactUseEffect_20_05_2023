import React from "react";

// function RowContent(props) {
function RowContent({ details }) {
  console.log("details");
  console.log('Inside Row content.js');
  return (
    <tr>
      <td><img src={details.image} alt={details.name} /></td>
      <td>{details.name}</td>
      <td>{details.symbol}</td>
      <td>{details.current_price}</td>
      <td>{details.total_volume}</td>
      <td>${details.market_cap}</td>
      <td style={{ color: Number(details.market_cap_change_percentage_24h) < 0 ? 'red' : 'green' }}>{details.market_cap_change_percentage_24h} %</td>
    </tr>
  );
}

export default RowContent;

// { key: , details: { } }