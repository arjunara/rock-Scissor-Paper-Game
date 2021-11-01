import {Component} from 'react'
import {HiThumbUp, HiThumbDown} from 'react-icons/hi'

import AppPopup from '../AppPopUp'

import {
  AppBgContainer,
  GameHeader,
  MainHeading,
  ScoreContainer,
  ScoreText,
  PopupContainer,
  GameViewContainer,
  GameImageButton,
  ButtonImage,
  ResultContainer,
  ResultGameViewContainer,
  SelectionContainer,
  StatusContainer,
  GamerName,
  ResultStatusContainer,
  PlayAgainButton,
} from './styledComponents'

class GameViewPage extends Component {
  state = {
    score: 0,
    isGameStart: false,
    userSelectionId: '',
    opponentSelectionId: '',
    gameStatus: '',
  }

  onClickRock = () => {
    const {choicesList} = this.props
    this.setState(
      {
        userSelectionId: choicesList[0].id,
        opponentSelectionId: choicesList[Math.floor(Math.random() * 3)].id,
      },
      () => this.renderResultStatus(),
    )
  }

  onClickScissors = () => {
    const {choicesList} = this.props
    this.setState(
      {
        userSelectionId: choicesList[1].id,
        opponentSelectionId: choicesList[Math.floor(Math.random() * 3)].id,
      },
      () => this.renderResultStatus(),
    )
  }

  onClickPaper = () => {
    const {choicesList} = this.props
    this.setState(
      {
        userSelectionId: choicesList[2].id,
        opponentSelectionId: choicesList[Math.floor(Math.random() * 3)].id,
      },
      () => this.renderResultStatus(),
    )
  }

  onClickPlayAgainButton = () => {
    this.setState({
      isGameStart: false,
      userSelectionId: '',
      opponentSelectionId: '',
      gameStatus: '',
    })
  }

  renderResultStatus = () => {
    const {userSelectionId, opponentSelectionId} = this.state
    let resultStatus
    console.log(userSelectionId)
    console.log(opponentSelectionId)
    if (userSelectionId === opponentSelectionId) {
      resultStatus = 'IT IS DRAW'
    } else if (userSelectionId === 'ROCK') {
      if (opponentSelectionId === 'SCISSORS') {
        resultStatus = 'YOU WON'
      } else {
        resultStatus = 'YOU LOSE'
      }
    } else if (userSelectionId === 'SCISSORS') {
      if (opponentSelectionId === 'PAPER') {
        resultStatus = 'YOU WON'
      } else {
        resultStatus = 'YOU LOSE'
      }
    } else if (userSelectionId === 'PAPER') {
      if (opponentSelectionId === 'ROCK') {
        resultStatus = 'YOU WON'
      } else {
        resultStatus = 'YOU LOSE'
      }
    }
    if (resultStatus === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameStatus: 'YOU WON',
        isGameStart: true,
      }))
    }
    if (resultStatus === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameStatus: 'YOU LOSE',
        isGameStart: true,
      }))
    }
    if (resultStatus === 'IT IS DRAW') {
      this.setState({gameStatus: 'IT IS DRAW', isGameStart: true})
    }
  }

  renderGameResultView = () => {
    const {userSelectionId, opponentSelectionId, gameStatus} = this.state
    const {choicesList} = this.props
    const userObj = choicesList.find(each => each.id === userSelectionId)
    const opponentObj = choicesList.find(
      each => each.id === opponentSelectionId,
    )
    const winIconStyle = {color: '#44ed11'}
    const loseIconStyle = {color: '#f23030'}
    let element
    if (gameStatus === 'YOU WON') {
      element = <HiThumbUp size={35} style={winIconStyle} />
    } else if (gameStatus === 'YOU LOSE') {
      element = <HiThumbDown size={35} style={loseIconStyle} />
    } else {
      element = null
    }
    return (
      <>
        <ResultContainer>
          <ResultGameViewContainer>
            <SelectionContainer>
              <GamerName>YOU</GamerName>
              <ButtonImage src={userObj.imageUrl} alt="your choice" />
            </SelectionContainer>
            <SelectionContainer>
              <GamerName>OPPONENT</GamerName>
              <ButtonImage src={opponentObj.imageUrl} alt="opponent choice" />
            </SelectionContainer>
          </ResultGameViewContainer>
          <ResultStatusContainer>
            <StatusContainer>
              <GamerName>{gameStatus}</GamerName>
              {element}
            </StatusContainer>
            <PlayAgainButton
              type="button"
              onClick={this.onClickPlayAgainButton}
            >
              PLAY AGAIN
            </PlayAgainButton>
          </ResultStatusContainer>
        </ResultContainer>
      </>
    )
  }

  renderGameView = () => {
    const {choicesList} = this.props
    return (
      <GameViewContainer>
        <GameImageButton data-testid="rockButton" onClick={this.onClickRock}>
          <ButtonImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
        </GameImageButton>
        <GameImageButton
          data-testid="scissorsButton"
          onClick={this.onClickScissors}
        >
          <ButtonImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
        </GameImageButton>
        <GameImageButton data-testid="paperButton" onClick={this.onClickPaper}>
          <ButtonImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
        </GameImageButton>
      </GameViewContainer>
    )
  }

  render() {
    const {isGameStart, score} = this.state
    return (
      <AppBgContainer>
        <GameHeader>
          <MainHeading>
            Rock <br />
            Paper
            <br />
            Scissors
          </MainHeading>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreText score>{score}</ScoreText>
          </ScoreContainer>
        </GameHeader>
        {isGameStart ? this.renderGameResultView() : this.renderGameView()}
        <PopupContainer>
          <AppPopup />
        </PopupContainer>
      </AppBgContainer>
    )
  }
}

export default GameViewPage
