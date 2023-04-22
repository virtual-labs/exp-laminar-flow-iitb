var root = document.getElementById('root');
var main = document.getElementById("main");
var panel = document.getElementById("panel");
var number_of_attempts = 0;
var selected_data_index = 0;
var main_table = [
    [0.0000044, 0.115, 0.004, 86.56, 48.3, 81.48],
    [0.0000086, 0.223, 0.007, 106.86, 50.7, 95.75],
    [0.0000118, 0.307, 0.010, 116.11, 51.4, 102.79],
    [0.0000169, 0.440, 0.014, 121.97, 51.9, 106.90],
    [0.0000236, 0.613, 0.020, 128.59, 52.7, 110.98],
    [0.0000342, 0.889, 0.029, 134.35, 52.6, 116.05],
    [0.0000471, 1.223, 0.039, 143.80, 52.9, 123.50],
    [0.0000573, 1.488, 0.048, 137.39, 53.1, 117.66]
]; // calculate first table for activity 7
var last_table = [
    [82.28, 167.40, 146.90],
    [96.86, 326.30, 183.50],
    [104.07, 449.11, 204.11],
    [108.28, 643.31, 230.09],
    [112.48, 895.32, 256.89],
    [117.68, 1299.12, 290.83],
    [125.35, 1787.77, 323.49],
    [119.34, 2173.94, 345.28]
]; // calculate last table for activity 7
var observation_data_index;
var selected_temp = 81.2;
var a7_second_calculation_set = [];
var prh;
//calculations
var heat_transfer_area = 0.022;
var area_of_inner_tube = 0.000038;
var equivalent_diameter = 0.008;
var annulus_area = 0.000176;
// physical properties
var cph = 2612.5;
var cpc = 4180;
var rhoh = 835;
var rhoc = 1000;
var mueh = 0.004;
var muec = 0.00084;
var kh = 0.117;
var kc = 0.616;
// Left Box in root for acitivty 5, 7, 8, 9, 10
function add_left_box() {
    // main.style.padding = "1.5%";
    root.style.width = "76%";
    root.style.border = "4px solid grey";
}
function a6_root_style() {
    main.style.padding = "0";
    root.style.width = "100%";
    root.style.border = "none";
}
function remove_left_box() {
    root.style.border = "none";
}
// function x_panel() {
//     panel.style.width = "96vw";
//     panel.style.height = "13vw"
//     panel.style.flexDirection = "row";
//     panel.style.top=  "23vw";
// }
// data for activity 4
var all_labels = [];
function create_labels() {
    all_labels = [];
    let text = new Chemistry.Text("Pump", new Chemistry.Point(1000, 550), canvas);
    text.color = "black";
    text.font = "17px Arial";
    all_labels.push(text);
    let text2 = new Chemistry.Text("Test Section", new Chemistry.Point(1020, 200), canvas);
    text2.color = "black";
    text2.font = "17px Arial";
    all_labels.push(text2);
    let text1 = new Chemistry.Text("Horizontal Pipe", new Chemistry.Point(1120, 750), canvas);
    text1.color = "black";
    text1.font = "17px Arial";
    all_labels.push(text1);
    let text3 = new Chemistry.Text("Glass Section", new Chemistry.Point(1180, 170), canvas);
    text3.color = "black";
    text3.font = "17px Arial";
    all_labels.push(text3);
    let text5 = new Chemistry.Text("Vertical Pipe", new Chemistry.Point(1165, 470), canvas);
    text5.color = "black";
    text5.font = "17px Arial";
    all_labels.push(text5);
    let text4 = new Chemistry.Text("Heater", new Chemistry.Point(1020, 465), canvas);
    text4.color = "black";
    text4.font = "17px Arial";
    all_labels.push(text4);
    let text6 = new Chemistry.Text("Temperature Controller", new Chemistry.Point(1210, 495), canvas);
    text6.color = "black";
    text6.font = "17px Arial";
    all_labels.push(text6);
    let text9 = new Chemistry.Text("temp_in_cold", new Chemistry.Point(1330, 170), canvas);
    text9.color = "black";
    text9.font = "17px Arial";
    all_labels.push(text9);
    let text10 = new Chemistry.Text("temp_out_cold", new Chemistry.Point(1330, 40), canvas);
    text10.color = "black";
    text10.font = "17px Arial";
    all_labels.push(text10);
    let text7 = new Chemistry.Text("temp_in_hot", new Chemistry.Point(1330, 405), canvas);
    text7.color = "black";
    text7.font = "17px Arial";
    all_labels.push(text7);
    let text8 = new Chemistry.Text("temp_out_hot", new Chemistry.Point(1330, 310), canvas);
    text8.color = "black";
    text8.font = "17px Arial";
    all_labels.push(text8);
}
// to display all labels in activity 4
function display_labels() {
    for (let i = 0; i < all_labels.length; i++) {
        all_labels[i].draw();
    }
}
// function for three attempts for each calculation;
// function attempts(ans: number[], response: number, marks: number) {
//     if(number_of_attempts < 3) {
//         if(ans == response) {
//             number_of_attempts = 0;
//             return "pass";
//         } else {
//             number_of_attempts++;
//             return "fail"
//         }
//     } else {
//         return "fail";
//     }
// }
// to calculate area in activity 5
function calculate_area() {
    heat_transfer_area = Math.PI * (selected_dia) * (selected_length) / 10000;
    area_of_inner_tube = Math.PI / 4 * (Math.pow(selected_dia, 2)) / 10000;
    equivalent_diameter = (selected_shell_inside_dia - selected_outside_dia) / 100;
    annulus_area = Math.PI / 4 * (Math.pow(selected_shell_inside_dia, 2) - Math.pow(selected_outside_dia, 2)) / 10000;
    console.log(heat_transfer_area, area_of_inner_tube, equivalent_diameter, annulus_area);
}
//calculation functions for  activity 7
// calculations for table 1 in a7
function a7_calculate_all(time, tci, tco, ti, to) {
    let res = [];
    let nue = selected_volume * (Math.pow(10, (-6))) / time;
    res.push(nue);
    let mue = nue / area_of_inner_tube;
    res.push(mue);
    let m = nue * rhoh;
    res.push(parseFloat(m.toFixed(3)));
    let q = m * cph * (tci - tco);
    res.push(q);
    let lmtd = ((tci - ti) - (tco - to)) / (Math.log((tci - ti) / (tco - to)));
    res.push(lmtd);
    let u = q / (heat_transfer_area * lmtd);
    res.push(u);
    console.log(res);
    return res;
}
// second set of calculations for a7;
function a7_calculate_for_table_2() {
    let res = [];
    let muc = (selected_flow_rate / 3600000) / annulus_area; // velocity of cold fluid
    res.push(parseFloat(muc.toFixed(3)));
    let prc = cpc * muec / kc; // prandtl number
    res.push(parseFloat(prc.toFixed(2)));
    let rec = (equivalent_diameter * muc * rhoc) / muec; // reynolds number
    res.push(parseFloat(rec.toFixed(2)));
    let nuc = (0.023 * (Math.pow(rec, (0.8))) * (Math.pow(prc, (0.4))) * Math.pow((selected_outside_dia / selected_shell_inside_dia), (0.45)));
    res.push(parseFloat(nuc.toFixed(3)));
    let hoc = nuc * kc / equivalent_diameter;
    res.push(parseFloat(hoc.toFixed(3)));
    let hoic = hoc * selected_shell_inside_dia / selected_dia;
    res.push(parseFloat(hoic.toFixed(3)));
    console.log(res);
    a7_second_calculation_set = res;
    return res;
}
// calculation for 
function a7_calculate_for_table_3(U, u) {
    let res = [];
    let hi_exp = (U * a7_second_calculation_set[5]) / (a7_second_calculation_set[5] - U);
    res.push(hi_exp);
    let re = (u * selected_dia * (Math.pow(10, (-2))) * rhoh) / mueh;
    res.push(re);
    let hi_st = kh / (selected_dia * (Math.pow(10, (-2)))) * (1.86 * Math.pow(re, (1 / 3)) * Math.pow(prh, (1 / 3)) * Math.pow((selected_dia / selected_length), (1 / 3)));
    res.push(hi_st);
    console.log(res);
    return res;
}
// random function
function random(min_val, max_val) {
    return (Math.random() * (max_val - min_val) + min_val);
}
// used colors
// #03fce8 blue for correct
//#f4ccccff default
//# sourceMappingURL=common.js.map