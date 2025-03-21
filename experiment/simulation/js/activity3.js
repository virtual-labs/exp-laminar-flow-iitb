var drag = false;
var geo;
var scene1;
var a4_msg = ["Drag the pump to the green arrow", "Drag the test section to the green arrow", "Drag the horigontal pipe to the green arrow", "Drag the glass to the green arrow", "Drag the vertical pipe to the green arrow", "Drag the heater to the green arrow", "Drag the temperature controller to the green arrow", "Drag the first inlet cold fluid temperature indicator", "Drag the second outlet cold fluid temperature indicator", "Drag the first inlet hot fluid temperature indicator ", "Drag the second outlet hot fluid temperature indicator "];
var current_msg_i = 0;
var green_circle = [];
// function activity3(){
//     document.getElementById("root").innerHTML="";
//     canvas=<HTMLCanvasElement>document.createElement("canvas");
//     canvas.id="canvas_activity1";
//     green_circle=[];
//     document.getElementById("root").appendChild(canvas);
//     canvas.style.cursor="crosshair";
//     context=canvas.getContext("2d");
//     rect=canvas.getBoundingClientRect();
//     scene=new Scene();
//     scene1=new Scene();
//     fixed_container(); 
//     add_a3_panel(canvas, `${rect.x + canvas.width - 300}px`, `${rect.y}px`);
//     window.onload=a4_windowresize;
//     window.onresize=a4_windowresize;
//     canvas.addEventListener("mousemove",mousemove);
//     canvas.addEventListener("mousedown",mousedown);
//     canvas.addEventListener("mouseup",mouseup);
//     canvas.addEventListener("touchmove",touchmove);
//     current_msg_i=0;
//     all_labels=[];
//     drag=false;
//     geo="Drag";
//     a4_draw_all_components();
//     a4_windowresize();
//     a4_display_msg();
//     //create_labels();
//     //display_labels();
// }
function a4_windowresize() {
    //canvas size
    a4_canvas_size();
    //canvas mapping
    a4_canvas_mapping();
    //draw border or rectangle
    scene1.draw();
    scene.draw();
    let a3_panel = document.getElementById("a3_panel");
    a3_panel.style.right = `${rect.x + canvas.width - 1850 * lscale}px`;
    a3_panel.style.top = `${rect.y + 10}px`;
    a3_panel.style.height = `${canvas.height - 20}px`;
    a4_display_msg();
}
function a4_canvas_size() {
    canvas.width = window.innerWidth * 0.97;
    canvas.height = canvas.width * 1080.0 / 1920;
    lscale = canvas.width / 1920.0;
}
function a4_canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
function mousemove(e) {
    if (drag && geo == "Drag") {
        let x = Math.round((e.clientX - rect.x) / lscale);
        let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
        // m1.value=`${x},${y}`;
        //console.log(x,y);
        drag_geo(x, y);
    }
}
function mousedown(e) {
    // let x=Math.round((e.clientX-rect.x)/lscale);
    // let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    // m1.value=`${x},${y}`;
    drag = true;
}
function mouseup(e) {
    // let x=Math.round((e.clientX-rect.x)/lscale);
    // let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    // m1.value=`${x},${y}`;
    drag = false;
}
function touchmove(e) {
    if (geo == "Drag") {
        let x = Math.round((e.touches[0].clientX - rect.x) / lscale);
        let y = Math.round((canvas.height - (e.touches[0].clientY - rect.y)) / lscale);
        // m1.value=`${x},${y}`;
        drag_geo(x, y);
        console.log(x, y);
    }
}
function a4_draw_all_components() {
    var sq = new Chemistry.Custome_image(tank_img, new Chemistry.Point(424, 125), 382, 287, canvas);
    sq.name = "Tank";
    sq.lock();
    scene.add(sq);
    var sq = new Chemistry.Custome_image(pump_img, new Chemistry.Point(940, 600), 207, 146, canvas);
    sq.name = "Pump";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(test_img, new Chemistry.Point(920, 226), 320, 419, canvas);
    sq.name = "Test";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(pipe_h_img, new Chemistry.Point(1290, 575), 351, 63, canvas);
    sq.name = "Hpipe";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(pipe_v_img, new Chemistry.Point(1120, 112), 50, 195, canvas);
    sq.name = "Vpipe";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(glass_img, new Chemistry.Point(1170, 389), 71, 215, canvas);
    sq.name = "Glass";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(heater_img, new Chemistry.Point(1360, 481), 204, 40, canvas);
    sq.name = "Heater";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(temp_con_img, new Chemistry.Point(1250, 103), 183, 179, canvas);
    sq.name = "Temp_con";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(temp_cold_in_img, new Chemistry.Point(1280, 258), 98, 93, canvas);
    sq.name = "Temp_in_cold";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(temp_cold_in_img, new Chemistry.Point(1410, 258), 98, 93, canvas);
    sq.name = "Temp_out_cold";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(temp_hot_in_img, new Chemistry.Point(1280, 400), 130, 62, canvas);
    sq.name = "Temp_in_hot";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(temp_hot_in_img, new Chemistry.Point(1415, 400), 130, 62, canvas);
    sq.name = "Temp_out_hot";
    scene.add(sq);
}
function drag_geo(x, y) {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.isinside(new Chemistry.Point(x, y)) && scene.container[i].geo.draggable) {
            scene.container[i].geo.stpt = new Chemistry.Point(x, y);
            assemble(scene.container[i].geo);
            scene.draw();
            //display_labels(); 
            a4_display_msg();
            break;
        }
    }
}
function assemble(obj) {
    for (let i = 0; i < scene1.container.length; i++) {
        if (scene1.container[i].geo.isinside(new Chemistry.Point(obj.stpt.x, obj.stpt.y)) && scene1.container[i].geo.name == obj.name) {
            obj.stpt = scene1.container[i].geo.stpt;
            obj.lock();
            current_msg_i++;
            all_labels.splice(0, 1);
            //if heater remove heater and change tank image
            if (obj.name == "Heater") {
                change_tank_image();
            }
            if (current_msg_i == 11) {
                navigate_to_activity_4();
                document.getElementById("result-103").innerText = "Click Take Test";
            }
            break;
        }
    }
}
function fixed_container() {
    let c1 = new Chemistry.Geometry();
    c1.stpt = new Chemistry.Point(130, 99);
    c1.name = "Pump";
    scene1.add(c1);
    let greencir = new Chemistry.Arrow(c1.stpt, 'right', canvas);
    greencir.color = "green";
    greencir.draw();
    green_circle.push(greencir);
    let c2 = new Chemistry.Geometry();
    c2.stpt = new Chemistry.Point(165, 381);
    c2.name = "Test";
    scene1.add(c2);
    let greencir1 = new Chemistry.Arrow(c2.stpt, 'right', canvas);
    greencir1.color = "green";
    green_circle.push(greencir1);
    let c3 = new Chemistry.Geometry();
    c3.stpt = new Chemistry.Point(305, 600);
    c3.name = "Hpipe";
    scene1.add(c3);
    let greencir2 = new Chemistry.Arrow(c3.stpt, 'right', canvas);
    greencir2.color = "green";
    green_circle.push(greencir2);
    let c4 = new Chemistry.Geometry();
    c4.stpt = new Chemistry.Point(470, 461);
    c4.name = "Glass";
    scene1.add(c4);
    let greencir3 = new Chemistry.Arrow(c4.stpt, 'right', canvas);
    greencir3.color = "green";
    green_circle.push(greencir3);
    let c5 = new Chemistry.Geometry();
    c5.stpt = new Chemistry.Point(470, 256);
    c5.name = "Vpipe";
    scene1.add(c5);
    let greencir4 = new Chemistry.Arrow(c5.stpt, 'right', canvas);
    greencir4.color = "green";
    green_circle.push(greencir4);
    let c6 = new Chemistry.Geometry();
    c6.stpt = new Chemistry.Point(547, 103);
    c6.name = "Heater";
    scene1.add(c6);
    let greencir5 = new Chemistry.Arrow(c6.stpt, 'right', canvas);
    greencir5.color = "green";
    green_circle.push(greencir5);
    let c7 = new Chemistry.Geometry();
    c7.stpt = new Chemistry.Point(623, 181);
    c7.name = "Temp_con";
    scene1.add(c7);
    let greencir6 = new Chemistry.Arrow(c7.stpt, 'right', canvas);
    greencir6.color = "green";
    green_circle.push(greencir6);
    let c8 = new Chemistry.Geometry();
    c8.stpt = new Chemistry.Point(234, 287);
    c8.name = "Temp_in_cold";
    scene1.add(c8);
    let greencir7 = new Chemistry.Arrow(c8.stpt, 'right', canvas);
    greencir7.color = "green";
    green_circle.push(greencir7);
    let c9 = new Chemistry.Geometry();
    c9.stpt = new Chemistry.Point(45, 499);
    c9.name = "Temp_out_cold";
    scene1.add(c9);
    let greencir8 = new Chemistry.Arrow(c9.stpt, 'right', canvas);
    greencir8.color = "green";
    green_circle.push(greencir8);
    let c10 = new Chemistry.Geometry();
    c10.stpt = new Chemistry.Point(184, 196);
    c10.name = "Temp_in_hot";
    scene1.add(c10);
    let greencir9 = new Chemistry.Arrow(c10.stpt, 'right', canvas);
    greencir9.color = "green";
    green_circle.push(greencir9);
    let c11 = new Chemistry.Geometry();
    c11.stpt = new Chemistry.Point(184, 556);
    c11.name = "Temp_out_hot";
    scene1.add(c11);
    let greencir10 = new Chemistry.Arrow(c11.stpt, 'right', canvas);
    greencir10.color = "green";
    green_circle.push(greencir10);
}
function a4_display_msg() {
    if (current_msg_i >= a4_msg.length) {
        //activity4 completed
        a4_remove_event();
    }
    else {
        // let text=new Chemistry.Text(a4_msg[current_msg_i],new Chemistry.Point(900,675),canvas);
        // console.log(green_circle[current_msg_i].draw);
        // text.font="12px Arial";
        // text.color="white";
        // text.draw();
        document.getElementById("a3-question-div-box").innerText = a4_msg[current_msg_i];
        green_circle[current_msg_i].draw();
    }
}
function change_tank_image() {
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == "Tank") {
            scene.container[i].geo.img = tank2_img;
            scene.container[i].geo.dx = 411;
            scene.container[i].geo.dy = 287;
            scene.container[i].geo.stpt.x += 14.5;
            break;
        }
    }
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.name == "Heater") {
            scene.container.splice(i, 1);
            break;
        }
    }
}
function a4_remove_event() {
    canvas.removeEventListener("mousemove", mousemove);
    canvas.removeEventListener("mousedown", mousedown);
    canvas.removeEventListener("mouseup", mouseup);
    canvas.removeEventListener("touchmove", touchmove);
    window.removeEventListener("load", a4_windowresize);
    window.removeEventListener("resize", a4_windowresize);
}
function navigate_to_activity_4() {
    document.getElementById("result-103").innerText = "Click Next";
    const act4 = document.createElement("input");
    act4.type = "button";
    act4.onclick = activity4;
    document.getElementById("a3_panel").appendChild(act4);
    // act4.style.position="absolute";
    // act4.style.left=`80%`;
    // act4.style.top=`20vw`;
    act4.value = "Take Test";
    act4.className = "btn btn-primary";
    act4.style.fontSize = "1.5vw";
    act4.style.margin = "2%";
    act4.style.width = "95%";
    current_msg_i = 0;
}
const add_a3_panel = (canvas, right_position, top_position) => {
    let a3_panel = document.createElement("div");
    a3_panel.id = "a3_panel";
    a3_panel.innerHTML = `
   

    <div style = "margin: 1%; padding: 2% 3%; text-align: center">
    <div style="height: 6vw; background-color:#559fd4; border-radius: 7px;  color: #ffffff; padding: 5% 5px; font-size: 1.1vw; font-weight: 700">
    Description: <span style="color: #ffffff">Drag right side components to complete Assembly</span> 
    </div> 
    </div>

    <div style="text-align: center; padding: 2% 3%">
    <h3 style ="font-size: 1.2vw; color: #559fd4; background-color: #ffffff; border-radius: 7px;  box-shadow: 0px 0px 10px #888888;">Task</h3>
    <div id="a3-question-div-box" style="height: 5vw; background-color: #ffffff; border-radius: 7px;  color: #f9585e; padding: 5% 0; font-size: 1.2vw; font-weight: 700; box-shadow: 0px 0px 8px #888888">
    </div>
    </div>

    <div style = "margin: 1%; padding: 2% 3%; text-align: center">
    <h3 style ="font-size: 1.2vw; background-color: #ffffff; color: #02c707; border-radius: 7px; box-shadow: 0px 0px 10px #888888">Score:  <span id="a3-score-div-box" style="color: #02c707; padding: 1% 0; font-size: 1.3vw;">${global_score}</span></h3>
    </div>

    <div style = "margin: 1%; padding: 2% 3%; text-align: center">
    <h3 style ="font-size: 1.2vw; background-color: #ffffff; color: #62bdf4; border-radius: 7px; box-shadow: 0px 0px 10px #888888">Result/Hint/Messages</h3>
    <div id="a3-result-div-box" style="height: 6vw; background-color:#cee5ed; border-radius: 7px; box-shadow: 0px 0px 10px #888888">
    <input disabled id="guide" style="font-size: 0.8vw; width: 90%; text-align: center; background-color: #ffffff; color: #023047; font-weight: 800; padding: 2px;" value="Perform Task">
    <p id="result-103" style="color: #2b506c; padding: 2% 5px; font-size: 1.2vw; font-weight: 700"></p>
    </div> 
    </div>


    `;
    a3_panel.style.backgroundColor = "white";
    a3_panel.style.position = "absolute";
    a3_panel.style.right = right_position;
    a3_panel.style.top = top_position;
    a3_panel.style.backgroundImage = "linear-gradient(#cee5ed, #80c7f1)";
    a3_panel.style.width = "19%";
    document.getElementById('root').appendChild(a3_panel);
};
//# sourceMappingURL=activity3.js.map