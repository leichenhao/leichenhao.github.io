import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import './less/nav.less';
import cslogoS from '../../assets/cs-logo01.png';


const Item = Menu.Item;


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const props = { ...this.props };
    const dataSource = props.dataSource;
    const isMode = props.isMode;
    delete props.dataSource;
    delete props.isMode;
    
    const navData = [
      {
        name: 'Concept',
        link: '#content_2_0'
      },
      {
        name: 'Smiths',
        link: '#content_3_0'
      },
      {
        name: 'Client',
        link: '#content_6_0'
      },
      {
        name: 'Contact',
        link: '#footer_1_0'
      }
    ];

    // { 
    //   menu1: 'Concept', 
    //   menu2: 'Smiths', 
    //   menu3: 'Client', 
    //   menu4: 'Contact' 
    // };

    const navChildren = navData
      .map((key, i) => (
        <Item key={i}>
        <div onClick={() => {

          location.replace(key.link);
    
        }}>
          {key.name}
        </div>
      </Item>
    ));
    
      return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
       <img width="100%" src={cslogoS} />
      </TweenOne>
      {isMode ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick();
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              theme = "dark"
            
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['0']}
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;

