import React, {Component} from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps"
import axios from 'axios'

class GeoViewContainer extends Component{
  constructor(props){
  	super(props)
  	this.state = {
      center: {
        lat: 37.12,
        lng: -93.17
      },
      markers: []
    }

    axios.get('markers.json')
          .then(response => this.setState({ markers: response.data.markers}))

  }
  render(){
    const mapContainer = <div style={{height: '600px', width: '100%', margin: 'auto'}}></div>
    return(
      <div style={{height: '100%', width: '80%', margin: 'auto'}}>
        <h1 > Number of Employees by Location: </h1>

        <GoogleMapLoader
          containerElement={ mapContainer}
          googleMapElement= {
            <GoogleMap
              defaultZoom={4}
              defaultCenter={this.state.center}
              options={{streetViewControl: false, mapTypeControl: false}}>
              {
                this.state.markers.map( (marker, index) => {
                  return <Marker {...marker} key={index}/>
                })
              }
        </GoogleMap>
      }/>

    </div>
    )
  }
}

export default GeoViewContainer
