var CONFIG = {
 "data": {
  "_lastModified": 1653101185355,
  "ddfPath": "./data/시군_총인구_노인인구비율_1992-2021.csv",
  "hasNameColumn": true,
  "lastModified": 1653101185355,
  "nameColumnPosition": 0,
  "noCache": true,
  "path": "./data/시군_총인구_노인인구비율_1992-2021.csv",
  "reader": "ext-csv",
  "sheet": "",
  "timeInColumns": true
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "시군구",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "시군구",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 0,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "syncModels": [],
    "use": "indicator",
    "which": "총인구",
    "zoomedMax": 161241.32,
    "zoomedMin": 8867
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 1,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "syncModels": [],
    "use": "indicator",
    "which": "노인인구비율",
    "zoomedMax": 43.18,
    "zoomedMin": 6.56
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "autoconfig": {},
    "data": "data",
    "palette": {
     "0": "#4cd843",
     "1": "#e83739",
     "2": "#ff7f00",
     "3": "#c027d4",
     "4": "#d66425",
     "5": "#0ab8d8",
     "6": "#bcfa83",
     "7": "#ff8684",
     "8": "#ffb04b",
     "9": "#f599f5",
     "10": "#f4f459",
     "11": "#7fb5ed",
     "_default": "#ffb600"
    },
    "paletteHiddenKeys": [],
    "paletteLabels": null,
    "scaleType": "ordinal",
    "spaceRef": null,
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "indicator",
    "which": "시도"
   },
   "highlight": [],
   "label": {
    "autoconfig": {
     "includeOnlyIDs": [
      "name"
     ],
     "type": "string"
    },
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "시군구"
   },
   "limit": 5000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.17,
   "select": [
    {
     "labelOffset": [
      0.068,
      0.039
     ],
     "trailStartTime": "1992",
     "시군구": "경북 의성군"
    },
    {
     "labelOffset": [
      0.021,
      0.072
     ],
     "trailStartTime": "1992",
     "시군구": "경북 군위군"
    },
    {
     "labelOffset": [
      0.002,
      0.047
     ],
     "trailStartTime": "1992",
     "시군구": "전남 고흥군"
    },
    {
     "labelOffset": [
      0.004,
      0.087
     ],
     "trailStartTime": "1992",
     "시군구": "경남 합천군"
    },
    {
     "labelOffset": [
      0.036,
      0.124
     ],
     "trailStartTime": "1992",
     "시군구": "전남 보성군"
    }
   ],
   "size": {
    "allow": {
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 2,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.61
    ],
    "fixBaseline": 0,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "총인구",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "size_label": {
    "_important": false,
    "allow": {
     "names": [
      "_default"
     ],
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.24
    ],
    "fixBaseline": 0,
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "constant",
    "which": "_default",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "time": {
   "autoconfig": {
    "type": "time"
   },
   "delay": 334,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "time",
   "end": "2021",
   "endBeforeForecast": "2021",
   "endOrigin": null,
   "endSelected": "2021",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "pauseBeforeForecast": true,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "showForecast": true,
   "start": "1992",
   "startOrigin": null,
   "startSelected": "1992",
   "step": 1,
   "unit": "year",
   "value": "2021"
  }
 },
 "ui": {
  "adaptMinMaxZoom": false,
  "buttons": [
   "colors",
   "find",
   "zoom",
   "trails",
   "lock",
   "moreoptions",
   "presentation",
   "sidebarcollapse",
   "fullscreen"
  ],
  "chart": {
   "decorations": {
    "enabled": true,
    "xAxisGroups": null
   },
   "labels": {
    "dragging": true,
    "removeLabelBox": false
   },
   "lockNonSelected": 0,
   "margin": {
    "left": 79.938,
    "top": 0
   },
   "showForecastOverlay": false,
   "superhighlightOnMinimapHover": true,
   "trails": true,
   "whenHovering": {
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true
   }
  },
  "cursorMode": "arrow",
  "datawarning": {
   "doubtDomain": [],
   "doubtRange": []
  },
  "dialogs": {
   "dialog": {
    "find": {
     "enableSelectShowSwitch": false
    }
   },
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "size",
    "colors",
    "label",
    "zoom",
    "presentation",
    "technical",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "size",
    "zoom",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find",
    "size",
    "zoom"
   ]
  },
  "panWithArrow": false,
  "presentation": false,
  "show_ticks": true,
  "sidebarCollapse": false,
  "splash": false,
  "zoomOnScrolling": false
 },
 "chartType": "BubbleChart"
};