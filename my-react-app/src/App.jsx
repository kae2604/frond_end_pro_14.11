import {Component} from 'react'
import './App.css'
import Card from './components/Card.jsx'

class App extends Component {
    render() {
        return(
            <div className="App">
                <Card title = 'hi' />
                <Card text = 'how are you?'/>
                <Card title = 'hi' text = 'how are you?'/>
            </div>

        )
    }
}
export default App;


