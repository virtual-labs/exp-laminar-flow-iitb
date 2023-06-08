var a10_table = [];
var table_5_current_ind = 0;
var hi_pred = [];
var a10_count = 0;
var a10_hi_exp = [];
var a10_m = [];
var a10_re = [];
function activity10() {
    new_task("Calculate h_pred");
    new_score(global_score);
    new_message('allowed error < 0.01');
    document.getElementById('act10').remove();
    let main = document.getElementById("a8-main-div");
    main.innerHTML = "";
    // display_message("Enter Calculated hi");
    let a10_first = document.createElement('div');
    a10_first.innerHTML = `
    <h3 style="padding: 15px; text-align: center; background-color: #023047; border-radius: 7px; margin-bottom: 50px">Previous Calculations</h3>
    <h5 style="color: green;"><strong style="color: #023047; padding-left: 20px; text-align: center;">Prandtl Number, Prh : </strong> ${activity5_data[actvity5_sel_data_ind][2][1]}</h5>
    <h5 style="color: green;"><strong style="color: #023047; padding-left: 20px; text-align: center;">a : </strong> ${physical_properties[sel_physical_properties][3][0]}</h5>
    <h5 style="color: green;"><strong style="color: #023047; padding-left: 20px; text-align: center;">c : </strong>${Math.log(activity5_data[actvity5_sel_data_ind][2][5])}</h5>
    `;
    main.appendChild(a10_first);
    create_table_5();
}
function create_table_5() {
    let main = document.getElementById("a8-main-div");
    let table_5 = document.createElement("table");
    table_5.id = "table-5";
    table_5.style.marginTop = "50px";
    table_5.setAttribute('class', 'table');
    table_5.innerHTML = `
    <thead class="table-dark">
        <th>Sr. No</th>
        <th>m (kg/s)</th>
        <th>Re</th>
        <th>hi_exp</th>
        <th class="hovertext" data-hover="hi_pred = (k/d)*c*(Re^a)">hi_pred</th>
        <th>Check</th>
    </thead>

    <tbody id="tbody-5">
    
    </tbody>
    
    `;
    let new_div = document.createElement("div");
    new_div.setAttribute("class", "table-responsive");
    new_div.appendChild(table_5);
    new_div.id = "last-table";
    main.appendChild(new_div);
    if (table_5_current_ind == 0) {
        let row = document.createElement("tr");
        let inp1 = document.createElement("input");
        let td_4 = document.createElement('td');
        let td_5 = document.createElement('td');
        td_4.appendChild(inp1);
        row.innerHTML = `
        <td>${1}</td>
        <td >${table_2_data[actvity5_sel_data_ind][0][0]}</td>
        <td >${table_2_data[actvity5_sel_data_ind][0][4]}</td>
        <td >${table_2_data[actvity5_sel_data_ind][0][3]}</td>
        `;
        row.appendChild(td_4);
        row.appendChild(td_5);
        let btn = document.createElement('button');
        btn.id = "a10-verify-btn";
        btn.innerText = "Verify";
        btn.style.fontSize = "1vw";
        btn.setAttribute("class", "btn btn-info");
        td_5.appendChild(btn);
        btn.onclick = function () {
            if ((Math.abs(parseFloat(inp1.value) - hi_pred[0]) < 0.01)) {
                global_score++;
            }
            // let a7_display_message: HTMLHeadingElement = <HTMLHeadingElement> document.createElement("h5");
            // a7_display_message.id = "temp-msg";
            // a7_display_message.style.color = "green";
            // a7_display_message.style.color = "green";
            // a7_display_message.innerText = "Correct";
            global_score += 1;
            // main.appendChild(a7_display_message);
            complete_table_5();
            btn.disabled = true;
            new_score(global_score);
            new_message('Click Show Graph');
            new_task("Observe Table");
            // display_message("See Graph");
            setTimeout(() => {
                window.scrollBy(0, 100);
            }, 1000);
        };
        row.setAttribute('class', 'table-light');
        document.getElementById('tbody-5').appendChild(row);
    }
    // let tbody = document.getElementById("tbody-3");
}
function complete_table_5() {
    for (let i = 1; i < table_4_data[actvity5_sel_data_ind].length; i++) {
        if (!skip_ind.includes(i)) {
            let row = document.createElement("tr");
            row.innerHTML = `
            <td>${table_5_current_ind++ + 2}</td>
            <td >${table_2_data[actvity5_sel_data_ind][i][0]}</td>
            <td >${table_2_data[actvity5_sel_data_ind][i][4]}</td>
            <td >${table_2_data[actvity5_sel_data_ind][i][3]}</td>
            <td >${hi_pred[++a10_count]}</td>
            <td >Checked</td>
            `;
            row.setAttribute('class', 'table-light');
            document.getElementById('tbody-5').appendChild(row);
        }
    }
    let btn = document.createElement("div");
    btn.setAttribute("class", "btn btn-success");
    btn.innerText = "Show Graph";
    btn.id = "btn-105";
    btn.onclick = show_last_graph;
    document.getElementById("panel").appendChild(btn);
}
function show_last_graph() {
    new_task("Observe hi_exp and hi_pred curves");
    new_message("Click Show Final Score");
    document.getElementById('btn-105').remove();
    drawchart10(a10_m, a10_hi_exp, hi_pred);
    to_last_page();
}
function to_last_page() {
    let btn = document.createElement("button");
    btn.innerText = "Show Final Score";
    btn.setAttribute("class", "btn btn-success");
    btn.id = 'last-btn';
    // display_message("Click Show Final Score");
    btn.onclick = function () {
        last_page();
    };
    document.getElementById("panel").appendChild(btn);
}
function plot10(a, c) {
    for (let i = 0; i < table_2_data[actvity5_sel_data_ind].length; i++) {
        if (!skip_ind.includes(i)) {
            a10_hi_exp.push(table_2_data[actvity5_sel_data_ind][i][3]);
            a10_re.push(table_2_data[actvity5_sel_data_ind][i][4]);
            a10_m.push(table_2_data[actvity5_sel_data_ind][i][0]);
        }
    }
    console.log("hi_exp", a10_hi_exp);
    console.log("Re", a10_re);
    console.log("m", a10_m);
    //let re=[167.40,326.30,449.11,643.31,895.32,1299.12,1787.77];//from data set
    let hi_pred1 = [];
    let k = 0.117; //from dataset
    let di = activity5_data[actvity5_sel_data_ind][0][0] / 100; //from data set di was in cm to converted in m
    console.log("di = ", di);
    for (let i = 0; i < a10_re.length; i++) {
        hi_pred1[i] = k / di * c * Math.pow(a10_re[i], a);
    }
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];//m
    //drawchart10(labels,data1,hi_pred);
    hi_pred = hi_pred1;
    activity10();
    console.log(hi_pred1);
}
function drawchart10(labels, data1, data2) {
    document.getElementById("a8-main-div").innerHTML = "";
    document.getElementById("a8-main-div").innerHTML = "<canvas id='myChart'></canvas>";
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = "white";
    if (typeof chart !== 'undefined') {
        chart.destroy();
    }
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'hi experimental',
                    data: data1,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                },
                {
                    label: 'hi predictate',
                    data: data2,
                    fill: false,
                    borderColor: 'red',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "red",
                    // backgroundColor: "rgba(255, 0, 0, 0.5)",
                },
            ]
        },
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'h (w/m^2-k)',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'm (kg/s)',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `h vs mass flow rate`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
}
//# sourceMappingURL=activity10.js.map