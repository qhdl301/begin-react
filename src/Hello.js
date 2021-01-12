import React from 'react';

function Hello(props){
  
    return (
        <div style={{
            color : props.color
        }}>
            {/*
             조건 처리 방법(사막연산자 : 조건에 따라 값이 다를 경우 유용) - -1 
             {props.isSpecial ? <b>*</b> : null}
             */}
            {/*
             조건 처리 방법(&& 조건) - 2
             */}
            {props.isSpecial && <b>*</b>}
            
            안녕하세요 {props.name}</div>
    );
};

Hello.defaultProps = {

    name : "이름없음"

}

export default Hello;

