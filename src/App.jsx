import './App.css'
import StoreProvider from './provider/StoreProvider'
import CategoryForm from './components/CategoryForm'

function App() {

  return (
    <StoreProvider>
      <h1>Hello from my app</h1>
      <CategoryForm/>      
    </StoreProvider>
  )
}

export default App
