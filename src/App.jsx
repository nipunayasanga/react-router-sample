
import './App.css'
import HeaderContent from './components/HeaderContent/HeaderContent'
import BodyContent from './components/BodyContent/BodyContent'
import ParentComp from './components/ParentComp'


function App() {
 

  return (
    <>
      <div id="wrapper">
        <HeaderContent />
        <BodyContent>
          <h3>Home Page</h3>
        </BodyContent>
        <ParentComp/>
        
      </div>
    
    </>
  )
}

export default App
