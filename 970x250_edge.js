/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Image-1',
                            type: 'image',
                            rect: ['-80px', '0', '1050px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Image-1.jpg",'0px','0px']
                        },
                        {
                            id: 'Image-2_man',
                            type: 'image',
                            rect: ['350px', '0', '970px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Image-2%20man.png",'0px','0px']
                        },
                        {
                            id: 'Image-5',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '970px', '250px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Image-5.jpg",'0px','0px'],
                            transform: [[],[],[],['1.14999','1.14999']]
                        },
                        {
                            id: 'Image-3',
                            type: 'image',
                            rect: ['-74px', '0', '970px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Image-3.jpg",'0px','0px'],
                            transform: [[],[],[],['1.1567']]
                        },
                        {
                            id: 'Image-4',
                            type: 'image',
                            rect: ['190px', '0', '970px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Image-4.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-26px', '-528px', '468px', '454px', 'auto', 'auto'],
                            fill: ["rgba(35,10,21,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['76'],[],['1','2.66157']]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['454px', '342px', '468px', '454px', 'auto', 'auto'],
                            fill: ["rgba(35,10,21,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['76'],[],['1','2.66157']]
                        },
                        {
                            id: 'Border2',
                            type: 'image',
                            rect: ['0', '0', '970px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Border.png",'0px','0px']
                        },
                        {
                            id: 'Copy-1',
                            type: 'image',
                            rect: ['0', '0', '970px', '250px', 'auto', 'auto'],
                            clip: 'rect(-0.707275390625px 970px 57.317138671875px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Copy-1.png",'0px','27px']
                        },
                        {
                            id: 'Copy-2',
                            type: 'image',
                            rect: ['0', '0', '970px', '250px', 'auto', 'auto'],
                            clip: 'rect(63px 970px 250px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Copy-2.png",'0px','0px']
                        },
                        {
                            id: 'Copy-3',
                            type: 'image',
                            rect: ['0', '0px', '970px', '250px', 'auto', 'auto'],
                            clip: 'rect(-1.09765625px 970px 131.70751953125px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Copy-3.png",'0px','34px']
                        },
                        {
                            id: 'CTA',
                            type: 'image',
                            rect: ['0px', '0', '970px', '250px', 'auto', 'auto'],
                            clip: 'rect(0px 970px 221.951171875px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"CTA.png",'0px','69px']
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['0', '0', '970px', '250px', 'auto', 'auto'],
                            clip: 'rect(0px 970px 112px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','62px']
                        },
                        {
                            id: 'logoCopy',
                            type: 'image',
                            rect: ['-40px', '40px', '970px', '250px', 'auto', 'auto'],
                            clip: 'rect(0px 970px 112px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','62px']
                        },
                        {
                            id: 'border_thin',
                            type: 'image',
                            rect: ['0', '0', '970px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"border_thin.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '970px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 11864.177971772,
                    autoPlay: true,
                    data: [
                        [
                            "eid78",
                            "opacity",
                            9925,
                            575,
                            "easeOutQuad",
                            "${Copy-3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            4054,
                            3362,
                            "linear",
                            "${Image-5}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid50",
                            "left",
                            7020,
                            4844,
                            "linear",
                            "${Image-4}",
                            '270px',
                            '190px'
                        ],
                        [
                            "eid33",
                            "left",
                            0,
                            4054,
                            "easeOutQuad",
                            "${Image-1}",
                            '-80px',
                            '0px'
                        ],
                        [
                            "eid5",
                            "background-position",
                            2165,
                            440,
                            "easeOutQuad",
                            "${Copy-1}",
                            [0,27],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid77",
                            "background-position",
                            10250,
                            575,
                            "easeOutBack",
                            "${logo}",
                            [0,62],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11",
                            "background-position",
                            2820,
                            425,
                            "easeOutQuad",
                            "${Copy-3}",
                            [0,34],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid80",
                            "opacity",
                            9925,
                            575,
                            "easeOutQuad",
                            "${Copy-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "opacity",
                            1835,
                            415,
                            "easeOutBack",
                            "${logoCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid54",
                            "left",
                            3840,
                            214,
                            "easeInQuad",
                            "${RectangleCopy}",
                            '454px',
                            '302px'
                        ],
                        [
                            "eid68",
                            "left",
                            4054,
                            214,
                            "easeInQuad",
                            "${RectangleCopy}",
                            '302px',
                            '454px'
                        ],
                        [
                            "eid41",
                            "opacity",
                            7020,
                            655,
                            "linear",
                            "${Image-4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "background-position",
                            0,
                            575,
                            "easeOutBack",
                            "${logoCopy}",
                            [0,62],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid17",
                            "left",
                            0,
                            772,
                            "easeOutQuad",
                            "${Image-2_man}",
                            '350px',
                            '0px'
                        ],
                        [
                            "eid30",
                            "left",
                            772,
                            3282,
                            "easeOutQuad",
                            "${Image-2_man}",
                            '0px',
                            '-70px'
                        ],
                        [
                            "eid79",
                            "opacity",
                            9925,
                            575,
                            "easeOutQuad",
                            "${Copy-2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid60",
                            "top",
                            3840,
                            214,
                            "easeInQuad",
                            "${Rectangle}",
                            '-528px',
                            '-328px'
                        ],
                        [
                            "eid65",
                            "top",
                            4054,
                            214,
                            "easeInQuad",
                            "${Rectangle}",
                            '-328px',
                            '-528px'
                        ],
                        [
                            "eid58",
                            "left",
                            3840,
                            214,
                            "easeInQuad",
                            "${Rectangle}",
                            '-26px',
                            '200px'
                        ],
                        [
                            "eid66",
                            "left",
                            4054,
                            214,
                            "easeInQuad",
                            "${Rectangle}",
                            '200px',
                            '-26px'
                        ],
                        [
                            "eid35",
                            "left",
                            6365,
                            5499,
                            "easeOutQuad",
                            "${Image-3}",
                            '-74px',
                            '74px'
                        ],
                        [
                            "eid70",
                            "display",
                            415,
                            0,
                            "easeOutQuad",
                            "${Image-5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            4054,
                            0,
                            "easeOutQuad",
                            "${Image-5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid74",
                            "scaleX",
                            4054,
                            3362,
                            "linear",
                            "${Image-5}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid32",
                            "width",
                            0,
                            0,
                            "easeOutQuad",
                            "${Image-1}",
                            '1050px',
                            '1050px'
                        ],
                        [
                            "eid52",
                            "background-position",
                            7500,
                            528,
                            "easeOutBack",
                            "${CTA}",
                            [0,69],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid37",
                            "opacity",
                            6365,
                            415,
                            "linear",
                            "${Image-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid56",
                            "top",
                            3840,
                            214,
                            "easeInQuad",
                            "${RectangleCopy}",
                            '342px',
                            '124px'
                        ],
                        [
                            "eid67",
                            "top",
                            4054,
                            214,
                            "easeInQuad",
                            "${RectangleCopy}",
                            '124px',
                            '342px'
                        ],
                        [
                            "eid9",
                            "background-position",
                            2165,
                            440,
                            "easeOutQuad",
                            "${Copy-2}",
                            [0,-28],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("970x250_edgeActions.js");
})("EDGE-313259136");
