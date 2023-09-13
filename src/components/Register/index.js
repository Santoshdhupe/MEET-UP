import {Component} from 'react'
import MeetupContext from '../../MeetupContext/contentContext'
import {
  BgContainer,
  WebsiteLogo,
  AppContainer,
  RegisterImage,
  RegistrationContainer,
  RegistrationHeading,
  FormContainer,
  LabelElement,
  InputElement,
  RegisterNowButton,
  SelectElement,
  Options,
  ErrorDesc,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {nameInput: '', activeTopicId: topicsList[0].id, showError: false}

  onchangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onchangeTopic = event => {
    this.setState({activeTopicId: event.target.value})
  }

  onSubmitSuccess = () => (
    <MeetupContext.Consumer>
      {value => {
        const {nameInput, activeTopicId} = this.state
        const {setName, setTopic} = value
        return {setName: setName(nameInput), setTopic: setTopic(activeTopicId)}
      }}
    </MeetupContext.Consumer>
  )

  onsubmitForm = event => {
    event.preventDefault()
    const {nameInput} = this.state
    if (nameInput === '') {
      this.setState({showError: true})
    } else {
      this.onSubmitSuccess()
    }
  }

  render() {
    const {nameInput, activeTopicId, showError} = this.state
    return (
      <BgContainer>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
        <AppContainer>
          <RegisterImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <RegistrationContainer>
            <RegistrationHeading>Let us join</RegistrationHeading>
            <FormContainer onSubmit={this.onsubmitForm}>
              <LabelElement htmlFor="name">NAME</LabelElement>
              <InputElement
                type="text"
                id="name"
                placeholder="Your name"
                onChange={this.onchangeNameInput}
                value={nameInput}
              />
              <LabelElement htmlFor="topic">TOPICS</LabelElement>
              <SelectElement
                id="topic"
                value={activeTopicId}
                onChange={this.onchangeTopic}
              >
                {topicsList.map(each => (
                  <Options key={each.id} value={each.id}>
                    {each.displayText}
                  </Options>
                ))}
              </SelectElement>
              <RegisterNowButton type="submit">Register Now</RegisterNowButton>
            </FormContainer>
            {showError && <ErrorDesc>Please enter your name</ErrorDesc>}
          </RegistrationContainer>
        </AppContainer>
      </BgContainer>
    )
  }
}

export default Register
