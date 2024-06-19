import { Suspense } from 'react'
import './App.css'
import { Sidebar } from './components/sidebar'
import { Header } from './components/header'
// import {Reactflow} from './components/reactflow'

function App() {

  return (
    <>
      <h1>Main</h1>
      <Suspense fallback={<div>Loading App 1...</div>}>
        <Sidebar />
        {/* <Reactflow /> */}
      </Suspense>
      <Suspense fallback={<div>Loading App 2...</div>}>
        <Header />
      </Suspense>
    </>
  )
}

export default App
