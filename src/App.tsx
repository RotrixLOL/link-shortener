import React from 'react'
import { Form } from './components/Form'

const App = () => {
  return (
    <div className="text-center mt-10 bg-slate-800" id="app-div">
      <main>
        <h2 className="mb-5 text-4xl">Link Shortener</h2>
        <Form />
      </main>

      <footer className="mt-8 text-md">
        Made with <span>💙</span> By <a href="https://github.com/RotrixLOL" target="_blank" className="underline decoration-blue-500 rounded">RotrixX</a>
      </footer>
    </div>
  )
}

export default App