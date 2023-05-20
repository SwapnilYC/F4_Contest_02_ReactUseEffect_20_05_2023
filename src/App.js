import React, { useEffect, useState } from "react";
import axios from 'axios';
import TableContent from "./Component/TableContent";

function App() {
  const [rowData, setRowData] = useState([]);
  let api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  // In useEffect hook we are just calling the fetchApiData
  useEffect(() => {
    // fetchApiData(api);
    fetch(api)
      .then(res => res.json())
      .then(data => setRowData(data))
      .then(() => { console.log(rowData) })
      .catch((error) => console.log(error))
    console.log(rowData);
  }, [])

  // fetch api data is a function which will set the setRowdata  function to fetch value
  async function fetchApiData(url) {
    const urlData = await axios.get(url);  // will return an object 
    setRowData(urlData.data);

    //----------------------------------------------------------
    // fetch url method using promise chaining
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => setRowData(data))
    //   .then(() => { console.log(rowData) })
    //   .catch((error) => console.log(error))

    //----------------------------------------------------------
    //  fetching data using async await method
    // try {
    //   const res = await fetch(url);
    //   const data = await res.json();
    //   setRowData(data);
    //   console.log(rowData);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
            <th>Total Market Cap($)</th>
            <th>Market Cap Change In Percentage</th>
          </tr>
        </thead>
        <tbody>
          {/* {table rows will be append here} */}
          {rowData.map((coinDataRow) => {
            <TableContent key={coinDataRow.id} details={coinDataRow}></TableContent>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
