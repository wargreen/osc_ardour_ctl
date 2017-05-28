[
    {
        "label": "1-8",
        "widgets": [
            {
                "type": "strip",
                "top": "0%",
                "left": 0,
                "id": "strip_1",
                "label": 1,
                "width": "12.5%",
                "height": "100%",
                "horizontal": false,
                "color": "auto",
                "css": "",
                "widgets": [
                    {
                        "type": "toggle",
                        "id": "toggle_1",
                        "linkId": "",
                        "label": "Mute",
                        "width": "auto",
                        "height": "10%",
                        "color": "auto",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "value": "",
                        "precision": 2,
                        "address": "/strip/mute",
                        "preArgs": [
                            1
                        ],
                        "target": []
                    },
                    {
                        "type": "fader",
                        "id": "fader_1",
                        "label": "Pan",
                        "width": "auto",
                        "height": "10%",
                        "noPip": true,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "L": 0
                            },
                            "max": {
                                "R": 1
                            }
                        },
                        "origin": "auto",
                        "value": 0.5,
                        "logScale": false,
                        "precision": 2,
                        "address": "/strip/pan_stereo_position",
                        "preArgs": [
                            1
                        ],
                        "target": [],
                        "alignRight": false,
                        "horizontal": true,
                        "meter": false,
                        "unit": "",
                        "linkId": ""
                    },
                    {
                        "type": "meter",
                        "id": "meter_1",
                        "label": false,
                        "unit": "db",
                        "width": "auto",
                        "height": "5%",
                        "horizontal": true,
                        "color": "auto",
                        "css": "",
                        "widgetId": "",
                        "range": {
                            "min": -120,
                            "max": 6
                        },
                        "logScale": true,
                        "origin": -120,
                        "value": -120,
                        "address": "/strip/meter",
                        "preArgs": [
                            1
                        ],
                        "compact": true
                    },
                    {
                        "type": "fader",
                        "id": "fader_2",
                        "linkId": "",
                        "unit": "db",
                        "width": "auto",
                        "height": "75%",
                        "alignRight": true,
                        "horizontal": false,
                        "noPip": false,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "inf": -120
                            },
                            "10%": -40,
                            "45%": -16,
                            "80%": 0,
                            "max": 6
                        },
                        "origin": 0,
                        "value": "",
                        "logScale": true,
                        "precision": 2,
                        "meter": false,
                        "address": "/strip/gain",
                        "preArgs": [
                            1
                        ],
                        "target": [],
                        "label": false
                    }
                ]
            },
            {
                "type": "strip",
                "top": 0,
                "left": "12.5%",
                "id": "strip_2",
                "label": 2,
                "width": "12.5%",
                "height": "100%",
                "horizontal": false,
                "color": "auto",
                "css": "",
                "widgets": [
                    {
                        "type": "toggle",
                        "id": "toggle_2",
                        "label": "Mute",
                        "width": "auto",
                        "height": "10%",
                        "color": "auto",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "value": "",
                        "precision": 2,
                        "address": "/strip/mute",
                        "preArgs": [
                            2
                        ],
                        "target": [],
                        "linkId": ""
                    },
                    {
                        "type": "fader",
                        "id": "fader_3",
                        "label": "Pan",
                        "width": "auto",
                        "height": "10%",
                        "noPip": true,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "L": 0
                            },
                            "max": {
                                "R": 1
                            }
                        },
                        "origin": "auto",
                        "value": 0.5,
                        "logScale": false,
                        "precision": 2,
                        "address": "/strip/pan_stereo_position",
                        "preArgs": [
                            2
                        ],
                        "target": [],
                        "alignRight": false,
                        "horizontal": true,
                        "meter": false,
                        "unit": "",
                        "linkId": ""
                    },
                    {
                        "type": "meter",
                        "id": "meter_2",
                        "label": false,
                        "unit": "db",
                        "width": "auto",
                        "height": "5%",
                        "horizontal": true,
                        "color": "auto",
                        "css": "",
                        "widgetId": "",
                        "range": {
                            "min": -120,
                            "max": 6
                        },
                        "logScale": true,
                        "origin": -120,
                        "value": -120,
                        "address": "/strip/meter",
                        "preArgs": [
                            2
                        ],
                        "compact": true
                    },
                    {
                        "type": "fader",
                        "id": "fader_4",
                        "unit": "db",
                        "width": "auto",
                        "height": "75%",
                        "alignRight": true,
                        "horizontal": false,
                        "noPip": false,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "inf": -120
                            },
                            "10%": -40,
                            "45%": -16,
                            "80%": 0,
                            "max": 6
                        },
                        "origin": 0,
                        "value": "",
                        "logScale": true,
                        "precision": 2,
                        "meter": false,
                        "address": "/strip/gain",
                        "preArgs": [
                            2
                        ],
                        "target": [],
                        "label": false,
                        "linkId": ""
                    }
                ]
            },
            {
                "type": "strip",
                "top": 0,
                "left": "25%",
                "id": "strip_3",
                "label": 3,
                "width": "12.5%",
                "height": "100%",
                "horizontal": false,
                "color": "auto",
                "css": "",
                "widgets": [
                    {
                        "type": "toggle",
                        "id": "toggle_3",
                        "label": "Mute",
                        "width": "auto",
                        "height": "10%",
                        "color": "auto",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "value": "",
                        "precision": 2,
                        "address": "/strip/mute",
                        "preArgs": [
                            3
                        ],
                        "target": [],
                        "linkId": ""
                    },
                    {
                        "type": "fader",
                        "id": "fader_5",
                        "label": "Pan",
                        "width": "auto",
                        "height": "10%",
                        "noPip": true,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "L": 0
                            },
                            "max": {
                                "R": 1
                            }
                        },
                        "origin": "auto",
                        "value": 0.5,
                        "logScale": false,
                        "precision": 2,
                        "address": "/strip/pan_stereo_position",
                        "preArgs": [
                            3
                        ],
                        "target": [],
                        "alignRight": false,
                        "horizontal": true,
                        "meter": false,
                        "unit": "",
                        "linkId": ""
                    },
                    {
                        "type": "meter",
                        "id": "meter_3",
                        "label": false,
                        "unit": "db",
                        "width": "auto",
                        "height": "5%",
                        "horizontal": true,
                        "color": "auto",
                        "css": "",
                        "widgetId": "",
                        "range": {
                            "min": -120,
                            "max": 6
                        },
                        "logScale": true,
                        "origin": -120,
                        "value": -120,
                        "address": "/strip/meter",
                        "preArgs": [
                            3
                        ],
                        "compact": true
                    },
                    {
                        "type": "fader",
                        "id": "fader_6",
                        "unit": "db",
                        "width": "auto",
                        "height": "75%",
                        "alignRight": true,
                        "horizontal": false,
                        "noPip": false,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "inf": -120
                            },
                            "10%": -40,
                            "45%": -16,
                            "80%": 0,
                            "max": 6
                        },
                        "origin": 0,
                        "value": "",
                        "logScale": true,
                        "precision": 2,
                        "meter": false,
                        "address": "/strip/gain",
                        "preArgs": [
                            3
                        ],
                        "target": [],
                        "label": false,
                        "linkId": ""
                    }
                ]
            },
            {
                "type": "strip",
                "top": 0,
                "left": "37.5%",
                "id": "strip_4",
                "label": 4,
                "width": "12.5%",
                "height": "100%",
                "horizontal": false,
                "color": "auto",
                "css": "",
                "widgets": [
                    {
                        "type": "toggle",
                        "id": "toggle_4",
                        "label": "Mute",
                        "width": "auto",
                        "height": "10%",
                        "color": "auto",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "value": "",
                        "precision": 2,
                        "address": "/strip/mute",
                        "preArgs": [
                            4
                        ],
                        "target": [],
                        "linkId": ""
                    },
                    {
                        "type": "fader",
                        "id": "fader_7",
                        "label": "Pan",
                        "width": "auto",
                        "height": "10%",
                        "noPip": true,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "L": 0
                            },
                            "max": {
                                "R": 1
                            }
                        },
                        "origin": "auto",
                        "value": 0.5,
                        "logScale": false,
                        "precision": 2,
                        "address": "/strip/pan_stereo_position",
                        "preArgs": [
                            4
                        ],
                        "target": [],
                        "alignRight": false,
                        "horizontal": true,
                        "meter": false,
                        "unit": "",
                        "linkId": ""
                    },
                    {
                        "type": "meter",
                        "id": "meter_4",
                        "label": false,
                        "unit": "db",
                        "width": "auto",
                        "height": "5%",
                        "horizontal": true,
                        "color": "auto",
                        "css": "",
                        "widgetId": "",
                        "range": {
                            "min": -120,
                            "max": 6
                        },
                        "logScale": true,
                        "origin": -120,
                        "value": -120,
                        "address": "/strip/meter",
                        "preArgs": [
                            4
                        ],
                        "compact": true
                    },
                    {
                        "type": "fader",
                        "id": "fader_8",
                        "unit": "db",
                        "width": "auto",
                        "height": "75%",
                        "alignRight": true,
                        "horizontal": false,
                        "noPip": false,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "inf": -120
                            },
                            "10%": -40,
                            "45%": -16,
                            "80%": 0,
                            "max": 6
                        },
                        "origin": 0,
                        "value": "",
                        "logScale": true,
                        "precision": 2,
                        "meter": false,
                        "address": "/strip/gain",
                        "preArgs": [
                            4
                        ],
                        "target": [],
                        "label": false,
                        "linkId": ""
                    }
                ]
            },
            {
                "type": "strip",
                "top": 0,
                "left": "50%",
                "id": "strip_5",
                "label": 5,
                "width": "12.5%",
                "height": "100%",
                "horizontal": false,
                "color": "auto",
                "css": "",
                "widgets": [
                    {
                        "type": "toggle",
                        "id": "toggle_5",
                        "label": "Mute",
                        "width": "auto",
                        "height": "10%",
                        "color": "auto",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "value": "",
                        "precision": 2,
                        "address": "/strip/mute",
                        "preArgs": [
                            5
                        ],
                        "target": [],
                        "linkId": ""
                    },
                    {
                        "type": "fader",
                        "id": "fader_9",
                        "label": "Pan",
                        "width": "auto",
                        "height": "10%",
                        "noPip": true,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "L": 0
                            },
                            "max": {
                                "R": 1
                            }
                        },
                        "origin": "auto",
                        "value": 0.5,
                        "logScale": false,
                        "precision": 2,
                        "address": "/strip/pan_stereo_position",
                        "preArgs": [
                            5
                        ],
                        "target": [],
                        "alignRight": false,
                        "horizontal": true,
                        "meter": false,
                        "unit": "",
                        "linkId": ""
                    },
                    {
                        "type": "meter",
                        "id": "meter_5",
                        "label": false,
                        "unit": "db",
                        "width": "auto",
                        "height": "5%",
                        "horizontal": true,
                        "color": "auto",
                        "css": "",
                        "widgetId": "",
                        "range": {
                            "min": -120,
                            "max": 6
                        },
                        "logScale": true,
                        "origin": -120,
                        "value": -120,
                        "address": "/strip/meter",
                        "preArgs": [
                            5
                        ],
                        "compact": true
                    },
                    {
                        "type": "fader",
                        "id": "fader_10",
                        "unit": "db",
                        "width": "auto",
                        "height": "75%",
                        "alignRight": true,
                        "horizontal": false,
                        "noPip": false,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "inf": -120
                            },
                            "10%": -40,
                            "45%": -16,
                            "80%": 0,
                            "max": 6
                        },
                        "origin": 0,
                        "value": "",
                        "logScale": true,
                        "precision": 2,
                        "meter": false,
                        "address": "/strip/gain",
                        "preArgs": [
                            5
                        ],
                        "target": [],
                        "label": false,
                        "linkId": ""
                    }
                ]
            },
            {
                "type": "strip",
                "top": 0,
                "left": "62.5%",
                "id": "strip_6",
                "label": 6,
                "width": "12.5%",
                "height": "100%",
                "horizontal": false,
                "color": "auto",
                "css": "",
                "widgets": [
                    {
                        "type": "toggle",
                        "id": "toggle_6",
                        "label": "Mute",
                        "width": "auto",
                        "height": "10%",
                        "color": "auto",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "value": "",
                        "precision": 2,
                        "address": "/strip/mute",
                        "preArgs": [
                            6
                        ],
                        "target": [],
                        "linkId": ""
                    },
                    {
                        "type": "fader",
                        "id": "fader_11",
                        "label": "Pan",
                        "width": "auto",
                        "height": "10%",
                        "noPip": true,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "L": 0
                            },
                            "max": {
                                "R": 1
                            }
                        },
                        "origin": "auto",
                        "value": 0.5,
                        "logScale": false,
                        "precision": 2,
                        "address": "/strip/pan_stereo_position",
                        "preArgs": [
                            6
                        ],
                        "target": [],
                        "alignRight": false,
                        "horizontal": true,
                        "meter": false,
                        "unit": "",
                        "linkId": ""
                    },
                    {
                        "type": "meter",
                        "id": "meter_6",
                        "label": false,
                        "unit": "db",
                        "width": "auto",
                        "height": "5%",
                        "horizontal": true,
                        "color": "auto",
                        "css": "",
                        "widgetId": "",
                        "range": {
                            "min": -120,
                            "max": 6
                        },
                        "logScale": true,
                        "origin": -120,
                        "value": -120,
                        "address": "/strip/meter",
                        "preArgs": [
                            6
                        ],
                        "compact": true
                    },
                    {
                        "type": "fader",
                        "id": "fader_12",
                        "unit": "db",
                        "width": "auto",
                        "height": "75%",
                        "alignRight": true,
                        "horizontal": false,
                        "noPip": false,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "inf": -120
                            },
                            "10%": -40,
                            "45%": -16,
                            "80%": 0,
                            "max": 6
                        },
                        "origin": 0,
                        "value": "",
                        "logScale": true,
                        "precision": 2,
                        "meter": false,
                        "address": "/strip/gain",
                        "preArgs": [
                            6
                        ],
                        "target": [],
                        "label": false,
                        "linkId": ""
                    }
                ]
            },
            {
                "type": "strip",
                "top": 0,
                "left": "75%",
                "id": "strip_7",
                "label": 7,
                "width": "12.5%",
                "height": "100%",
                "horizontal": false,
                "color": "auto",
                "css": "",
                "widgets": [
                    {
                        "type": "toggle",
                        "id": "toggle_7",
                        "label": "Mute",
                        "width": "auto",
                        "height": "10%",
                        "color": "auto",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "value": "",
                        "precision": 2,
                        "address": "/strip/mute",
                        "preArgs": [
                            7
                        ],
                        "target": [],
                        "linkId": ""
                    },
                    {
                        "type": "fader",
                        "id": "fader_13",
                        "label": "Pan",
                        "width": "auto",
                        "height": "10%",
                        "noPip": true,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "L": 0
                            },
                            "max": {
                                "R": 1
                            }
                        },
                        "origin": "auto",
                        "value": 0.5,
                        "logScale": false,
                        "precision": 2,
                        "address": "/strip/pan_stereo_position",
                        "preArgs": [
                            7
                        ],
                        "target": [],
                        "alignRight": false,
                        "horizontal": true,
                        "meter": false,
                        "unit": "",
                        "linkId": ""
                    },
                    {
                        "type": "meter",
                        "id": "meter_7",
                        "label": false,
                        "unit": "db",
                        "width": "auto",
                        "height": "5%",
                        "horizontal": true,
                        "color": "auto",
                        "css": "",
                        "widgetId": "",
                        "range": {
                            "min": -120,
                            "max": 6
                        },
                        "logScale": true,
                        "origin": -120,
                        "value": -120,
                        "address": "/strip/meter",
                        "preArgs": [
                            7
                        ],
                        "compact": true
                    },
                    {
                        "type": "fader",
                        "id": "fader_14",
                        "unit": "db",
                        "width": "auto",
                        "height": "75%",
                        "alignRight": true,
                        "horizontal": false,
                        "noPip": false,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "inf": -120
                            },
                            "10%": -40,
                            "45%": -16,
                            "80%": 0,
                            "max": 6
                        },
                        "origin": 0,
                        "value": "",
                        "logScale": true,
                        "precision": 2,
                        "meter": false,
                        "address": "/strip/gain",
                        "preArgs": [
                            7
                        ],
                        "target": [],
                        "label": false,
                        "linkId": ""
                    }
                ]
            },
            {
                "type": "strip",
                "top": 0,
                "left": "87.5%",
                "id": "strip_8",
                "label": 8,
                "width": "12.5%",
                "height": "100%",
                "horizontal": false,
                "color": "auto",
                "css": "",
                "widgets": [
                    {
                        "type": "toggle",
                        "id": "toggle_8",
                        "label": "Mute",
                        "width": "auto",
                        "height": "10%",
                        "color": "auto",
                        "css": "",
                        "on": 1,
                        "off": 0,
                        "value": "",
                        "precision": 2,
                        "address": "/strip/mute",
                        "preArgs": [
                            8
                        ],
                        "target": [],
                        "linkId": ""
                    },
                    {
                        "type": "fader",
                        "id": "fader_15",
                        "label": "Pan",
                        "width": "auto",
                        "height": "10%",
                        "noPip": true,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "L": 0
                            },
                            "max": {
                                "R": 1
                            }
                        },
                        "origin": "auto",
                        "value": 0.5,
                        "logScale": false,
                        "precision": 2,
                        "address": "/strip/pan_stereo_position",
                        "preArgs": [
                            8
                        ],
                        "target": [],
                        "alignRight": false,
                        "horizontal": true,
                        "meter": false,
                        "unit": "",
                        "linkId": ""
                    },
                    {
                        "type": "meter",
                        "id": "meter_8",
                        "label": false,
                        "unit": "db",
                        "width": "auto",
                        "height": "5%",
                        "horizontal": true,
                        "color": "auto",
                        "css": "",
                        "widgetId": "",
                        "range": {
                            "min": -120,
                            "max": 6
                        },
                        "logScale": true,
                        "origin": -120,
                        "value": -120,
                        "address": "/strip/meter",
                        "preArgs": [
                            8
                        ],
                        "compact": true
                    },
                    {
                        "type": "fader",
                        "id": "fader_16",
                        "unit": "db",
                        "width": "auto",
                        "height": "75%",
                        "alignRight": true,
                        "horizontal": false,
                        "noPip": false,
                        "compact": true,
                        "color": "auto",
                        "css": "",
                        "snap": false,
                        "spring": false,
                        "range": {
                            "min": {
                                "inf": -120
                            },
                            "10%": -40,
                            "45%": -16,
                            "80%": 0,
                            "max": 6
                        },
                        "origin": 0,
                        "value": "",
                        "logScale": true,
                        "precision": 2,
                        "meter": false,
                        "address": "/strip/gain",
                        "preArgs": [
                            8
                        ],
                        "target": [],
                        "label": false,
                        "linkId": ""
                    }
                ]
            }
        ],
        "id": ""
    },
    {
        "id": "",
        "label": "9-16"
    },
    {
        "id": "",
        "label": "Master",
        "widgets": [
            {
                "type": "fader",
                "id": "fader_50",
                "unit": "db",
                "width": "12.5%",
                "height": "100%",
                "alignRight": true,
                "horizontal": false,
                "noPip": false,
                "compact": false,
                "color": "auto",
                "css": "",
                "snap": false,
                "spring": false,
                "range": {
                    "min": {
                        "inf": -120
                    },
                    "10%": -40,
                    "45%": -16,
                    "80%": 0,
                    "max": 6
                },
                "origin": 0,
                "value": "",
                "logScale": true,
                "precision": 2,
                "meter": false,
                "address": "/master/gain",
                "target": [],
                "label": "Master",
                "top": 0,
                "left": "87.5%",
                "linkId": "",
                "preArgs": []
            },
            {
                "type": "meter",
                "top": 0,
                "left": "83.5%",
                "id": "meter_9",
                "label": false,
                "unit": "dB",
                "width": "5%",
                "height": "auto",
                "horizontal": false,
                "color": "auto",
                "css": "",
                "widgetId": "",
                "range": {
                    "min": -120,
                    "max": 6
                },
                "logScale": false,
                "origin": "auto",
                "value": "",
                "address": "/master/meter",
                "preArgs": [],
                "compact": true
            },
            {
                "type": "knob",
                "top": 0,
                "left": 0,
                "id": "knob_1",
                "linkId": "",
                "label": "Monitor",
                "unit": "dB",
                "width": "40%",
                "height": "40%",
                "color": "auto",
                "noPip": false,
                "compact": true,
                "angle": 270,
                "css": "",
                "snap": false,
                "spring": false,
                "range": {
                    "min": -120,
                    "max": 6
                },
                "origin": "auto",
                "value": "",
                "logScale": true,
                "precision": 2,
                "address": "/monitor/gain",
                "preArgs": [],
                "target": []
            }
        ]
    }
]