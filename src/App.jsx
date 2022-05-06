import './App.css'
import StoreProvider from './provider/StoreProvider'
import CategoryToDo from "./components/CategoryToDo";
import CategoryForm from "./components/CategoryForm";
import { Navbar } from "./components/Styles/NavBar";
import { Footer } from "./components/Styles/Footer";

function App() {

  return (
    <StoreProvider>
      <Navbar />
      <div className="m-5 ">
      <CategoryForm/>  
      </div> 
      <div className="m-5 ">
      <CategoryToDo/> 
      </div>
      <Footer/>  
    </StoreProvider>
  )
}

export default App
