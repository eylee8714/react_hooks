export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// import React, { useState } from 'react';

// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);
//   const onChange = (event) => {
//     // console.log(event.target);
//     const {
//       target: { value },
//     } = event;

//     let willUpdate = true; // true니까 항상 update 될것이다.
//     if (typeof validator === 'function') {
//       willUpdate = validator(value);
//     }
//     if (willUpdate) {
//       setValue(value);
//     }
//   };
//   return { value, onChange };
// };

// const App = () => {
//   // const maxLen = (value) => value.length <= 10;
//   const maxLen = (value) => !value.includes('@'); // @를 포함하고있으면 업데이트를 하지않는다.
//   const name = useInput('Mr.', maxLen);

//   return (
//     <>
//       <h1>hi</h1>
//       {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
//       <input placeholder="Name" {...name} />
//     </>
//   );
// };
// export default App;
