import * as React from 'react';
import Slider from 'react-slick';

export interface slickWrapperProps {
  filePaths : string[];
}

export default class SlickWrapper extends React.Component<slickWrapperProps, object> {

  constructor(props : any) {
    super(props);
    console.log(props);
  }

  getSources() {
    return this.props.filePaths.map( (filePath : string, index : number) => {
      return (
        <div key={index}><img src={filePath} key={index}/></div>
      );
    });
  }

  // render() {
  //
  //   console.log('SlickWrapper:: RENDER INVOKED');
  //
  //   console.log(this.props);
  //
  //   if (!this.props.filePath || this.props.filePath === '') {
  //     return null;
  //   }
  //
  //   return (
  //     <div>
  //       <div>
  //         Eat Pizza Every Day!
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      // speed: 500,
      // slidesToShow: 2,
      // slidesToScroll: 1,
      autoplay : false,
      autoplaySpeed : 2000,
      fade : true,
    };
    return (
      <div className='slickContainer'>
        <Slider {...settings}>
          {this.getSources()}
        </Slider>
      </div>
    );
  }
}
