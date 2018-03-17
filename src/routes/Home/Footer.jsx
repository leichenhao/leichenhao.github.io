import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import cslogoS from '../../assets/cs-logo01.png';

class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const logoContent = { img: cslogoS, content: 'A creative design agency' };
    const dataSource = [
      { title: 'Concept', content: 'Concept Design\nProduct Design\nBranding Design\nInterior Design\nAdvertising Design\nWebsite Design', contentLink: '#\n#\n#\n#' },
      { title: 'Smiths', content: 'Engineering Study\nSimulation\nMaterial Analysis\nPrototyping\nProduction Consultant\nCommercialising', contentLink: '#\n#' },
      { title: 'Contact', content: 'E: info@conceptsmiths.com\n\nA    :  The incubator\nBlk 31 #01-13 \n535 Clementi Road\n\nS599489 ', contentLink: '#\n#\n#\n#' },
      { title: 'Others', content: 'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg\n', contentLink: '#\n#\n#\n#' },
    ];
    const liChildrenToRender = dataSource.map(this.getLiChildren);
    return (<OverPack
      {...props}
      playScale={isMode ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        <li key="logo" id={`${props.id}-logo`}>
          <p className="logo">
            <img src={logoContent.img} width="100%" />
          </p>
          <p>{logoContent.content}</p>
        </li>
        {liChildrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          Copyright © 2016 The Project by <a href="#">Conceptsmiths
Pte. Ltd</a>. All Rights Reserved
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
