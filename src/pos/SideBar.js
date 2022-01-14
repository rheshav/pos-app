import React, { useEffect, useState } from 'react';
import MenuList from './MenuList';
import Profile from './Profile';
import Settings from './Settings';

function SideBar(props) {
  return (
    <div>
      <p>SideBar</p>
      <MenuList></MenuList>
      <Profile></Profile>
      <Settings></Settings>
    </div>
  );
}
export default SideBar;
