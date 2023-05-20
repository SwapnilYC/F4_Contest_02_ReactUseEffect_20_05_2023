Project Overview (100 Marks)
Task:

  1. To fetch data from an api, handle promises using either .then or async await.
  2. Get the data as soon as the page loads, use useEffect and store the data in a state using UseState.
  3. The link for the GET api is [API](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false)
  4. This will return an array of 10 objects, each containing a name,id,image,symbol, current_price,total_volume.
  5. Create a component for table row in a separate file and pass the object as a prop in that file.
  6. Render the ui as shown in the image. Use map to map that table row and put it inside a table object.
  7. Also give keys while mapping.

Marking Scheme
  1. API Data Fetching (40 marks)
      Correctly fetch data from the provided API link using fetch or axios library
      Handle promises using either .then or async/await approach
      Successfully retrieve data from the API and store it in a variable
      
  2. Data Handling and State Management (25 marks)
      Use useEffect hook to trigger data fetching as soon as the page loads
      Utilize useState hook to store the fetched data in a state variable
      Ensure the data is stored accurately and can be accessed within the component

  3. Rendering and Component Creation (20 marks)
      Create a separate file for the table row component
      Pass the object containing necessary data as a prop to the table row component
      Render the UI as shown in the provided image
  4. Mapping and Keys (10 marks)
      Use the map method to iterate over the array of objects and render table rows    
      Provide unique keys for each rendered table row to optimize rendering performance
  5. Deployment (5 marks)
  

figma: https://storage.googleapis.com/accio-digital-ocean-data/media/Module%206%20Contest%202%20image.jpeg