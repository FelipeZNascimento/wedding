import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './index.css';

library.add(faChevronDown);

//
//function Square(props) {
//  return (
//    <button className="square" onClick={props.onClick}>
//      {props.value}
//    </button>
//  );
//}
//
//class Board extends React.Component {
//  renderSquare(i) {
//    return (
//      <Square
//        value={this.props.squares[i]}
//        onClick={() => this.props.onClick(i)}
//      />
//    );
//  }
//
//  render() {
//    return (
//      <div>
//        <div className="board-row">
//          {this.renderSquare(0)}
//          {this.renderSquare(1)}
//          {this.renderSquare(2)}
//        </div>
//        <div className="board-row">
//          {this.renderSquare(3)}
//          {this.renderSquare(4)}
//          {this.renderSquare(5)}
//        </div>
//        <div className="board-row">
//          {this.renderSquare(6)}
//          {this.renderSquare(7)}
//          {this.renderSquare(8)}
//        </div>
//      </div>
//    );
//  }
//}
//
//class Game extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      history: [
//        {
//          squares: Array(9).fill(null)
//        }
//      ],
//      stepNumber: 0,
//      xIsNext: true
//    };
//  }
//
//  handleClick(i) {
//    const history = this.state.history.slice(0, this.state.stepNumber + 1);
//    const current = history[history.length - 1];
//    const squares = current.squares.slice();
//    if (calculateWinner(squares) || squares[i]) {
//      return;
//    }
//    squares[i] = this.state.xIsNext ? "X" : "O";
//    this.setState({
//      history: history.concat([
//        {
//          squares: squares
//        }
//      ]),
//      stepNumber: history.length,
//      xIsNext: !this.state.xIsNext
//    });
//  }
//
//  jumpTo(step) {
//    this.setState({
//      stepNumber: step,
//      xIsNext: (step % 2) === 0
//    });
//  }
//
//  render() {
//    const history = this.state.history;
//    const current = history[this.state.stepNumber];
//    const winner = calculateWinner(current.squares);
//
//    const moves = history.map((step, move) => {
//      const desc = move ?
//        'Go to move #' + move :
//        'Go to game start';
//      return (
//        <li key={move}>
//          <button onClick={() => this.jumpTo(move)}>{desc}</button>
//        </li>
//      );
//    });
//
//    let status;
//    if (winner) {
//      status = "Winner: " + winner;
//    } else {
//      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
//    }
//
//    return (
//      <div className="game">
//        <div className="game-board">
//          <Board
//            squares={current.squares}
//            onClick={i => this.handleClick(i)}
//          />
//        </div>
//        <div className="game-info">
//          <div>{status}</div>
//          <ol>{moves}</ol>
//        </div>
//      </div>
//    );
//  }
//}
class MainScreen extends React.Component {
    renderArrow () {
        if (this.props.content) {
            return (

                <div className="down-arrow">
                    <a href="#mainContent">
                        <FontAwesomeIcon icon="chevron-down" />
                    </a>
                </div>
            )
        } else 
            return null;
    }
    render () {
        return (
            <div className="full-screen main-screen">
                <div className="inner-border">
                    {this.renderArrow()}
                </div>                
            </div>
        )
    }
}
class TopBar extends React.Component {
    render () {
        return (
            <div className={'shadowed top-bar ' + (!this.props.visible ? 'hidden' : '')}>
                Felipe & Giovanna
            </div>
        )
    }
}
class MainContent extends React.Component {
    renderTopBar() {
        if (!this.props.topbar)
            return null;
        
        return (
            <TopBar/>
        )
    }
    render () {
        return (
            <div className='main-content'>
                <TopBar visible={this.props.topbar}/>
                <div id="mainContent" className="full-screen">oi</div>
            </div>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: true,
            showTopBar:false
        };
    }
    
    handleScroll (e) {
        let showTopBar;
//        if (window.pageYOffset >= window.innerHeight)
        if (window.pageYOffset >= 5)
            showTopBar = true;
        else
            showTopBar = false;
        
        this.setState({
            showTopBar:showTopBar
        });
        return;
    }
    
    componentDidMount() {
        console.log("ue");
        window.addEventListener('scroll', () => this.handleScroll()); //Listener for scroll event
    }


    render () {
        return (
            <span>
                <MainScreen content={this.state.content}/>
                <MainContent topbar={this.state.showTopBar}/>
            </span>
        )
    }
}

// ========================================

ReactDOM.render(
    <Content />, 
    document.getElementById("root")
);