(function(){
    var script = { "definitions": [
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera"
 },
 {
  "frames": [
   {
    "cube": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_hq.jpeg",
       "width": 10224,
       "tags": [
        "oculusgo",
        "ipadpro"
       ],
       "class": "ImageResourceLevel",
       "height": 1704
      },
      {
       "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A.jpeg",
       "width": 6144,
       "class": "ImageResourceLevel",
       "height": 1024
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_DF0481FE_CB5C_5538_41C6_7F3E37F08584); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.88,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_1_0.png",
           "width": 118,
           "class": "ImageResourceLevel",
           "height": 118
          }
         ]
        },
        "pitch": -4.65,
        "yaw": -85.38
       }
      ],
      "id": "overlay_CC04F239_DC5A_BB2F_41D9_32A30344941E",
      "rollOverDisplay": false
     },
     {
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_DF18F1F4_CB5C_5548_41C7_EDB6E461EB53); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.87,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_0_0.png",
           "width": 118,
           "class": "ImageResourceLevel",
           "height": 118
          }
         ]
        },
        "pitch": -5.22,
        "yaw": 72.07
       }
      ],
      "id": "overlay_CD93F058_DCAA_D76C_41E3_66E7F2CC4E96",
      "rollOverDisplay": false
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4, {'rollOverBackgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'rollOverIconColor':'#CCCCCC','rollOverIconLineWidth':5,'paddingLeft':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#FFFFFF','rollOverIconWidth':50,'paddingRight':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedBackgroundColorDirection':'vertical','iconWidth':50,'pressedIconHeight':50,'iconHeight':50,'borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'rollOverIconHeight':50,'iconLineWidth':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000']}, this.ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.22,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_4_0.png",
           "width": 123,
           "class": "ImageResourceLevel",
           "height": 104
          }
         ]
        },
        "pitch": -3.43,
        "yaw": -36.13
       }
      ],
      "id": "overlay_D67088C0_DCEE_3198_41E6_EACE23A23D4D",
      "rollOverDisplay": false
     },
     {
      "rotationY": 0,
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "hideDuration": 500,
      "showDuration": 500,
      "id": "popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
      "popupDistance": 100,
      "hideEasing": "cubic_out",
      "hfov": 8.22,
      "showEasing": "cubic_in",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
         "width": 1024,
         "class": "ImageResourceLevel",
         "height": 682
        }
       ]
      },
      "pitch": -3.43,
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "yaw": -36.13,
      "popupMaxHeight": "95%"
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE, {'rollOverBackgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'rollOverIconColor':'#CCCCCC','rollOverIconLineWidth':5,'paddingLeft':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#FFFFFF','rollOverIconWidth':50,'paddingRight':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedBackgroundColorDirection':'vertical','iconWidth':50,'pressedIconHeight':50,'iconHeight':50,'borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'rollOverIconHeight':50,'iconLineWidth':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000']}, this.ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.15,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_3_0.png",
           "width": 123,
           "class": "ImageResourceLevel",
           "height": 104
          }
         ]
        },
        "pitch": -8.1,
        "yaw": -170.82
       }
      ],
      "id": "overlay_D623BF6C_DCE9_EF68_41E5_EA1EE4AA1D99",
      "rollOverDisplay": false
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA, {'rollOverBackgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'rollOverIconColor':'#CCCCCC','rollOverIconLineWidth':5,'paddingLeft':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#FFFFFF','rollOverIconWidth':50,'paddingRight':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedBackgroundColorDirection':'vertical','iconWidth':50,'pressedIconHeight':50,'iconHeight':50,'borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'rollOverIconHeight':50,'iconLineWidth':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000']}, this.ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [],
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.24,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_0_HS_2_0.png",
           "width": 123,
           "class": "ImageResourceLevel",
           "height": 104
          }
         ]
        },
        "pitch": -0.5,
        "yaw": 102.19
       }
      ],
      "id": "overlay_D644FD83_DCEA_5398_41CF_FDE7075B148D",
      "rollOverDisplay": false
     },
     {
      "rotationY": 0,
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "hideDuration": 500,
      "showDuration": 500,
      "id": "popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
      "popupDistance": 100,
      "hideEasing": "cubic_out",
      "hfov": 8.24,
      "showEasing": "cubic_in",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
         "width": 1024,
         "class": "ImageResourceLevel",
         "height": 682
        }
       ]
      },
      "pitch": -0.5,
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "yaw": 102.19,
      "popupMaxHeight": "95%"
     },
     {
      "bleachingDistance": 0.4,
      "yaw": 4,
      "class": "LensFlarePanoramaOverlay",
      "pitch": 29.81,
      "bleaching": 0.7,
      "id": "overlay_D4A17713_DF66_0D7B_41EA_88920C3D3D96"
     },
     {
      "bleachingDistance": 0.4,
      "yaw": 125.52,
      "class": "LensFlarePanoramaOverlay",
      "pitch": 33.62,
      "bleaching": 0.7,
      "id": "overlay_D4BC6C09_DF66_0357_41CE_9C3B75EE1C61"
     },
     {
      "bleachingDistance": 0.4,
      "yaw": -105.71,
      "class": "LensFlarePanoramaOverlay",
      "pitch": 19.14,
      "bleaching": 0.7,
      "id": "overlay_D4BAE022_DF66_0355_41EA_F8574F4021B9"
     },
     {
      "rotationY": 0,
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "hideDuration": 500,
      "showDuration": 500,
      "id": "popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
      "popupDistance": 100,
      "hideEasing": "cubic_out",
      "hfov": 8.15,
      "showEasing": "cubic_in",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
         "width": 1024,
         "class": "ImageResourceLevel",
         "height": 777
        }
       ]
      },
      "pitch": -8.1,
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "yaw": -170.82,
      "popupMaxHeight": "95%"
     }
    ],
    "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "label": "14",
  "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
  "mapLocations": [
   {
    "map": {
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideColor": "#000000",
     "class": "Map",
     "minimumZoomFactor": 0.5,
     "label": "Planta",
     "fieldOfViewOverlayRadiusScale": 0.19,
     "id": "map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
     "width": 415,
     "maximumZoomFactor": 1.2,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070.png",
        "width": 415,
        "class": "ImageResourceLevel",
        "height": 558
       }
      ]
     },
     "thumbnailUrl": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_t.png",
     "overlays": [
      {
       "map": {
        "width": 30,
        "x": 202.7,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 419.55
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C10F34C4_DD09_E665_41EB_0E9F8F32C5EE",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 202.7,
        "class": "HotspotMapOverlayImage",
        "y": 419.55,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_0.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 200.7,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 104.65
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C057DBDB_DD0A_6267_41DF_74197503054E",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 200.7,
        "class": "HotspotMapOverlayImage",
        "y": 104.65,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_1.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 71.7,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 106.65
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C1A62C4E_DD0B_E665_41E4_24E80204A343",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 71.7,
        "class": "HotspotMapOverlayImage",
        "y": 106.65,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_2.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 73.7,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 213.55
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 9)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C0CBF35A_DD0A_E26D_41D4_D1DC41F86387",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 73.7,
        "class": "HotspotMapOverlayImage",
        "y": 213.55,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_3.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 302.7,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 203.55
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C01B30DE_DD09_BE65_41DD_D62C14826FDF",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 302.7,
        "class": "HotspotMapOverlayImage",
        "y": 203.55,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_4.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 328.6,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 317.55
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C332A511_DD0E_A7FC_41E4_2786EB8DD2F7",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 328.6,
        "class": "HotspotMapOverlayImage",
        "y": 317.55,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_5.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 200.7,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 361.6
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C0B9B7F7_DD0E_6224_41E8_445361C5C9E4",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 200.7,
        "class": "HotspotMapOverlayImage",
        "y": 361.6,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_6.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 318.7,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 215.55
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 10)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C3F85A31_DD0F_E23C_41DC_6258471D9794",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 318.7,
        "class": "HotspotMapOverlayImage",
        "y": 215.55,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_7.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 203.65,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 85.55
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 12)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C30E80C5_DD0E_9E67_41E5_F7EA65B0847D",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 203.65,
        "class": "HotspotMapOverlayImage",
        "y": 85.55,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_8.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 66.65,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 217.55
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 11)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C3598F78_DD0E_622C_41E9_FCE2210BA50E",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 66.65,
        "class": "HotspotMapOverlayImage",
        "y": 217.55,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_9.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 236.65,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 304.6
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C3A2F1BB_DD09_9E2C_41E6_AEB47B5FEE36",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 236.65,
        "class": "HotspotMapOverlayImage",
        "y": 304.6,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_10.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 202.7,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 264.55
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C3966761_DD0A_E25F_41D3_527C5C447FFE",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 202.7,
        "class": "HotspotMapOverlayImage",
        "y": 264.55,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_11.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 207.7,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12_map.gif",
           "width": 14,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 160.55
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_C2AD60A4_DD09_9E24_41E0_BE7A28E7C8F8",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 207.7,
        "class": "HotspotMapOverlayImage",
        "y": 160.55,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_12.png",
           "width": 29,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 227.65,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13_map.gif",
           "width": 15,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 415.8
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_EFFAE3BA_DD3F_A22D_41DB_87FABC0F13CA",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 227.65,
        "class": "HotspotMapOverlayImage",
        "y": 415.8,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_13.png",
           "width": 30,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 207.6,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14_map.gif",
           "width": 15,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 215.15
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 14)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_2A070BB7_27CE_576F_41AB_07E104B79EC6",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 207.6,
        "class": "HotspotMapOverlayImage",
        "y": 215.15,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_14.png",
           "width": 30,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 174.85,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15_map.gif",
           "width": 15,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 187.8
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_376F3930_27CA_D361_4190_7CF2D4BA616B",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 174.85,
        "class": "HotspotMapOverlayImage",
        "y": 187.8,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_15.png",
           "width": 30,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 202.9,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16_map.gif",
           "width": 15,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 75.95
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_3778DCE6_27D7_D2E1_41C3_D9B03693BA2C",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 202.9,
        "class": "HotspotMapOverlayImage",
        "y": 75.95,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_16.png",
           "width": 30,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      },
      {
       "map": {
        "width": 30,
        "x": 58.95,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17_map.gif",
           "width": 15,
           "class": "ImageResourceLevel",
           "height": 15
          }
         ]
        },
        "offsetY": 0,
        "height": 30,
        "y": 99.95
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 13)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "rollOverDisplay": true,
       "class": "AreaHotspotMapOverlay",
       "useHandCursor": true,
       "id": "overlay_3686017A_27D6_53E6_41C2_468B88D59841",
       "data": {
        "label": "Image"
       },
       "image": {
        "x": 58.95,
        "class": "HotspotMapOverlayImage",
        "y": 99.95,
        "width": 30,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070_HS_17.png",
           "width": 30,
           "class": "ImageResourceLevel",
           "height": 30
          }
         ]
        },
        "height": 30
       }
      }
     ],
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "scaleMode": "fit_inside",
     "height": 558
    },
    "x": 88.7,
    "angle": 83.39,
    "class": "PanoramaMapLocation",
    "y": 228.55
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "cardboardMenu": {
   "fontColor": "#FFFFFF",
   "class": "Menu",
   "children": [
    {
     "label": "Lobby",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "Restrooms",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "Main Floor",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "Dining Room",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "Conference Room",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "Empty Shell",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "Parking Garage",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "3_1",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "9",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    },
    {
     "label": "14",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem"
    },
    {
     "label": "18",
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "class": "MenuItem"
    },
    {
     "label": "20",
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "class": "MenuItem"
    },
    {
     "label": "19",
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "class": "MenuItem"
    },
    {
     "label": "parking2",
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "class": "MenuItem"
    },
    {
     "label": "asensores",
     "click": "this.mainPlayList.set('selectedIndex', 14)",
     "class": "MenuItem"
    }
   ],
   "label": "Media",
   "opacity": 0.4,
   "id": "Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
   "selectedFontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "rollOverOpacity": 0.8,
   "selectedBackgroundColor": "#202020",
   "rollOverFontColor": "#FFFFFF",
   "backgroundColor": "#404040",
   "fontFamily": "Arial"
  },
  "adjacentPanoramas": [
   {
    "backwardYaw": -117.42,
    "panorama": {
     "frames": [
      {
       "cube": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_hq.jpeg",
          "width": 10224,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "class": "ImageResourceLevel",
          "height": 1704
         },
         {
          "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E.jpeg",
          "width": 6144,
          "class": "ImageResourceLevel",
          "height": 1024
         }
        ]
       },
       "overlays": [
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_D88FD15C_CB5C_5579_41E4_13EDF7A30528); this.mainPlayList.set('selectedIndex', 9)",
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.02,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_1_0.png",
              "width": 120,
              "class": "ImageResourceLevel",
              "height": 120
             }
            ]
           },
           "pitch": -3.5,
           "yaw": -117.42
          }
         ],
         "id": "overlay_CDB4D373_DCAD_D923_41DA_BEF903345F6C",
         "rollOverDisplay": false
        },
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D, this.camera_D887F14A_CB5C_5559_4142_D21B00B756E0); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.9,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_0_HS_0_0.png",
              "width": 120,
              "class": "ImageResourceLevel",
              "height": 120
             }
            ]
           },
           "pitch": -10.48,
           "yaw": 66.4
          }
         ],
         "id": "overlay_CD17C810_DCAE_D6FC_41E9_DAACF2C28087",
         "rollOverDisplay": false
        }
       ],
       "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
       "class": "CubicPanoramaFrame"
      }
     ],
     "class": "Panorama",
     "label": "Conference Room",
     "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
     "mapLocations": [
      {
       "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
       "x": 317.7,
       "angle": 92.31,
       "class": "PanoramaMapLocation",
       "y": 218.55
      }
     ],
     "pitch": 0,
     "hfovMax": 120,
     "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
     "adjacentPanoramas": [
      {
       "backwardYaw": -176.35,
       "panorama": {
        "frames": [
         {
          "cube": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_hq.jpeg",
             "width": 10224,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "class": "ImageResourceLevel",
             "height": 1704
            },
            {
             "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D.jpeg",
             "width": 6144,
             "class": "ImageResourceLevel",
             "height": 1024
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E, this.camera_D880F134_CB5C_52C9_41CC_9B1BDEB6520E); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.97,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_0_0.png",
                 "width": 120,
                 "class": "ImageResourceLevel",
                 "height": 119
                }
               ]
              },
              "pitch": -7.24,
              "yaw": -176.35
             }
            ],
            "id": "overlay_CD4CB2EB_DCAE_5B2C_41DC_F7E2F745A878",
            "rollOverDisplay": false
           },
           {
            "areas": [
             {
              "click": "this.showPopupPanoramaOverlay(this.popup_D60305E4_DCEA_D39F_419B_D9B149482827, {'rollOverBackgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'rollOverIconColor':'#CCCCCC','rollOverIconLineWidth':5,'paddingLeft':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#FFFFFF','rollOverIconWidth':50,'paddingRight':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedBackgroundColorDirection':'vertical','iconWidth':50,'pressedIconHeight':50,'iconHeight':50,'borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'rollOverIconHeight':50,'iconLineWidth':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000']}, this.ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90, null, null, null, null, false)",
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.23,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_0_HS_1_0.png",
                 "width": 123,
                 "class": "ImageResourceLevel",
                 "height": 103
                }
               ]
              },
              "pitch": -1.54,
              "yaw": 72.56
             }
            ],
            "id": "overlay_D672A178_DCEA_F368_41D5_479F8DEF3160",
            "rollOverDisplay": false
           },
           {
            "rotationY": 0,
            "rotationX": 0,
            "class": "PopupPanoramaOverlay",
            "hideDuration": 500,
            "showDuration": 500,
            "id": "popup_D60305E4_DCEA_D39F_419B_D9B149482827",
            "popupDistance": 100,
            "hideEasing": "cubic_out",
            "hfov": 8.23,
            "showEasing": "cubic_in",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
               "width": 1024,
               "class": "ImageResourceLevel",
               "height": 682
              }
             ]
            },
            "pitch": -1.54,
            "rotationZ": 0,
            "popupMaxWidth": "95%",
            "yaw": 72.56,
            "popupMaxHeight": "95%"
           }
          ],
          "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
          "class": "CubicPanoramaFrame"
         }
        ],
        "class": "Panorama",
        "label": "Dining Room",
        "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
        "mapLocations": [
         {
          "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
          "x": 343.6,
          "angle": -191.07,
          "class": "PanoramaMapLocation",
          "y": 332.55
         }
        ],
        "pitch": 0,
        "hfovMax": 120,
        "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
        "adjacentPanoramas": [
         {
          "backwardYaw": 66.4,
          "panorama": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
          "yaw": -176.35,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "hfovMin": 100,
        "vfov": 180,
        "partial": false,
        "thumbnailUrl": "media/panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_t.jpg",
        "hfov": 360
       },
       "yaw": 66.4,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": 72.07,
       "panorama": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
       "yaw": -117.42,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "hfovMin": 100,
     "vfov": 180,
     "partial": false,
     "thumbnailUrl": "media/panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_t.jpg",
     "hfov": 360
    },
    "yaw": 72.07,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "backwardYaw": 99.45,
    "panorama": {
     "frames": [
      {
       "cube": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_hq.jpeg",
          "width": 10224,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "class": "ImageResourceLevel",
          "height": 1704
         },
         {
          "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B.jpeg",
          "width": 6144,
          "class": "ImageResourceLevel",
          "height": 1024
         }
        ]
       },
       "overlays": [
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_D9C54287_CB5C_57D7_41E3_B745F1F91D07); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.86,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_1_0.png",
              "width": 118,
              "class": "ImageResourceLevel",
              "height": 119
             }
            ]
           },
           "pitch": -5.56,
           "yaw": 3.46
          }
         ],
         "id": "overlay_CC5E5224_DC56_7B24_41D5_3769EA774666",
         "rollOverDisplay": false
        },
        {
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A, this.camera_D9CF9292_CB5C_57C9_41E0_CE3057DE8CA4); this.mainPlayList.set('selectedIndex', 9)",
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [],
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.85,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_0_HS_0_0.png",
              "width": 118,
              "class": "ImageResourceLevel",
              "height": 119
             }
            ]
           },
           "pitch": -6.24,
           "yaw": 99.45
          }
         ],
         "id": "overlay_CCE05196_DC55_F9E4_41C9_7E05949C0230",
         "rollOverDisplay": false
        },
        {
         "bleachingDistance": 0.4,
         "yaw": -0.57,
         "class": "LensFlarePanoramaOverlay",
         "pitch": 16.86,
         "bleaching": 0.7,
         "id": "overlay_D364F048_DF66_03D5_41E1_5EA3BC9637F0"
        },
        {
         "bleachingDistance": 0.4,
         "yaw": 164.38,
         "class": "LensFlarePanoramaOverlay",
         "pitch": 16.1,
         "bleaching": 0.7,
         "id": "overlay_D37D2F7A_DF66_1DB5_41C0_1FB80896FEB3"
        }
       ],
       "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
       "class": "CubicPanoramaFrame"
      }
     ],
     "class": "Panorama",
     "label": "9",
     "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
     "mapLocations": [
      {
       "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
       "x": 86.7,
       "angle": 80.77,
       "class": "PanoramaMapLocation",
       "y": 121.65
      }
     ],
     "pitch": 0,
     "hfovMax": 120,
     "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
     "adjacentPanoramas": [
      {
       "backwardYaw": -176.41,
       "panorama": {
        "frames": [
         {
          "cube": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_hq.jpeg",
             "width": 10224,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "class": "ImageResourceLevel",
             "height": 1704
            },
            {
             "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0.jpeg",
             "width": 6144,
             "class": "ImageResourceLevel",
             "height": 1024
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_D9D2E271_CB5C_574B_4187_8CAA89AEEAFE); this.mainPlayList.set('selectedIndex', 14)",
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.88,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_1_0.png",
                 "width": 120,
                 "class": "ImageResourceLevel",
                 "height": 120
                }
               ]
              },
              "pitch": -11.41,
              "yaw": 96.47
             }
            ],
            "id": "overlay_D3E0C739_DC56_B92C_41E9_6C44CB4D0781",
            "rollOverDisplay": false
           },
           {
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B, this.camera_D9DC827C_CB5C_5739_41D9_F9A1075E9661); this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [],
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.97,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_0_HS_0_0.png",
                 "width": 120,
                 "class": "ImageResourceLevel",
                 "height": 120
                }
               ]
              },
              "pitch": -7.14,
              "yaw": -176.41
             }
            ],
            "id": "overlay_D3BB78D6_DC56_5764_41BF_4CD3DB34B52B",
            "rollOverDisplay": false
           },
           {
            "bleachingDistance": 0.4,
            "yaw": -0.95,
            "class": "LensFlarePanoramaOverlay",
            "pitch": 19.14,
            "bleaching": 0.7,
            "id": "overlay_D4BE7E36_DF66_3FBD_41E5_D711B6782282"
           },
           {
            "bleachingDistance": 0.4,
            "yaw": 164.38,
            "class": "LensFlarePanoramaOverlay",
            "pitch": 17.62,
            "bleaching": 0.7,
            "id": "overlay_D4BB02EB_DF66_04AB_41E7_314E72AF48E7"
           }
          ],
          "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
          "class": "CubicPanoramaFrame"
         }
        ],
        "class": "Panorama",
        "label": "Main Floor",
        "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
        "mapLocations": [
         {
          "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
          "x": 215.7,
          "angle": 87.93,
          "class": "PanoramaMapLocation",
          "y": 119.65
         }
        ],
        "pitch": 0,
        "hfovMax": 120,
        "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
        "adjacentPanoramas": [
         {
          "backwardYaw": -139.07,
          "panorama": {
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_hq.jpeg",
                "width": 5376,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "class": "ImageResourceLevel",
                "height": 2688
               },
               {
                "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F.jpeg",
                "width": 3217,
                "class": "ImageResourceLevel",
                "height": 1608
               }
              ]
             },
             "overlays": [
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_DF5581AE_CB5C_55D9_41E5_8B96785565E1); this.mainPlayList.set('selectedIndex', 0)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.87,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_0_0.png",
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -4.96,
                 "yaw": 32.92
                }
               ],
               "id": "overlay_28CE795F_2513_8FCA_4188_1998B7E06EBC",
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3, this.camera_DF4111BD_CB5C_553B_41E2_45955E58063F); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.88,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_1_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 117
                   }
                  ]
                 },
                 "pitch": -8.74,
                 "yaw": -166.68
                }
               ],
               "id": "overlay_2B261325_2512_837E_41B0_050021E9F08E",
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_D8BFB187_CB5C_55D7_41D8_2C9755D2DE21); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.82,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_2_0.png",
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -8,
                 "yaw": -76.25
                }
               ],
               "id": "overlay_2AFE1E17_2516_855A_41C1_80A7DE3B763C",
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_D8B7E171_CB5C_554B_41E5_4856331EAFD8); this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.72,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_3_0.png",
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -12.22,
                 "yaw": -16.11
                }
               ],
               "id": "overlay_2AA13E2D_2512_854F_417F_F5763DB0AB5B",
               "rollOverDisplay": false
              },
              {
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0, this.camera_D8AA6198_CB5C_55F9_41D7_DE37913D61A3); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [],
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.82,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_0_HS_4_0.png",
                    "width": 118,
                    "class": "ImageResourceLevel",
                    "height": 118
                   }
                  ]
                 },
                 "pitch": -8.17,
                 "yaw": -139.07
                }
               ],
               "id": "overlay_354312DB_254C_E20F_41B9_80BC77A75D32",
               "rollOverDisplay": false
              },
              {
               "bleachingDistance": 0.4,
               "yaw": -108.98,
               "class": "LensFlarePanoramaOverlay",
               "pitch": 44.67,
               "bleaching": 0.7,
               "id": "overlay_39E9E5BE_37C2_E4C0_41C8_ED2101A9B7E1"
              },
              {
               "bleachingDistance": 0.4,
               "yaw": 14.17,
               "class": "LensFlarePanoramaOverlay",
               "pitch": 28.8,
               "bleaching": 0.7,
               "id": "overlay_39F9CEF7_37C2_E441_4193_83EA81D1DE6F"
              }
             ],
             "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "Panorama",
           "label": "asensores",
           "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
           "mapLocations": [
            {
             "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
             "x": 222.6,
             "angle": 138.19,
             "class": "PanoramaMapLocation",
             "y": 230.15
            }
           ],
           "pitch": 0,
           "hfovMax": 120,
           "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
           "adjacentPanoramas": [
            {
             "backwardYaw": -3.13,
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_hq.jpeg",
                   "width": 5376,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "height": 2688
                  },
                  {
                   "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042.jpeg",
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "height": 1608
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_DF6381DE_CB5C_5578_419E_90202F1C25FE); this.mainPlayList.set('selectedIndex', 14)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.9,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_0_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -1.31,
                    "yaw": -3.13
                   }
                  ],
                  "id": "overlay_358E55A7_2512_877B_41B8_E929438E29B7",
                  "rollOverDisplay": false
                 },
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175, this.camera_DF6D61E9_CB5C_5558_41B3_E6C114A44631); this.mainPlayList.set('selectedIndex', 13)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.83,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_0_HS_1_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -7.96,
                    "yaw": 99.63
                   }
                  ],
                  "id": "overlay_3737BAD2_2512_82DA_419C_050096C450A4",
                  "rollOverDisplay": false
                 }
                ],
                "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
                "class": "SphericPanoramaFrame"
               }
              ],
              "class": "Panorama",
              "label": "Parking Garage",
              "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
              "mapLocations": [
               {
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "x": 217.9,
                "angle": 180,
                "class": "PanoramaMapLocation",
                "y": 90.95
               }
              ],
              "pitch": 0,
              "hfovMax": 120,
              "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
              "adjacentPanoramas": [
               {
                "backwardYaw": -16.11,
                "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                "yaw": -3.13,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": -61.02,
                "panorama": {
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_hq.jpeg",
                      "width": 5376,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "class": "ImageResourceLevel",
                      "height": 2688
                     },
                     {
                      "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175.jpeg",
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "height": 1608
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042, this.camera_D92AE266_CB5C_5749_41D0_5DD399EA3DC6); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.88,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_0_HS_0_0.png",
                          "width": 118,
                          "class": "ImageResourceLevel",
                          "height": 119
                         }
                        ]
                       },
                       "pitch": -3.91,
                       "yaw": -61.02
                      }
                     ],
                     "id": "overlay_3460957D_251D_87CE_4190_36CE7946E825",
                     "rollOverDisplay": false
                    },
                    {
                     "bleachingDistance": 0.4,
                     "yaw": 95.38,
                     "class": "LensFlarePanoramaOverlay",
                     "pitch": 16.72,
                     "bleaching": 0.7,
                     "id": "overlay_39DF8AEE_37C2_AC40_417A_6242CBF48B68"
                    }
                   ],
                   "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
                   "class": "SphericPanoramaFrame"
                  }
                 ],
                 "class": "Panorama",
                 "label": "parking2",
                 "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
                 "mapLocations": [
                  {
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "x": 73.95,
                   "angle": -207.49,
                   "class": "PanoramaMapLocation",
                   "y": 114.95
                  }
                 ],
                 "pitch": 0,
                 "hfovMax": 120,
                 "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 99.63,
                   "panorama": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
                   "yaw": -61.02,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "hfovMin": 100,
                 "vfov": 180,
                 "partial": false,
                 "thumbnailUrl": "media/panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_t.jpg",
                 "hfov": 360
                },
                "yaw": 99.63,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "hfovMin": 100,
              "vfov": 180,
              "partial": false,
              "thumbnailUrl": "media/panorama_2EED2445_250D_853F_41A3_CB6B066A7042_t.jpg",
              "hfov": 360
             },
             "yaw": -16.11,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -170.05,
             "panorama": {
              "frames": [
               {
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_hq.jpeg",
                   "width": 10224,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "height": 1704
                  },
                  {
                   "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F.jpeg",
                   "width": 6144,
                   "class": "ImageResourceLevel",
                   "height": 1024
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_D9E3B2A7_CB5C_57D7_41D7_E1425DB1CA6F); this.mainPlayList.set('selectedIndex', 10)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.84,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_1_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -7.44,
                    "yaw": -134.96
                   }
                  ],
                  "id": "overlay_CE8CA507_DCAE_5EE3_41E1_5677CFA0DCC5",
                  "rollOverDisplay": false
                 },
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_D99832BD_CB5C_573B_41BC_490DC133A798); this.mainPlayList.set('selectedIndex', 11)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.82,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_0_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 119
                      }
                     ]
                    },
                    "pitch": -8.14,
                    "yaw": 147.18
                   }
                  ],
                  "id": "overlay_CE501F2B_DCB6_692C_41E9_C5E62C500A79",
                  "rollOverDisplay": false
                 },
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_D9EE12B2_CB5C_57C9_41E1_CE78F38A7EE4); this.mainPlayList.set('selectedIndex', 14)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.89,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_0_HS_3_0.png",
                       "width": 118,
                       "class": "ImageResourceLevel",
                       "height": 118
                      }
                     ]
                    },
                    "pitch": -2.91,
                    "yaw": -170.05
                   }
                  ],
                  "id": "overlay_3690BC3C_2513_854E_41B9_F52311509481",
                  "rollOverDisplay": false
                 }
                ],
                "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
                "class": "CubicPanoramaFrame"
               }
              ],
              "class": "Panorama",
              "label": "Empty Shell",
              "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
              "mapLocations": [
               {
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "x": 215.7,
                "angle": 177.75,
                "class": "PanoramaMapLocation",
                "y": 376.6
               }
              ],
              "pitch": 0,
              "hfovMax": 120,
              "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
              "adjacentPanoramas": [
               {
                "backwardYaw": 39.43,
                "panorama": {
                 "frames": [
                  {
                   "cube": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_hq.jpeg",
                      "width": 10224,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "class": "ImageResourceLevel",
                      "height": 1704
                     },
                     {
                      "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9.jpeg",
                      "width": 6144,
                      "class": "ImageResourceLevel",
                      "height": 1024
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_D98232C8_CB5C_5759_4183_38CEABC1AF42); this.mainPlayList.set('selectedIndex', 5)",
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.84,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_1_0.png",
                          "width": 118,
                          "class": "ImageResourceLevel",
                          "height": 119
                         }
                        ]
                       },
                       "pitch": -7.1,
                       "yaw": 39.43
                      }
                     ],
                     "id": "overlay_CE5312DE_DCB6_5B64_41BB_6CD92A705CA6",
                     "rollOverDisplay": false
                    },
                    {
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_D98C42D3_CB5C_574F_41E2_877F2240E70E); this.mainPlayList.set('selectedIndex', 12)",
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [],
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.82,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_0_HS_0_0.png",
                          "width": 118,
                          "class": "ImageResourceLevel",
                          "height": 119
                         }
                        ]
                       },
                       "pitch": -8.27,
                       "yaw": 133.34
                      }
                     ],
                     "id": "overlay_CFB8AD78_DCB7_E92D_41BC_33566693B151",
                     "rollOverDisplay": false
                    }
                   ],
                   "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
                   "class": "CubicPanoramaFrame"
                  }
                 ],
                 "class": "Panorama",
                 "label": "18",
                 "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                 "mapLocations": [
                  {
                   "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                   "x": 333.7,
                   "angle": -175.06,
                   "class": "PanoramaMapLocation",
                   "y": 230.55
                  }
                 ],
                 "pitch": 0,
                 "hfovMax": 120,
                 "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -134.96,
                   "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                   "yaw": 39.43,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "backwardYaw": -31.12,
                   "panorama": {
                    "frames": [
                     {
                      "cube": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_hq.jpeg",
                         "width": 10224,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ],
                         "class": "ImageResourceLevel",
                         "height": 1704
                        },
                        {
                         "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09.jpeg",
                         "width": 6144,
                         "class": "ImageResourceLevel",
                         "height": 1024
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9, this.camera_D90B122F_CB5C_56D8_41E0_6A44D41CE4B6); this.mainPlayList.set('selectedIndex', 10)",
                          "mapColor": "image",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.98,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_1_0.png",
                             "width": 119,
                             "class": "ImageResourceLevel",
                             "height": 119
                            }
                           ]
                          },
                          "pitch": -7.02,
                          "yaw": -31.12
                         }
                        ],
                        "id": "overlay_CFB5EC7B_DCB6_6F2C_41DB_6256013DCD9F",
                        "rollOverDisplay": false
                       },
                       {
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8, this.camera_D931223A_CB5C_5739_41DA_5F1A8329DB73); this.mainPlayList.set('selectedIndex', 11)",
                          "mapColor": "image",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.83,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_0_0.png",
                             "width": 118,
                             "class": "ImageResourceLevel",
                             "height": 119
                            }
                           ]
                          },
                          "pitch": -7.66,
                          "yaw": 56.43
                         }
                        ],
                        "id": "overlay_CF3BB706_DCB6_DAE5_41C3_D53007E5C556",
                        "rollOverDisplay": false
                       },
                       {
                        "areas": [
                         {
                          "click": "this.mainPlayList.set('selectedIndex', 0)",
                          "mapColor": "image",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "maps": [],
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.68,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_0_HS_2_0.png",
                             "width": 131,
                             "class": "ImageResourceLevel",
                             "height": 115
                            }
                           ]
                          },
                          "pitch": -8.5,
                          "yaw": -1.47
                         }
                        ],
                        "id": "overlay_D6ACF640_DCF9_E25D_41B7_FC333768C35D",
                        "rollOverDisplay": false
                       }
                      ],
                      "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                      "class": "CubicPanoramaFrame"
                     }
                    ],
                    "class": "Panorama",
                    "label": "19",
                    "id": "panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                    "mapLocations": [
                     {
                      "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                      "x": 218.65,
                      "angle": 180,
                      "class": "PanoramaMapLocation",
                      "y": 100.55
                     }
                    ],
                    "pitch": 0,
                    "hfovMax": 120,
                    "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 133.34,
                      "panorama": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
                      "yaw": -31.12,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "frames": [
                        {
                         "cube": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_hq.jpeg",
                            "width": 10224,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "class": "ImageResourceLevel",
                            "height": 1704
                           },
                           {
                            "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6.jpeg",
                            "width": 6144,
                            "class": "ImageResourceLevel",
                            "height": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_DF7831D4_CB5C_5548_41B8_B070FD9C9A45); this.mainPlayList.set('selectedIndex', 14)",
                             "mapColor": "image",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_1_0.png",
                                "width": 119,
                                "class": "ImageResourceLevel",
                                "height": 119
                               }
                              ]
                             },
                             "pitch": -5.46,
                             "yaw": 87.33
                            }
                           ],
                           "id": "overlay_D2A966DF_DC6A_7B64_41DD_D822CC7BCA86",
                           "rollOverDisplay": false
                          },
                          {
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104, this.camera_DF4CB1C8_CB5C_5559_41E4_F5B1CD7EEA1F); this.mainPlayList.set('selectedIndex', 7)",
                             "mapColor": "image",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.7,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_0_0.png",
                                "width": 117,
                                "class": "ImageResourceLevel",
                                "height": 118
                               }
                              ]
                             },
                             "pitch": -13.09,
                             "yaw": -176.55
                            }
                           ],
                           "id": "overlay_D319ECF0_DC6A_6F3C_41EA_8C8FADFED6AD",
                           "rollOverDisplay": false
                          },
                          {
                           "bleachingDistance": 0.4,
                           "yaw": -92.76,
                           "class": "LensFlarePanoramaOverlay",
                           "pitch": -1.05,
                           "bleaching": 0.7,
                           "id": "overlay_D7DEC935_DCEA_FB36_41D7_D4FB63048649"
                          },
                          {
                           "areas": [
                            {
                             "click": "this.showPopupPanoramaOverlay(this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0, {'rollOverBackgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'rollOverIconColor':'#CCCCCC','rollOverIconLineWidth':5,'paddingLeft':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#FFFFFF','rollOverIconWidth':50,'paddingRight':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedBackgroundColorDirection':'vertical','iconWidth':50,'pressedIconHeight':50,'iconHeight':50,'borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'rollOverIconHeight':50,'iconLineWidth':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000']}, this.ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5, null, null, null, null, false)",
                             "mapColor": "image",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.64,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_6_0.png",
                                "width": 122,
                                "class": "ImageResourceLevel",
                                "height": 103
                               }
                              ]
                             },
                             "pitch": -21.91,
                             "yaw": 7.39
                            }
                           ],
                           "id": "overlay_D926478A_D4EF_39C2_41AE_D01A03A371F6",
                           "rollOverDisplay": false
                          },
                          {
                           "areas": [
                            {
                             "click": "this.showPopupPanoramaOverlay(this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D, {'rollOverBackgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorRatios':[0.09803921568627451],'rollOverIconColor':'#CCCCCC','rollOverIconLineWidth':5,'paddingLeft':5,'pressedIconWidth':50,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#FFFFFF','rollOverIconWidth':50,'paddingRight':5,'backgroundOpacity':0.5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#FF0000','pressedBackgroundColorDirection':'vertical','iconWidth':50,'pressedIconHeight':50,'iconHeight':50,'borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'rollOverIconHeight':50,'iconLineWidth':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundColor':['#000000']}, this.ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4, null, null, null, null, false)",
                             "mapColor": "image",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.04,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_0_HS_7_0.png",
                                "width": 122,
                                "class": "ImageResourceLevel",
                                "height": 103
                               }
                              ]
                             },
                             "pitch": -12.51,
                             "yaw": 163.85
                            }
                           ],
                           "id": "overlay_D9A90784_D4ED_39C5_4189_5758A99D263E",
                           "rollOverDisplay": false
                          },
                          {
                           "rotationY": 0,
                           "rotationX": 0,
                           "class": "PopupPanoramaOverlay",
                           "hideDuration": 500,
                           "showDuration": 500,
                           "id": "popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "hfov": 8.04,
                           "showEasing": "cubic_in",
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_2.jpg",
                              "width": 1024,
                              "class": "ImageResourceLevel",
                              "height": 682
                             }
                            ]
                           },
                           "pitch": -12.51,
                           "rotationZ": 0,
                           "popupMaxWidth": "95%",
                           "yaw": 163.85,
                           "popupMaxHeight": "95%"
                          },
                          {
                           "rotationY": 0,
                           "rotationX": 0,
                           "class": "PopupPanoramaOverlay",
                           "hideDuration": 500,
                           "showDuration": 500,
                           "id": "popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
                           "popupDistance": 100,
                           "hideEasing": "cubic_out",
                           "hfov": 7.64,
                           "showEasing": "cubic_in",
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_2.jpg",
                              "width": 1024,
                              "class": "ImageResourceLevel",
                              "height": 682
                             }
                            ]
                           },
                           "pitch": -21.91,
                           "rotationZ": 0,
                           "popupMaxWidth": "95%",
                           "yaw": 7.39,
                           "popupMaxHeight": "95%"
                          }
                         ],
                         "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
                         "class": "CubicPanoramaFrame"
                        }
                       ],
                       "class": "Panorama",
                       "label": "Lobby",
                       "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                       "mapLocations": [
                        {
                         "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                         "x": 217.7,
                         "angle": -83.39,
                         "class": "PanoramaMapLocation",
                         "y": 434.55
                        }
                       ],
                       "pitch": 0,
                       "hfovMax": 120,
                       "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 176.9,
                         "panorama": {
                          "frames": [
                           {
                            "cube": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_hq.jpeg",
                               "width": 10224,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ],
                               "class": "ImageResourceLevel",
                               "height": 1704
                              },
                              {
                               "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104.jpeg",
                               "width": 6144,
                               "class": "ImageResourceLevel",
                               "height": 1024
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6, this.camera_D9F9629C_CB5C_57F9_41E3_E70C5CEA928F); this.mainPlayList.set('selectedIndex', 0)",
                                "mapColor": "image",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [],
                              "data": {
                               "label": "Image"
                              },
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.73,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_0_HS_0_0.png",
                                   "width": 120,
                                   "class": "ImageResourceLevel",
                                   "height": 120
                                  }
                                 ]
                                },
                                "pitch": -15.9,
                                "yaw": 176.9
                               }
                              ],
                              "id": "overlay_D329AC1C_DC55_AEE5_41D2_6176DAFC3236",
                              "rollOverDisplay": false
                             }
                            ],
                            "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
                            "class": "CubicPanoramaFrame"
                           }
                          ],
                          "class": "Panorama",
                          "label": "3_1",
                          "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
                          "mapLocations": [
                           {
                            "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                            "x": 242.65,
                            "angle": -267.85,
                            "class": "PanoramaMapLocation",
                            "y": 430.8
                           }
                          ],
                          "pitch": 0,
                          "hfovMax": 120,
                          "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": -176.55,
                            "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
                            "yaw": 176.9,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "hfovMin": 100,
                          "vfov": 180,
                          "partial": false,
                          "thumbnailUrl": "media/panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_t.jpg",
                          "hfov": 360
                         },
                         "yaw": -176.55,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "backwardYaw": 32.92,
                         "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                         "yaw": 87.33,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "hfovMin": 100,
                       "vfov": 180,
                       "partial": false,
                       "thumbnailUrl": "media/panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_t.jpg",
                       "hfov": 360
                      }
                     },
                     {
                      "backwardYaw": -146.27,
                      "panorama": {
                       "frames": [
                        {
                         "cube": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_hq.jpeg",
                            "width": 10224,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "class": "ImageResourceLevel",
                            "height": 1704
                           },
                           {
                            "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8.jpeg",
                            "width": 6144,
                            "class": "ImageResourceLevel",
                            "height": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09, this.camera_D924525B_CB5C_577F_41E5_C58A21FD4765); this.mainPlayList.set('selectedIndex', 12)",
                             "mapColor": "image",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.82,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_1_0.png",
                                "width": 117,
                                "class": "ImageResourceLevel",
                                "height": 118
                               }
                              ]
                             },
                             "pitch": -8.35,
                             "yaw": -146.27
                            }
                           ],
                           "id": "overlay_CF2655CA_DCB5_F96D_41B7_34C2794364A6",
                           "rollOverDisplay": false
                          },
                          {
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F, this.camera_D93DC250_CB5C_5749_41D6_515A3AA6975A); this.mainPlayList.set('selectedIndex', 5)",
                             "mapColor": "image",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [],
                           "data": {
                            "label": "Image"
                           },
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.84,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_0_HS_0_0.png",
                                "width": 117,
                                "class": "ImageResourceLevel",
                                "height": 118
                               }
                              ]
                             },
                             "pitch": -7.11,
                             "yaw": -34.22
                            }
                           ],
                           "id": "overlay_C886FB4D_DCBA_6967_415D_6C46FDD1DF7E",
                           "rollOverDisplay": false
                          }
                         ],
                         "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                         "class": "CubicPanoramaFrame"
                        }
                       ],
                       "class": "Panorama",
                       "label": "20",
                       "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                       "mapLocations": [
                        {
                         "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                         "x": 81.65,
                         "angle": 171.27,
                         "class": "PanoramaMapLocation",
                         "y": 232.55
                        }
                       ],
                       "pitch": 0,
                       "hfovMax": 120,
                       "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 147.18,
                         "panorama": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
                         "yaw": -34.22,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "backwardYaw": 56.43,
                         "panorama": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
                         "yaw": -146.27,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "hfovMin": 100,
                       "vfov": 180,
                       "partial": false,
                       "thumbnailUrl": "media/panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_t.jpg",
                       "hfov": 360
                      },
                      "yaw": 56.43,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "hfovMin": 100,
                    "vfov": 180,
                    "partial": false,
                    "thumbnailUrl": "media/panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_t.jpg",
                    "hfov": 360
                   },
                   "yaw": 133.34,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "hfovMin": 100,
                 "vfov": 180,
                 "partial": false,
                 "thumbnailUrl": "media/panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_t.jpg",
                 "hfov": 360
                },
                "yaw": -134.96,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": -76.25,
                "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                "yaw": -170.05,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": -34.22,
                "panorama": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
                "yaw": 147.18,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "hfovMin": 100,
              "vfov": 180,
              "partial": false,
              "thumbnailUrl": "media/panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_t.jpg",
              "hfov": 360
             },
             "yaw": -76.25,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": 96.47,
             "panorama": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
             "yaw": -139.07,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": 87.33,
             "panorama": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
             "yaw": 32.92,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": 27.08,
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_hq.jpeg",
                   "width": 5376,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "height": 2688
                  },
                  {
                   "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3.jpeg",
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "height": 1608
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F, this.camera_D9375245_CB5C_574B_41E9_4FAB03715E0D); this.mainPlayList.set('selectedIndex', 14)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [],
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.64,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_0_HS_0_0.png",
                       "width": 120,
                       "class": "ImageResourceLevel",
                       "height": 120
                      }
                     ]
                    },
                    "pitch": -18.14,
                    "yaw": 27.08
                   }
                  ],
                  "id": "overlay_2B9DAFA3_2515_837B_41BD_B2A12DB79FE4",
                  "rollOverDisplay": false
                 },
                 {
                  "bleachingDistance": 0.4,
                  "yaw": -74.61,
                  "class": "LensFlarePanoramaOverlay",
                  "pitch": 59.4,
                  "bleaching": 0.7,
                  "id": "overlay_FE341697_EE9B_B5BB_41CC_1DCF1E1B9FE9"
                 },
                 {
                  "bleachingDistance": 0.4,
                  "yaw": -13.79,
                  "class": "LensFlarePanoramaOverlay",
                  "pitch": 28.05,
                  "bleaching": 0.7,
                  "id": "overlay_FE452B9D_EE9B_93AF_41C8_E05C00B1EC74"
                 },
                 {
                  "bleachingDistance": 0.4,
                  "yaw": -151.67,
                  "class": "LensFlarePanoramaOverlay",
                  "pitch": 31.07,
                  "bleaching": 0.7,
                  "id": "overlay_FE59F0F5_EE9B_8D7F_41E8_C632466F366D"
                 }
                ],
                "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
                "class": "SphericPanoramaFrame"
               }
              ],
              "class": "Panorama",
              "label": "Restrooms",
              "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
              "mapLocations": [
               {
                "map": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
                "x": 189.85,
                "angle": 59.39,
                "class": "PanoramaMapLocation",
                "y": 202.8
               }
              ],
              "pitch": 0,
              "hfovMax": 120,
              "cardboardMenu": "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
              "adjacentPanoramas": [
               {
                "backwardYaw": -166.68,
                "panorama": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
                "yaw": 27.08,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "hfovMin": 100,
              "vfov": 180,
              "partial": false,
              "thumbnailUrl": "media/panorama_2EEA7393_250E_835A_41C0_A400183B64D3_t.jpg",
              "hfov": 360
             },
             "yaw": -166.68,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "hfovMin": 100,
           "vfov": 180,
           "partial": false,
           "thumbnailUrl": "media/panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_t.jpg",
           "hfov": 360
          },
          "yaw": 96.47,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": 3.46,
          "panorama": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
          "yaw": -176.41,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "hfovMin": 100,
        "vfov": 180,
        "partial": false,
        "thumbnailUrl": "media/panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_t.jpg",
        "hfov": 360
       },
       "yaw": 3.46,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": -85.38,
       "panorama": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
       "yaw": 99.45,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "hfovMin": 80,
     "vfov": 180,
     "partial": false,
     "thumbnailUrl": "media/panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_t.jpg",
     "hfov": 360
    },
    "yaw": -85.38,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "hfovMin": 80,
  "vfov": 180,
  "partial": false,
  "thumbnailUrl": "media/panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_t.jpg",
  "hfov": 360
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 8.17,
   "class": "PanoramaCameraPosition",
   "pitch": -2.94
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera"
 },
 {
  "duration": 1000,
  "id": "effect_D98CE2D8_CB5C_5779_41E5_6BC4CED3606D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_D98D52D4_CB5C_5749_41BC_2FF467D386A5",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonCardboardView": {
   "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
   "transparencyActive": false,
   "toolTipShadowVerticalLength": 0,
   "toolTipShadowHorizontalLength": 0,
   "width": 75,
   "paddingLeft": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipBorderRadius": 3,
   "shadow": false,
   "toolTipFontSize": 12,
   "backgroundOpacity": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipFontColor": "#606060",
   "toolTipDisplayTime": 600,
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowBlurRadius": 3,
   "borderRadius": 0,
   "toolTipPaddingRight": 6,
   "minHeight": 1,
   "height": 50,
   "minWidth": 1,
   "toolTipOpacity": 1,
   "class": "IconButton",
   "paddingRight": 0,
   "toolTipFontWeight": "normal",
   "paddingTop": 0,
   "toolTipPaddingTop": 4,
   "toolTipFontFamily": "Arial",
   "toolTip": "VR",
   "mode": "push",
   "toolTipShadowColor": "#333333",
   "horizontalAlign": "center",
   "toolTipFontStyle": "normal",
   "toolTipBorderSize": 1,
   "toolTipBorderColor": "#767676",
   "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "data": {
    "name": "Button_VR"
   },
   "propagateClick": false,
   "paddingBottom": 0,
   "borderSize": 0,
   "cursor": "hand",
   "verticalAlign": "middle",
   "toolTipPaddingBottom": 4
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 103.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D9EE12B2_CB5C_57C9_41E1_CE78F38A7EE4"
 },
 {
  "duration": 1000,
  "id": "effect_D98D92DA_CB5C_5779_41BF_204F59B44072",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "items": [
   {
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98D32D9_CB5C_577B_41D3_D80443565284, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_D98D52D9_CB5C_577B_41DD_BD2C1CB31F4F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_D98D72DA_CB5C_5779_41B4_BACD6EC523D6, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "class": "PanoramaCamera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 85.44,
      "class": "PanoramaCameraPosition",
      "pitch": 1.17
     },
     "automaticZoomSpeed": 10,
     "id": "panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera"
    }
   },
   {
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "class": "PanoramaCamera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "automaticZoomSpeed": 10,
     "id": "panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera"
    }
   },
   {
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98D92DA_CB5C_5779_41BF_204F59B44072, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "class": "PanoramaCamera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera"
    }
   },
   {
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98D82DA_CB5C_5779_41D0_94DF6F8E2D2B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "class": "PanoramaCamera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera"
    }
   },
   {
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98DA2DA_CB5C_5779_41C5_49DD36F71821, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "class": "PanoramaCamera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera"
    }
   },
   {
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98DD2DB_CB5C_577F_41E0_CFF116068867, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "class": "PanoramaCamera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera"
    }
   },
   {
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
  "class": "PlayList"
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera",
 "this.popup_D60305E4_DCEA_D39F_419B_D9B149482827",
 {
  "duration": 1000,
  "id": "effect_D98DD2DB_CB5C_577F_41E0_CFF116068867",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 0,
  "id": "effect_EF6DE039_F622_38BD_41E2_3149DB234972",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "id": "ImageResource_C4896E50_D4F3_6B5D_41D3_2EEBDC3443C4",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_0.jpg",
    "width": 3861,
    "class": "ImageResourceLevel",
    "height": 2574
   },
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_1.jpg",
    "width": 2048,
    "class": "ImageResourceLevel",
    "height": 1365
   },
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D_0_3.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "id": "ImageResource_D38C2C6E_DFA1_73F8_41C3_8C1C155D72CB",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_0.jpg",
    "width": 1053,
    "class": "ImageResourceLevel",
    "height": 800
   },
   {
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 777
   },
   {
    "url": "media/popup_D4389918_DFA3_1559_4192_7C0F6E3795CE_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 388
   }
  ]
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": {
     "viewerArea": {
      "progressBorderColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "id": "MapViewer",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontSize": 12,
      "progressHeight": 10,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadBorderColor": "#000000",
      "width": "99.417%",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundOpacity": 1,
      "borderRadius": 0,
      "minHeight": 1,
      "toolTipShadowBlurRadius": 3,
      "playbackBarOpacity": 1,
      "minWidth": 1,
      "toolTipOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBarOpacity": 1,
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "progressLeft": 0,
      "height": "70.806%",
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarHeight": 10,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowColor": "#333333",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadBorderSize": 0,
      "transitionDuration": 500,
      "playbackBarHeadWidth": 6,
      "progressBorderSize": 0,
      "playbackBarBorderSize": 0,
      "propagateClick": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarBackgroundOpacity": 1,
      "toolTipPaddingBottom": 4,
      "transitionMode": "blending",
      "playbackBarLeft": 0,
      "paddingLeft": 0,
      "progressBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipShadowHorizontalLength": 0,
      "shadow": false,
      "displayTooltipInTouchScreens": true,
      "playbackBarRight": 0,
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "toolTipFontColor": "#606060",
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBorderRadius": 0,
      "toolTipDisplayTime": 600,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "paddingTop": 0,
      "progressBarBorderColor": "#000000",
      "class": "ViewerArea",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderSize": 0,
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressBarBorderRadius": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarBottom": 0,
      "data": {
       "name": "MapViewer"
      },
      "progressBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "paddingBottom": 0,
      "borderSize": 0,
      "progressOpacity": 1,
      "progressBottom": 2
     },
     "id": "MapViewerMapPlayer",
     "class": "MapPlayer",
     "movementMode": "constrained"
    },
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_D8E760FD_CB5C_533B_41C1_4524F809D336",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "class": "FadeOutEffect",
  "easing": "linear"
 },
 {
  "duration": 1000,
  "id": "effect_D98DC2D5_CB5C_574B_41E4_E595F6CA1EB7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 45.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D98232C8_CB5C_5759_4183_38CEABC1AF42"
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 105,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera"
 },
 {
  "duration": 1000,
  "id": "effect_D98DA2DA_CB5C_5779_41C5_49DD36F71821",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_D98D02D3_CB5C_574F_41E2_F30E550AE134",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -123.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D924525B_CB5C_577F_41E5_C58A21FD4765"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -113.6,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D880F134_CB5C_52C9_41CC_9B1BDEB6520E"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 9.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D8BFB187_CB5C_55D7_41D8_2C9755D2DE21"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera"
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
 {
  "duration": 1000,
  "id": "effect_D98D82DA_CB5C_5779_41D0_94DF6F8E2D2B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 62.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_DF18F1F4_CB5C_5548_41C7_EDB6E461EB53"
 },
 {
  "duration": 1000,
  "id": "effect_D98DB2D4_CB5C_5749_41E6_CA68DCBD99A4",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 40.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D9D2E271_CB5C_574B_4187_8CAA89AEEAFE"
 },
 "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
 {
  "duration": 1000,
  "id": "effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "id": "ImageResource_C406C318_D4FF_7ACD_41B8_0A98872E7CE5",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_0.jpg",
    "width": 3861,
    "class": "ImageResourceLevel",
    "height": 2574
   },
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_1.jpg",
    "width": 2048,
    "class": "ImageResourceLevel",
    "height": 1365
   },
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0_0_3.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera",
 {
  "duration": 1000,
  "id": "effect_D98D72DA_CB5C_5779_41B4_BACD6EC523D6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
 {
  "id": "ImageResource_D09C8172_DCEA_737B_41C7_76727B821C90",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_0.jpg",
    "width": 1200,
    "class": "ImageResourceLevel",
    "height": 800
   },
   {
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_D60305E4_DCEA_D39F_419B_D9B149482827_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "duration": 1000,
  "id": "effect_E359A214_ED68_4575_41DB_B895523643F9",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_E3598214_ED68_4574_41E8_2F261C5C21DC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_C48529D7_D4F3_2942_41E5_F42BFBFEAD0D",
 {
  "duration": 1000,
  "id": "effect_D98D92D4_CB5C_5749_41E0_C3A846DB8683",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA",
 {
  "duration": 1000,
  "id": "effect_D98D52D9_CB5C_577B_41DD_BD2C1CB31F4F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera"
 },
 "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
 "this.Menu_D8908108_CB5C_52D9_41DE_2646A2821BD5",
 "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 3.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D9F9629C_CB5C_57F9_41E3_E70C5CEA928F"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 105,
   "yaw": 94.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D9CF9292_CB5C_57C9_41E0_CE3057DE8CA4"
 },
 {
  "duration": 1000,
  "id": "effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98D02D3_CB5C_574F_41E2_F30E550AE134, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, this.effect_D98D52D4_CB5C_5749_41BC_2FF467D386A5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F'); if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, -1, this.effect_D98D92D4_CB5C_5749_41E0_C3A846DB8683, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F'); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false, -1, this.effect_EF6CC353_F62E_F8CE_41D2_66B9FD39DBBE, 'hideEffect', false)",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8E820FE_CB5C_5339_41B0_56F8ABE476B7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3582213_ED68_454C_41D3_299F2B40CFF6, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, this.effect_F083FF13_E49C_8716_41EC_3E7D67287F82, 'showEffect', false); this.keepComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, -1, this.effect_2443EFF2_36BF_E45F_41B5_AFD333B0CCF1, 'showEffect', false); this.keepComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, false); this.setComponentVisibility(this.Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515, true, -1, this.effect_EF6DE039_F622_38BD_41E2_3149DB234972, 'showEffect', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8E820FE_CB5C_5339_41B0_56F8ABE476B7",
    "camera": "this.panorama_CD72A3D2_DC76_597C_41AC_94807507FBF6_camera"
   },
   {
    "media": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_D8E8A0FE_CB5C_5339_41E4_316B63A95AD7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8E8A0FE_CB5C_5339_41E4_316B63A95AD7",
    "camera": "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera"
   },
   {
    "media": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98DB2D4_CB5C_5749_41E6_CA68DCBD99A4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8E910FE_CB5C_5339_41E4_FC22ECB0EB58, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3586214_ED68_4574_41E5_D2720D677B2E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8E910FE_CB5C_5339_41E4_FC22ECB0EB58",
    "camera": "this.panorama_D2E0896A_DC77_E92C_41B9_B89FBEB503B0_camera"
   },
   {
    "media": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98DD2D5_CB5C_574B_41E0_AD837C6646A2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8E940FF_CB5C_5337_41E2_15742A0B82F1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3598214_ED68_4574_41E8_2F261C5C21DC, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8E940FF_CB5C_5337_41E2_15742A0B82F1",
    "camera": "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera"
   },
   {
    "media": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98DC2D5_CB5C_574B_41E4_E595F6CA1EB7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8E9D0FF_CB5C_5337_41D3_2A90EF6BA8C2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359A214_ED68_4575_41DB_B895523643F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8E9D0FF_CB5C_5337_41D3_2A90EF6BA8C2",
    "camera": "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera"
   },
   {
    "media": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98DF2D6_CB5C_5749_41D8_8C76396236FF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8EA30FF_CB5C_5337_41E3_C1A86091B52A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E3587215_ED68_4577_4183_716A0D8E6DA7, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8EA30FF_CB5C_5337_41E3_C1A86091B52A",
    "camera": "this.panorama_D2E04668_DC77_BB2C_41D4_2D1CDC9ED58F_camera"
   },
   {
    "media": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_D8EA60FF_CB5C_5337_41E5_3EED2E8BCF54, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8EA60FF_CB5C_5337_41E5_3EED2E8BCF54",
    "camera": "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042_camera"
   },
   {
    "media": "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98DE2D6_CB5C_5749_41C9_2CF72679A73F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8EB1100_CB5C_52C9_41DC_6E5AAB773829, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A8219_ED68_457C_41E5_C52BA0340B76, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8EB1100_CB5C_52C9_41DC_6E5AAB773829",
    "camera": {
     "class": "PanoramaCamera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera"
    }
   },
   {
    "media": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98C92D7_CB5C_5777_41D2_AD58F97CD511, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8EB7100_CB5C_52C9_41CC_29C05460CE76, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8EB7100_CB5C_52C9_41CC_29C05460CE76",
    "camera": "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B_camera"
   },
   {
    "media": "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98CB2D7_CB5C_5777_41D4_1F59DF6444C2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8EBD100_CB5C_52C9_41C6_E21A088DE562, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8EBD100_CB5C_52C9_41C6_E21A088DE562",
    "camera": {
     "class": "PanoramaCamera",
     "initialPosition": {
      "hfov": 105,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "automaticZoomSpeed": 10,
     "id": "panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera"
    }
   },
   {
    "media": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98CD2D8_CB5C_5779_41CB_D001FABAF5E8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8EC3100_CB5C_52C9_41E1_8F95C1CE12C8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35A021A_ED68_457D_41DB_F92702D0649E, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8EC3100_CB5C_52C9_41E1_8F95C1CE12C8",
    "camera": "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9_camera"
   },
   {
    "media": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98CF2D8_CB5C_5779_41E5_505E3870E566, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8EC6101_CB5C_52CB_41E3_08E8CE013668, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E359B21B_ED68_4573_41E3_2134D2902989, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8EC6101_CB5C_52CB_41E3_08E8CE013668",
    "camera": "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8_camera"
   },
   {
    "media": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09",
    "end": "if(this.existsKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')){ if(this.getKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163')) { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true, -1, this.effect_D98CE2D8_CB5C_5779_41E5_6BC4CED3606D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163'); if(this.existsKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')){ if(this.getKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')) { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F')",
    "start": "this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, true); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true)",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F', this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F.get('visible')); this.registerKey('visibility_Image_E84AED1C_E346_1439_41DD_9142DAACB163', this.Image_E84AED1C_E346_1439_41DD_9142DAACB163.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_D8ECE106_CB5C_52C9_41D2_92CC57C4239D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false); this.setComponentVisibility(this.Image_E84AED1C_E346_1439_41DD_9142DAACB163, false, -1, this.effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F, 'hideEffect', false); this.keepComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, false); this.setComponentVisibility(this.Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F, true, -1, null, null, false)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8ECE106_CB5C_52C9_41D2_92CC57C4239D",
    "camera": "this.panorama_D2E1A721_DC76_5ADC_41DA_49B9545A3C09_camera"
   },
   {
    "media": "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_D8ED4106_CB5C_52C9_41D3_3F65CC4DA4E4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8ED4106_CB5C_52C9_41D3_3F65CC4DA4E4",
    "camera": {
     "class": "PanoramaCamera",
     "initialPosition": {
      "hfov": 110,
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "automaticZoomSpeed": 10,
     "id": "panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera"
    }
   },
   {
    "media": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_D8EDA107_CB5C_52D7_41E9_355B8D522904, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_D8EDA107_CB5C_52D7_41E9_355B8D522904",
    "camera": "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F_camera"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 13.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D9375245_CB5C_574B_41E9_4FAB03715E0D"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 33.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D931223A_CB5C_5739_41DA_5F1A8329DB73"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 176.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D8B7E171_CB5C_554B_41E5_4856331EAFD8"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 3.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D9C54287_CB5C_57D7_41E3_B745F1F91D07"
 },
 {
  "duration": 1000,
  "id": "effect_E35A021A_ED68_457D_41DB_F92702D0649E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "class": "FadeInEffect",
  "easing": "linear"
 },
 "this.panorama_2EED2445_250D_853F_41A3_CB6B066A7042",
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E",
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104",
 {
  "duration": 1000,
  "id": "effect_D98CD2D8_CB5C_5779_41CB_D001FABAF5E8",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_E3582213_ED68_454C_41D3_299F2B40CFF6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 118.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_DF6D61E9_CB5C_5558_41B3_E6C114A44631"
 },
 "this.panorama_2EE2BBF9_250E_82D7_4194_21995A936F9F",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -46.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D90B122F_CB5C_56D8_41E0_6A44D41CE4B6"
 },
 {
  "duration": 1000,
  "id": "effect_D98DD2D5_CB5C_574B_41E0_AD837C6646A2",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "id": "ImageResource_D082516E_DCEA_7368_41CB_9D0CFA830713",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_0.jpg",
    "width": 1200,
    "class": "ImageResourceLevel",
    "height": 800
   },
   {
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_D601068B_DCEE_51A9_41E3_0730B520BCC4_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 {
  "duration": 1000,
  "id": "effect_D98DE2D6_CB5C_5749_41C9_2CF72679A73F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -152.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_DF4111BD_CB5C_553B_41E2_45955E58063F"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 145.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D99832BD_CB5C_573B_41BC_490DC133A798"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 3.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D887F14A_CB5C_5559_4142_D21B00B756E0"
 },
 {
  "duration": 1000,
  "id": "effect_E35A8219_ED68_457C_41E5_C52BA0340B76",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 105,
   "yaw": -176.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D9DC827C_CB5C_5739_41D9_F9A1075E9661"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -80.37,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D92AE266_CB5C_5749_41D0_5DD399EA3DC6"
 },
 "this.panorama_D2E18F7C_DC76_6925_41CD_4F3ECD6201D8",
 {
  "duration": 1000,
  "id": "effect_E3586214_ED68_4574_41E5_D2720D677B2E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_D98CB2D7_CB5C_5777_41D4_1F59DF6444C2",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175_camera",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -140.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D9E3B2A7_CB5C_57D7_41D7_E1425DB1CA6F"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 105,
   "yaw": -80.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_DF0481FE_CB5C_5538_41C6_7F3E37F08584"
 },
 {
  "duration": 1000,
  "id": "effect_D98CF2D8_CB5C_5779_41E5_505E3870E566",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_D2E0F105_DC77_F6E4_41E2_733B8077262B",
 {
  "duration": 1000,
  "id": "effect_F083FF13_E49C_8716_41EC_3E7D67287F82",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_E35AE21F_ED68_4574_41E7_63F6C5498C0F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.panorama_2EEA7393_250E_835A_41C0_A400183B64D3_camera",
 "this.panorama_D2E09ECE_DC77_AB64_41D0_5999D963939D_camera",
 "this.popup_C58239B8_D4FF_29CD_41DD_C9A1163B35A0",
 "this.MapViewerMapPlayer",
 {
  "duration": 1000,
  "id": "effect_E35AD21A_ED68_457C_41E7_B5BB4160C7D1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 148.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D98C42D3_CB5C_574F_41E2_877F2240E70E"
 },
 {
  "duration": 1000,
  "id": "effect_D98D32D9_CB5C_577B_41D3_D80443565284",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "id": "ImageResource_D09DC170_DCEA_7378_41EB_423962A6DDEA",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_0.jpg",
    "width": 1200,
    "class": "ImageResourceLevel",
    "height": 800
   },
   {
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/popup_D61AFF27_DCEA_3099_41E1_F15C95E216FA_0_2.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 341
   }
  ]
 },
 "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -83.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D8AA6198_CB5C_55F9_41D7_DE37913D61A3"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 163.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_DF6381DE_CB5C_5578_419E_90202F1C25FE"
 },
 {
  "duration": 1000,
  "id": "effect_E359B21B_ED68_4573_41E3_2134D2902989",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 105,
   "yaw": -107.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D88FD15C_CB5C_5579_41E4_13EDF7A30528"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -92.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_DF5581AE_CB5C_55D9_41E5_8B96785565E1"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_C32D7BFC_DD76_6225_41E0_C1D46A7D8070",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_D8E770F8_CB5C_5339_41E1_DCEA8C3DBA47",
  "class": "PlayList"
 },
 {
  "duration": 1000,
  "id": "effect_E3587215_ED68_4577_4183_716A0D8E6DA7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -147.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_DF7831D4_CB5C_5548_41B8_B070FD9C9A45"
 },
 "this.panorama_D2E0A020_DC77_D6DC_41E6_54909716E73A_camera",
 "this.panorama_D2E07768_DC77_D92D_41E9_1B92E9D5BC6E_camera",
 "this.popup_D4389918_DFA3_1559_4192_7C0F6E3795CE",
 "this.panorama_D2E06C02_DC77_AEDC_41E2_EBE956B59104_camera",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -3.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_DF4CB1C8_CB5C_5559_41E4_F5B1CD7EEA1F"
 },
 {
  "duration": 1000,
  "id": "effect_E35AF21A_ED68_457D_41EC_43A46E7BC86C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.popup_D601068B_DCEE_51A9_41E3_0730B520BCC4",
 "this.panorama_D2E06EEA_DC77_AB2D_41B8_E9DF202CF0A9",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -32.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_D93DC250_CB5C_5749_41D6_515A3AA6975A"
 },
 "this.panorama_2EED19F5_250E_8EDE_4180_D1CFFD810175",
 {
  "duration": 1000,
  "id": "effect_D98DF2D6_CB5C_5749_41D8_8C76396236FF",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_D98C92D7_CB5C_5777_41D2_AD58F97CD511",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
], "children": [
 {
  "progressBorderColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "id": "MainViewer",
  "left": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontSize": 12,
  "progressHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "width": "100%",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "borderRadius": 0,
  "minHeight": 50,
  "toolTipShadowBlurRadius": 3,
  "playbackBarOpacity": 1,
  "minWidth": 100,
  "toolTipOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipFontStyle": "normal",
  "progressLeft": 0,
  "height": "100%",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowColor": "#333333",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarHeadWidth": 6,
  "progressBorderSize": 0,
  "playbackBarBorderSize": 0,
  "propagateClick": false,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingBottom": 4,
  "transitionMode": "blending",
  "playbackBarLeft": 0,
  "paddingLeft": 0,
  "progressBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowHorizontalLength": 0,
  "shadow": false,
  "displayTooltipInTouchScreens": true,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "toolTipFontColor": "#606060",
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "paddingTop": 0,
  "progressBarBorderColor": "#000000",
  "class": "ViewerArea",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "toolTipShadowSpread": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBottom": 5,
  "data": {
   "name": "Main Viewer"
  },
  "progressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "paddingBottom": 0,
  "borderSize": 0,
  "progressOpacity": 1,
  "progressBottom": 0
 },
 {
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "transparencyActive": true,
      "toolTipShadowVerticalLength": 0,
      "toolTipShadowHorizontalLength": 0,
      "width": 75,
      "paddingLeft": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipFontSize": 12,
      "backgroundOpacity": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipPaddingLeft": 6,
      "toolTipFontColor": "#606060",
      "toolTipDisplayTime": 600,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipPaddingRight": 6,
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "height": 50,
      "minWidth": 1,
      "toolTipOpacity": 1,
      "class": "IconButton",
      "paddingRight": 0,
      "toolTipFontWeight": "normal",
      "paddingTop": 0,
      "toolTipPaddingTop": 4,
      "toolTipFontFamily": "Arial",
      "toolTip": "Map",
      "mode": "toggle",
      "toolTipShadowColor": "#333333",
      "horizontalAlign": "center",
      "toolTipFontStyle": "normal",
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else { this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipBorderSize": 1,
      "toolTipBorderColor": "#767676",
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "data": {
       "name": "Button_Map"
      },
      "propagateClick": false,
      "paddingBottom": 0,
      "borderSize": 0,
      "cursor": "hand",
      "verticalAlign": "middle",
      "toolTipPaddingBottom": 4
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "width": 334,
    "paddingLeft": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minHeight": 77,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "height": 77,
    "minWidth": 334,
    "overflow": "scroll",
    "class": "Container",
    "paddingRight": 0,
    "paddingTop": 0,
    "gap": 10,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "horizontalAlign": "center",
    "data": {
     "name": "Container_btones"
    },
    "propagateClick": false,
    "paddingBottom": 0,
    "borderSize": 0,
    "verticalAlign": "middle"
   }
  ],
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "left": "0%",
  "paddingLeft": 0,
  "shadow": false,
  "width": "100%",
  "backgroundOpacity": 0,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "bottom": "0%",
  "height": "18.033%",
  "minWidth": 1,
  "overflow": "scroll",
  "class": "Container",
  "paddingRight": 0,
  "paddingTop": 0,
  "gap": 10,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "data": {
   "name": "Container_Menu"
  },
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0,
  "verticalAlign": "middle"
 },
 {
  "scrollBarVisible": "rollOver",
  "creationPolicy": "inAdvance",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "children": [
     "this.MapViewer",
     {
      "maxHeight": 264,
      "maxWidth": 448,
      "id": "Image_E84AED1C_E346_1439_41DD_9142DAACB163",
      "paddingLeft": 0,
      "shadow": false,
      "width": "100%",
      "backgroundOpacity": 0,
      "url": "skin/Image_E84AED1C_E346_1439_41DD_9142DAACB163.png",
      "borderRadius": 0,
      "minHeight": 1,
      "height": "27.233%",
      "minWidth": 1,
      "class": "Image",
      "paddingRight": 0,
      "paddingTop": 0,
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "data": {
       "name": "Simbologia"
      },
      "propagateClick": false,
      "paddingBottom": 0,
      "borderSize": 0,
      "verticalAlign": "middle"
     }
    ],
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "paddingLeft": 0,
    "shadow": false,
    "width": "100%",
    "scrollBarMargin": 2,
    "layout": "vertical",
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minHeight": 1,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "height": "81.45%",
    "minWidth": 1,
    "overflow": "scroll",
    "class": "Container",
    "paddingRight": 0,
    "paddingTop": 0,
    "gap": 10,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "horizontalAlign": "center",
    "data": {
     "name": "Container_Map"
    },
    "propagateClick": false,
    "paddingBottom": 0,
    "borderSize": 0,
    "verticalAlign": "middle"
   }
  ],
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "paddingLeft": 0,
  "right": "0%",
  "shadow": false,
  "width": "29.316%",
  "backgroundOpacity": 0,
  "layout": "vertical",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "minHeight": 1,
  "top": "2.05%",
  "scrollBarOpacity": 0.5,
  "height": "77.049%",
  "minWidth": 1,
  "overflow": "scroll",
  "class": "Container",
  "paddingRight": 0,
  "paddingTop": 0,
  "gap": 10,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "visible": false,
  "data": {
   "name": "Main_Container"
  },
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0,
  "verticalAlign": "top"
 },
 {
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "textDecoration": "none",
    "fontFamily": "Arial",
    "arrowBeforeLabel": false,
    "popUpShadowOpacity": 0,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "popUpBackgroundOpacity": 0.72,
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "prompt": "Location List",
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingLeft": 5,
    "popUpBackgroundColor": "#FFFFFF",
    "shadow": false,
    "width": "20.256%",
    "backgroundOpacity": 0.72,
    "arrowColor": "#0066FF",
    "popUpBorderRadius": 0,
    "borderRadius": 4,
    "minHeight": 20,
    "popUpShadowBlurRadius": 6,
    "paddingTop": 0,
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "popUpShadowSpread": 1,
    "minWidth": 200,
    "class": "DropDown",
    "paddingRight": 5,
    "backgroundColorDirection": "vertical",
    "selectedPopUpBackgroundColor": "#0066FF",
    "selectedPopUpFontColor": "#FFFFFF",
    "gap": 0,
    "fontSize": 14,
    "fontStyle": "normal",
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "fontColor": "#333333",
    "popUpFontColor": "#000000",
    "popUpShadow": false,
    "popUpShadowColor": "#000000",
    "data": {
     "name": "Location List"
    },
    "propagateClick": false,
    "paddingBottom": 0,
    "borderSize": 0,
    "height": "27.397%",
    "fontWeight": "normal",
    "popUpGap": 0
   }
  ],
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "left": "0%",
  "paddingLeft": 0,
  "shadow": false,
  "width": "100%",
  "backgroundOpacity": 0,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "minHeight": 1,
  "top": "0.96%",
  "scrollBarOpacity": 0.5,
  "height": "10%",
  "minWidth": 1,
  "overflow": "scroll",
  "class": "Container",
  "paddingRight": 0,
  "paddingTop": 0,
  "gap": 10,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "horizontalAlign": "left",
  "data": {
   "name": "ContainerDropDown"
  },
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0,
  "verticalAlign": "top"
 },
 {
  "textDecoration": "none",
  "fontFamily": "Arial",
  "data": {
   "name": "Label_La Lima Free Zone"
  },
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "left": "0%",
  "paddingLeft": 0,
  "textShadowOpacity": 1,
  "shadow": false,
  "width": "100%",
  "backgroundOpacity": 0,
  "text": "La Lima Free Zone",
  "borderRadius": 0,
  "minHeight": 1,
  "top": "0%",
  "textShadowColor": "#000000",
  "height": "10%",
  "textShadowBlurRadius": 3,
  "minWidth": 1,
  "class": "Label",
  "paddingRight": 0,
  "paddingTop": 0,
  "fontSize": 20,
  "fontStyle": "normal",
  "fontColor": "#FFFFFF",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "visible": false,
  "textShadowVerticalLength": 1,
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0,
  "verticalAlign": "middle",
  "fontWeight": "normal"
 },
 {
  "textDecoration": "none",
  "fontFamily": "Arial",
  "data": {
   "name": "Label_Cartago City"
  },
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "left": "0%",
  "paddingLeft": 0,
  "textShadowOpacity": 1,
  "shadow": false,
  "width": "100%",
  "backgroundOpacity": 0,
  "text": "Cartago City",
  "borderRadius": 0,
  "minHeight": 1,
  "top": "0%",
  "textShadowColor": "#000000",
  "height": "10%",
  "textShadowBlurRadius": 3,
  "minWidth": 1,
  "class": "Label",
  "paddingRight": 0,
  "paddingTop": 0,
  "fontSize": 20,
  "fontStyle": "normal",
  "fontColor": "#FFFFFF",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "visible": false,
  "textShadowVerticalLength": 1,
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0,
  "verticalAlign": "middle",
  "fontWeight": "normal"
 },
 {
  "textDecoration": "none",
  "fontFamily": "Arial",
  "data": {
   "name": "Label_Corporate Center"
  },
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "left": "0%",
  "paddingLeft": 0,
  "textShadowOpacity": 1,
  "shadow": false,
  "width": "100%",
  "backgroundOpacity": 0,
  "text": "Corporate Center Project",
  "borderRadius": 0,
  "minHeight": 1,
  "top": "0%",
  "textShadowColor": "#000000",
  "height": "13.108%",
  "textShadowBlurRadius": 3,
  "minWidth": 1,
  "class": "Label",
  "paddingRight": 0,
  "paddingTop": 0,
  "fontSize": 20,
  "fontStyle": "normal",
  "fontColor": "#FFFFFF",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "visible": false,
  "textShadowVerticalLength": 1,
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0,
  "verticalAlign": "middle",
  "fontWeight": "normal"
 },
 {
  "textDecoration": "none",
  "fontFamily": "Arial",
  "data": {
   "name": "Label_Corporate Building"
  },
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "left": "0%",
  "paddingLeft": 0,
  "textShadowOpacity": 1,
  "shadow": false,
  "width": "100%",
  "backgroundOpacity": 0,
  "text": "Corporate Building",
  "borderRadius": 0,
  "minHeight": 1,
  "top": "6%",
  "textShadowColor": "#000000",
  "height": "3.5%",
  "textShadowBlurRadius": 3,
  "minWidth": 1,
  "class": "Label",
  "paddingRight": 0,
  "paddingTop": 0,
  "fontSize": 20,
  "fontStyle": "normal",
  "fontColor": "#FFFFFF",
  "horizontalAlign": "center",
  "textShadowHorizontalLength": 1,
  "visible": false,
  "textShadowVerticalLength": 1,
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0,
  "verticalAlign": "middle",
  "fontWeight": "normal"
 },
 {
  "scrollBarVisible": "rollOver",
  "creationPolicy": "inAdvance",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "backgroundColorRatios": [
       0
      ],
      "paddingLeft": 0,
      "right": "0%",
      "shadow": false,
      "width": "99.907%",
      "backgroundOpacity": 1,
      "url": "https://www.dailymotion.com/embed/video/k6rUD3T5joeDTUvKk40?queue-enable=false\n",
      "borderRadius": 0,
      "minHeight": 1,
      "top": "0%",
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "class": "WebFrame",
      "paddingRight": 0,
      "backgroundColorDirection": "vertical",
      "height": "100%",
      "scrollEnabled": true,
      "visible": false,
      "data": {
       "name": "WebFrame_Zollner"
      },
      "propagateClick": false,
      "paddingBottom": 0,
      "borderSize": 0,
      "insetBorder": false
     },
     {
      "id": "WebFrame_481C91A8_5884_FE7A_41C8_4323AD379DAB",
      "left": "0%",
      "backgroundColorRatios": [
       0
      ],
      "paddingLeft": 0,
      "shadow": false,
      "width": "100%",
      "backgroundOpacity": 1,
      "url": "https://www.dailymotion.com/embed/video/k7aiEquDs4DSNjvDIsI?queue-enable=false",
      "borderRadius": 0,
      "minHeight": 1,
      "top": "0%",
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "class": "WebFrame",
      "paddingRight": 0,
      "backgroundColorDirection": "vertical",
      "height": "100%",
      "scrollEnabled": true,
      "visible": false,
      "data": {
       "name": "WebFrame_CC"
      },
      "propagateClick": false,
      "paddingBottom": 0,
      "borderSize": 0,
      "insetBorder": false
     },
     {
      "id": "WebFrame_49C802F8_588C_E3DA_41CD_641EC413A411",
      "left": "0%",
      "backgroundColorRatios": [
       0
      ],
      "paddingLeft": 0,
      "shadow": false,
      "width": "100%",
      "backgroundOpacity": 1,
      "url": "https://www.dailymotion.com/embed/video/k4dN6UKjyjUQgHvKk41?queue-enable=false",
      "borderRadius": 0,
      "minHeight": 1,
      "top": "0%",
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "class": "WebFrame",
      "paddingRight": 0,
      "backgroundColorDirection": "vertical",
      "height": "100%",
      "scrollEnabled": true,
      "visible": false,
      "data": {
       "name": "WebFrame_Coloplast"
      },
      "propagateClick": false,
      "paddingBottom": 0,
      "borderSize": 0,
      "insetBorder": false
     },
     {
      "id": "WebFrame_9794EE68_874E_17EB_41E0_8C30D23829E3",
      "left": "0%",
      "backgroundColorRatios": [
       0
      ],
      "paddingLeft": 0,
      "shadow": false,
      "width": "100%",
      "backgroundOpacity": 1,
      "url": "//www.youtube.com/embed/2_QfD1SW89M",
      "borderRadius": 0,
      "minHeight": 1,
      "top": "0%",
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 1,
      "class": "WebFrame",
      "paddingRight": 0,
      "backgroundColorDirection": "vertical",
      "height": "100%",
      "scrollEnabled": true,
      "visible": false,
      "data": {
       "name": "WebFrame_video3D"
      },
      "propagateClick": false,
      "paddingBottom": 0,
      "borderSize": 0,
      "insetBorder": false
     },
     {
      "maxHeight": 396,
      "maxWidth": 394,
      "id": "Image_97A8F4AB_874A_EB6D_41DC_914C3E0931EC",
      "paddingLeft": 0,
      "right": "0%",
      "shadow": false,
      "width": "10%",
      "backgroundOpacity": 0,
      "url": "skin/Image_97A8F4AB_874A_EB6D_41DC_914C3E0931EC.png",
      "borderRadius": 0,
      "minHeight": 1,
      "top": "0%",
      "paddingTop": 0,
      "height": "15%",
      "minWidth": 1,
      "class": "Image",
      "paddingRight": 0,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "scaleMode": "fit_inside",
      "data": {
       "name": "Button_Close"
      },
      "propagateClick": false,
      "paddingBottom": 0,
      "borderSize": 0,
      "verticalAlign": "middle"
     }
    ],
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "left": "4.32%",
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingLeft": 0,
    "shadow": false,
    "width": "91.341%",
    "backgroundOpacity": 0.3,
    "layout": "absolute",
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "minHeight": 1,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "bottom": "3.11%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minWidth": 1,
    "overflow": "scroll",
    "class": "Container",
    "paddingRight": 0,
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "height": "91.081%",
    "gap": 10,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "horizontalAlign": "left",
    "visible": false,
    "data": {
     "name": "Web container "
    },
    "propagateClick": false,
    "paddingBottom": 0,
    "borderSize": 0,
    "verticalAlign": "top"
   }
  ],
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "left": "0%",
  "backgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "shadow": false,
  "width": "100%",
  "backgroundOpacity": 0.3,
  "layout": "absolute",
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "top": "0%",
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 1,
  "overflow": "scroll",
  "class": "Container",
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "height": "100%",
  "gap": 10,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "horizontalAlign": "left",
  "visible": false,
  "data": {
   "name": "Main Container Web link"
  },
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0,
  "verticalAlign": "top"
 },
 {
  "id": "veilPopupPanorama",
  "left": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "right": 0,
  "shadow": false,
  "backgroundOpacity": 0.55,
  "borderRadius": 0,
  "minHeight": 0,
  "top": 0,
  "bottom": 0,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 0,
  "class": "UIComponent",
  "paddingRight": 0,
  "paddingTop": 0,
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "visible": false,
  "data": {
   "name": "UIComponent7369"
  },
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0
 },
 {
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "backgroundColorRatios": [],
  "paddingLeft": 0,
  "right": 0,
  "shadow": false,
  "backgroundOpacity": 1,
  "borderRadius": 0,
  "minHeight": 0,
  "top": 0,
  "bottom": 0,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "minWidth": 0,
  "class": "ZoomImage",
  "paddingRight": 0,
  "paddingTop": 0,
  "visible": false,
  "scaleMode": "custom",
  "data": {
   "name": "ZoomImage7370"
  },
  "propagateClick": false,
  "paddingBottom": 0,
  "borderSize": 0
 },
 {
  "textDecoration": "none",
  "fontFamily": "Arial",
  "data": {
   "name": "CloseButton7371"
  },
  "id": "closeButtonPopupPanorama",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingLeft": 5,
  "right": 10,
  "shadow": false,
  "backgroundOpacity": 0.3,
  "layout": "horizontal",
  "pressedIconColor": "#888888",
  "shadowColor": "#000000",
  "borderRadius": 0,
  "minHeight": 0,
  "shadowBlurRadius": 6,
  "top": 10,
  "borderColor": "#000000",
  "shadowSpread": 1,
  "paddingTop": 5,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "minWidth": 0,
  "class": "CloseButton",
  "paddingRight": 5,
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "iconColor": "#000000",
  "iconBeforeLabel": true,
  "mode": "push",
  "rollOverIconColor": "#666666",
  "horizontalAlign": "center",
  "label": "",
  "fontStyle": "normal",
  "fontSize": "1.29vh",
  "fontColor": "#FFFFFF",
  "iconWidth": 20,
  "gap": 5,
  "visible": false,
  "iconHeight": 20,
  "propagateClick": false,
  "iconLineWidth": 5,
  "paddingBottom": 5,
  "borderSize": 0,
  "cursor": "hand",
  "verticalAlign": "middle",
  "fontWeight": "normal"
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_D8E770F8_CB5C_5339_41E1_DCEA8C3DBA47.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "shadow": false,
 "desktopMipmappingEnabled": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getKey": function(key){  return window[key]; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "existsKey": function(key){  return key in window; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); }
 },
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "overflow": "visible",
 "class": "Player",
 "paddingRight": 0,
 "height": "100%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "width": "100%",
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "data": {
  "name": "Player7285"
 },
 "propagateClick": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "verticalAlign": "top"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
