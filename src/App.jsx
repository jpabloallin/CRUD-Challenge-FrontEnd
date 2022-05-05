import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import StoreProvider from './provider/StoreProvider'
import ListOfToDo from './components/ListOfToDo'
import Form from './components/Form'

function App() {

  return (
    <StoreProvider>
      <h1>Hello from my app</h1>
      <Form/>
      <ListOfToDo/>
    </StoreProvider>
  )
}

export default App
