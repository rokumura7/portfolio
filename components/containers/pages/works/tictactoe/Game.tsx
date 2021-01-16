import React from 'react'
import Board from './Board'
import { calculateWinner } from './Calculater'

type GameState = {
  history: { squares: string[] }[]
  xIsNext: boolean
  stepNumber: number
}
type GameProps = {}

class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    }
  }

  handleClick = (i: number) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    })
  }

  jumpTo = (step: number) =>
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    })

  moves = (history: { squares: string[] }[]) =>
    history.map((_step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

  render = () => {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)
    const status = winner
      ? 'Winner: ' + winner
      : 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O')
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{this.moves(history)}</ol>
        </div>
      </div>
    )
  }
}

export default Game
