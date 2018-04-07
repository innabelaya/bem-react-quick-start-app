import React, {Fragment} from 'react';
import { Bem, decl } from 'bem-react-core';

import Square from 'b:Square';

const WIN_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export default decl({
    block: 'Board',

    willInit() {
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    },

    content() {
      const winner = this.calculateWinner(this.state.squares);

      return (
        <Fragment>
            <Bem elem="Status">{
              winner?
                  'Winner: ' + winner :
                  'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
            }</Bem>

            {
                [
                    this.renderRow(0),
                    this.renderRow(3),
                    this.renderRow(6)
                ]
            }
        </Fragment>
      );
    },

    onSquareClick(i) {
        const squares = this.state.squares.slice();

        if (this.calculateWinner(squares) || squares[i])
           return;

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    },

    renderRow(i) {
        return <Bem elem="Row" key={i}>{[
          this.renderSquare(i),
          this.renderSquare(i + 1),
          this.renderSquare(i + 2)
        ]}</Bem>
    },

    renderSquare(i) {
      return <Square key={i} onClick={() => this.onSquareClick(i)}>
          {this.state.squares[i]}
        </Square>;
    },

    calculateWinner(squares) {
        for (let i = 0; i < WIN_LINES.length; i++) {
            const [a, b, c] = WIN_LINES[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
               return squares[a];
            }
        }

        return null;
    }
});
