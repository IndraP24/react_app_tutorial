import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/* This component renders a single button as a Square */
class Square extends React.Component {
    render() {
        return(
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

/* This component renders all the 9 Squares in the game */
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />
    }
}

/* This component renders the created Board with placeholder values for the game play */
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );