import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>  {/* Boolean 값은 별도에 Value 설정을 안하면 True로 인식*/}
      <Hello color="pink" />
    </Wrapper>
  )
}

export default App;
