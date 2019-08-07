import React from 'react';
import './MapBoxPage.scss';

import MapBoxComponent from './../Components/MapBoxComponent/MapBoxComponent';

class MapBoxPage extends React.Component {
  fakeData = [{
    size: '10px',
    color: '#00F',
    latitude: 37.7577,
    longitude: -122.4376,
    title: 'title-1',
    description: 'description-1'
  }, {
    size: '20px',
    color: '#0F0',
    latitude: 37.7577,
    longitude: -121.9376,
    title: 'title-2',
    description: 'description-2'
  }, {
    size: '5px',
    color: '#F00',
    latitude: 37.7577,
    longitude: -123.0376,
    title: 'title-3',
    description: 'description-3'
  }];
  render() {
    return <MapBoxComponent points={this.fakeData}/>;
  }
}

export default MapBoxPage;