import { useState } from "react";
import "./App.css";
import Search from './Components/Search'
import Nav from './Components/Nav'
import Container from './Components/Container'
import InnerContainer from './Components/InnerContainer'
import FoodList from './Components/FoodList'
import FoodDetails from './Components/FoodDetails'

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId] = useState("656329")
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
