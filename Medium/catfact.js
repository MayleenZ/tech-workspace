
import axios from "axios";
import { useEffect, useState } from "react";
function CatFact() {
  const [catfact, setCatfact] = useState(null);

useEffect(() => {
  const getCatFact = async () => {
    try {
      const response = await axios.get(`https://meowfacts.herokuapp.com/?id=${query})}`);
      setCatfact(response.data);
      //the first line is from axios to make a get request to the url and return cat fact data using the setcatfact function.
      //This is why we use usestate bc our data will change
    } catch (error) {
      console.error(error);
    }
  };
  getCatFact()
}, []);

  return (
    <div>
      <h1 className='cat-fact'>Cat Fact</h1>
      <form>
        <label>Cat Fact Number: </label>
        <input type = "number"/>
        <input type = "submit"/>
      </form>
      {catfact && <p className='cat-fact'>{catfact.data}</p>}
    </div>
  );
}

export default CatFact;