import React,{useState} from 'react';
import Axios from "axios";





function App() {
    const[drink,setDrink] = useState("");

    const getDrink=()=>{
        Axios.get("http://127.0.0.1:8000/drinks/").then(
         (response) => {
           console.log(response);
           alert(response);
           setDrink(response.data.id);
        }
      );
    };
    
    return (
    <div>
        hello mates <button onClick={getDrink}>get drink </button>
        {drink}
    </div>
   );
  }

    

export default App;