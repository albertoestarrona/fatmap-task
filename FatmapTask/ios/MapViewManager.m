//
//  MapViewManager.m
//  FatmapTask
//
//  Created by Alberto R. Estarrona on 7/5/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"

@interface

RCT_EXTERN_MODULE(MapViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(geoData, NSString)

@end
