import React, { useRef } from 'react';

const App = () => {
  //useRef 는 document.getElementById() 와 비슷하다.
  const input = useRef();

  // setTimeout(() => console.log(input), 5000);
  // setTimeout(() => console.log(input.current), 5000);
  // Optional chaining (?.) 는 mount가 빨리되었을때를 해결한다.
  setTimeout(() => input.current?.focus(), 5000);
  return <input ref={input} placeholder="la"></input>;
};

export default App;
