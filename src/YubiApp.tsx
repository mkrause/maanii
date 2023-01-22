
import * as React from 'react';


export const YubiApp = () => {
  const [count, setCount] = React.useState(0);
  const name = count >= 2 ? 'ไมเคิล' : 'ชูใจ';
  
  React.useEffect(() => {
    if (count === 2) {
      window.setTimeout(() => { setCount(3); }, 8000);
    }
  }, [count]);
  
  return (
    <main>
      <div className="scroll-container">
        <div className="scroll-area"></div>
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
            {name} ถือ อะไร<br/>
            {name} ถือ
            {' '}
            <span className={`question-marks ${count >= 1 ? 'content-visible' : 'content-hidden'}`}>
              <span className="placeholder">???</span>
              <span className="content">แหวน</span>
            </span>
            {' '}
            ใน มือ<br/>
            <span className={count >= 2 ? 'visible' : 'hidden'}>
              <br/>
              ไมเคิล ขอ เทียน<br/>
              {count === 2 && '...'}
            </span>
            <span className={count >= 3 ? 'visible' : 'hidden'}>
              แต่งงาน กับ เขา<br/>
            </span>
            {/*<span className={count >= 2 ? 'visible' : 'hidden'}>
              <br/>
              คุณ จะ แต่งงาน<br/>
              กับ ผม ไหม
            </span>*/}
          </p>
        </div>
      </div>
    </main>
  );
};
