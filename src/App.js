import React, { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    // console.log(event);
    const { clientY } = event;
    if (clientY <= 0) {
      // 마우스가 위로 벗어날때만 onBefore 실행하기
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== 'function') {
      return;
    }
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
};
const App = () => {
  const beForeLife = () => console.log('pls dont leave');
  useBeforeLeave(beForeLife);
  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default App;
