import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import {useState} from 'react';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
  
// } from "react-router-dom";
// import {a,b,c}  from './m2';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg: message,
      type:type
    });
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==="dark"){
      setmode("light");
      document.title="TextUtils - Home";
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert('Light mode has been enabled',"success")
    }
    else{
      document.body.style.backgroundColor="#042743";
      document.body.style.color="white";
      setmode("dark");
      document.title="TextUtils - Home - DarkMode";
      showAlert('Dark mode has been enabled',"success")
      
    }
  };
  return (
    <>
 {/* <Router> */}
{/* <Navbar /> */}
<Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
<div className="container my-3">
{/* <About/> */}
{/* <Switch> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
         
        
          {/* <Route path="/"> */}
            
<TextForm showAlert={showAlert} heading="Enter your text to analyze below:" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
</div>
{/* </Router> */}
    </>
  );
}

export default App;
