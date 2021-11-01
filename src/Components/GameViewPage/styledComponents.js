import styled from 'styled-components'

export const AppBgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const GameHeader = styled.div`
  border: 3px solid #ffffff;
  border-radius: 15px;
  width: 80%;
  @media screen and (max-width: 767px) {
    width: 90%;
    height: 160px;
    margin-top: 25px;
  }
  height: 180px;
  align-self: center;
  padding: 25px;
  margin-top: 42px;
  display: flex;
  justify-content: space-between;
`
export const MainHeading = styled.h1`
  font-family: 'Bree Serif';
  width: 40%;
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  line-height: 42px;
  margin-top: 0px;
  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 36px;
  }
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  max-width: 180px;
  border-radius: 15px;
  background-color: #ffffff;
`
export const ScoreText = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.score ? '38' : '28')}px;
  font-weight: ${props => (props.score ? '600' : '400')};
  color: #223a5f;
  margin-bottom: 0px;
  margin-top: 0px;
`
export const PopupContainer = styled.div`
  align-self: flex-end;
  margin-right: 35px;
  margin-top: 65px;
  margin-bottom: 65px;
`
export const GameViewContainer = styled.div`
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 40%;
  @media screen and (max-width: 1100px) {
    width: 56%;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
    margin-top: 35px;
    height: 40vh;
  }
  height: 60vh;
  margin-top: 46px;
`
export const GameImageButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;
  height: 160px;
  @media screen and (max-width: 767px) {
    height: 105px;
  }
`
export const ButtonImage = styled.img`
  height: 160x;
  width: 160px;
  @media screen and (max-width: 767px) {
    height: 100x;
    width: 100px;
  }
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ResultGameViewContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 50%;
  height: 50vh;
  margin-top: 46px;
  @media screen and (max-width: 767px) {
    width: 80%;
    height: 35vh;
  }
`
export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
`
export const GamerName = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 32px;
  color: #ffffff;
  margin-right: 12px;
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`
export const ResultStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`
export const PlayAgainButton = styled.button`
  border: none;
  background-color: #ffffff;
  border-radius: 10px;
  color: #223a5f;
  height: 45px;
  width: 150px;
  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #ebf70a;
    color: #171211;
  }
`
