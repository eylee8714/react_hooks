import React from 'react';

const useConfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== 'function') {
    // onConfirm이 존재하지 않거나 function이 아닐때
    return;
  }
  if (onCancel && typeof onConfirm !== 'function') {
    // onCancel이 필수적인건 아니다.  onCancel이 존재하는데 onConfirm이 function이 아닐떄
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log('delete the world'); // confirm에 확인버튼누르면 실행된다.
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm('Are you sure?', deleteWorld, abort);

  return (
    <>
      <button onClick={confirmDelete}>Delete the world</button>
    </>
  );
};

export default App;
