import './App.css';
import NewsContainer from './component/NewsContainer';
import Navbar from './component/Navbar';
import {useState} from "react"

function App() {

  const [secondCount, setSecondCount] = useState(0)
  function increatingSecondCount () {
    setSecondCount(secondCount + 1)
  }

  return (
    <div className="app-wrapper">
      <Navbar setSecondCount = {() => increatingSecondCount()  }/>
      <NewsContainer 
      secondCount = {secondCount}
      
      
      />
    </div>
  );
}

export default App;
