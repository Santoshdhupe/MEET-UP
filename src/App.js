import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MeetupContext from './MeetupContext/contentContext'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

class App extends Component {
  state = {name: '', topic: ''}

  setName = nameInput => {
    this.setState({name: nameInput})
  }

  setTopic = topicInput => {
    this.setState({topic: topicInput})
  }

  render() {
    const {name, topic} = this.state
    console.log(name, topic)
    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          setName: this.setName,
          setTopic: this.setTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
