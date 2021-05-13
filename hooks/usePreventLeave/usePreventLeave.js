export const usePreventLeave = (onLeaving) => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ''; //이벤트에 대한 기본 작업이 금지되었는지 여부를 나타낸다
    // returnValue는 deprecated 되었지만, 크롬에서 이걸 넣지 않으면 실행되지 않는다.
  };
  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener); // beforeunload는 window가 닫히기 전에 function이 실행되는것을 허락한다.
  };
  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener);
  };
  return { enablePrevent, disablePrevent };
};

// import React from 'react';

// const usePreventLeave = (onLeaving) => {
//   const listener = (event) => {
//     event.preventDefault();
//     event.returnValue = ''; //이벤트에 대한 기본 작업이 금지되었는지 여부를 나타낸다
//     // returnValue는 deprecated 되었지만, 크롬에서 이걸 넣지 않으면 실행되지 않는다.
//   };
//   const enablePrevent = () => {
//     window.addEventListener('beforeunload', listener); // beforeunload는 window가 닫히기 전에 function이 실행되는것을 허락한다.
//   };
//   const disablePrevent = () => {
//     window.removeEventListener('beforeunload', listener);
//   };
//   return { enablePrevent, disablePrevent };
// };

// const App = () => {
//   const { enablePrevent, disablePrevent } = usePreventLeave();
//   return (
//     <>
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>UnProtect</button>
//     </>
//   );
// };

// export default App;
