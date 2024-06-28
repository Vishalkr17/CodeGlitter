import React, { useState } from 'react';
import "./style.css";
import CodeEditor from './components/CodeEditor';

function App() {
  const [editorLanguage, setEditorLanguage] = useState('javascript')

  const handleChange = (e) => {
    setEditorLanguage(e.target.value);
  }

  return (
    <main className='container'>
      <div className="container_content">
        <h1>react-simple-code-editor</h1>
        <p>A simple no-frills code editor with syntax highlighting</p>
        <a className='button' href="https://github.com/Vishalkr17/CodeGlitter">Github</a>
        <div>
          <label htmlFor="language">Select language: </label>
          <select
            id="language"
            name="language"
            value={editorLanguage}
            onChange={handleChange}
          >
            <option value="javascript">JavaScript</option>
            <option value="xml">XML</option>
            <option value="css">CSS</option>
          </select>
          <CodeEditor language={editorLanguage} />
        </div>
      </div>
    </main>
  );
}

export default App;
