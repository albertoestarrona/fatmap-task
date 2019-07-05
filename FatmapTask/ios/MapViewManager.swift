//
//  MapViewManager.swift
//  FatmapTask
//
//  Created by Alberto R. Estarrona on 7/5/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(MapViewManager)
class MapViewManager:
RCTViewManager {
  override func view() -> UIView! { return MapView() }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
