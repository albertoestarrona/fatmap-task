//
//  MapView.swift
//  FatmapTask
//
//  Created by Alberto R. Estarrona on 7/5/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import UIKit
import MapKit

class MapView: UIView, MKMapViewDelegate {
  let mapView = MKMapView()

  @objc var geoData: NSString = "" {
    didSet {
      let data: Data = geoData.data(using: String.Encoding(rawValue: String.Encoding.utf8.rawValue).rawValue)!
      do {
        let jsonArray = try JSONSerialization.jsonObject(with: data, options : .allowFragments) as? [String:AnyObject]
        let coords = jsonArray?["coordinates"] as! Array<NSArray>
        let joined = Array(coords.joined())
        let polyCoords = NSMutableArray()

        for item in joined {
          let coord = item as! [NSNumber]
          let point = CLLocationCoordinate2DMake(CLLocationDegrees(coord[0]), CLLocationDegrees(coord[1]));
          polyCoords.add(point)
        }
        let polyline = MKPolyline(coordinates: polyCoords as! [CLLocationCoordinate2D], count: polyCoords.count)
        mapView.addOverlay(polyline)
        
        let center = polyCoords[0]
        let span = MKCoordinateSpan(latitudeDelta: 0.05, longitudeDelta: 0.05)
        let region = MKCoordinateRegion(center: center as! CLLocationCoordinate2D, span: span)
        mapView.setRegion(region, animated: false)
        
      } catch let error as NSError {
        print(error)
      }
    }
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.addSubview(self.initMap(in: frame))
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func initMap(in frame: CGRect) -> UIView {
    mapView.delegate = self
    mapView.frame = CGRect(x:0, y:0, width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
    mapView.mapType = MKMapType.standard
    mapView.isZoomEnabled = true
    mapView.isScrollEnabled = true
    mapView.showsCompass = true
    mapView.showsScale = true
    
    return mapView
  }
  
  func mapView(_ mapView: MKMapView, rendererFor overlay: MKOverlay) -> MKOverlayRenderer {
    if overlay is MKPolyline {
      let polylineRenderer = MKPolylineRenderer(overlay: overlay)
      polylineRenderer.strokeColor = UIColor.red
      polylineRenderer.lineWidth = 4
      return polylineRenderer
    }
    
    return MKOverlayRenderer()
  }
}
