import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import sMotion from '../../assets/s_motion.gif';
import galaxy_Motion from '../../assets/galaxy_motion.gif';
import cube_Motion from '../../assets/cube_motion.gif';

class Content extends React.Component {

  static defaultProps = {
    className: 'content1',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    };
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              Smiths
            </h1>
             <p key="p" id={`${props.id}-content`}>
              Smiths makes concept into reality.
              With the passion of create, our experienced designers and 
              engineers team guarantee delightful designs made into a real product.
         
            <li>Engineering Study</li>
            <li>Simulation</li>
            <li>Material Analysis</li>
            <li>Prototyping</li>
            <li>Production Consultant</li>
            <li>Commercialising</li>

            </p>
            
          </QueueAnim>
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src={sMotion} />
            </span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;
