import { useState } from 'react';
import Dice from './Dice';
import Button from './Button';

function random(n) { // 랜덤함수
    return Math.ceil(Math.random() * n);
}

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]); // 빈 배열을 초기 값으로 가짐

    const handleRollClick = () => {
        const nextNum = random(6); // 랜덤함수에 숫자 6(1~6까지의 숫자가 랜덤)
        setNum(nextNum); // 던지기를 누를 때마다 숫자가 랜덤하게 바뀜
        setSum(sum + nextNum); // 던지기를 누를 때마다 숫자가 더해짐
        setGameHistory([...gameHistory, nextNum]);
    };

    const handleClearClick = () => { // 클릭시 초기화되는 버튼
        setNum(1); // 1로 초기화
        setSum(0); // 0으로 초기화
        setGameHistory([]); // 빈배열로 초기화
    };

    return (
     <div>
        <div>
            <Button onClick={handleRollClick}>던지기</Button>
            <Button onClick={handleClearClick}>처음부터</Button>
        </div>
            <h2>나</h2>
            <Dice color="red" num={num} />
            <h2>총점</h2>
            <p>{sum}</p>
            <p>{gameHistory.join(', ')}</p>
    </div>
    );
}

export default App;