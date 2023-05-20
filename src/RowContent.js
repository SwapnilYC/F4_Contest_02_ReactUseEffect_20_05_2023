import React from "react";

// function RowContent(props) {
function RowContent(props) {
  const { details } = props;
  return (
    <tr>
      <td><img src={details.image} alt={details.name} width={"25rem"} /></td>
      <td>{details.name}</td>
      <td>{details.symbol.toUpperCase()}</td>
      <td>{details.current_price}</td>
      <td>{details.total_volume}</td>
      <td style={{ color: Number(details.market_cap_change_percentage_24h) < 0 ? 'red' : 'green' }}>{details.market_cap_change_percentage_24h} %</td>
      <td>${details.market_cap}</td>
      {props.children}
    </tr>
  );
}

export default RowContent;

// { key: , details: { } }