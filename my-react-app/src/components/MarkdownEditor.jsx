import {useEffect, useRef} from 'react';
import Editor from '@toast-ui/editor';

function MarkdownEditor({onContentChange}) {

    const editorRef = useRef(null);

        useEffect(() => {
            const editor = new Editor({
                el: editorRef.current,
                height: '500px',
                initialEditType: 'markdown',
                previewStyle: 'vertical'
            });
            editor.addHook('change', () => {
                const textFromEditor = editor.getMarkdown();
                onContentChange(textFromEditor);
       });
            return () => editor.destroy();
    },[]);

    return (
       <div className='editorWrapper'>
           <div ref={editorRef}></div>
       </div>
    );
}
export default MarkdownEditor;