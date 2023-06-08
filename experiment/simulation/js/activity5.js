var actvity5_sel_data_ind = 0;
var selected_dia = 0.7;
var selected_outside_dia = 1;
var selected_shell_inside_dia = 1.8;
var selected_length = 100;
var selected_volume = 880;
var selected_flow_rate = 500;
function new_message(str) {
}
function new_task(str) {
}
function new_score(str) {
}
var activity5_current_question = 0;
var activity5_t_score = 0;
var seq_container_5 = [];
function activity5() {
    document.getElementById("description-box").innerHTML = `
    Calculation of the area based on the selected dimensions
    `;
    if (document.getElementById("a5_last_button")) {
        document.getElementById("a5_last_button").remove();
    }
    add_to_content(`
    You get
    <ul>
    <li><span class="text-color-blue">5 points</span> for correct calculation</li>
    <li><span class="text-color-blue">4 points</span> for second attempt</li>
    <li><span class="text-color-blue">3 points </span> for third attempt</li>
    </ul>
    `);
    root.innerHTML = "";
    root.style.display = "flex";
    root.style.flexDirection = "column";
    root.style.justifyContent = "space-evenly";
    add_left_box();
    panel.style.display = "flex";
    panel.style.width = "22%";
    panel.style.height = "inherit";
    a5_first_table();
    a5_second_table();
}
function a5_first_table() {
    let div = document.createElement("div");
    div.setAttribute("id", "tab1-box");
    div.innerHTML = `

    <h5  class="heading-5 a5-heading-1" >Select The Dimensions of Test Section (Heat Exchanger)<h5>
   
    <div class="a5-upper-flex">
        <div style="width: 80%" id="table-1-box">
        <table id="a5-tab-1" class="table table-responsive">

            <tbody class="table-light" style="font-size: 1.5vw;">

                <tr>
                    <td>Inside Diameter of Inner Tube, d1 (cm)</td>
                    <td id="tab-1-second-column">
                        <select style="font-size: 11px" name="first_field" id="inp1" onchange="select_inp1_val()"
                            class="form-select">
                            <option value="">Select</option>
                            <option value="0.7">0.7</option>
                            <option value="1.5">1.5</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td>Outside Diameter of Inner Tube, d2 (cm)</td>
                    <td><select disabled style="font-size: 11px" name="second_field" id="inp2" class="form-select">
                            <option value="">Select</option>
                        </select></td>
                </tr>

                <tr>
                    <td>Inside Diameter of Outer Tube, D1 (cm)</td>
                    <td><select disabled style="font-size: 11px" name="third_field" id="inp3" class="form-select">
                            <option value="">Select</option>
                        </select></td>
                </tr>

                <tr>
                    <td>Length of Heat Exchanger, L (cm)</td>
                    <td><select disabled style="font-size: 11px" name="fourth_field" id="inp4" class="form-select">
                            <option value="">Select</option>
                        </select></td>
                </tr>


            </tbody>
        </table>
        </div>

        <div id="test-section-image-box">
            <img id="test-section-image" src="./images/test_section_label.png">
        </div>

    </div>

    

    `;
    root.appendChild(div);
    fill_inp1();
}
function fill_inp1() {
    var inp1 = document.getElementById("inp1");
    inp1.innerHTML = ``;
    for (let i = 0; i < dia.length; i++) {
        var option = document.createElement("option");
        option.value = dia[i].toString();
        option.innerText = dia[i].toString();
        inp1.appendChild(option);
    }
}
function a5_second_table() {
    let div = document.createElement("div");
    div.setAttribute("id", "tab2-box");
    div.innerHTML = `
    <h5 class="heading-5" >Select Volume of Glass Section and Flow Rate<h5>
<div class="a5-lower-flex"">
    <div style='width: 80%'>
    <table id="a5-tab-2" class="table">


        <tbody class="table-light" style="font-size: 1.5vw;">


            <tr>
                <td>Volume of the measuring tank between two marks, V (cm<sup>3</sup>)</td>
                <td id="tab-2-second-column"><select disabled style="font-size: 11px" name="fith_field" id="inp5" class="form-select">
                        <option value="">Select</option>
                        
                    </select></td>
            </tr>

            <tr>
                <td>Volumetric Flow Rate of Cold Fluid (L/h)</td>
                <td><select disabled style="font-size: 11px" name="sixth_field" id="inp6" class="form-select" onchange="add_btn();">
                        <option value="">Select</option>
                    </select></td>
            </tr>

        </tbody>
    </table>
    </div>

    <div id="glass-section-image-box">
            <img id="glass-section-image" src="./images/glass_section_label.png">
    </div>

</div>
    `;
    root.appendChild(div);
}
function add_btn() {
    if (document.getElementById("a5-first-button")) {
        return;
    }
    console.log("button here");
    document.getElementById('ts').style.display = "none";
    let pb = document.getElementById("panel-bottom");
    pb.innerHTML += `<button style="width: 80%;" id="a5-first-button" class="btn btn-info" onclick="a5_move_to_calculation();">Next</button>`;
}
function select_inp1_val() {
    let input1 = document.getElementById("inp1");
    let input2 = document.getElementById("inp2");
    input2.innerHTML = ``;
    let input3 = document.getElementById("inp3");
    input3.innerHTML = ``;
    let input4 = document.getElementById("inp4");
    input4.innerHTML = ``;
    let input5 = document.getElementById("inp5");
    input5.innerHTML = ``;
    let input6 = document.getElementById("inp6");
    input6.innerHTML = ``;
    let selected_dia = parseFloat(input1.value);
    for (let i = 0; i < all_options.length; i++) {
        //console.log(all_options[i].dia);
        if (all_options[i].dia == selected_dia) {
            for (let j = 0; j < all_options[i].D1.length; j++) {
                var option = document.createElement("option");
                option.value = all_options[i].od[j].toString();
                option.innerText = all_options[i].od[j].toString();
                input2.appendChild(option);
                var option = document.createElement("option");
                option.value = all_options[i].D1[j].toString();
                option.innerText = all_options[i].D1[j].toString();
                input3.appendChild(option);
                var option = document.createElement("option");
                option.value = all_options[i].L[j].toString();
                option.innerText = all_options[i].L[j].toString();
                input4.appendChild(option);
                var option = document.createElement("option");
                option.value = all_options[i].V[j].toString();
                option.innerText = all_options[i].V[j].toString();
                input5.appendChild(option);
                var option = document.createElement("option");
                option.value = all_options[i].VF[j].toString();
                option.innerText = all_options[i].VF[j].toString();
                input6.appendChild(option);
            }
            input2.disabled = false;
            input3.disabled = false;
            input4.disabled = false;
            input5.disabled = false;
            input6.disabled = false;
            break;
        }
    }
}
function a5_move_to_calculation() {
    document.getElementById("a5-first-button").remove();
    document.getElementById("description-box").innerText = `Calculation of the area based on the selected dimensions`;
    add_to_content(`
    <p class="a5-calculations">
    <span class="text-color-blue">A</span> = &pi; x d1 x L
    </p>

    
    
    <p class="a5-calculations">
    <span class="text-color-blue">S</span> = (&pi;/4) x d1<sup>2</sup>
    </p>

   

    <p class="a5-calculations">
    <span class="text-color-blue">De</span> = D1 - d2
    </p>

    

    <p class="a5-calculations">
    <span class="text-color-blue">Sa</span> = (&pi;/4) x (D1<sup>2</sup>  - d2<sup>2</sup>)
    </p>

    <p class="a5-calculations">Realative error in each value should be less than <span class="text-color-blue">4%</span></p>


    `);
    let input1 = document.getElementById("inp1");
    let input2 = document.getElementById("inp2");
    let input3 = document.getElementById("inp3");
    let input4 = document.getElementById("inp4");
    let input5 = document.getElementById("inp5");
    let input6 = document.getElementById("inp6");
    selected_dia = parseFloat(input1.value);
    selected_outside_dia = parseFloat(input2.value);
    selected_shell_inside_dia = parseFloat(input3.value);
    selected_length = parseFloat(input4.value);
    selected_volume = parseFloat(input5.value);
    selected_flow_rate = parseFloat(input6.value);
    console.log(selected_dia, selected_outside_dia, selected_shell_inside_dia, selected_length, selected_volume, selected_flow_rate);
    root.innerHTML = `

    <div id="tab1-box">
    <h5 class="heading-5">The selected dimensions of Heat Exchanger from the previous step.<h5>

            <div class="a5-upper-flex">
                <div style="width: 100%" id="table-1-box">
                    <table class="table" style="height: 20vw">
                        <tbody class="table-light align-middle" style="font-size: 1.4vw;">
                            <tr>
                                <td>Inside Diameter of Inner Tube, d1 (cm)</td>
                                <td><label id="d1" for="">100</label></td>
                            </tr>

                            <tr>
                                <td>Outside Diameter of Inner Tube, d2 (cm)</td>
                                <td><label id="d2" for="">101</label></td>
                            </tr>

                            <tr>
                                <td>Inside Diameter of Outer Tube, D1 (cm)</td>
                                <td><label id="D1" for="">100</label></td>
                            </tr>

                            <tr>
                                <td>Length of Heat Exchanger, L (cm)</td>
                                <td><label id="L" for="">103</label></td>
                            </tr>

                            <tr>
                                <td>Volume of the measuring tank between two marks, V (cm3)</td>
                                <td><label id="V" for="">105</label></td>
                            </tr>

                            <tr>
                                <td>Volumetric flow rate of cold fluid (L/h)</td>
                                <td><label id="LH" for="">1000</label></td>
                            </tr>


                        </tbody>
                    </table>

                </div>


            </div>

</div>


<div id="tab2-box">
            <div class="a5-lower-flex">
                <div id="area-calculation">

                    <div id="area-1">


                        <div class="s5-area-header">
                            Tube
                        </div>

                        <div class="area-type" style="font-size: 1.2vw;">

                            <div class="s5-area-text">
                                <span style="font-weight: 700;">A</span> (Inside Heat transfer area of the heat
                                exchanger (m<sup>2</sup>) x <span style="font-weight: 600;" class="text-color-blue">10<sup>-3</sup></span>
                            </div>

                            <div>
                                <input class="s5-area-input " type="text" name="" id="area-A">
                            </div>

                        </div>

                        <div class="area-type" style="font-size: 1.2vw;">

                            <div class="s5-area-text"> 
                                <span style="font-weight: 700;">S</span> (Cross-sectional area of inner tube
                                (m<sup>2</sup>) x <span style="font-weight: 600;" class="text-color-blue">10<sup>-6</sup></span>
                            </div>

                            <div>
                                <input class="s5-area-input " type="text" name="" id="area-S">
                            </div>

                        </div>
                    </div>

                    <div id="area-2">


                        <div class="s5-area-header">
                            Annulus
                        </div>

                        <div class="area-type" style="font-size: 1.2vw; !important">
                            <div class="s5-area-text"><span style="font-weight: 700;">De</span> (Equivalent diameter of annulus (m)
                                ) x <span style="font-weight: 600;" class="text-color-blue">10<sup>-3</sup></span> </div>
                            <div><input class="s5-area-input " type="text" name="" id="area-De"></div>

                        </div>
                        <div class="area-type" style="font-size: 1.2vw;">
                            <div class="s5-area-text"><span style="font-weight: 700;">Sa</span> (Cross-sectional area of annulus(m<sup>2</sup>) x <span style="font-weight: 600;" class="text-color-blue">10<sup>-6</sup></span>
                            </div>
                            <div><input class="s5-area-input" type="text" name="" id="area-Sa"></div>

                        </div>

                    </div>

                </div>

            </div>
</div>

    `;
    //var root = document.getElementById("root");
    var panel = document.getElementById("panel");
    var main = document.getElementById("main");
    main.style.height = (window.innerWidth * 0.97 * 1080.0 / 1920 * 0.85).toString();
    root.style.display = "flex";
    root.style.flexDirection = "column";
    root.style.justifyContent = "space-evenly";
    main.style.padding = "1.5%";
    root.style.width = "76%";
    root.style.border = "4px solid grey";
    panel.style.display = "flex";
    panel.style.width = "23%";
    panel.style.height = "inherit";
    document.getElementById("d1").innerHTML = selected_dia.toString();
    document.getElementById("d2").innerHTML = selected_outside_dia.toString();
    document.getElementById("D1").innerHTML = selected_shell_inside_dia.toString();
    document.getElementById("L").innerHTML = selected_length.toString();
    document.getElementById("V").innerHTML = selected_volume.toString();
    document.getElementById("LH").innerHTML = selected_flow_rate.toString();
    //document.getElementById("test-section-image-box").remove();
    let div = document.createElement('div');
    div.innerHTML = `
        <button id="a5-verify-btn" style="font-size: 1.3vw" class="btn btn-info" onclick="a5_verify();">Verify</button>                  
    `;
    document.getElementById('panel-bottom').appendChild(div);
    calculate_area();
}
function a5_verify() {
    add_to_content('');
    console.log("Here");
    let a1 = document.getElementById('area-A');
    let a2 = document.getElementById('area-S');
    let a3 = document.getElementById('area-De');
    let a4 = document.getElementById('area-Sa');
    //float values
    let a = parseFloat(a1.value) * 1e-3;
    let s = parseFloat(a2.value) * 1e-6;
    let de = parseFloat(a3.value) * 1e-3;
    let sa = parseFloat(a4.value) * 1e-6;
    number_of_attempts++;
    if (!check_error(heat_transfer_area, a)) {
        console.log("heat transfer area is incorrect!");
        add_to_content("heat transfer area is incorrect!");
        return;
    }
    if (!check_error(area_of_inner_tube, s)) {
        console.log("area of inner tube is incorrect!");
        add_to_content("area of inner tube is incorrect!");
        return;
    }
    if (!check_error(equivalent_diameter, de)) {
        console.log("Equivalent Diameter of Annulus is incorrect");
        add_to_content("Equivalent Diameter of Annulus is incorrect");
        return;
    }
    if (!check_error(annulus_area, sa)) {
        console.log("cross-sectional area of annulus is incorrect!");
        add_to_content("cross-sectional area of annulus is incorrect!");
        return;
    }
    if (number_of_attempts < 3) {
        let marks = 2.5 - number_of_attempts + 1;
        global_score += marks * 4;
    }
    document.getElementById("a5-verify-btn").remove();
    let div = document.createElement('div');
    div.innerHTML = `
      <button id="btn-to-a6" class="btn btn-info" onclick="activity6();">Next</button>
      `;
    document.getElementById("panel-bottom").appendChild(div);
    document.getElementById("question-div-box").style.backgroundColor = "#03fce8";
    add_to_content(`
      <span class="text-color-blue">That's Correct!!</span>
      `);
}
function check_error(ans, calculated) {
    let res = Math.abs(((ans - calculated) / ans) * 100);
    console.log(res);
    if (res <= 4) {
        return true;
    }
    else {
        return false;
    }
}
// (calculated value - value by user) / calculate value * 100 <= 1
function give_option(num1) {
    let option = document.createElement("option");
    option.value = num1.toString();
    option.innerText = num1.toString();
    return option;
}
//# sourceMappingURL=activity5.js.map