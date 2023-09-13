import styled from 'styled-components'

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
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const RegisterImage = styled.img`
  width: 350px;
`

export const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`
export const RegistrationHeading = styled.h1`
  font-family: Roboto;
  color: #334155;
  font-size: 45px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px;
`
export const LabelElement = styled.label`
  font-family: Roboto;
  font-size: 15px;
  color: #475569;
  margin-bottom: 13px;
`
export const InputElement = styled.input`
  outline: none;
  border: 1px solid #cbd5e1;
  background-color: transparent;
  padding: 6px;
  font-size: 15px;
  height: 40px;
  padding-left: 10px;
  font-family: Roboto;
  color: #cbd5e1;
  width: 350px;
  margin-bottom: 13px;
  border-radius: 5px;
`
export const SelectElement = styled.select`
  outline: none;
  border: 1px solid #cbd5e1;
  background-color: transparent;
  padding: 6px;
  font-size: 15px;
  height: 40px;
  padding-left: 10px;
  font-family: Roboto;
  margin-bottom: 13px;
  border-radius: 5px;
`
export const Options = styled.option`
  font-family: Roboto;
`

export const RegisterNowButton = styled.button`
  font-family: Roboto;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 7px;
  height: 35px;
  width: 110px;
  cursor: pointer;
  margin-top: 20px;
`
export const ErrorDesc = styled.p`
  font-family: Roboto;
  color: #ff0b37;
`
