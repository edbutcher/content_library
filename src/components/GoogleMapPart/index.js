import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GoogleMapPart = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={8}
  defaultCenter={{ lat: 50.4509449, lng: 30.5220922 }}
>
  {props.isMarkerShown && <Marker position={{ lat: 50.4509449, lng: 30.5220922 }} />}
</GoogleMap>
))
  


export default GoogleMapPart;