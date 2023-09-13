import {
  BgContainer,
  WebsiteLogo,
  AppContainer,
  HomeHeading,
  HomeDescription,
  HomeRegisterButton,
  LinkItem,
  HomeImage,
} from './styledComponents'

const Home = () => (
  <BgContainer>
    <WebsiteLogo
      src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
      alt="website logo"
    />
    <AppContainer>
      <HomeHeading>Welcome to Meetup</HomeHeading>
      <HomeDescription>Please register for the topic</HomeDescription>
      <LinkItem to="/register">
        <HomeRegisterButton>Register</HomeRegisterButton>
      </LinkItem>
      <HomeImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </AppContainer>
  </BgContainer>
)

export default Home
