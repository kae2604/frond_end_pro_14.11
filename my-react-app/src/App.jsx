import MarkdownEditor from './components/MarkdownEditor.jsx';

function App() {

    const handleContentChange = (textFromEditor) => {
        console.log(textFromEditor)
    };

    return (
        <div>
            <MarkdownEditor onContentChange={handleContentChange} />
        </div>
    );
}
export default App;

