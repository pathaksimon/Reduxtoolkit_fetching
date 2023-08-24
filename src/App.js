import './App.css'
import React from 'react'
import {Provider} from 'react-redux'
import ProjectsList from './components/ProjectsList'
import store from './features/Reducer/index'

// This is the list (static data) used in the application. You can move it to any component if needed.

// Replace your code here

function App() {
  return (
    <Provider store={store}>
      <ProjectsList />
    </Provider>
  )
}

export default App
