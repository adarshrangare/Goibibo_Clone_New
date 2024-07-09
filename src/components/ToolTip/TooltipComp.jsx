import React from 'react';
import { Button, Tooltip } from 'antd';
const TooltipComp = ({children,message}) => {
  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);
  return (
    <div>
      <div
        style={{
          width: '300vw',
          height: '300vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position:'fixed',
          top:0,
          left:0,
          backdropFilter:'blur(10px)'
        }}
      >
        <Tooltip title={message} trigger="hover" open>
          <Button>Scroll The Window</Button>
          {children}
        </Tooltip>
      </div>
    </div>
  );
};
export default TooltipComp;