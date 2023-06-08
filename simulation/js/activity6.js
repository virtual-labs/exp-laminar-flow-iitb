var seq;
var seq_container = [];
var pupm_con;
var all_valves = [];
var show_table_0 = false;
var t0 = true;
var Ti;
var To;
var temp_diff_1 = 0;
var temp_diff_2 = 0;
var control_panel_text;
// var ti: number;
// var to: number;
function new_task_6(text) {
    // document.getElementById("a6-question-div-box").innerText = text;
    add_to_content(text);
}
function activity6() {
    if (document.getElementById("btn-to-a6")) {
        document.getElementById("btn-to-a6").remove();
    }
    panel.style.display = "flex";
    panel.style.width = "22%";
    document.getElementById("question-div-box").style.background = "#f4ccccff";
    a6_root_style();
    document.getElementById("description-box").innerText = "Now simulate all the steps with experimental setup.Take readings to start the calculation of heat transfer coefficient";
    document.getElementById("description-box").style.textAlign = "justify";
    root.style.height = "inherit";
    document.getElementById("root").innerHTML = "";
    canvas = document.createElement("canvas");
    canvas.id = "canvas_activity1";
    green_circle = [];
    To = 28.2 - 43 / 181.0;
    Ti = 28.2 - 53 / 181.0;
    seq = 0;
    seq_container = [];
    control_panel_text = new Chemistry.Text("Control Panel", new Chemistry.Point(850, 790), canvas);
    let v1 = new Chemistry.Custome_image(red_valve, new Chemistry.Point(400, 410), 66, 19, canvas);
    v1.stang = -90;
    let v2 = new Chemistry.Custome_image(red_valve, new Chemistry.Point(605, 520), 66, 18, canvas);
    //push two valaves with custome image class red image also change orientation
    all_valves = [v1, v2];
    pupm_con = new Chemistry.Pump_controller(canvas);
    document.getElementById("root").appendChild(canvas);
    canvas.style.cursor = "crosshair";
    context = canvas.getContext("2d");
    rect = canvas.getBoundingClientRect();
    //table_0_draw();
    canvas.addEventListener('click', a6_mouseclick); //inlet cold fluid vlave
    scene = new Scene();
    //add_a6_panel(canvas, `${rect.x + canvas.width - 300}px`, `${rect.y}px`);
    window.onload = a6_windowresize;
    window.onresize = a6_windowresize;
    a6_windowresize();
    var first_geo = new Chemistry.Custome_image(seq0_img, new Chemistry.Point(470, 440), 709, 650, canvas);
    first_geo.name = "first";
    seq_container.push(first_geo);
    first_geo.draw();
    draw_seq_all();
    draw_pump_con();
}
function draw_pump_con() {
    pupm_con.draw();
}
function a6_windowresize() {
    //canvas size
    a6_canvas_size();
    //canvas mapping
    a6_canvas_mapping();
    //draw border or rectangle
    scene.draw();
    draw_seq_all();
    draw_pump_con();
    if (show_table_0) {
        let table = document.getElementById('table_0');
        table.style.right = `${rect.x + 100 * lscale}px`;
        table.style.top = `${rect.y + canvas.height - 550 * lscale}px`;
        table.style.height = `${canvas.height * 2.8 / 4}px`;
        table.style.fontSize = "0.85vw";
    }
    panel.style.height = canvas.height * (1 - 0.04) + "px";
    panel.style.width = "28%";
}
function a6_canvas_size() {
    canvas.width = window.innerWidth * 0.97;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.85;
    lscale = canvas.width / 1920.0;
}
function a6_canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
function draw_seq_all() {
    scene.draw();
    control_panel_text.draw();
    draw_pump_con();
    all_valves[0].draw();
    all_valves[1].draw();
    if (seq == 0) {
        console.log("open cold water inlet valve ");
        add_to_content("open cold water inlet valve ");
    }
    for (let i = 0; i < seq_container.length; i++) {
        seq_container[i].draw();
    }
    if (seq == 1 && seq_container[1].l < seq_container[1].l_last) {
        window.requestAnimationFrame(draw_seq_all);
        all_valves[0].img = green_valve;
        all_valves[0].stang = -45;
        all_valves[0].stpt.x = 420;
        all_valves[0].stpt.y = 410;
    }
    else if (seq == 1) {
        if (seq_container[1].name = "second") {
            seq_container.splice(1, 1);
            seq_container[0].img = seq1_img;
            seq = 2;
            draw_seq_all();
            canvas.addEventListener('click', a6_mouseclick_seq_2);
            console.log("Open glass section outlet valve");
            // let a6_text = new Chemistry.Text("Open glass section outlet valve", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            //document.getElementById("a6-question-div-box").innerText = "Open glass section outlet valve";
            add_to_content("Open glass section outlet valve");
        }
    }
    else if (seq == 4 && (seq_container[1].l < seq_container[1].l_last)) {
        window.requestAnimationFrame(draw_seq_all);
    }
    else if (seq == 4) {
        if (seq_container[1].name = "third") {
            seq_container.splice(1, 1);
            seq_container[0].img = seq2_img;
            seq = 5;
            console.log("pump and test section animation completed");
            // let a6_text = new Chemistry.Text("pump and test section animation completed", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            //start h pipe animation
            var second_geo = new Chemistry.anim_image_x_dir(seq3_img, new Chemistry.Point(470, 440), 709, 650, canvas);
            seq_container.push(second_geo);
            second_geo.name = "fourth";
            second_geo.l = 650;
            second_geo.l_last = 650;
            second_geo.width = 585;
            second_geo.width_last = 250;
            draw_seq_all();
            // second_geo.draw();
        }
    }
    else if (seq == 5 && seq_container[1].width > seq_container[1].width_last) {
        window.requestAnimationFrame(draw_seq_all);
    }
    else if (seq == 5) {
        if (seq_container[1].name = "fourth") {
            seq_container.splice(1, 1);
            seq_container[0].img = seq3_img;
            seq = 6;
            console.log("H pipe animation completed");
            // let a6_text = new Chemistry.Text("H pipe animation completed", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            //start glass and v pipe animation
            var second_geo1 = new Chemistry.anim_image_y_dir_down(seq4_img, new Chemistry.Point(470, 440), 709, 650, canvas);
            seq_container.push(second_geo1);
            second_geo1.name = "fourth";
            second_geo1.startx = 400;
            second_geo1.l = 80;
            second_geo1.l_last = 500;
            second_geo1.width = 0;
            draw_seq_all();
            // second_geo.draw();
        }
    }
    else if (seq == 6 && seq_container[1].l < seq_container[1].l_last) {
        window.requestAnimationFrame(draw_seq_all);
    }
    else if (seq == 6) {
        if (seq_container[1].name = "fourth") {
            seq_container.splice(1, 1);
            seq_container[0].img = seq4_img;
            seq = 7;
            console.log("glass and v pipe animation completed");
            //start next animation
            canvas.addEventListener("click", a6_mouseclick_seq_7);
            console.log("Turn on the heater");
            draw_seq_all();
            // let a6_text = new Chemistry.Text("Turn on the heater", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            //document.getElementById("a6-question-div-box").innerText = "Turn on the Heater";
            add_to_content("Click on the 'h' button on control pannel to turn on the Heater");
            // second_geo.draw();
        }
    }
    else if (seq == 13 && seq_container[seq_container.length - 1].l < seq_container[seq_container.length - 1].l_last) {
        //drawing timer text for first reading 199.60;
        seq_container[3].text = getreadingtime().toString();
        seq_container[2].draw();
        window.requestAnimationFrame(draw_seq_all);
    }
    else if (seq == 13) {
        seq_container[2].draw();
        console.log("glass fill animation completed");
        // let a6_text = new Chemistry.Text("Observation Table", new Chemistry.Point(1125, 600), canvas);
        // a6_text.color = "yellow";
        // a6_text.font = "24px";
        // a6_text.draw();
        // document.getElementById("a6-question-div-box").innerText = "See Table for 8 different flow rates";
        add_to_content("Note down all the readings, You require to fill the table in the next activity");
        show_table_0 = true;
        if (t0) {
            t0 = false;
        }
        if (!document.getElementById("table-btn")) {
            add_button(`<button style="margin-bottom: 5%; font-size: 1.3vw;" id="table-btn" class="btn btn-primary" onclick="table_0_draw();">Next</button>`);
        }
    }
    //add all valve draw
}
var readingtime = 0;
function getreadingtime() {
    //if 81 then 199.60 if 83 190.10
    if (get_temp_con_value() == 81) {
        readingtime += 199.60 / 99; //199.60 first data set timer reading 99 time the loop execute
        return (readingtime.toFixed(2));
    }
    else {
        readingtime += 190.10 / 99; //199.60 first data set timer reading 99 time the loop execute
        return (readingtime.toFixed(2));
    }
}
function a6_mouseclick(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    console.log(x, y);
    a6_check_isinside_cold_in(x, y);
    //all_valves[0].img="green color" change stpt angle
}
function a6_mouseclick_seq_2(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    console.log(x, y);
    if (y >= 494 && y <= 545) {
        if (x >= 598 && x <= 681) {
            seq = 3;
            canvas.removeEventListener("click", a6_mouseclick_seq_2);
            console.log("Open hot fluid pump outlet valve");
            //document.getElementById("a6-question-div-box").innerText = "Open hot fluid pump valve";
            add_to_content("Click on 'p' button on control panel to turn on the pump");
            //canvas.addEventListener("click",a6_mouseclick_seq_3);
            //add rotation of glass section valve open green color
            //all_valves[1].img="green color" change stpt angle
            all_valves[1].img = green_valve;
            all_valves[1].stang = 45;
            all_valves[1].stpt.y = 510;
            draw_seq_all();
            // let a6_text = new Chemistry.Text("Open hot fluid pump outlet valve", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            a6_mouseclick_seq_3();
        }
    }
    // a6_check_isinside_cold_in(x,y);
}
function a6_mouseclick_seq_3() {
    seq = 4;
    canvas.removeEventListener("click", a6_mouseclick_seq_3);
    console.log("Click pump power on");
    canvas.addEventListener("click", a6_mouseclick_seq_35);
    a6_add_slider();
}
function a6_mouseclick_seq_35(e) {
    new_task_6("Please wait...");
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    console.log(x, y);
    if (y >= 692 && y <= 765) {
        if (x >= 871 && x <= 943) {
            console.log("here");
            seq = 4;
            canvas.removeEventListener("click", a6_mouseclick_seq_35);
            console.log("Pump animation");
            pupm_con.color = "green";
            var second_geo = new Chemistry.anim_image(seq2_img, new Chemistry.Point(470, 440), 709, 650, canvas);
            seq_container.push(second_geo);
            second_geo.name = "third";
            second_geo.l = 1;
            second_geo.l_last = 600;
            second_geo.width = 380;
            let slider = document.getElementById("a6_slider");
            slider.value = "1";
            draw_seq_all();
        }
    }
    // a6_check_isinside_cold_in(x,y);
}
function a6_mouseclick_seq_7(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    console.log(x, y);
    if (y >= 688 && y <= 769) {
        if (x >= 943 && x <= 1020) {
            seq = 8;
            canvas.removeEventListener("click", a6_mouseclick_seq_7);
            canvas.addEventListener("click", a6_mouseclick_seq_8);
            canvas.addEventListener("click", a6_mouseclick_seq_9);
            canvas.addEventListener("click", a6_mouseclick_timer_start);
            console.log("Heater on");
            pupm_con.color1 = "green";
            //start timer
            console.log("click on up arrow to select desire temperature and click start on timer");
            //timer image
            var second_geo = new Chemistry.anim_image(seq5_img, new Chemistry.Point(1000, 325), 290, 210, canvas);
            seq_container.push(second_geo);
            second_geo.name = "timer";
            second_geo.l = 210;
            second_geo.l_last = 210;
            second_geo.width = 0;
            draw_seq_all();
            index_temp_con = -1;
            // let a6_text = new Chemistry.Text("click on up arrow to select desire temperature and click start on timer", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            // document.getElementById("a6-question-div-box").innerText = "Click Buttons on Temp Controller to select a Temperature";
            add_to_content("Click on up and down arrow on temp controller to select the temperature");
        }
    }
    // a6_check_isinside_cold_in(x,y);
}
function a6_mouseclick_seq_8(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    console.log(x, y);
    if (y >= 408 && y <= 440) {
        if (x >= 700 && x <= 780) {
            new_task_6("");
            //get temp text
            seq = 9;
            console.log("temp up controller event");
            // let a6_text = new Chemistry.Text("temp up controller event", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            // canvas.removeEventListener("click",a6_mouseclick_seq_7);
            if (seq_container.length > 2) {
                seq_container.splice(2, seq_container.length);
            }
            if (index_temp_con < temp_con.length - 1) {
                index_temp_con++;
                console.log(index_temp_con);
            }
            let temp_con_value = get_temp_con_value();
            var second_geo = new Chemistry.Geo_Text(temp_con_value.toString(), new Chemistry.Point(670, 390), canvas);
            selected_temp = temp_con_value;
            set_global_temp_ind(temp_con_value);
            console.log("the selected temp value is: " + temp_con_value);
            second_geo.textalingment = "center";
            seq_container.push(second_geo);
            second_geo.name = "temp_con";
            draw_seq_all();
            add_to_content("Click on start button to Start the timer");
        }
    }
    // a6_check_isinside_cold_in(x,y);
}
function a6_mouseclick_seq_9(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    console.log(x, y);
    if (y >= 335 && y <= 380) {
        if (x >= 700 && x <= 780) {
            new_task_6("");
            //get temp text
            seq = 9;
            console.log("temp down controller event");
            // let a6_text = new Chemistry.Text("temp down controller event", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            // canvas.removeEventListener("click",a6_mouseclick_seq_7);
            if (seq_container.length > 2) {
                seq_container.splice(2, seq_container.length);
            }
            if (index_temp_con > 0) {
                index_temp_con--;
            }
            let temp_con_value = get_temp_con_value();
            var second_geo = new Chemistry.Geo_Text(temp_con_value.toString(), new Chemistry.Point(670, 390), canvas);
            selected_temp = temp_con_value;
            set_global_temp_ind(temp_con_value);
            for (let i = 0; i < readings.length; i++) {
                if (Math.round(temp_con_value) == Math.round(readings[i].temp)) {
                    selected_data_index = i;
                }
            }
            console.log("the selected temp value is: " + temp_con_value);
            second_geo.textalingment = "center";
            seq_container.push(second_geo);
            second_geo.name = "temp_con";
            draw_seq_all();
        }
        add_to_content("Click on start button to Start the timer");
    }
    // a6_check_isinside_cold_in(x,y);
}
var timer_anim = true;
function a6_mouseclick_timer_start(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    console.log(x, y);
    if (y >= 240 && y <= 290) {
        if (x >= 900 && x <= 970) {
            //get temp text
            if (index_temp_con >= 0) {
                seq = 10;
                console.log("timer start");
                new_task_6("Start timer");
                console.log("stop the time after steady state temp i.e. after 900 sec");
                // let a6_text = new Chemistry.Text("stop the time after steady state temp i.e. after 900 sec", new Chemistry.Point(1125, 600), canvas);
                // a6_text.color = "yellow";
                // a6_text.font = "24px";
                // a6_text.draw();
                //  document.getElementById("a6-question-div-box").innerText = "stop the time after steady state temp i.e. after 900 sec";
                add_to_content("stop the time after steady state temp i.e. after 900 sec");
                canvas.removeEventListener("click", a6_mouseclick_seq_8);
                canvas.removeEventListener("click", a6_mouseclick_seq_9);
                canvas.removeEventListener("click", a6_mouseclick_timer_start);
                seq_container[1].img = seq6_img;
                let settime = 0;
                //timer text
                var second_geo = new Chemistry.Geo_Text(settime.toString(), new Chemistry.Point(984, 332), canvas);
                seq_container.push(second_geo);
                second_geo.font = "24px Arial";
                second_geo.textalingment = "center";
                second_geo.name = "timer text";
                //Ti text
                var Ti_text = get_Ti_text();
                var Ti_value = new Chemistry.Geo_Text(Ti_text.toString(), new Chemistry.Point(310, 324), canvas);
                seq_container.push(Ti_value);
                Ti_value.textalingment = "center";
                //To text
                var To_text = get_To_text();
                var To_value = new Chemistry.Geo_Text(To_text.toString(), new Chemistry.Point(310, 696), canvas);
                seq_container.push(To_value);
                To_value.textalingment = "center";
                //ti text
                var ti_text = get_ti_text();
                var ti_value = new Chemistry.Geo_Text(ti_text.toString(), new Chemistry.Point(335, 432), canvas);
                seq_container.push(ti_value);
                ti_value.textalingment = "center";
                //ti text
                var to_text = get_to_text();
                var to_value = new Chemistry.Geo_Text(to_text.toString(), new Chemistry.Point(165, 640), canvas);
                seq_container.push(to_value);
                to_value.textalingment = "center";
                // var ii=1;
                anim_timer();
                function anim_timer() {
                    second_geo.text = settime.toString();
                    Ti_value.text = get_Ti_text().toString();
                    To_value.text = get_To_text().toString();
                    draw_seq_all();
                    settime += 5;
                    // console.log(ii);
                    if (settime <= 900) {
                        // ii++;
                        window.requestAnimationFrame(anim_timer);
                    }
                    else {
                        console.log("click stop timer");
                        timer_anim = true;
                        seq_container[1].img = seq7_img;
                        // let a6_text = new Chemistry.Text("click stop timer", new Chemistry.Point(1125, 600), canvas);
                        // a6_text.color = "yellow";
                        // a6_text.font = "24px";
                        // a6_text.draw();
                        //  document.getElementById("a6-question-div-box").innerText = "stop the timer";
                        add_to_content("stop the timer");
                        canvas.addEventListener("click", a6_mouseclick_timer_stop);
                        anim_timer_900_more();
                    }
                }
                function anim_timer_900_more() {
                    second_geo.text = settime.toString();
                    settime++;
                    draw_seq_all();
                    if (timer_anim) {
                        window.requestAnimationFrame(anim_timer_900_more);
                    }
                    else {
                        console.log("timer has stoped");
                        seq_container[1].img = seq8_img;
                        draw_seq_all();
                        console.log("Click to reset the timer");
                        // let a6_text = new Chemistry.Text("Click to reset the timer", new Chemistry.Point(1125, 600), canvas);
                        // a6_text.color = "yellow";
                        // a6_text.font = "24px";
                        // a6_text.draw();
                        //   document.getElementById("a6-question-div-box").innerText = "Click to reset the timer";
                        add_to_content("Click to reset the timer");
                        canvas.addEventListener("click", a6_mouseclick_timer_reset);
                        //add event listern to reset
                    }
                }
            }
        }
    }
}
function a6_mouseclick_timer_stop(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    console.log(x, y);
    if (y >= 240 && y <= 290) {
        if (x >= 1080 && x <= 1160) {
            //get temp text
            seq = 11;
            timer_anim = false;
            console.log("timer stopping");
            canvas.removeEventListener("click", a6_mouseclick_timer_stop);
        }
    }
}
function a6_mouseclick_timer_reset(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    console.log(x, y);
    if (y >= 240 && y <= 290) {
        if (x >= 970 && x <= 1015) {
            //get temp text
            seq = 12;
            timer_anim = false;
            console.log("timer reset");
            seq_container[3].text = "0";
            canvas.removeEventListener("click", a6_mouseclick_timer_reset);
            seq_container[1].img = seq5_img;
            draw_seq_all();
            canvas.addEventListener("click", a6_mouseclick_seq_12);
            console.log("close outlet glass valve and start timer");
            // let a6_text = new Chemistry.Text("close outlet glass valve and start timer", new Chemistry.Point(1125, 600), canvas);
            // a6_text.color = "yellow";
            // a6_text.font = "24px";
            // a6_text.draw();
            //   document.getElementById("a6-question-div-box").innerText = "Close outlet gas valve and start timer";
            add_to_content("Close outlet glass valve and start timer");
        }
    }
}
function a6_mouseclick_seq_12(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    console.log(x, y);
    if (y >= 477 && y <= 550) {
        if (x >= 593 && x <= 660) {
            seq = 13;
            canvas.removeEventListener("click", a6_mouseclick_seq_12);
            console.log("Glass valve closed");
            //add rotation of glass section valve closed
            seq_container[0].img = seq9_img;
            let glass = new Chemistry.anim_image(seq10_img, new Chemistry.Point(470, 440), 709, 650, canvas);
            glass.l = 475;
            glass.l_last = 575;
            glass.width = 200;
            glass.startx = 400;
            seq_container.push(glass);
            readingtime = 0;
            //glass outlet valve to red img change stpt and angle
            //all_valves[0].img="red color"
            all_valves[1].img = red_valve;
            all_valves[1].stang = 0;
            all_valves[1].stpt.y = 520;
            draw_seq_all();
            //animate glass section fill
        }
    }
}
//console.log("the selected temp value is: " + readings[selected_ind].reading[0][1]);
function get_Ti_text() {
    //if 81 then 81.2 if 83 then 83.2
    Ti += (temp_diff_1 / 181.0); //81.2-28.2=53 181 is the no of times loop execute check data set
    return (Ti.toFixed(2));
}
function get_To_text() {
    //if 81 then 71.2 if 83 then 66.5
    To += (temp_diff_2 / 181.0); //71.2-28.2=43 181 is the no of times loop execute check data set
    return (To.toFixed(2));
}
function get_ti_text() {
    var ti = To = readings[selected_ind].reading[0][3];
    return (ti.toFixed(2));
}
function get_to_text() {
    //if 81 to 28.3 if 83 to 30
    var to = readings[selected_ind].reading[0][4];
    return (to.toFixed(2));
}
var index_temp_con = -1;
var temp_con = [81, 83]; //from data set
function get_temp_con_value() {
    console.log(temp_con[index_temp_con]);
    let temp = temp_con[index_temp_con];
    return (temp);
}
function a6_check_isinside_cold_in(x, y) {
    console.log(x, y);
    if (x <= 489 && x >= 400) {
        if (y >= 371 && y <= 455) {
            console.log("condition satisfied");
            //cold inlet valve click check
            var second_geo = new Chemistry.anim_image(seq1_img, new Chemistry.Point(470, 440), 709, 650, canvas);
            seq_container.push(second_geo);
            second_geo.name = "second";
            second_geo.l = 290;
            second_geo.l_last = 525;
            second_geo.width = 380;
            seq = 1;
            draw_seq_all();
            //add rotation of cold inlet valve open
            canvas.removeEventListener("click", a6_mouseclick);
        }
    }
}
function a6_add_slider() {
    let slider = document.createElement('input');
    slider.type = "range";
    slider.id = "a6_slider";
    slider.min = "0";
    slider.max = "4";
    slider.step = "1";
    slider.value = "0";
    slider.style.width = "60px";
    slider.style.position = "absolute";
    slider.style.left = `${rect.x + 250 * lscale}px`;
    slider.style.top = `${rect.y + canvas.height - 120 * lscale}px`;
    document.getElementById("root").appendChild(slider);
}
function table_0_draw() {
    document.getElementById("table-btn").remove();
    document.getElementById("description-box").innerText = `All readings in table`;
    scene = new Scene();
    root.innerHTML = "";
    add_left_box();
    root.style.width = "68%";
    root.style.height = "97%";
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-bordered');
    table.innerHTML = `
    <thead class="table-dark" style="font-size: 1.4vw;">
        <tr scope="col" style="background-color: black !important;">
            <th scope="col" >Sr. No</th>
            <th scope="col" >Time Between Two Marks</th>
            <th scope="col" >Ti</th>
            <th scope="col" >To</th>
            <th scope="col" >ti</th>
            <th scope="col" >to</th>
            <th scope="col" >Check</th>
        </tr>
    </thead>

    <tbody id="tb-0" style="font-size: 1.4vw;" class="table-dark">
   
    </tbody>
    `;
    // table.style.position = "absolute";
    // table.style.width = "30%";
    // table.style.left = `${rect.x + 150*lscale}px`;
    // table.style.top = `${rect.y+ canvas.height - 550*lscale}px`;
    // table.style.height = `${canvas.height*2.8/4}px`;
    table.style.fontSize = "0.85vw";
    table.setAttribute("id", "table_0");
    root.appendChild(table);
    table.style.width = "80%";
    table.style.margin = "3%";
    //table.style.height = "40vw";
    table.setAttribute("class", "overflow-auto");
    let row = document.createElement('tr');
    row.innerHTML = `
    <td style="border: 1px solid black !important;" scope="row">1</td>
    <td style="border: 1px solid black !important;" scope="row"><input id="table-0-inp1" type="text"></td>
    <td style="border: 1px solid black !important;" scope="row"><input id="table-0-inp2" type="text"></td>
    <td style="border: 1px solid black !important;" scope="row"><input id="table-0-inp3" type="text"></td>
    <td style="border: 1px solid black !important;" scope="row"><input id="table-0-inp4" type="text"></td>
    <td style="border: 1px solid black !important;" scope="row"><input id="table-0-inp5" type="text"></td>
    <td style="border: 1px solid black !important;" scope="row"><button style="font-size: 1.3vw;" class="btn btn-info" id="table-0-verify">verify</button></td>
    `;
    document.getElementById("tb-0").appendChild(row);
    let inp1 = document.getElementById("table-0-inp1");
    let inp2 = document.getElementById("table-0-inp2");
    let inp3 = document.getElementById("table-0-inp3");
    let inp4 = document.getElementById("table-0-inp4");
    let inp5 = document.getElementById("table-0-inp5");
    let btn = document.getElementById("table-0-verify");
    btn.onclick = verify_readings;
}
var selected_ind = -1;
function verify_readings() {
    let index = -1;
    for (let i = 0; i < readings.length; i++) {
        console.log(readings[i].temp, Math.round(selected_temp));
        if (Math.round(readings[i].temp) == Math.round(selected_temp)) {
            index = i;
        }
    }
    let inp1 = document.getElementById("table-0-inp1");
    let inp2 = document.getElementById("table-0-inp2");
    let inp3 = document.getElementById("table-0-inp3");
    let inp4 = document.getElementById("table-0-inp4");
    let inp5 = document.getElementById("table-0-inp5");
    let val1 = parseFloat(inp1.value);
    let val2 = parseFloat(inp2.value);
    let val3 = parseFloat(inp3.value);
    let val4 = parseFloat(inp4.value);
    let val5 = parseFloat(inp5.value);
    if (!check_error(readings[index].reading[0][0], val1)) {
        add_to_content("Incorrect Timer Reading");
        return false;
    }
    if (!check_error(readings[index].reading[0][1], val2)) {
        add_to_content("Ti value is incorrect");
        return false;
    }
    if (!check_error(readings[index].reading[0][2], val3)) {
        add_to_content("To value is incorrect");
        return false;
    }
    if (!check_error(readings[index].reading[0][3], val4)) {
        add_to_content("ti value is incorrect");
        return false;
    }
    if (!check_error(readings[index].reading[0][4], val5)) {
        add_to_content("to value is incorrect");
        return false;
    }
    document.getElementById("table-0-verify").remove();
    fill_table(index);
    return true;
}
function act7_btn() {
    let btn = document.createElement("button");
    //document.getElementById("result-101").innerText = "Click Next";
    btn.innerText = "Next";
    btn.setAttribute('class', "btn btn-info");
    btn.style.fontSize = "1.1vw";
    btn.setAttribute("id", "a6-last-button");
    btn.onclick = function () {
        activity7();
    };
    document.getElementById('ts').style.display = "none";
    document.getElementById("panel-bottom").appendChild(btn);
}
function fill_table(index) {
    let tbody = document.getElementById('tb-0');
    let ind = index;
    for (let i = 1; i < readings[index].reading.length; i++) {
        let row = document.createElement("tr");
        let td_0 = document.createElement('td');
        td_0.innerText = `${i + 1}`;
        td_0.style.border = "1px solid black";
        // adding standard deviation
        readings[index].reading[i][0] = parseFloat(((readings[index].reading[i][0] + random(-1, 1) / 100 * readings[index].reading[i][0])).toFixed(2));
        let td_1 = document.createElement('td');
        td_1.innerText = `${readings[index].reading[i][0]}`;
        td_1.style.border = "1px solid black";
        let td_2 = document.createElement('td');
        td_2.innerText = `${readings[index].reading[i][1]}`;
        td_2.style.border = "1px solid black";
        let td_3 = document.createElement('td');
        td_3.innerText = `${readings[index].reading[i][2]}`;
        td_3.style.border = "1px solid black";
        let td_4 = document.createElement('td');
        td_4.innerText = `${readings[index].reading[i][3]}`;
        td_4.style.border = "1px solid black";
        let td_5 = document.createElement('td');
        td_5.innerText = `${readings[index].reading[i][4]}`;
        td_5.style.border = "1px solid black";
        let td_6 = document.createElement('td');
        td_6.innerText = `Checked`;
        td_6.style.border = "1px solid black";
        row.append(td_0, td_1, td_2, td_3, td_4, td_5, td_6);
        tbody.appendChild(row);
        row.setAttribute("class", "table-light");
    }
    act7_btn();
}
function set_global_temp_ind(temp_value) {
    for (let i = 0; i < readings.length; i++) {
        if (Math.round(readings[i].temp) == temp_value) {
            selected_ind = i;
            temp_diff_1 = readings[selected_ind].reading[0][1] - readings[selected_ind].reading[0][3];
            temp_diff_2 = readings[selected_ind].reading[0][2] - readings[selected_ind].reading[0][3];
            Ti = readings[selected_ind].reading[0][3] - temp_diff_1 / 181.0;
            To = readings[selected_ind].reading[0][3] - temp_diff_2 / 181.0;
        }
    }
    console.log("index set to " + selected_ind);
}
//# sourceMappingURL=activity6.js.map