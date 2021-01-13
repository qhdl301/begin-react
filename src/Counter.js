import React, { useState } from 'react';

function Counter(){
    // useState()는 함수형 업데이트
    // useState()의 ()안에 값은 default 값 셋팅
    // useState()는 사용하게 되면 배열로 반환
    // 첫번째 원소는 number(상태 값), 두번째 원소 setNumber(현재 상태 값을 변경하는 함수)
    const [number,setNumber] = useState(0); // 배열 비구조화 

    const onIncrease = () => {
        // setNumber(number + 1); Case 1. 기본 업데이트(기본 문법)
        setNumber(prevNumber => prevNumber + 1); // Case 2. 함수형 업데이트(최적화 문법)
    };

    const onDecrease = () => {
        // setNumber(number - 1);   Case 1. 기본 업데이트(기본 문법)
        setNumber(prevNumber => prevNumber - 1); // Case 2. 함수형 업데이트(최적화 문법)
    };

    return (

        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>

    );

}

export default Counter;