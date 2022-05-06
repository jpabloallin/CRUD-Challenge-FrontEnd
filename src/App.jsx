import './App.css'
import StoreProvider from './provider/StoreProvider'
import CategoryToDo from "./components/CategoryToDo";
import CategoryForm from "./components/CategoryForm";
import ToDoForm from './components/ToDoForm';

function App() {

  return (
    <StoreProvider>
      <h1>Hello from my app</h1>
      <CategoryForm/>   
      <CategoryToDo/>   
    </StoreProvider>
  )
}

export default App
