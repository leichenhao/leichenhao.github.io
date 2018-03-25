import React from 'react';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import aStar from '../../assets/clients-logo/astart_logo.png';
import popular from '../../assets/clients-logo/popular_logo.jpg';
import ngeeAnn from '../../assets/clients-logo/ngee ann poly_logo.jpg';
import oneMgroup from '../../assets/clients-logo/omg_logo.png';

import aws from '../../assets/clients-logo/AWS copy.png';
import eezee from '../../assets/clients-logo/eezee-logo-coloured01.png';
import strip from '../../assets/clients-logo/strip_logo.jpg';
import spacelabs from '../../assets/clients-logo/sal_logo.png';

import simplify from '../../assets/clients-logo/simplify3D_logo.png';
import buildlabs from '../../assets/clients-logo/buildlabs_logo.png';
import threeDmatters from '../../assets/clients-logo/3dmatters_logo.jpg';


import betterShip from '../../assets/clients-logo/bettership_logo.jpg';
import nuodle from '../../assets/clients-logo/nuodle_logo.png';
import LGB from '../../assets/clients-logo/lgb_logo.jpeg';
import chiliB from '../../assets/clients-logo/chili buddy_logo.png';
import Lwalker from '../../assets/clients-logo/leadwalker.jpg';
import KopiWu from '../../assets/clients-logo/Kopiwu.png';
import CoffeAndT from '../../assets/clients-logo/coffeeAndToast_logo.jpg';


import csLogo from '../../assets/CS-logo.png';
import objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content4',
  };

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span style={{
          display: "flex",
          background : "white",
          flexDirection: "column",
          justifyContent: "center",      
        }}>
          <img style={{ maxWidth:"100%", maxHeight: "100%" }} src={item.img} />
        </span>
        <p>{item.content}</p>
      </div>
    </li>);
  }

  getEnterAnim = (e, isMode) => {
    const index = e.index;
    const delay = isMode ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const dataArray = [
      { img: aStar, content: 'Astar' },
      { img: popular, content: 'Popular' },
      { img: ngeeAnn, content: 'Ngee Ann Polytechnic' },
      { img: oneMgroup, content: 'One Maker Group' },
      
      { img: aws, content: 'Awsome Soclar Tech' },
      { img: eezee, content: 'Eezee' },
      { img: strip , content: 'Strip Ministry of Waxing' },
      { img: spacelabs, content: 'SpaceLabs' },

      { img: threeDmatters, content: '3D Matters' },
      { img: simplify, content: 'Simplify 3D' },
     
      { img: nuodle, content: 'Nuodle Singapore' },
     
      { img: betterShip, content: 'BetterShip' },

      { img: CoffeAndT, content: 'Coffee and Toast' },
      { img: LGB, content: 'Little Green Bee' },
      { img: Lwalker, content: 'Lead Walker' },
      { img: KopiWu, content: 'KopiWu' },

    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div
      style={{
        height: 1128
      }}
        {...props}
        className="content-template-wrapper content4-wrapper"
      >
        <OverPack
          className={`content-template ${props.className}`}
        >
          <TweenOne
            style={{ top: "3%"}}
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            Clients
          </TweenOne>
          <TweenOne
            style={{ top: "3%"}}
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad' }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
            color ="white"
          >
            Trusted By 
          </TweenOne>
          <TweenOneGroup
            style={{ top: "11%"}}
            className={`${props.className}-img-wrapper`}
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getEnterAnim(e, isMode)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
            id={`${props.id}-ul`}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
