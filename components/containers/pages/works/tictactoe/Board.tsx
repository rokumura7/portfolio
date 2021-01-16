import React from 'react'
import Square from './Square'

type BoardProps = {
  squares: string[]
  onClick: (i: number) => void
}

class Board extends React.Component<BoardProps> {
  renderSquare = (i: number) => (
    <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />
  )

  render = () => (
    <div>
      <div className="flex">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="flex">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="flex">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
