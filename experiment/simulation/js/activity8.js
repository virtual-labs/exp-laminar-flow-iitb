var table_3;
var table_3_ind = 1;
var a8_question_box;
var show_exp_x = false;
var show_theo_x = false;
var show_y_axis = false;
var a8_m = [];
var hi_exp = [];
var hi_st = [];
function activity8() {
    // new_message("Observe Expermient data table");
    panel.id = "panel";
    document.getElementById("ts").style.display = "none";
    a8_m = [];
    hi_exp = [];
    hi_st = [];
    root.innerHTML = "";
    document.getElementById("panel").style.display = "flex";
    panel.style.width = "23%";
    panel.style.height = "inherit";
    if (document.getElementById('next-3')) {
        document.getElementById('next-3').remove();
    }
    document.getElementById("description-box").innerText = "Let’s Compare Experimental and Theoretical Heat transfer coefficients";
    add_to_content(`
    Observe the table and see <span class="text-color-blue">X</span>  and <span class="text-color-blue">Y</span> axis for <span class="text-color-blue">Experimental</span>  and <span class="text-color-blue">Theoretical</span> values

    `);
    add_left_box();
    let main_div = document.createElement("div");
    main_div.id = "a8-main-div";
    root.appendChild(main_div);
    root.style.backgroundColor = "#C2CBCD";
    main_div.style.padding = "20px 3%";
    table_3 = document.createElement("table");
    table_3.id = "table-3";
    table_3.setAttribute('class', 'table');
    table_3.innerHTML = `
    <thead class="table-dark align-middle" style="font-size: 1.4vw">
        <th>Sr. No</th>
        <th>m (kg/s) x 10<sup>-3</sup></th>
        <th>hi_exp</th>
        <th>hi_st</th>
    </thead>

    <tbody id="tbody-3" class="align-middle"  style="font-size: 1.4vw">
    
    </tbody>
    
    `;
    main_div.appendChild(table_3);
    // let tbody = document.getElementById("tbody-3");
    let change = true;
    for (let i = 0; i < last_table.length; i++) {
        if (!skip_ind.includes(i)) {
            let row = document.createElement("tr");
            row.innerHTML = `
            <td>${table_3_ind++}</td>
            <td class="y-axis">${(main_table[i][2] * 1000).toFixed(2)}</td>
            <td class="x-exp">${last_table[i][0].toFixed(2)}</td>
            <td class="x-theo">${last_table[i][2].toFixed(2)}</td>
            `;
            a8_m.push(main_table[i][2]);
            hi_exp.push(last_table[i][0]);
            hi_st.push(last_table[i][2]);
            if (change) {
                row.setAttribute('class', 'table-light');
                change = false;
            }
            else {
                row.setAttribute('class', 'table-light');
                change = true;
            }
            document.getElementById('tbody-3').appendChild(row);
        }
    }
    first_question();
}
function first_question() {
    //display_message("Click on Plot");
    let btn = document.createElement("div");
    btn.id = "bt-102";
    btn.innerHTML = `
        <button style="width: 100%" class="btn btn-success" onclick="give_choice();" id="a8-plot">Plot</button>
    `;
    document.getElementById("panel").appendChild(btn);
    //document.getElementById('a8-main-div').appendChild(a8_question_box);
}
function give_choice() {
    //display_message("Choose");
    let btn = document.getElementById('a8-plot');
    btn.remove();
    let box = document.createElement("div");
    box.id = "a8-choice-box";
    box.innerHTML = `

        <div style="display: flex; flex-flow: row wrap; width: 40%; min-width: 150px; justify-content: space-evenly; padding: 5px">
            <div style="width: 100%; border-radius: 7px"><h6 style="text-align: center">Experimenal</h6></div>
            <div style="width: 40%; text-align: center; margin: 3px">

            
            <input type="radio" onclick="exp_x();" name="one" id="radio-btn-1"
            <label>X-Axis</label>
            

            </div>

            <div style="width: 40%; text-align: center; margin: 3px"">

            <input type="radio" onclick="y_axis();" name="two" id="radio-btn-2"
            <label>Y-Axis</label>

            </div>
        </div>

        <div style="display: flex; flex-flow: row wrap; width: 40%; min-width: 150px; justify-content: space-evenly; padding: 5px">

            <div style="width: 100%; border-radius: 7px"><h6 style="text-align: center">Theoretical</h6></div>
            <div style="width: 40%; text-align: center; margin: 3px"">

    
            <input type="radio" onclick="theo_x();" name="one" id="radio-btn-3"
            <label>X-Axis</label>

            </div>
            <div style="width: 40%; text-align: center; margin: 3px">

            <input type="radio" onclick="y_axis();" name="two" id="radio-btn-3"
            <label>X-Axis</label>

            </div>
        </div>
    `;
    document.getElementById('panel').innerHTML += `
    <button id="bt-103" onclick="plot8();" class="btn btn-success">Show Graph</button>
    `;
    document.getElementById('a8-main-div').appendChild(box);
}
function exp_x() {
    if (show_exp_x) {
        let all_x = document.querySelectorAll(".x-exp");
        all_x.forEach((element) => {
            console.log("here");
            element.style.backgroundColor = "white";
        });
        show_exp_x = false;
        return;
    }
    let all_x = document.querySelectorAll(".x-exp");
    all_x.forEach((element) => {
        element.style.backgroundColor = "bisque";
    });
    show_exp_x = true;
}
function theo_x() {
    if (show_theo_x) {
        let all_x = document.querySelectorAll(".x-theo");
        all_x.forEach((element) => {
            console.log("here");
            element.style.backgroundColor = "white";
        });
        show_theo_x = false;
        return;
    }
    let all_x = document.querySelectorAll(".x-theo");
    all_x.forEach((element) => {
        element.style.backgroundColor = "bisque";
    });
    show_theo_x = true;
}
function y_axis() {
    if (show_y_axis) {
        let all_y = document.querySelectorAll(".y-axis");
        all_y.forEach((element) => {
            console.log("here");
            element.style.backgroundColor = "white";
        });
        show_y_axis = false;
        return;
    }
    let all_y = document.querySelectorAll(".y-axis");
    all_y.forEach((element) => {
        element.style.backgroundColor = "bisque";
    });
    show_y_axis = true;
}
function plot8() {
    add_to_content;
    // new_task("Answer the Question");
    // new_message("Observe Graph Deviation");
    document.getElementById("bt-103").remove();
    document.getElementById('a8-main-div').innerHTML = ``;
    //display_message("Answer Question");
    document.getElementById("a8-main-div").innerHTML += "<canvas id='myChart'></canvas>";
    // root.id = "act8";
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: a8_m,
            datasets: [
                {
                    label: 'Experimental',
                    data: hi_exp,
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
                    label: 'Sieder-Tate equation',
                    data: hi_st,
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
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'hi (w/m^2-k)',
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
                    text: `hi vs mass flow rate`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
    //root.appendChild(ctx);
    table_3_ind = 1;
    //document.getElementById('a8-heading').remove();
    //document.getElementById('table-3').remove();
    // document.getElementById('a8-choice-box').remove();
    second_question();
}
function second_question() {
    add_to_content(`
    <p>Carefully Look for Deviation</p>
    <p><span class="text-color-blue">2 Points</span> for correct response</p>
    `);
    let sq = document.createElement('div');
    sq.id = "second-question";
    sq.innerHTML = `
    <h6 style="text-align: center; border-radius: 7px;">Is Deviation Observed?</h6>

    <div style="display: flex; flex-flow: row wrap; justify-content: space-evenly">
    <div>


    <input type="radio" onclick="observed_message();" name="three" id="radio-btn-5"
    <label>NO</label>


    </div>
    <div>


    <input type="radio" onclick="not_observed_message();" name="four" id="radio-btn-6"
    <label>YES</label>

    </div>
    </div>
    `;
    sq.style.margin = "10px 0";
    document.getElementById('a8-main-div').appendChild(sq);
}
function observed_message() {
    new_task("");
    new_message("");
    let sq = document.getElementById("second-question");
    document.getElementById("question-div-box").innerText = "Evaluate Model Parameters Again";
    setTimeout(() => {
        activity8();
    }, 3000);
}
function not_observed_message() {
    new_task("");
    new_message("");
}
//# sourceMappingURL=activity8.js.map