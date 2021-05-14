import React, { useEffect, useRef, useState } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  };

  //브라우저 별로 대응하기
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen(); // firefox
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen(); // opera
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen(); // microsoft
      }
      runCb(true);
    }
  };

  //브라우저 별로 대응하기
  const exitFull = () => {
    // document.exitFullscreen(); // 빠져나올떈 document 쓴다.
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen(); // firefox
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // opera
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // microsoft
    }
    runCb(false);
  };

  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    // 콜백에 넣어주기
    console.log(isFull ? 'We are full' : 'We are small');
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div style={{ height: '1000vh' }}>
      <div ref={element}>
        <img src="https://ww.namu.la/s/08c6a259933bf0159253cd7304180960a776791dcba49dba89d0e28648c20e544d87779113bcd874491d22a67d2cd4b9aab39683c3d27f90929872ef5b5ea104408096b35e7ff4e79d99a53d18b9a15df95c123177ccf7dc7d0016a7f965d600" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
