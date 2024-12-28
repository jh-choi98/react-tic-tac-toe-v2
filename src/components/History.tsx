import styled from "styled-components";

const Ol = styled.ol`
  margin-top: 70px;
  margin-left: 30px;
`;

const Li = styled.li`
  font-size: 25px;
  margin-bottom: 8px;
`;

const Button = styled.button`
  font-size: 18px;
  background: none;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 1);
  padding: 3px 8px;
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

interface IHistory {
  // numMoves: number;
  // cellStates: string[];
  // undoStack: IMoveData[];
  // redoStack: IMoveData[];
  history: string[][];
  curIndex: number;
  traverseHistory: (arg0: number) => void;
}

function History({ history, curIndex, traverseHistory }: IHistory) {
  // const handleTraverseHistory = (index: number) => {
  //   traverseHistory(index);
  // };
  return (
    <>
      <Ol type="1">
        {history.map((_, index) => (
          <Li key={index}>
            <Button onClick={() => traverseHistory(index)}>
              {index === 0 ? "Go to game start" : `Go to move ${index}`}
              {index === curIndex ? " (current)" : ""}
            </Button>
          </Li>
        ))}
      </Ol>
    </>
  );
}

export default History;
