import Board from "./Board";
import Button from './Button';
import { useState } from 'react';
import './App.css';
import logoImg from './assets/logo.png';

function random(n) { // 랜덤함수
    return Math.ceil(Math.random() * n);
}

function App() {
    const [myHistory, setMyHistory] = useState([]); // 빈 배열을 초기 값으로 가짐
    const [otherHistory, setOtherHistory] = useState([]);

    const handleRollClick = () => {
        const nextMyNum = random(6); // 랜덤함수에 숫자 6(1~6까지의 숫자가 랜덤)
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };

    const handleClearClick = () => { // 클릭시 초기화되는 버튼
        setMyHistory([]);
        setOtherHistory([]);
    };

    // function logo() {
    //     return <img src="{logoImg}" alt="로고 이미지" />
    // }

    return (
     <div className="App">
        <div>
            <img className="App-logo" src={logoImg} alt="주사위게임 로고" />
            <h1 className="App-title">주사위게임</h1>
            <div>
                <Button className="Button blue App-button" onClick={handleRollClick}>던지기</Button>
                <Button className="Button red App-button" onClick={handleClearClick}>처음부터</Button>
            </div>
        </div>
        <div className="App-boards">
            <div className="Board App-board">
            <Board className="Board-heading"
            name="나"
            color="blue" 
            gameHistory={myHistory}  />
            </div>      

            <div className="Board App-board">
            <Board
            className="App-board" 
            name="상대" 
            color="red" 
            gameHistory={otherHistory} />
            </div>
        </div>
     </div>

    );
}

export default App;