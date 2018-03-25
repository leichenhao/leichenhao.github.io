import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import particlesJS from 'particles.js';



import csLogo from '../../assets/CS-logo.png';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMode;

    return (
      <div>
        <OverPack
          replay
          playScale={[0.3, 0.1]}
          {...props}
        >
          <QueueAnim
            type={['bottom', 'top']}
            delay={200}
            className={`${props.className}-wrapper cs-logo`}
            key="text"
            id={`${props.id}-wrapper`}
          >
            <span
              className="title"
              key="title"
              id={`${props.id}-title`}
            >
              <img width="100%" src={csLogo} />
            </span>
            <p
              key="content"
              id={`${props.id}-content`}
            >
              Where the concepts are made
            </p>
            <Button type="ghost" key="button" id={`${props.id}-button`}>
              Learn More
            </Button>
          </QueueAnim>
          <TweenOne
            animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
            className={`${props.className}-icon`}
            key="icon"
          >
            <Icon type="down" />
          </TweenOne>
        </OverPack>
        <div style={{ position: "absolute", top:0, left: 0, right: 0, bottom: 0 }} id="particles-js" />
      </div>
    );
  }

  componentDidMount(){
    window.particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 20,
          "density": {
            "enable": true,
            "value_area": 200
            
          }
        },
        "color": {
          "value": "#179188"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#1c5c5c"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#1a3134",
          "transition": true,
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 800,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 800,
            "size": 20,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;

