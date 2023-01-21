
import * as React from 'react';


export const YubiApp = () => {
  const [count, setCount] = React.useState(0);
  return (
    <main>
      <div className="scroll-container">
        <div className="scroll-area"></div>
        <div className="scroll-area"></div>
        <div className="scroll-area"></div>
        <div className="scroll-area"></div>
        <div className="scroll-area"></div>
        <div className="scroll-area"></div>
        <div className="scroll-area yubi">
          <div className="cover1"></div>
          <div className="trigger1" onClick={() => { setCount(count => Math.max(count, 1)); }}></div>
          <div className="trigger2" onClick={() => { setCount(count => count === 0 ? 0 : Math.max(count, 2)); }}></div>
          <p>
            ชูใจ ถือ อะไร<br/>
            ชูใจ ถือ แหวน ใน มือ<br/>
            <span className={count >= 1 ? 'visible' : 'hidden'}>
              <br/>
              เทียน<br/>
            </span>
            <span className={count >= 2 ? 'visible' : 'hidden'}>
              <br/>
              คุณ จะ แต่งงาน<br/>
              กับ ผม ไหม
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};
