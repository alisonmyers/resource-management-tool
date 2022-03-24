import React from 'react';
import { CKEditor } from 'ckeditor4-react';

function TextEntry() {
    return (
        <div className="App">
            <h2>Enter your notes here</h2>
            <CKEditor
                initData={<p>Start entering your notes!</p>}
            />
        </div>
    );
}

export default TextEntry;