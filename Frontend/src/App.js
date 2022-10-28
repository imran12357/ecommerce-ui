
import react from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/layout/Header/Header.js'
import Footer from './components/layout/Footer/Footer.js'
import Home from './components/layout/Home/Home.js'
import webfont from 'webfontloader'

function App() {

  react.useEffect(()=>{
    webfont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })

  },[])

  return <Router>
     <Header/>
    <Home/>
    <Footer/>
    <Routes>
    <Route exact path="/" component={Home}/>
   
    </Routes>
  </Router>
}

export default App;
