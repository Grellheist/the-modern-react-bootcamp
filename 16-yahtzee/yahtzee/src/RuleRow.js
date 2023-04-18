import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
    render() {
        const { name, score, doScore, description } = this.props;
        const undScore = this.props.score === undefined;
        return (
            <tr className={`RuleRow RuleRow-${undScore ? "active" : "disabled"}`}
                onClick={undScore ? doScore : null}>
                <td className="RuleRow-name">{name}</td>
                <td className="RuleRow-score">{undScore ? description : score}</td>
            </tr>
        )
    }
}

export default RuleRow;
