import React, { useEffect, useState } from 'react';
import MenuList from './MenuList';
import Profile from './Profile';
import Settings from './Settings';

function SideBar(props) {
  return (
    <div>
      <p>SideBar</p>
      <MenuList>
        <Profile>
          <Settings></Settings>
        </Profile>
      </MenuList>
    </div>
  );
}
export default SideBar;
