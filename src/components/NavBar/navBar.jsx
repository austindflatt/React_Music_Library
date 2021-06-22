import React from 'react';
import './navBar.css';
import { Button, Dropdown, Menu } from 'semantic-ui-react'

function NavBar(props) { 
    return (
        <Menu inverted size='massive'>
        <Menu.Item
          name='music library app'
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary onClick="#">Add New Music</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
}

export default NavBar;