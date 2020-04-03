import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: 0;
  }
`;
const Cell = styled.div`
  width: 3rem;
  height: 3rem;
  border-right: 1px solid black;
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    border-right: 0;
  }
`;

export default class Board extends React.Component {
  renderRow = (rowIndex) => {
    return (
      <Row>
        {new Array(2).fill('').map((_, colIndex) => {
          const index = (3 * (rowIndex - 1)) + colIndex;
          return <Cell key={index} >{this.props.board[index]}</Cell>;
        })}
        <Cell />
      </Row>
    );
  }

  render() {
    return (
      <Container>
        {this.renderRow(1)}
        {this.renderRow(2)}
        {this.renderRow(3)}
      </Container>
    );
  }
}
