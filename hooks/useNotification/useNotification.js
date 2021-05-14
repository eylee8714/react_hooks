export const useNotification = (title, options) => {
  if (!('Notification' in window)) {
    return; // window가 아니라면, 이 브라우져에서는 notification을 지원하지 않는다.
  }
  const fireNotif = () => {
    // granted : 알람받기 승인
    // denied : 알람받기 거부
    // default : 알람 허용되지 않는다. (사용자의 선택을 알수없어서 denied인것처럼 행동한다.)

    // 승인되지 않았다면,
    if (Notification.permission !== 'granted') {
      console.log(title);
      // 퍼미션 요구
      Notification.requestPermission().then((permission) => {
        // 승인되었다면,
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options); // options는 body, icon 등이 될 수 있다.
      console.log(title);
    }
  };
  return fireNotif;
};

// import React, { useEffect, useRef, useState } from 'react';

// const useNotification = (title, options) => {
//   if (!('Notification' in window)) {
//     return; // window가 아니라면, 이 브라우져에서는 notification을 지원하지 않는다.
//   }
//   const fireNotif = () => {
//     // granted : 알람받기 승인
//     // denied : 알람받기 거부
//     // default : 알람 허용되지 않는다. (사용자의 선택을 알수없어서 denied인것처럼 행동한다.)

//     // 승인되지 않았다면,
//     if (Notification.permission !== 'granted') {
//       console.log(title);
//       // 퍼미션 요구
//       Notification.requestPermission().then((permission) => {
//         // 승인되었다면,
//         if (permission === 'granted') {
//           new Notification(title, options);
//         } else {
//           return;
//         }
//       });
//     } else {
//       new Notification(title, options); // options는 body, icon 등이 될 수 있다.
//       console.log(title);
//     }
//   };
//   return fireNotif;
// };

// const App = () => {
//   const triggerNotif = useNotification('알람 메세지 입니다.', {
//     body: 'body입니다.',
//   });
//   return (
//     <>
//       <div>
//         <button onClick={triggerNotif}>알람</button>
//       </div>
//     </>
//   );
// };

// export default App;
