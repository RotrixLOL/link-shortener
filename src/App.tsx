import React from 'react'
import { Form } from './components/Form'

const App = () => {
  return (
    <div className="text-center mt-16 bg-slate-800" id="app-div">
      <main>
        <h2 className="mb-5 text-4xl">Link Shortener</h2>
        <Form />
      </main>

      <footer className="mt-8 text-md">
        Made with <span className="ml-0 mr-1">💙</span> By <a href="https://github.com/RotrixLOL" target="_blank" className="bg-gradient-to-tr from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded p-1">RotrixX</a>
      </footer>
    </div>
  )
}

export default App