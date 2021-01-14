import React, { useState, useRef } from 'react';

function InputSample(){

    // 객체형 useState 설정
    const [inputs, setInputs] = useState({

        name : '',
        nickname : '',

    });

    // focus를 가직고 올수 있는 useRef 객체 선언
    const inputFocus = useRef();

    console.log("상태 값 name: " + inputs.name);
    console.log("상태 값 nickname: " + inputs.nickname);

    const {name, nickname} = inputs;    // Html 태그의 input 상태 값 전달을 위해 선언

    const onChange = (e) => {
        
        // name : 현재 이벤트 발생시킨 태그의 name 가져오기
        // value : 현재 이벤트 발생시킨 태그의 value 가져오기
        const {name,value} = e.target;

        console.log("e.target.name : " + name);
        console.log("e.target.value : " + value);

        setInputs({
            ...inputs,      // Spread 문법으로 현재 상태의 객체 값이 복사가 됨. ※ useState의 객체 값 Update는 무조건 변경하기 이전 현재 상태의 객체(inputs)를 복사 해줘야한다.
            [name] : value, // []안에 선언을 하면 useState에서 선언한 inputs에 객체의 props의 명칭에 맞춰 value 값을 업데이트 해준다. 
        });

    }

    const onReset = () => {
        setInputs({
            name : '',
            nickname : '',
        });

        inputFocus.current.focus();
    };

    return (

        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
                ref={inputFocus}
            />
            <input name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );

};

export default InputSample;