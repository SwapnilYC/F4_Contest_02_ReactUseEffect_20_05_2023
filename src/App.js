import React, { useEffect, useState } from "react";
// import axios from 'axios';
import RowContent from "./RowContent";

function App() {
  const [rowData, setRowData] = useState([]);
  let api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  // In useEffect hook we are just calling the fetchApiData
  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => setRowData(data))
      .then(() => { console.log(rowData) })
      .catch((error) => console.log(error))
    // console.log(rowData);
  }, [])

  // fetch api data is a function which will set the setRowdata  function to fetch value
  // async function fetchApiData(url) {
  //   const urlData = await axios.get(url);  // will return an object 
  //   setRowData(urlData.data);
  // setRowData(urlData);



  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>Total Volume</th>
          <th>Market Cap Change</th>
          <th>Total Market Cap($)</th>
        </tr>
      </thead>
      <tbody>
        {rowData.map(coinDataRow => {
          return <RowContent key={coinDataRow.id} details={coinDataRow}></RowContent>
        })}
      </tbody>
    </table>

  );
}

export default App;
