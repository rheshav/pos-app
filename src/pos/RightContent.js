import React, { useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';

function RightContent(props) {
  return (
    <div>
      <p>RightContent</p>
      <Header></Header>
      <Content></Content>
    </div>
  );
}
export default RightContent;
