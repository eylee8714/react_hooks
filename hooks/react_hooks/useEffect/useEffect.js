import React, { useEffect, useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  const sayHello = () => console.log('hello');

  //useEffect 는 componentDidmount 의 역할을 해서 새로고침하면 sayHello 를 실행한다.
  //useEffect 는 componentDidUpdate 의 역할을 해서 버튼클릭하면 sayHello 를 실행한다.
  //useEffect 는 componentWillUnmount 의 역할을 한다.

  //useEffect 의 첫번째 인자는 function으로써의 effect이다.
  // 두번째 인자는 dependency이다. deps가 있다면 deps 리스트에 있는 값일때만 값이 변하도록 활성화된다.

  // useEffect(() => {
  //   sayHello();
  // });

  // useEffect(sayHello); // 값이 변할때 sayHello 가 실행된다.
  // useEffect(sayHello, [number]); // number가 변할때만 sayHello가 실행된다.
  useEffect(sayHello, []); // 값이 변할때 sayHello가 작동하지않고, 새로고침 할때만 실행된다.

  return (
    <>
      <h1>hi</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </>
  );
};

export default App;
