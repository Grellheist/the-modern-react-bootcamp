import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.25
    };

    constructor(props) {
        super(props);
        this.state = {
            board: this.createBoard(),
            hasWon: false
        };
    }

    createBoard() {
        const board = [];
        for (let y = 0; y < this.props.nrows; y++) {
            const row = [];
            for (let x = 0; x < this.props.ncols; x++) {
                row.push(Math.random() < this.props.chanceLightStartsOn);
            }
            board.push(row);
        }
        return board;
    }

    flipCellsAround(coord) {
        const { ncols, nrows } = this.props;
        const board = this.state.board;
        let [y, x] = coord.split("-").map(Number);
        function flipCell(y, x) {
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
        }

        flipCell(y, x); // flip initial cell
        flipCell(y, x - 1); // flip left
        flipCell(y, x + 1); // flip right
        flipCell(y - 1, x); // flip below
        flipCell(y + 1, x); // flip above

        let hasWon = board.every(row => row.every(cell => !cell));

        this.setState({ board, hasWon });
    }

    render() {
        if (this.state.hasWon) {
            return <h1>You Won!</h1>;
        }
        return (
            <table className="Board">
                <tbody>
                    {this.state.board.map((row, y) => (
                        <tr key={y}>
                            {row.map((cell, x) => (
                                <Cell
                                key={`${y}-${x}`}
                                isLit={cell}
                                flipCellsAroundMe={() => this.flipCellsAround(`${y}-${x}`)}/>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Board;
