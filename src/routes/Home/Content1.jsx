import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import cMotion from '../../assets/c_motion.gif';
import galaxy_Motion from '../../assets/galaxy_motion.gif';
import cube_Motion from '../../assets/cube_motion.gif';



class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src={galaxy_Motion} />
              </span>


      
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              Concept
            </h1>
            <p key="p" id={`${props.id}-content`}>
            Concept is the beginning of all innovation. We offering a wide range of design and engineering services that ensure Design and Innovation achieve a breakthrough through creative and practical solutions.
            <br/>
            <li>Concept Design </li>
            <li>Product Design </li>
            <li>Branding Design </li>
            <li>Website Design</li>
            <li>Interior Design </li>
            <li>Advertising Design</li>
            
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
