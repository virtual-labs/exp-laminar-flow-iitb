var physical_properties = [
    [[2612.5, 4180], [835, 1000], [0.004, 0.00084], [0.117, 0.616]],
    [[2612.49999, 4180], [835, 1000], [0.004, 0.000836], [0.117, 0.61639]]
];
var skip_ind = [];
var sel_physical_properties = 0;
var current_table_index = 0;
var table_input_1;
var table_input_2;
var table_input_3;
var table_input_4;
var table_input_5;
var table_input_6;
function activity7() {
    if (document.getElementById("a6-last-button")) {
        document.getElementById("a6-last-button").remove();
    }
    number_of_attempts = 0;
    root.innerHTML = "";
    document.getElementById("description-box").innerText = "Physical Properties at mean temperature";
    add_to_content("Enter all the values");
    //document.getElementById("description").innerText = "Calculate Various Terms";
    //new_task("Enter the Physical Properties");
    // new_score(global_score);
    panel.style.height = "inherit";
    panel.style.top = "0";
    panel.style.width = "22%";
    document.getElementById("panel").style.display = "flex";
    document.getElementById("ts").style.display = "none";
    // guide.style.backgroundColor = "#023047";
    // guide.style.color = "white";
    // root.appendChild(guide);
    // display_message("Choose The values");
    //root.id = "act7";
    //root.style.padding = "2% 30px";
    add_left_box();
    let a7_form_one = document.createElement("div");
    a7_form_one.setAttribute('id', "a7-first-table-box");
    // create first set of selectors to set physical properties at mean temperature
    //a7_form_one.id = "a7-left-box";
    a7_form_one.innerHTML = `
    <div style="width: 100%; font-weight: 700;">
    <h3 style="text-align: center">Physical Properties at Mean Temperature</h3>
</div>



    <table class="table table-responsive table-bordered">
        <thead class="table-dark align-middle" style="font-size: 1.3vw">
            <tr >
                <th>Properties</th>
                <th class="text-center" id="a7-table1-hot-header">Hot Fluid</th>
                <th id="a7-table1-cold-header">Cold Fluid</th>
            </tr>
        </thead>

        <tbody class="table-light align-middle" style="font-size: 1.3vw">
            <tr>
                <td >Heat Capacity, C<sub>p</sub> (J/kg-K)</td>
                <td><input style="width: 80%; margin: 0 10%;" class="form-control" type="text" id="heat-capacity-input-1"></td>
                <td><input style="width: 80%; margin: 0 10%;" class="form-control" type="text" id="heat-capacity-input-2"></td>
            </tr>

            <tr>
                <td>Density, &rho; (kg/m<sup>3</sup>)</td>
                <td><input style="width: 80%; margin: 0 10%;" class="form-control" type="text" id="density-input-1"></td>
                <td><input style="width: 80%; margin: 0 10%;" class="form-control" type="text" id="density-input-2"></td>
            </tr>

            <tr>
                <td>Viscosity, &mu; (kg/m-s)</td>
                <td><input style="width: 80%; margin: 0 10%;" class="form-control" type="text" id="viscosity-input-1"></td>
                <td><input style="width: 80%; margin: 0 10%;" class="form-control" type="text" id="viscosity-input-2"></td>
            </tr>

            <tr>
                <td>Thermal Conductivity, K (W/m-K)</td>
                <td><input style="width: 80%; margin: 0 10%;" class="form-control" type="text" id="thermal-conductivity-input-1"></td>
                <td><input style="width: 80%; margin: 0 10%;" class="form-control" type="text" id="thermal-conductivity-input-2"></td>
            </tr>
        </tbody>
    </table>

        `;
    root.appendChild(a7_form_one);
    set_observation_data_index();
    let pb = document.getElementById("panel-bottom");
    pb.innerHTML += `<button class="btn btn-info" style="font-size: 1.2vw; color: white;" id="a7-first-button" onclick="a7_verify_properties();">Next</button>`;
}
function a7_verify_properties() {
    add_to_content('');
    console.log("Here");
    let h1 = document.getElementById('heat-capacity-input-1');
    let h2 = document.getElementById('heat-capacity-input-2');
    let d1 = document.getElementById('density-input-1');
    let d2 = document.getElementById('density-input-2');
    let v1 = document.getElementById('viscosity-input-1');
    let v2 = document.getElementById('viscosity-input-2');
    let k1 = document.getElementById('thermal-conductivity-input-1');
    let k2 = document.getElementById('thermal-conductivity-input-2');
    //float values
    let hh = parseFloat(h1.value);
    let hc = parseFloat(h2.value);
    let dh = parseFloat(d1.value);
    let dc = parseFloat(d2.value);
    let vh = parseFloat(v1.value);
    let vc = parseFloat(v2.value);
    let kch = parseFloat(k1.value);
    let kcc = parseFloat(k2.value);
    number_of_attempts++;
    if (!check_error(cph, hh)) {
        console.log("Check Hot Fluid Heat Capacity again!!");
        add_to_content("Check Hot Fluid Heat Capacity again!!");
        return;
    }
    if (!check_error(cpc, hc)) {
        console.log("");
        add_to_content("Check Cold Fluid Heat Capacity again!!");
        return;
    }
    if (!check_error(rhoh, dh)) {
        console.log("Check Density again!!");
        add_to_content("Check Hot Fluid Density again!!");
        return;
    }
    if (!check_error(rhoc, dc)) {
        console.log("");
        add_to_content("Check Cold Fluid Density again!!");
        return;
    }
    if (!check_error(mueh, vh)) {
        console.log("");
        add_to_content("Check Hot Fluid Viscosity again!!");
        return;
    }
    if (!check_error(muec, vc)) {
        console.log("");
        add_to_content("Check Cold Fluid Viscosity again!!");
        return;
    }
    if (!check_error(kh, kch)) {
        console.log("");
        add_to_content("Check Hot Fluid Thermal Conductivity again!!");
        return;
    }
    if (!check_error(kc, kcc)) {
        console.log("");
        add_to_content("Check Cold Fluid Thermal Conductivity again!!");
        return;
    }
    document.getElementById("a7-first-button").remove();
    h1.disabled = true;
    h2.disabled = true;
    d1.disabled = true;
    d2.disabled = true;
    v1.disabled = true;
    v2.disabled = true;
    k1.disabled = true;
    k2.disabled = true;
    add_to_content("Great!! values are <span class='text-color-blue'>correct</span>, now click next");
    let div = document.createElement('div');
    div.innerHTML = `
      <button class="btn btn-info" style="font-size: 1.5vw; color: white;"  id="a7-page-2-load" onclick="a7_page_2();">Next</button>
      `;
    number_of_attempts = 0;
    document.getElementById("panel-bottom").appendChild(div);
}
function set_observation_data_index() {
    for (let i = 0; i < readings.length; i++) {
        if (Math.round(readings[i].temp) == Math.round(selected_temp)) {
            observation_data_index = i;
            break;
        }
    }
}
function a7_page_2() {
    document.getElementById('a7-page-2-load').remove();
    root.innerHTML = "";
    panel.style.height = "27vw";
    remove_left_box();
    document.getElementById("Instructions for calculations");
    add_to_content(`
        <div>
        <p class="a7-calculations">
            Calculate using below formulae and get <span class="text-color-blue">5 points</span> for each correct answer
        </p>

        <p class="a7-calculations">
            v =(V x 10<sup>-6</sup>) / t
        </p>

        <p class="a7-calculations">
            u = v / S
        </p>

        <p class="a7-calculations">
        m= v x &rho;<sub>h</sub>
        </p>

        <p class="a7-calculations">
            Q = m x C<sub>p</sub> x (T<sub>i</sub> - T<sub>o</sub>)
        </p>

        <p class="a7-calculations">
            LMTD = ((T<sub>i</sub> - t<sub>i</sub>) - (T<sub>o</sub> - t<sub>o</sub>)) / ln((T<sub>i</sub> - t<sub>i</sub>)/(T<sub>o</sub> - t<sub>o</sub>))
        </p>

        <p class="a7-calculations">
            U = Q / (A x LMTD)
        </p>

        </div>
    `);
    root.innerHTML = `
    <div id="a7-second-table-box">

            <div id="a7-upper-half">

                <div class="a7-add-border" style="height: 25vw;" class="overflow-auto">
                    <h5 class="heading-5">Physical Properties at Mean Temperature</h5>
                    <table class="table upper-table">
                        <thead class="table-light align-middle" style="font-size: 1.3vw;">
                            <tr>
                                <th></th>

                                <th>Hot Fluid</th>

                                <th>Cold Fluid</th>

                            </tr>
                        </thead>


                        <tbody class="table-light align-middle"  style="font-size: 1.3vw;">

                            <tr>
                                <td>Heat Capacity, Cp (J/kg-K)</td>
                                <td style="color: black !important;">${cph}</td>
                                <td style="color: black !important;">${cpc}</td>
                            </tr>

                            <tr>
                                <td>Density, ρ (kg/m3)
                                </td>
                                <td style="color: black !important;">${rhoh}</td>
                                <td style="color: black !important;">${rhoc}</td>
                            </tr>

                            <tr>
                                <td>Viscosity, µ (kg/m-s)</td>
                                <td style="color: black !important;">${mueh}</td>
                                <td style="color: black !important;">${muec}</td>
                            </tr>

                            <tr>
                                <td>Thermal Conductivity, K (W/m-K)</td>
                                <td style="color: black !important;">${kh}</td>
                                <td style="color: black !important;">${kc}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div  class="a7-add-border"  style="height: 25vw;" class="overflow-auto">
                    
                    <table class="table upper-table">
                        <tbody class="table-light align-middle"  style="font-size: 1.3vw;">

                            <tr>
                                <td>Inside Heat transfer area of heat exchanger, A (m<sup>2</sup>) x 10<sup>-3</sup></td>
                                <td style="width: 20%; color: black !important;">${(heat_transfer_area * 1000).toFixed(0)}</td>
                            </tr>

                            <tr>
                                <td>Cross-sectional area of inner tube, S (m<sup>2</sup>) x 10<sup>-6</sup></td>
                                <td style="color: black !important;">${(area_of_inner_tube * 1000000).toFixed(0)}</td>
                            </tr>

                            <tr>
                                <td>Equivalent diameter of annulus, De (m) x 10<sup>-3</sup> </td>
                                <td style="color: black !important;">${(equivalent_diameter * 1000).toFixed(0)}</td>
                            </tr>

                            <tr>
                                <td>Cross-sectional area of Annulus, Sa (m<sup>2</sup>) x 10<sup>-6</sup></td>
                                <td style="color: black !important;">${(annulus_area * 1000000).toFixed(0)}</td>
                            </tr>

                            <tr>
                                <td>Volume of the measuring tank between two marks, V (cm3)</td>
                                <td style="color: black !important;">${selected_volume}</td>
                            </tr>

                        </tbody>
                    </table>
                
                </div>

            </div>



            <div id="main-table" id="a7-lower-half" style="width: 96vw;"> 
                <div>
                    <table class="table lower-table ">
                    <thead class="table-dark align-middle" style="font-size: 1.1vw">
                    <th id="t1-formula">Sr. No</th>
                    <th>Time t (s)</th>
                    <th>Ti (°C)</th>
                    <th>To (°C)</th>
                    <th>ti (°C)</th>
                    <th>to (°C)</th>
                    <th class="hovertext" data-hover="v = (V*10^(-6))/(t)">&nu; (m<sup>3</sup>/s) x 10<sup>-5</sup></th>
                    <th class="hovertext" data-hover="u = v/s">u (m/s) x 10<sup>-3</sup></th>
                    <th class="hovertext" data-hover="m = v*&rho;">m (kg/s) x 10<sup>-3</sup></th>
                    <th class="hovertext" data-hover="Q = m*C<sub>p</sub>*(Ti - To)">Q (W)</th>
                    <th class="hovertext" data-hover="LMTD = ((Ti -ti) - (To -to))/ln((Ti -ti)/(To - to))">LMTD (K)</th>
                    <th class="hovertext" data-hover="U = Q / (A*LMTD)">U (W/m<sup>2</sup>-K)</th>
                    <th id="t1-formula">Check</th>
                </thead>
            
                <tbody class="align-middle" id="table-body" style="font-size: 1.2vw">
                </tbody>
                    </table>
                </div>

            </div>
   
        </div>

    `;
    build_table();
}
function check_properties_error(ans, calculated) {
    let res = Math.abs(((ans - calculated) / ans) * 100);
    console.log(res);
    if (res <= 2) {
        return true;
    }
    else {
        return false;
    }
}
function verify_main_table() {
    add_to_content('');
    console.log("Here");
    let res = a7_calculate_all(readings[observation_data_index].reading[0][0], readings[observation_data_index].reading[0][1], readings[observation_data_index].reading[0][2], readings[observation_data_index].reading[0][3], readings[observation_data_index].reading[0][4]);
    //float values
    let inp1 = parseFloat(table_input_1.value) * (Math.pow(10, (-5)));
    let inp2 = parseFloat(table_input_2.value) * (Math.pow(10, (-3)));
    let inp3 = parseFloat(table_input_3.value) * (Math.pow(10, (-3)));
    let inp4 = parseFloat(table_input_4.value);
    let inp5 = parseFloat(table_input_5.value);
    let inp6 = parseFloat(table_input_6.value);
    number_of_attempts++;
    if (!check_error(res[0], inp1)) {
        console.log("");
        add_to_content("nue value is incorrect!");
        return;
    }
    if (!check_error(res[1], inp2)) {
        console.log("");
        add_to_content("mue value is incorrect!");
        return;
    }
    if (!check_error(res[2], inp3)) {
        console.log("");
        add_to_content("m value is incorrect!");
        return;
    }
    if (!check_error(res[3], inp4)) {
        console.log("");
        add_to_content("Q value is incorrect!");
        return;
    }
    if (!check_error(res[4], inp5)) {
        console.log("");
        add_to_content("LMTD value is incorrect");
        return;
    }
    if (!check_error(res[5], inp6)) {
        console.log("");
        add_to_content("U value is incorrect!");
        return;
    }
    if (number_of_attempts < 3) {
        let marks = 5 - number_of_attempts + 1;
        global_score += marks * 4;
    }
    document.getElementById("a7-verify-1").remove();
    let div = document.createElement('div');
    div.innerHTML = `
      <button class="btn btn-info" style="font-size: 1.5vw; color: white;" id="a7-btn-3" onclick="a7_show_calculation_fields();">Next</button>
      `;
    document.getElementById("panel-bottom").appendChild(div);
    main_table = [];
    main_table.push(res);
    table_input_1.disabled = true;
    table_input_2.disabled = true;
    table_input_3.disabled = true;
    table_input_4.disabled = true;
    table_input_5.disabled = true;
    table_input_6.disabled = true;
    return ("correct");
}
function check_main_table_error(ans, calculated) {
    let res = Math.abs(((ans - calculated) / ans) * 100);
    console.log(res);
    if (res <= 4) {
        return true;
    }
    else {
        return false;
    }
}
function build_table() {
    if (current_table_index == 1) {
        //let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('next-2');
        //btn.disabled = false;
        let div = document.createElement("div");
        console.log("new button added");
        div.innerHTML = `
        <button class="btn btn-info" id="a7-button-4" onclick="a7_show_calculation_fields();">Next</button>
        `;
        document.getElementById("panel-bottom").appendChild(div);
        document.getElementById("ts").style.display = "none";
        //btn.onclick = a7_show_calcultion_fields;
    }
    let inp1 = document.createElement("input");
    inp1.style.width = "100%";
    table_input_1 = inp1;
    let inp2 = document.createElement("input");
    inp2.style.width = "100%";
    table_input_2 = inp2;
    let inp3 = document.createElement("input");
    inp3.style.width = "100%";
    table_input_3 = inp3;
    let inp4 = document.createElement("input");
    inp4.style.width = "100%";
    table_input_4 = inp4;
    let inp5 = document.createElement("input");
    inp5.style.width = "100%";
    table_input_5 = inp5;
    let inp6 = document.createElement("input");
    inp6.style.width = "100%";
    table_input_6 = inp6;
    if (current_table_index == 0) {
        let row = document.createElement('tr');
        if (current_table_index % 2 == 0) {
            row.setAttribute("class", "table-primary");
        }
        else {
            row.setAttribute("class", "table-warning");
        }
        row.innerHTML = `
        <td>${current_table_index + 1}</td>
        <td>${readings[selected_data_index].reading[0][0]}</td>
        <td>${readings[selected_data_index].reading[0][1]}</td>
        <td>${readings[selected_data_index].reading[0][2]}</td>
        <td>${readings[selected_data_index].reading[0][3]}</td>
        <td>${readings[selected_data_index].reading[0][4]}</td>
        `;
        let td_1 = document.createElement('td');
        let td_2 = document.createElement('td');
        let td_3 = document.createElement('td');
        let td_4 = document.createElement('td');
        let td_5 = document.createElement('td');
        let td_6 = document.createElement('td');
        let td_7 = document.createElement('td');
        td_1.appendChild(inp1);
        td_2.appendChild(inp2);
        td_3.appendChild(inp3);
        td_4.appendChild(inp4);
        td_5.appendChild(inp5);
        td_6.appendChild(inp6);
        row.appendChild(td_1);
        row.appendChild(td_2);
        row.appendChild(td_3);
        row.appendChild(td_4);
        row.appendChild(td_5);
        row.appendChild(td_6);
        let cur_ind = current_table_index;
        let btn = document.createElement('button');
        btn.setAttribute('id', 'a7-verify-1');
        btn.setAttribute('class', "btn btn-info");
        btn.innerText = "Verify";
        btn.style.fontSize = "0.9vw";
        btn.onclick = function () {
            if (verify_main_table() == "correct") {
                complete_table();
            }
        };
        td_7.appendChild(btn);
        row.appendChild(td_7);
        document.getElementById("table-body").appendChild(row);
    }
    else {
        return;
    }
}
function a7_show_calculation_fields() {
    document.getElementById("a7-btn-3").remove();
    root.innerHTML = ``;
    document.getElementById("description-box").innerText = 'Calculate all the values';
    add_to_content(`<div>
    <p class="a7-calculations">
        <span class="text-color-blue">5 points</span> for each correct answer
    </p>

    <p class="a7-calculations">
        v = 500 L/h
    </p>

    <p class="a7-calculations">
        u<sub>c</sub>= (V / (3600 x 1000)) / S<sub>a</sub>
    </p>

    <p class="a7-calculations">
        Pr<sub>c</sub> = (Cp <sub>c</sub> x &mu;<sub>c</sub>) / K<sub>c</sub>
    </p>

    <p class="a7-calculations">
       Re<sub>c</sub> = (De x u<sub>c</sub> x &rho;<sub>c</sub>) / &mu;<sub>c</sub>
    </p>


    <p class="a7-calculations">
        Inside dia of outer tube D1= 1.8 cm
    </p>

    <p class="a7-calculations">
        Outside dia of inner tube d2= 1 cm
    </p>

    <p class="a7-calculations">
        Inside dia of inner tube d1=0.7 cm
    </p>


    <p class="a7-calculations">
        Nu<sub>c</sub> = 0.023 X (Re<sub>c</sub>)<sup>0.8</sup> x (Pr<sub>c</sub>)<sup>0.4</sup> x (D / d<sub>2</sub>)<sup>0.45</sup>
    </p>

    <p class="a7-calculations">
        ho<sub>c</sub> = Nu<sub>c</sub> x K<sub>c</sub> / D<sub>e</sub>
    </p>

    <p class="a7-calculations">
        hoic = hi<sub>c</sub> x (d<sub>2</sub>/d<sub>1</sub>)
    </p>

</div>

`);
    panel.id = "panel";
    root.innerHTML = `
   
   <div id="a7-second-table-box">

   <div id="a7-upper-half">

       <div class="a7-add-border" style="height: 25vw;" class="overflow-auto">
           <h5 class="heading-5">Physical Properties at Mean Temperature</h5>
           <table class="table upper-table">
               <thead class="table-light align-middle" style="font-size: 1.3vw;">
                   <tr>
                       <th></th>

                       <th>Hot Fluid</th>

                       <th>Cold Fluid</th>

                   </tr>
               </thead>


               <tbody class="table-light align-middle" style="font-size: 1.3vw;">

                   <tr>
                       <td>Heat Capacity, Cp (J/kg-K)</td>
                       <td style="color: black !important;">${cph}</td>
                       <td style="color: black !important;">${cpc}</td>
                   </tr>

                   <tr>
                       <td>Density, ρ (kg/m3)
                       </td>
                       <td style="color: black !important;">${rhoh}</td>
                       <td style="color: black !important;">${rhoc}</td>
                   </tr>

                   <tr>
                       <td>Viscosity, µ (kg/m-s)</td>
                       <td style="color: black !important;">${mueh}</td>
                       <td style="color: black !important;">${muec}</td>
                   </tr>

                   <tr>
                       <td>Thermal Conductivity, K (W/m-K)</td>
                       <td style="color: black !important;">${kh}</td>
                       <td style="color: black !important;">${kc}</td>
                   </tr>

               </tbody>
           </table>
       </div>

       <div class="a7-add-border" style="height: 25vw;" class="overflow-auto">

           <table class="table upper-table">
               <tbody class="table-light align-middle" style="font-size: 1.1vw;">

                   <tr>
                       <td>Inside Heat transfer area of heat exchanger, A (m<sup>2</sup>) x 10<sup>-3</sup></td>
                       <td style="width: 20%; color: black !important;">${(heat_transfer_area * 1000).toFixed(0)}</td>
                   </tr>

                   <tr>
                       <td>Cross-sectional area of inner tube, S (m<sup>2</sup>) x 10<sup>-6</sup></td>
                       <td style="color: black !important;">${(area_of_inner_tube * 1000000).toFixed(0)}</td>
                   </tr>

                   <tr>
                       <td>Equivalent diameter of annulus, De (m) x 10<sup>-3</sup> </td>
                       <td style="color: black !important;">${(equivalent_diameter * 1000).toFixed(0)}</td>
                   </tr>

                   <tr>
                       <td>Cross-sectional area of Annulus, Sa (m<sup>2</sup>) x 10<sup>-6</sup></td>
                       <td style="color: black !important;">${(annulus_area * 1000000).toFixed(0)}</td>
                   </tr style="color: black !important;">

                   <tr>
                       <td>Volume of the measuring tank between two marks, V (cm3)</td>
                       <td style="color: black !important;">${selected_volume}</td>
                   </tr>

               </tbody>
           </table>

       </div>

   </div>



   <div id="a7-lower-half">
      

           <div class="a7-add-border" id="new-fields" style="height: 15vw;" class="overflow-auto">
               <table id="a7-table-2" class="table" style="font-size: 1.3vw">
                   <thead class="table-dark align-middle">
                       <tr>
                           <th>Parameter</th>
                           <th>Value</th>
                       </tr>
                   </thead>

                   <tbody class="table-light align-middle" id="tb-11" style="font-size: 1.3vw">
                       <tr>
                           <td class="hovertext" data-hover="µ = (𝑣/1000*3600)/Sa">Velocity of Cold Fluid,
                               u<sub>c</sub>
                           </td>
                           <td><input class="form-control" style="width: 90%; font-size: 1.1vw" type="text" id="a7-f1"></td>
                       </tr>

                       <tr>
                           <td class="hovertext" data-hover="">Prandtl Number</td>
                           <td><input class="form-control" style="width: 90%; font-size: 1.1vw" type="text" id="a7-f2"></td>
                       </tr>


                       <tr>
                           <td class="hovertext" data-hover="">Reynolds's Number</td>
                           <td><input class="form-control" style="width: 90%; font-size: 1.1vw;" type="text" id="a7-f3"></td>
                       </tr>

                       <tr>
                           <td class="hovertext" data-hover="">Nusselt Number</td>
                           <td><input class="form-control" style="width: 90%; font-size: 1.1vw;" type="text" id="a7-f4"></td>
                       </tr>

                       <tr>
                           <td class="hovertext" data-hover="">Heat Transfer Coe, h<sub>o</sub> (W/m<sup>2</sup>-K)</td>
                           <td><input class="form-control" style="width: 90%; font-size: 1.1vw" type="text" id="a7-f5">
                           </td>
                       </tr>

                       <tr>
                           <td class="hovertext" data-hover="">Heat Transfer Coe, inner tube, h<sub>oi</sub>
                               (W/m<sup>2</sup>-K)</td>
                           <td><input class="form-control" style="width: 90%; font-size: 1.1vw" type="text" id="a7-f6"></td>
                       </tr>
                   </tbody>
               </table>
           

       </div>

   </div>

</div>
   
   `;
    document.getElementById("a7-lower-half").style.width = "100%";
    document.getElementById("a7-lower-half").style.height = "20vw";
    panel.style.height = "inherit";
    let btn = document.createElement('button');
    btn.id = 'next-3';
    btn.setAttribute('class', 'btn btn-success');
    btn.innerText = "Check";
    btn.onclick = a7_check_calculation;
    new_task("Calculate Parameters");
    //document.getElementById('act7').appendChild(new_fields);
    document.getElementById('panel').appendChild(btn);
    number_of_attempts = 0;
}
function complete_table() {
    //display_message("Click Calcualate");
    root.style.justifyContent = "flex-start";
    document.getElementById("description-box").innerText = `Table with all the calculated values`;
    let table = document.getElementById("main-table");
    root.innerHTML = ``;
    root.appendChild(table);
    panel.id = "x-panel";
    document.getElementById('table-body').style.fontSize = "1.35vw";
    let tbody = document.getElementById('table-body');
    let change = true;
    for (let i = 1; i < readings[observation_data_index].reading.length; i++) {
        let row = document.createElement("tr");
        let res = a7_calculate_all(readings[observation_data_index].reading[i][0], readings[observation_data_index].reading[i][1], readings[observation_data_index].reading[i][2], readings[observation_data_index].reading[i][3], readings[observation_data_index].reading[i][4]);
        let td_0 = document.createElement('td');
        td_0.innerText = `${i + 1}`;
        let td_1 = document.createElement('td');
        td_1.innerText = `${readings[observation_data_index].reading[i][0]}`;
        let td_2 = document.createElement('td');
        td_2.innerText = `${readings[observation_data_index].reading[i][1]}`;
        let td_3 = document.createElement('td');
        td_3.innerText = `${readings[observation_data_index].reading[i][2]}`;
        let td_4 = document.createElement('td');
        td_4.innerText = `${readings[observation_data_index].reading[i][3]}`;
        let td_5 = document.createElement('td');
        td_5.innerText = `${readings[observation_data_index].reading[i][4]}`;
        let td_6 = document.createElement('td');
        td_6.innerText = `${(res[0] / (Math.pow(10, (-5)))).toFixed(2)}`;
        let td_7 = document.createElement('td');
        td_7.innerText = `${(res[1] / (Math.pow(10, (-3)))).toFixed(2)}`;
        let td_8 = document.createElement('td');
        td_8.innerText = `${(res[2] / (Math.pow(10, (-3)))).toFixed(2)}`;
        let td_9 = document.createElement('td');
        td_9.innerText = `${res[3].toFixed(2)}`;
        let td_10 = document.createElement('td');
        td_10.innerText = `${res[4].toFixed(1)}`;
        let td_11 = document.createElement('td');
        td_11.innerText = `${res[5].toFixed(2)}`;
        let td_12 = document.createElement('td');
        td_12.innerText = `Checked`;
        row.append(td_0, td_1, td_2, td_3, td_4, td_5, td_6, td_7, td_8, td_9, td_10, td_11, td_12);
        tbody.appendChild(row);
        if (change) {
            row.setAttribute("class", "table-secondary");
            change = false;
        }
        else {
            row.setAttribute("class", "table-primary");
            change = true;
        }
        main_table.push([
            res[0].toFixed(7), res[1].toFixed(3), res[2].toFixed(4), res[3].toFixed(2), res[4].toFixed(1), res[5].toFixed(2)
        ]);
    }
}
function a7_check_calculation() {
    add_to_content(`
        <span class="text-color-blue">Good Going!!</span>
        `);
    let f1 = document.getElementById('a7-f1');
    let f2 = document.getElementById('a7-f2');
    let f3 = document.getElementById('a7-f3');
    let f4 = document.getElementById('a7-f4');
    let f5 = document.getElementById('a7-f5');
    let f6 = document.getElementById('a7-f6');
    //float values
    let val1 = parseFloat(f1.value);
    let val2 = parseFloat(f2.value);
    let val3 = parseFloat(f3.value);
    let val4 = parseFloat(f4.value);
    let val5 = parseFloat(f5.value);
    let val6 = parseFloat(f6.value);
    let res = a7_calculate_for_table_2();
    number_of_attempts++;
    if (!check_error(res[0], val1)) {
        console.log("");
        add_to_content("Velocity of Cold Fluid is incorrect!");
        return;
    }
    if (!check_error(res[1], val2)) {
        console.log("");
        add_to_content("Prandtl Number value is incorrect!");
        return;
    }
    if (!check_error(res[2], val3)) {
        console.log("");
        add_to_content("Reynold's number value is incorrect!");
        return;
    }
    if (!check_error(res[3], val4)) {
        console.log("");
        add_to_content("Nusselt Number value is incorrect!");
        return;
    }
    if (!check_error(res[4], val5)) {
        console.log("");
        add_to_content("ho value is incorrect");
        return;
    }
    if (!check_error(res[5], val6)) {
        console.log("");
        add_to_content("hoic value is incorrect!");
        return;
    }
    if (number_of_attempts < 3) {
        let marks = 5 - number_of_attempts + 1;
        global_score += marks * 6;
    }
    document.getElementById("next-3").remove();
    // document.getElementById("a7-verify-1").remove();
    let div = document.createElement('div');
    div.innerHTML = `
      <button class="btn btn-info" style="font-size: 1.5vw; color: white;" id="a7-btn-3" onclick="show_table_2();">Next</button>
      `;
    document.getElementById("panel-bottom").appendChild(div);
    table_input_1.disabled = true;
    table_input_2.disabled = true;
    table_input_3.disabled = true;
    table_input_4.disabled = true;
    table_input_5.disabled = true;
    table_input_6.disabled = true;
    //a7_add_table_2();
    return ("correct");
}
function a7_add_table_2() {
    document.getElementById('new-fields').remove();
    document.getElementById("s2").style.height = "150px";
    document.getElementById('next-3').style.display = "none";
    let new_fields = document.createElement("div");
    new_fields.id = "numbers-2";
    new_fields.innerHTML = `

    <div style="margin: 15px 30px; color: green;"><strong style="color: #023047;">Heat Transfer Coefficient, based on inner tube, hoi (W/m<sup>2</sup>-K) : </strong> ${activity5_data[actvity5_sel_data_ind][2][5]}</div>
    <div style="margin: 15px 30px; color: green;"> <strong style="color: #023047;">Prandtl Number, Prh : </strong> ${activity5_data[actvity5_sel_data_ind][2][1]}</div>
    `;
    document.getElementById('a7-right-box').appendChild(new_fields);
    //show_table_2();
}
function show_table_2() {
    add_to_content(`
            <div>
            <p class="a7-calculations">
                <span class="text-color-blue">5 points</span> for each correct answer
            </p>

            <p class="a7-calculations">
                hi<sub>exp</sub> = (U x hoi<sub>c</sub>)/(hoi<sub>c</sub> - U);
            </p>

            <p class="a7-calculations">
                Pr = (Cp<sub>h</sub> x &mu;<sub>h</sub>) / K
            </p>

            <p class="a7-calculations">
            Re<sub>c</sub> = (d<sub>1</sub> x u x &rho;<sub>h</sub>) / &mu;<sub>h</sub>;
            </p>

            <p class="a7-calculations">
            hi<sub>st</sub> = (k/d<sub>1</sub>)x(1.86 X Re<sup>1/3</sup> x Pr<sup>1/3</sup> x (d<sub>1</sub> / L)<sup>1/3</sup>)
            </p>


            </div>
    
    `);
    document.getElementById("a7-btn-3").remove();
    panel.style.height = "25vw";
    root.innerHTML = ``;
    root.innerHTML = `
    <div id="a7-second-table-box">

    <div id="a7-upper-half">

        <div class="a7-add-border" style="height: 25vw;" class="overflow-auto">
            <h5 class="heading-5">Physical Properties at Mean Temperature</h5>
            <table class="table upper-table">
                <thead class="table-light align-middle" style="font-size: 1.3vw;">
                    <tr>
                        <th></th>

                        <th>Hot Fluid</th>

                        <th>Cold Fluid</th>

                    </tr>
                </thead>


                <tbody class="table-light align-middle"  style="font-size: 1.3vw;">

                    <tr>
                        <td>Heat Capacity, Cp (J/kg-K)</td>
                        <td style="color: black !important;">${cph}</td>
                        <td style="color: black !important;">${cpc}</td>
                    </tr>

                    <tr>
                        <td>Density, ρ (kg/m3)
                        </td>
                        <td style="color: black !important;">${rhoh}</td>
                        <td style="color: black !important;">${rhoc}</td>
                    </tr>

                    <tr>
                        <td>Viscosity, µ (kg/m-s)</td>
                        <td style="color: black !important;">${mueh}</td>
                        <td style="color: black !important;">${muec}</td>
                    </tr>

                    <tr>
                        <td>Thermal Conductivity, K (W/m-K)</td>
                        <td style="color: black !important;">${kh}</td>
                        <td style="color: black !important;">${kc}</td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div class="a7-add-border" style="height: 25vw;" class="overflow-auto">
            
            <table class="table upper-table">
                <tbody class="table-light align-middle"  style="font-size: 1.2vw;">

                    <tr>
                        <td>Inside Heat transfer area of heat exchanger, A (m<sup>2</sup>) x 10<sup>-3</sup></td>
                        <td style="width: 20%; color: black !important;">${(heat_transfer_area * 1000).toFixed(0)}</td>
                    </tr>

                    <tr>
                        <td>Cross-sectional area of inner tube, S (m<sup>2</sup>) x 10<sup>-6</sup></td>
                        <td style="color: black !important;">${(area_of_inner_tube * 1000000).toFixed(0)}</td>
                    </tr>

                    <tr>
                        <td>Equivalent diameter of annulus, De (m) x 10<sup>-3</sup> </td>
                        <td style="color: black !important;">${(equivalent_diameter * 1000).toFixed(0)}</td>
                    </tr>

                    <tr>
                        <td>Cross-sectional area of Annulus, Sa (m<sup>2</sup>) x 10<sup>-6</sup></td>
                        <td style="color: black !important;">${(annulus_area * 1000000).toFixed(0)}</td>
                    </tr>

                    <tr>
                        <td>Volume of the measuring tank between two marks, V (cm3)</td>
                        <td style="color: black !important;">${selected_volume}</td>
                    </tr>

                    <tr>
                        <td>Ht. Transfer Coe., based on inner tube, hoi (W/m2-K)</td>
                        <td style="color: black !important;">${a7_second_calculation_set[5].toFixed(3)}</td>
                     </tr>


                    <tr>
                        <td>Prandtl Number, Prh</td>
                        <td style="color: black !important;">5.7</td>
                    </tr>

                </tbody>
            </table>
        
        </div>

    </div>



    <div id="a7-lower-half" style="width: 96vw;"> 
        <div>
           <table class="table lower-table">
            <thead class="table-dark table-middle" style="font-size: 1.1vw">
                <tr >
                   <th>Sr. No</th>
                   <th>m (kg/s)</th>
                   <th>u (m/s)</th>
                   <th>U (W/m^2-K)</th>
                   <th class="hovertext" data-hover="hi_exp = (U*hoi_c)/(hoi_c - U)">hi_exp</th>
                   <th class="hovertext" data-hover="Re= d1*u*𝞺/𝛍">Re</th>
                   <th class="hovertext" data-hover="hi_st = (K/d1)*(1.86*Re<sup>1/3</sup>*Pr<sup>1/3</sup>*(d1/L)<sup>1/3</sup>)">hi_st</th>
                   <th>Check</th>
                </tr>
               </thead>
           
               <tbody id="tb-2-tbody" class="table-middle" style="font-size: 1.1vw">
              
               </tbody>
           </table>
        </div>
    </div>

</div>


    `;
    let tbody = document.getElementById('tb-2-tbody');
    let row = document.createElement('tr');
    row.innerHTML += `
        <td>${1}</td>
        <td>${main_table[0][2]}</td>
        <td>${main_table[0][1].toFixed(2)}</td>
        <td>${main_table[0][5].toFixed(2)}</td>
        `;
    let inp1 = document.createElement("input");
    let inp2 = document.createElement("input");
    let inp3 = document.createElement("input");
    let inp4 = document.createElement("button");
    inp4.innerText = "Verify";
    inp4.style.fontSize = "1vw";
    inp4.setAttribute("class", "btn btn-info");
    number_of_attempts = 0;
    // function for handling inputs in table 2
    inp4.onclick = function () {
        let val1 = parseFloat(inp1.value);
        let val2 = parseFloat(inp2.value);
        let val3 = parseFloat(inp3.value);
        let res = a7_calculate_for_table_3(main_table[0][5], main_table[0][1]);
        number_of_attempts++;
        if (!check_error(res[0], val1)) {
            add_to_content("Experimental Heat Transfer coefficient is incorrect!");
            return;
        }
        if (!check_error(res[1], val2)) {
            add_to_content("Reynold's number of hot fluid is incorrect!");
            return;
        }
        if (!check_error(res[2], val3)) {
            add_to_content("Sieder-Tate Heat Transfer coefficient is incorrect!");
            return;
        }
        if (number_of_attempts < 3) {
            let marks = 5 - number_of_attempts + 1;
            global_score += marks * 6;
        }
        inp1.disabled = true;
        inp2.disabled = true;
        inp3.disabled = true;
        if ((21000 - parseFloat(inp2.value)) < 0) {
            skip_ind.push(0);
            row.setAttribute("class", "table-danger");
        }
        last_table = [];
        last_table.push(res);
        load_complete_table_2();
        //document.getElementById("a7-btn-3").remove();
        inp4.disabled = true;
        add_to_content(``);
    };
    let td_1 = document.createElement('td');
    td_1.appendChild(inp1);
    let td_2 = document.createElement('td');
    td_2.appendChild(inp2);
    let td_3 = document.createElement('td');
    td_3.appendChild(inp3);
    let td_4 = document.createElement('td');
    td_4.appendChild(inp4);
    row.appendChild(td_1);
    row.appendChild(td_2);
    row.appendChild(td_3);
    row.appendChild(td_4);
    row.setAttribute("class", "table-primary");
    tbody.appendChild(row);
    prh = parseFloat(((cph * mueh) / kh).toFixed(2));
    //window.scrollBy(0, 500);
}
function load_complete_table_2() {
    // new_task("");
    // new_message("Click Next");
    //display_message("Click Calculate");
    let table = document.getElementById("a7-lower-half");
    root.innerHTML = ``;
    root.appendChild(table);
    panel.id = "x-panel";
    let tbody = document.getElementById('tb-2-tbody');
    let change = true;
    for (let i = 1; i < main_table.length; i++) {
        let row = document.createElement('tr');
        let res = a7_calculate_for_table_3(main_table[i][5], main_table[i][1]);
        last_table.push(res);
        row.innerHTML += `
        <td>${i + 1}</td>
        <td>${main_table[i][2]}</td>
        <td>${main_table[i][1]}</td>
        <td>${main_table[i][5]}</td>
        <td>${res[0].toFixed(2)}</td>
        <td>${res[1].toFixed(2)}</td>
        <td>${res[2].toFixed(2)}</td>
        <td>Checked</td>
        `;
        if (main_table[i][4] > 2100) {
            console.log(i);
            skip_ind.push(i);
        }
        tbody.appendChild(row);
        //console.log(table_2_data[][i][4]);
        if (change) {
            row.setAttribute("class", "table-warning");
            change = false;
        }
        else {
            row.setAttribute("class", "table-primary");
            change = true;
        }
    }
    let btn = document.createElement('button');
    btn.id = 'next-3';
    btn.setAttribute('class', 'btn btn-success');
    btn.innerText = "Next";
    btn.onclick = activity8;
    document.getElementById("panel-bottom").appendChild(btn);
    //window.scrollBy(0, 700);
}
//# sourceMappingURL=activity7.js.map