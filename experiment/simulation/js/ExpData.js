//activity5_data  = [dimensions of heat exchanger, areas and volume,  [uc, pr, Rec, Nuc, ho, hoi]]
var dia = ["select dia", 0.7, 1.5];
var all_options = [{
        dia: 0.7,
        od: ["Select Inside dia", 1.0],
        D1: ["Select Outside dia", 1.8],
        L: ["Select Length", 100],
        V: ["Select Volume", 880],
        VF: ["SelectFlow rate", 500],
    },
    {
        dia: 1.5,
        od: ["Select Inside dia", 1.9],
        D1: ["Select Outside dia", 2.8],
        L: ["Select Length", 100],
        V: ["Select Volume", 880],
        VF: ["Select Flow rate", 500],
    },
];
var temp_reading = [81.2, 83.2];
var readings = [
    {
        temp: 81.2,
        reading: [
            [199.60, 81.2, 72.2, 28.2, 28.3],
            [102.40, 81.9, 76.2, 28.2, 28.3],
            [74.40, 81.9, 77.4, 28.2, 28.3],
            [51.94, 81.8, 78.5, 28.2, 28.3],
            [37.32, 82.2, 79.7, 28.2, 28.3],
            [25.72, 81.8, 80.0, 28.2, 28.3],
            [18.69, 81.9, 80.8, 28.2, 28.3],
            [15.37, 81.9, 80.8, 28.2, 28.3]
        ]
    },
    {
        temp: 83.2,
        reading: [
            [190.1, 83.2, 66.5, 28.2, 30],
            [100.2, 82.9, 72.1, 28.2, 30],
            [76.32, 83.3, 73.7, 28.2, 30],
            [51.23, 82.8, 75.9, 28.2, 30],
            [34.23, 83.4, 77.5, 28.2, 30],
            [23.92, 83.1, 78.7, 28.2, 30],
            [14.12, 82.9, 79.9, 28.2, 30],
            [7.18, 82.8, 80.8, 28.2, 30]
        ]
    }
];
var activity5_data = [
    [[0.7, 1.0, 1.8, 100, 880, 500], [0.022, 0.000038, 0.008, 0.000176], [0.789, 88.96, 7554.63, 75.96, 5852.58, 8360.83]],
    [[1.5, 1.9, 2.8, 100, 880, 500], [0.047, 0.000177, 0.009, 0.0003322], [0.41805869, 88.96, 4500.63, 45.87, 3141.61, 3979.37]]
];
var physical_properties = [
    [[2612.5, 4180], [835, 1000], [0.004, 0.00084], [0.117, 0.616]],
    [[2612.49999, 4180], [835, 1000], [0.004, 0.000836], [0.117, 0.61639]]
];
var table_data = [
    [
        [199.60, 81.2, 72.2, 28.2, 28.3, 0.0000044, 0.115, 0.004, 86.56, 48.3, 81.48],
        [102.40, 81.9, 76.2, 28.2, 28.3, 0.0000086, 0.223, 0.007, 106.86, 50.7, 95.75],
        [74.40, 81.9, 77.4, 28.2, 28.3, 0.0000118, 0.307, 0.010, 116.11, 51.4, 102.79],
        [51.94, 81.8, 78.5, 28.2, 28.3, 0.0000169, 0.440, 0.014, 121.97, 51.9, 106.90],
        [37.32, 82.2, 79.7, 28.2, 28.3, 0.0000236, 0.613, 0.020, 128.59, 52.7, 110.98],
        [25.72, 81.8, 80.0, 28.2, 28.3, 0.0000342, 0.889, 0.029, 134.35, 52.6, 116.05],
        [18.69, 81.9, 80.8, 28.2, 28.3, 0.0000471, 1.223, 0.039, 143.80, 52.9, 123.50],
        [15.37, 81.9, 80.8, 28.2, 28.3, 0.0000573, 1.488, 0.048, 137.39, 53.1, 117.66]
    ],
    [
        [190.1, 83.2, 66.5, 28.2, 30, 0.00000463, 0.026, 0.004, 168.68, 45.1, 79.34],
        [100.2, 82.9, 72.1, 28.2, 30, 0.00000878, 0.050, 0.007, 207.20, 48.1, 91.38],
        [76.32, 83.3, 73.7, 28.2, 30, 0.00001150, 0.065, 0.010, 241.10, 49.2, 104.02],
        [51.23, 82.8, 75.9, 28.2, 30, 0.00001720, 0.097, 0.014, 257.55, 50.1, 109.01],
        [34.23, 83.4, 77.5, 28.2, 30, 0.00002570, 0.145, 0.021, 331.07, 51.3, 137.08],
        [23.92, 83.1, 78.7, 28.2, 30, 0.00003680, 0.208, 0.031, 356.02, 51.7, 146.08],
        [14.12, 82.9, 79.9, 28.2, 30, 0.00006230, 0.353, 0.052, 412.30, 52.2, 167.46],
        [7.18, 82.8, 80.8, 28.2, 30, 0.00012300, 0.694, 0.102, 534.73, 52.7, 215.41]
    ]
];
var table_2_data = [
    //[m u U hi_exp Re hi_st]
    [
        [0.004, 0.115, 81.48, 82.28, 167.40, 146.90],
        [0.007, 0.223, 95.75, 96.86, 326.30, 183.50],
        [0.010, 0.307, 102.79, 104.07, 449.11, 204.11],
        [0.014, 0.440, 106.90, 108.28, 643.31, 230.09],
        [0.020, 0.613, 110.98, 112.48, 895.32, 256.89],
        [0.029, 0.0889, 116.05, 117.68, 1299.12, 290.83],
        [0.039, 1.223, 123.50, 125.35, 1787.77, 323.49],
        [0.048, 1.488, 117.66, 119.34, 2173.94, 345.28]
    ],
    [
        [0.004, 0.026, 79.34, 80.95, 82.02, 69.67],
        [0.007, 0.050, 91.38, 93.53, 155.62, 86.25],
        [0.010, 0.065, 104.02, 106.81, 204.31, 94.45],
        [0.014, 0.097, 109.01, 112.08, 304.37, 107.87],
        [0.021, 0.145, 137.08, 141.97, 455.53, 123.39],
        [0.031, 0.208, 146.08, 151.64, 651.88, 139.04],
        [0.052, 0.353, 167.46, 174.82, 1104.32, 165.75],
        [0.102, 0.694, 215.41, 227.74, 2171.72, 207.66]
    ]
];
var table_4_data = [
    [
        [4.90, 5.12, 1.59],
        [5.77, 5.79, 1.75],
        [6.20, 6.11, 1.82],
        [6.45, 6.47, 1.86],
        [6.70, 6.80, 1.90],
        [7.01, 7.17, 1.95],
        [7.47, 7.49, 2.01]
    ],
    [
        [10.378205128205128, 4.406963119963913, 2.339707946428098],
        [11.99102564102564, 5.047417138188784, 2.4841585067509135],
        [13.693589743589742, 5.3196384482517205, 2.616927821406058],
        [14.369230769230766, 5.718244066597205, 2.665089168333205],
        [18.20128205128205, 6.1214615762216775, 2.9014920339799364],
        [19.441025641025636, 6.479860495907788, 2.9673855569525878],
        [22.41282051282051, 7.0069850399096385, 3.1096331394567955],
        [29.1974358974359, 7.683274759299943, 3.374080893686913]
    ]
];
//# sourceMappingURL=ExpData.js.map