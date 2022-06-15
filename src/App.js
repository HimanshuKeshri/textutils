import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
         msg:message,
         type:type
    })
    setTimeout(()=>{  
      setAlert(null);
    },1500);
  }

  

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("dark mode has been enable","success");
      document.title='TextUtils - Dark Mode';

      setInterval(()=>{
        document.title='TextUtiles is Amazing Mode';
      },2000);
      setInterval(()=>{
        document.title='Install TextUtiles Now';
      },1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enable","success");
      document.title='TextUtils - Light Mode';
    }
  };
  return (
    <>
     {/* <Router>              */}
     {/* <Navbar title="TextUtils" aboutText="about Us" />  */}
      {/* <Navbar />   */}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className='container my-3'>
     <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
     {/* <Routes> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/" element={<TextForm />} /> */}
      {/* </Routes> */}
     {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
    </Switch> */}
    </div>
    {/* </Router> */}
    



























    {/* <div className="blank">keshri</div>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </nav>
      {/* <img src="C:\Users\HP\Pictures\Camera Roll\WIN_20201104_22_03_01_Pro.jpg" alt='no img'/> */}
      {/* <div  className='container'>
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam dolorum incidunt dicta neque, reprehenderit aspernatur doloribus, aliquam ducimus itaque tempora enim natus! Veniam aliquam soluta fugit laboriosam tempora quas!
        </p>
  </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1>Hi i am Himanshu Keshri</h1>                
          <p>
           <h4>1st project</h4>                                                  
          </p>
          <a
            href="https://t.me/Movies_By_Keshri">Join Telegram</a> 
            <br>
            </br>
          <a 
            href="https://www.youtube.com/channel/UClrEJ8RBwXrwKJprHjs0mag">youtube</a>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */} 
    </>
  );
}

export default App;
