import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const WebsiteLogo = styled.img`
  height: 45px;
  width: 160px;
  margin: 25px;
`
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeHeading = styled.h1`
  font-family: Roboto;
  color: #334155;
  font-size: 40px;
  margin-bottom: 0px;
`

export const HomeDescription = styled.p`
  font-family: Roboto;
  color: #334155;
  font-size: 23px;
  margin-bottom: 0px;
`
export const HomeRegisterButton = styled.button`
  font-family: Roboto;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 10px;
  height: 35px;
  width: 110px;
  cursor: pointer;
  margin: 15px;
`

export const HomeImage = styled.img`
  height: 250px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`
