//
//  MapView.swift
//  FatmapTask
//
//  Created by Alberto R. Estarrona on 7/5/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import UIKit
import MapKit

class MapView: UIView {
  @objc var count:NSNumber = 0

  @objc var geoData: NSString = ""
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.addSubview(self.initMap(in: frame))
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func initMap(in frame: CGRect) -> UIView {
    let mapView = MKMapView()
    mapView.frame = frame
    mapView.mapType = MKMapType.standard
    mapView.isZoomEnabled = true
    mapView.isScrollEnabled = true
    
    return mapView
  }
}
