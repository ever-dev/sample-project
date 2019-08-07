import React from 'react';
import './MapBoxComponent.scss';

import ReactMapGL, {Marker, Popup} from 'react-map-gl';

class MapBoxComponent extends React.Component {
  TOKEN = 'pk.eyJ1IjoibGlhbi1zdW4iLCJhIjoiY2p6MWc4NzFyMDBjejNvbnR1d2RwMmttNiJ9.CFGK6-g2PbOGPZJyVMc0Ug';
  state = {
    viewport: {
      width: 800,
      height: 800,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    },
    showPopup: false
  };

  constructor(props) {
    super(props);

    this.points = props.points ? props.points : [];
    this.popupDialog = 
    <Popup
        latitude={37.78}
        longitude={-122.41}
        closeButton={true}
        closeOnClick={false}
        onClose={() => this.setState({showPopup: false})}
        anchor="top" >
        <div>You are here</div>
      </Popup>;
  }

  render() {
    const pointmap = this.points.map((item, key) => {
      const style = {
        width: item.size,
        height: item.size,
        backgroundColor: item.color,
        borderRadius: '50%',
        position: 'absolute',
        cursor: 'pointer'
      };
      return (
        <Marker latitude={item.latitude} longitude={item.longitude} className="marker" key={key}>
          <div style={style} onClick={() => {
            this.popupDialog = 
              <Popup
                latitude={item.latitude}
                longitude={item.longitude}
                closeButton={false}
                closeOnClick={true}
                onClose={() => this.setState({showPopup: false})}
                anchor="bottom" >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Popup>;
            this.setState({
              showPopup: true,
            })
          }}></div>
        </Marker>
      );
    });
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => {
          const {width, height, latitude, longitude} = viewport;
          const oldViewport = this.state.viewport;
          this.setState({ viewport: {
            width, height, latitude, longitude, zoom: oldViewport.zoom
          }})
        }}
        mapboxApiAccessToken={this.TOKEN}
      >
        {pointmap}
        {this.state.showPopup && this.popupDialog}
      </ReactMapGL>
    );
  }
}

export default MapBoxComponent;