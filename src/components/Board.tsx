import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 300px;
  width: 300px;
`;

const TurnIndicator = styled.h1``;

const Cell = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 1);
  font-size: 50px;
`;

interface IBoard {
  curPlayer: string;
  onMove: (cellId: number) => void;
  // moveNumber: number;
  // undoStack: IMoveData[];
  cellStates: string[];
  winner: string | null;
  isDraw: boolean;
}

function Board({
  curPlayer,
  onMove,
  // moveNumber,
  cellStates,
  winner,
  isDraw,
}: IBoard) {
  // const handleCellClick = (index: number) => {
  //   if (cellStates[index] !== "") return;
  //   if (moveNumber > 9) return;
  //   if (winner) return;
  //   const moveData: IMoveData = {
  //     player: curPlayerBool,
  //     cellId: index,
  //     moveNumber,
  //   };
  //   onMove(moveData);
  // };

  const handleCellClick = (index: number) => {
    onMove(index);
  };

  return (
    <div>
      <TurnIndicator>
        {winner
          ? `Winner: ${winner}`
          : isDraw
          ? "It's a draw"
          : `Current Player: ${curPlayer}`}
      </TurnIndicator>
      <Container>
        {cellStates.map((text, index) => (
          <Cell key={index} onClick={() => handleCellClick(index)}>
            {text}
          </Cell>
        ))}
      </Container>
    </div>
  );
}

export default Board;
