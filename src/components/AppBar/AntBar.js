import React from 'react';

import { NavBar, Icon } from 'antd-mobile';

const AntBar = (props) => {
  const handleLeftClick = () => {
    console.log('click antbar left');
  }
  const handleRightClick = () => {
    console.log('click antbar right');
  }
  return (
    <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={() => handleLeftClick()}
    >
      首页
    </NavBar>
  )
}

export default AntBar;
