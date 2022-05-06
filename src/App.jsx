import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import StoreProvider from './provider/StoreProvider'
import ListOfCategories from './components/ListOfCategories'
import Form from './components/CategoryForm'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <StoreProvider>
      <h1>Hello from my app</h1>
      <Form/>
      <ListOfCategories/>
      <ToDoList/>
      
    </StoreProvider>
  )
}

export default App
