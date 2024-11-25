
var ln_re: number[] = [];
var ln_nu: number[] = [];
var c: number;


var a9_vals: number[] = [] // values of a and c;


var a9_fields_data = [0, 0, 0];


var table_4_current_ind: number = 0;

function activity9() {
    new_task("Calculate");
    new_message("allowed error < 0.01")
    let main = document.getElementById("a8-main-div");
    main.innerHTML = "";
    document.getElementById("panel").style.display = "flex";
    document.getElementById("description").innerText = "Evalute Model Paramters";
    //display_message("Enter calculated Values");
    
    let a9_first = document.createElement('div');
    a9_first.id = "a9-first";

    a9_first.innerHTML = `
    <h3 style="padding: 15px; text-align: center; background-color: #023047; border-radius: 7px; margin-bottom: 50px">Previous Calculations</h3>
    <h5 style="color: green"><strong style="color: #023047; padding-left: 20px; text-align: center;">ln(Prh) : </strong> ${activity5_data[actvity5_sel_data_ind][2][1]}</h5>
    <h5 style="color: green"><strong style="color: #023047; padding-left: 20px; text-align: center;">Thermal Conductivity, K (W/m-K) : </strong> ${physical_properties[sel_physical_properties][3][0]}</h5>
    <h5 style="color: green"><strong style="color: #023047; padding-left: 20px; text-align: center;">Inside Diameter of Innner Tube, d1 (cm) : </strong>${activity5_data[0][0][0]}</h5>
    `;

    main.appendChild(a9_first);

    create_table_4();
}

function create_table_4() {
    let main = document.getElementById("a8-main-div");

    let table_4 = document.createElement("table");
    table_4.id = "table-4";
    table_4.style.marginTop = "30px";
    table_4.setAttribute('class', 'table');

    table_4.innerHTML = `
    <thead class="table-dark">
        <th>Sr. No</th>
        <th>m (kg/s)</th>
        <th>Re</th>
        <th>hi_exp</th>
        <th class="hovertext" data-hover="Nu = hi_exp*(di/K)">Nu_exp</th>
        <th>ln(Re)</th>
        <th>ln(Nu)</th>
        <th>Check</th>
    </thead>

    <tbody id="tbody-4">
    
    </tbody>
    
    `

    let new_div = document.createElement('div');
    new_div.appendChild(table_4);
    new_div.setAttribute("class", "table-responsive");
    new_div.id = "tab-4"
    main.appendChild(new_div);



    if(table_4_current_ind == 0) {
        let row = document.createElement("tr");

        let inp1: HTMLInputElement = <HTMLInputElement> document.createElement("input");
        let inp2: HTMLInputElement = <HTMLInputElement> document.createElement("input");
        let inp3: HTMLInputElement = <HTMLInputElement> document.createElement("input");

        let td_4 = document.createElement('td');
        let td_5 = document.createElement('td');
        let td_6 = document.createElement('td');
        let td_7 = document.createElement('td');

        td_4.appendChild(inp1);
        td_5.appendChild(inp2);
        td_6.appendChild(inp3);

        row.innerHTML = `
        <td>${1}</td>
        <td >${table_2_data[actvity5_sel_data_ind][0][0]}</td>
        <td >${table_2_data[actvity5_sel_data_ind][0][4]}</td>
        <td >${table_2_data[actvity5_sel_data_ind][0][3]}</td>
        `;

        row.appendChild(td_4);
        row.appendChild(td_5);
        row.appendChild(td_6);
        row.appendChild(td_7);

        let btn = document.createElement('button');
        btn.innerText = "Verify";
        btn.setAttribute("class", "btn btn-info");
        td_7.appendChild(btn);
        td_7.style.fontSize = "1vw";
        btn.onclick = function() {
            if(Math.abs(parseFloat(inp1.value) - table_4_data[actvity5_sel_data_ind][0][0]) < 0.01) {
                global_score++;
            }
            if(Math.abs(parseFloat(inp2.value) - table_4_data[actvity5_sel_data_ind][0][1]) < 0.01) {
                global_score++;
            }
            if(Math.abs(parseFloat(inp3.value) - table_4_data[actvity5_sel_data_ind][0][2]) < 0.01) {
                global_score++
            } 
                
                // let a7_display_message: HTMLHeadingElement = <HTMLHeadingElement> document.createElement("h5");
                // a7_display_message.id = "temp-msg";
                // a7_display_message.style.color = "green";
                // a7_display_message.style.color = "green";
                // a7_display_message.innerText = "Correct";
                
                // main.appendChild(a7_display_message);
                complete_table_4();
                new_score(global_score);
                new_message("Click Matrix Algebra");
                new_task("")

                btn.disabled = true;

                new_score(global_score);
                window.scrollBy(0, 300);

                
            //  else {
            //     let a7_display_message: HTMLHeadingElement = <HTMLHeadingElement> document.createElement("h5");
            //     a7_display_message.id = "temp-msg";
            //     a7_display_message.style.color = "red";
            //     a7_display_message.innerText = "Incorrect, please enter precise values";
                
            //     main.appendChild(a7_display_message);

            //     setTimeout(() => {
            //         document.getElementById("temp-msg").remove();
            //     }, 5000);
            // }
        }


        
        row.setAttribute('class', 'table-light');
            
        document.getElementById('tbody-4').appendChild(row);
    }

   // let tbody = document.getElementById("tbody-3");

   
}

function complete_table_4() {

    //display_message("Click Matrix Algebra")


    for(let i=1; i<table_4_data[actvity5_sel_data_ind].length; i++) {
        if(!skip_ind.includes(i)) {
            let row = document.createElement("tr");

            

            row.innerHTML = `
            <td>${++table_4_current_ind+1}</td>
            <td >${table_2_data[actvity5_sel_data_ind][i][0]}</td>
            <td >${table_2_data[actvity5_sel_data_ind][i][4]}</td>
            <td >${table_2_data[actvity5_sel_data_ind][i][3]}</td>
            <td >${table_4_data[actvity5_sel_data_ind][i][0]}</td>
            <td >${table_4_data[actvity5_sel_data_ind][i][1]}</td>
            <td >${table_4_data[actvity5_sel_data_ind][i][2]}</td>
            <td >Checked</td>
            `;

            row.setAttribute('class', 'table-light');
               
            document.getElementById('tbody-4').appendChild(row);
        }

    }

    matrix_algebra();

}

function matrix_algebra() {
    
    let btn = document.createElement('button');
    btn.innerText = "Matrix Algebra";
    btn.id = "matrix-algebra";
    btn.setAttribute('class', 'btn btn-success');
    //btn.style.marginLeft = "47%";
    document.getElementById("panel").appendChild(btn);

    btn.onclick = function() {
       // display_message("Click Tool 1");
        let btn_1 = document.getElementById('matrix-algebra');
        btn_1.remove();
        add_tools();
    }
}


function add_tools() {
    new_task("");
    new_message("Click Next Step");
    
    let tools = document.createElement("div");
    tools.id = "tools";

    document.getElementById("panel").innerHTML += `
        <button id="bt-104" style="width: 100%;" class="btn btn-success" onclick="cal_one();">Next Step</button>
    `;


    document.getElementById("a8-main-div").appendChild(tools);
}

function table_for_regression() {
    
    let reg_tab: HTMLDivElement = <HTMLDivElement> document.createElement("div");
    reg_tab.id = "reg-tab";
    reg_tab.setAttribute("class", "table-responsive");
    reg_tab.style.marginTop = "15px";

    reg_tab.innerHTML = `
        <table class="table">
            <thead class="table-dark">
                <th>Sr. no</th>
                <th>Nu_exp</th>
                <th>X = ln(Re)</th>
                <th>Y = ln(Nu)</th>
                <th>X<sup>2</sup></th>
                <th>X*Y</th>
            </thead>

            <tbody class="table-light" id="reg-tab-body">
                
            </tbody>
        </table>
    `;

    document.getElementById("a8-main-div").appendChild(reg_tab);

    for(let i=0; i<table_4_data[actvity5_sel_data_ind].length; i++) {
        let row = document.createElement("tr");

        row.innerHTML = `
        <td>${i+1}</td>
        <td>${table_4_data[actvity5_sel_data_ind][i][0]}</td>
        <td>${table_4_data[actvity5_sel_data_ind][i][1]}</td>
        <td>${table_4_data[actvity5_sel_data_ind][i][2]}</td>
        <td>${Math.pow(table_4_data[actvity5_sel_data_ind][i][1], 2).toFixed(3)}</td>
        <td>${(table_4_data[actvity5_sel_data_ind][i][1]*table_4_data[actvity5_sel_data_ind][i][2]).toFixed(3)}</td>
        `
        document.getElementById('reg-tab-body').appendChild(row);

    }

    
}




function cal_one() {

   new_task("");
   new_message("");
   document.getElementById('bt-104').remove();

    plot9();

    window.scrollBy(0, 100);
    let tool_1_inputs = document.createElement("div");

    tool_1_inputs.innerHTML = `
    <br>
    <div id="cal-one">
    <h6 style="color: white; border-radius: 7px; padding: 5px; text-align: center; background-color: #023047">Equations for Calculation</h6>

    <h6 style="color: #023047; border-radius: 7px; padding: 10px; text-align: center;">ln(Nu) = ln(c) + a*ln(Re)</h6>

    <h6 style="color: #023047; border-radius: 7px; padding: 10px; text-align: center;">Nu = c * Re<sup>a</sup></h6>


    <button style="margin-left: 45%;" class="btn btn-success" onclick="get_ac();">Calculate</button>

    </div>

    <div id="a-c" style = "display: none; margin-top: 10px; flex-direction: row; justify-content: space-evenly;">

        <div>
        <label style="padding-left: 30px; color: #023047; font-weight: 600;" for="a7-f1">a :</label>
        <input disabled style="margin-left: 30px; width: 50%" class="form-control" type="text" id="a9-f1">
        </div>

        <div>
        <label style="padding-left: 30px; color: #023047; font-weight: 600;" for="a7-f3">c : </label> <br>
        <input disabled style="margin-left: 30px; width: 50%" class="form-control" type="text" id="a9-f3">
        </div>

    </div>

    `;


    document.getElementById("a9-first").remove();
    document.getElementById("tab-4").remove();

    document.getElementById('tools').appendChild(tool_1_inputs);

    let ans1: HTMLInputElement = <HTMLInputElement> document.getElementById("a9-f1");
    ans1.value = a9_vals[0].toString();

    let ans3: HTMLInputElement = <HTMLInputElement> document.getElementById("a9-f3");
    ans3.value = a9_vals[1].toString();

    
    table_for_regression();
    
    new_task("Table for Regression Coefficient Calculation");
    new_message("Click Calculate");
   
}

function get_ac() {
    new_task("");
    new_message("");
   // display_message("Click Next");
    document.getElementById('a-c').style.display = "flex";
    new_message("Calculated a and c values, now click next");
    go_to_activity10(); 
}


function plot9(){
    let x=[5.12,5.79,6.11,6.47,6.80,7.17,7.49];//ln re
    let y=[1.59,1.75,1.82,1.86,1.90,1.95,2.01];// ln nu

    for(let i=0; i<table_4_data[actvity5_sel_data_ind].length; i++) {
        ln_re.push(table_4_data[actvity5_sel_data_ind][i][1]);
        ln_nu.push(table_4_data[actvity5_sel_data_ind][i][2]);
    }

    console.log("ln_re", ln_re);
    console.log("ln_nu", ln_nu);
    let pol=regression_linear(ln_re,ln_nu);
    a9_vals = [pol[0], pol[1]];
    console.log(a9_vals);
    c=Math.exp(a9_vals[1]);
    var a=pol[0];
    var yy=[];
    for(let i=0;i<ln_re.length;i++){
        yy[i]=pol[0]*ln_re[i]+pol[1];
    }
    // console.log(yy);
    //pass a and c to the activity10

    //activity10(a,c);
}



function regression_linear(x:number[],y:number[]):number[]{
    let sumx=0;
    let sumy=0;
    let sumxy=0;
    let sumxx=0;
    let n=x.length;
    for(let i=0;i<n;i++){
        sumx+=x[i];
        sumy+=y[i];
        sumxy+=x[i]*y[i];
        sumxx+=x[i]*x[i];
    }
    let pol=[];
    pol[0]=(sumx*sumy-n*sumxy)/(sumx**2-n*sumxx);
    pol[1]=(sumy-pol[0]*sumx)/n;
    return(pol);
}

function go_to_activity10() {
    let btn = document.createElement('button');
    btn.innerText = "Next";
    btn.id = "act10";
    btn.setAttribute('class', 'btn btn-success');
    
    document.getElementById("panel").appendChild(btn);

    btn.onclick = function() {
        plot10(a9_vals[0], c);
    }
}


