import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import '../style.css';


const CodeEditor = (props) => {
    const [content, setContent] = useState('');
    
    const handleKeyDown = (e) =>{
        let value = content 
        let selStartPos = e.currentTarget.selectionStart;
        console.log(e.currentTarget);

        if(e.key === 'Tab'){
            value = value.substring(0, selStartPos)+'    '+ value.substring(selStartPos, value.length);
            e.currentTarget.selectionStart = selStartPos + 3;
            e.currentTarget.selectionEnd = selStartPos+4;
            e.preventDefault();
            setContent(value);
        }
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [props.language, content]);

  return (
    <div className='code-edit-container'>
        <textarea
            className='code-input'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <pre className="code-output">
        <code className={`language-${props.language}`}>{content}</code>
        </pre>
    </div>
  )
}

export default CodeEditor