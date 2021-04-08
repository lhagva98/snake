import logo from './logo.svg';
import './App.css';

function BoardBox(props) {
  if(props.type == "head"){
    return (
      <div className="Box" />
    )
  }
  return (
    <div className="Box" />
  )
}

function BoardRow(props) {
  const { count } = props;

  const getList = () => {
    const list = [];
    for(let i = 0; i < count; i ++) {
      list.push(<BoardBox key={i}/>)
    }
    return list;
  }

  return (
    <div className="row">
      {getList()}
    </div> 
  )
}

function Score(props) {
  return (
    <div>{props.score}</div>
  )
}

function Board(props) {
  const { width, height, children} = props;
  const renderRows = () => {
    const list = [];
    for(let i = 0; i < height; i ++) {
      list.push(<BoardRow count={width} key={i}/>)
    }
    return list;
  }

  return (
    <>
      {renderRows()}
      {children}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <div>
        <h1>SNAKE</h1>
        <Score score={20} />
      </div>
      <Board width={10} height={10}>
        <h2>child1</h2>
      </Board>
    </div>
  );
}

export default App;
