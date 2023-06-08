var canvas;
var context;
var rect;
var lscale;
var scene;
var question = [];
var arrayofrandquestion = [];
var current_question;
var current_hint = 1;
var total_score = 0;
var current_score = 3;
var global_score = 0;
var a1_panel;
var all_text_content = document.getElementById("div");
var canvas_box_scale = 1;
var highlighted_images = [];
var a1_labels = [];
var a1_scene;
var a1_index = [];
var start_button = document.createElement("input");
start_button.type = "button";
start_button.onclick = activity1;
document.getElementById("root").appendChild(start_button);
start_button.style.position = "absolute";
start_button.style.left = `${window.innerWidth / 2}px`;
start_button.style.top = `${25}px`;
start_button.value = "Start Simulation";
start_button.className = "btn btn-primary";
var guide;
main.style.height = "650px";
window.addEventListener('load', () => {
    main.style.width = (window.innerWidth * 0.97).toString() + "px";
    main.style.height = ((parseInt(main.style.width.split("px")[0])) * (1080 / 1920) * 0.85).toString() + "px";
});
window.addEventListener("resize", () => {
    main.style.width = (window.innerWidth * 0.97).toString() + "px";
    main.style.height = ((parseInt(main.style.width.split("px")[0])) * (1080 / 1920) * 0.85).toString() + "px";
});
function activity1() {
    document.getElementById("root").innerHTML = "";
    canvas = document.createElement("canvas");
    canvas.id = "canvas_activity1";
    document.getElementById("root").appendChild(canvas);
    canvas.style.cursor = "crosshair";
    context = canvas.getContext("2d");
    rect = canvas.getBoundingClientRect();
    scene = new Scene();
    a1_scene = new Scene();
    panel.style.display = "flex";
    guide = document.getElementById("guide");
    window.onload = a1_windowresize;
    window.onresize = a1_windowresize;
    a1_windowresize();
    //canvas.addEventListener('click',a1_mouseclick);
    a1_draw_all_components();
    // a1_draw_all_components();
    // a1_load_questions();
    // a1_random_questions();
    // a1_display_current_question();
    window.addEventListener("resize", a1_display_current_question);
    add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" onclick="(() =>{
    document.getElementById('screen-button').remove();
    canvas.addEventListener('click',a1_mouseclick);
    
     a1_load_questions();
     a1_random_questions();
     a1_display_current_question();})();
   ">Start</button>`);
    load_higlighted_images();
}
function load_a1() {
    //add_a1_panel(canvas, `${rect.x + canvas.width - 300}px`, `${rect.y}px`);
    //guide = <HTMLInputElement> document.getElementById("guide");
    window.onload = a1_windowresize;
    window.onresize = a1_windowresize;
    canvas.addEventListener('click', a1_mouseclick);
    a1_windowresize();
    a1_draw_all_components();
    a1_load_questions();
    a1_random_questions();
    a1_display_current_question();
    window.addEventListener("resize", a1_display_current_question);
}
//window.onresize = a1_windowresize;
function a1_windowresize() {
    //canvas size
    a1_canvas_size();
    //canvas mapping
    a1_canvas_mapping();
    //panel sizing
    // let a1_panel = document.getElementById("a1_panel");
    // a1_panel.style.right = `${rect.x + canvas.width - 1830*lscale}px`;
    // a1_panel.style.top = `${rect.y + 10}px`;
    // a1_panel.style.height = `${canvas.height - 20}px`;
    panel.style.height = canvas.height * (1 - 0.04) + "px";
    // guide sizing
    //guide.style.top = `${rect.y + 5*lscale}px`;
    scene.draw();
    for (let j = 0; j < a1_index.length; j++) {
        a1_labels[a1_index[j]].draw();
    }
}
function a1_canvas_size() {
    canvas.width = window.innerWidth * 0.97;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.85;
    lscale = canvas.width / 1920.0;
    main.style.height = canvas.height + "px";
}
function a1_canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
function a1_mouseclick(e) {
    let x = Math.round((e.clientX - rect.x) / lscale);
    let y = Math.round((canvas.height - (e.clientY - rect.y)) / lscale);
    a1_check_isinside(x, y);
}
function a1_draw_all_components() {
    var sq = new Chemistry.Custome_image(tank_img, new Chemistry.Point(530, 230), 500, 375.66, canvas);
    sq.name = "Tank";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(pump_img, new Chemistry.Point(1050, 170), 350, 246.86, canvas);
    sq.name = "Pump";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(test_img, new Chemistry.Point(1080, 600), 420, 550, canvas);
    sq.name = "Test";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(pipe_h_img, new Chemistry.Point(280, 800), 450, 80.775, canvas);
    sq.name = "Hpipe";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(pipe_v_img, new Chemistry.Point(150, 220), 100, 314, canvas);
    sq.name = "Vpipe";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(glass_img, new Chemistry.Point(230, 580), 100, 302.8, canvas);
    sq.name = "Glass";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(heater_img, new Chemistry.Point(700, 450), 350, 68.6, canvas);
    sq.name = "Heater";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(temp_con_img, new Chemistry.Point(700, 700), 320, 313.6, canvas);
    sq.name = "Temp_con";
    scene.add(sq);
    var sq = new Chemistry.Custome_image(temp_cold_in_img, new Chemistry.Point(450, 550), 150, 161.25, canvas);
    sq.name = "Temp_in_cold";
    scene.add(sq);
}
function load_higlighted_images() {
    //tank
    //pump
    //test
    //hpipe
    //vpipe
    //glass
    //heater
    //temp_con
    //tin_cold
    highlighted_images = [
        [correct_tank, incorrect_tank],
        [correct_pump, incorrect_pump],
        [correct_test, incorrect_test],
        [correct_hpipe, incorrect_hpipe],
        [correct_vpipe, incorrect_vpipe],
        [correct_glass, incorrect_glass],
        [correct_heater, incorrect_heater],
        [correct_tcon, incorrect_tcon],
        [correct_tin_cold, incorrect_tin_cold]
    ];
    a1_labels = [
        new Chemistry.Text("Tank", new Chemistry.Point(400, 80), canvas),
        new Chemistry.Text("Pump", new Chemistry.Point(900, 200), canvas),
        new Chemistry.Text("Test Section", new Chemistry.Point(1100, 600), canvas),
        new Chemistry.Text("Horizontal Pipe", new Chemistry.Point(200, 850), canvas),
        new Chemistry.Text("Vertical Pipe", new Chemistry.Point(100, 40), canvas),
        new Chemistry.Text("Glass Section", new Chemistry.Point(80, 500), canvas),
        new Chemistry.Text("Heater", new Chemistry.Point(650, 490), canvas),
        new Chemistry.Text("Temp. Controller", new Chemistry.Point(700, 850), canvas),
        new Chemistry.Text("Temp. Indiciator", new Chemistry.Point(380, 650), canvas),
    ];
}
function a1_load_questions() { }
{
    question = [];
    question.push({ srno: 1, question: "Select <span style='color: #018fc3'>Pump</span>", ans: "Pump", hint: ["Has Suction and Discharge", "Has valve attached", "Triangular Base"] });
    question.push({ srno: 2, question: "Select <span style='color: #018fc3'> Tank </span>", ans: "Tank", hint: ["Rectangular", "Mounted Vertically", "Has valves attached"] });
    question.push({ srno: 3, question: "Select <span style='color: #018fc3'> Glass Section </span>", ans: "Glass", hint: ["Rectangular", "Mounted Vertically", "Has valves attached"] });
    question.push({ srno: 4, question: "Select <span style='color: #018fc3'>Test Section</span>", ans: "Test", hint: ["Double Pipe", "pipe inside a pipe", "Has two inlets and outlets"] });
    question.push({ srno: 5, question: "Select <span style='color: #018fc3'>Heater </span>", ans: "Heater", hint: ["U-Shape", "Mounted horizontally", "Has two pins"] });
    question.push({ srno: 6, question: "Select <span style='color: #018fc3'> Temperature Controller </span>", ans: "Temp_con", hint: ["Rectangular box with sensor", "Display SET T", "Has two wires protruding down"] });
    question.push({ srno: 7, question: "Select <span style='color: #018fc3'> Temperature Indicator </span>", ans: "Temp_in_cold", hint: ["Rectnagular box with sensor", "Horizontal", ""] });
    question.push({ srno: 8, question: "Select <span style='color: #018fc3'> Verticle Pipe </span>", ans: "Vpipe", hint: ["Mounted Vertically", "Mounted Vertically", "Mounted Vertically"] });
    question.push({ srno: 9, question: "Select <span style='color: #018fc3'> Horizontal Pipe </span>", ans: "Hpipe", hint: ["Mounted Horizontally", "Mounted Horizontally", "Mounted Horizontally"] });
}
function a1_random_questions() {
    arrayofrandquestion = [];
    while (true) {
        let no = Math.round(Math.random() * (question.length - 1) + 1);
        let found = false;
        for (let i = 0; i < arrayofrandquestion.length; i++) {
            if (arrayofrandquestion[i] == no) {
                found = true;
                break;
            }
        }
        if (!found) {
            arrayofrandquestion.push(no);
        }
        if (arrayofrandquestion.length >= 9) {
            break;
        }
    }
    current_question = 1;
    current_hint = 1;
}
var text;
var ans;
var question_text;
// var display_result;
var display_result;
var display_score;
var timer1;
var current_index;
function a1_display_current_question() {
    document.getElementById("score-div-box").innerText = total_score.toString();
    for (let i = 0; i < question.length; i++) {
        if (arrayofrandquestion[current_question - 1] == question[i].srno) {
            text = question[i].question;
            ans = question[i].ans;
            current_index = i;
            break;
        }
    }
    scene.draw();
    for (let j = 0; j < a1_index.length; j++) {
        a1_labels[a1_index[j]].draw();
    }
    question_text = new Chemistry.Text(text, new Chemistry.Point(1100, 520), canvas);
    question_text.color = "white";
    // question_text.draw();
    display_score = new Chemistry.Text(`Score: ${total_score}/27`, new Chemistry.Point(1650, 620), canvas);
    display_score.color = "yellow";
    // display_score.draw();
    // display question and score on panel
    //document.getElementById("a1-question-div-box").innerText = text;
    add_to_content(text);
}
function a1_check_isinside(x, y) {
    let found = 0;
    for (let i = 0; i < scene.container.length; i++) {
        if (scene.container[i].geo.isinside(new Chemistry.Point(x, y))) {
            if (scene.container[i].geo.name == ans) {
                found = 1;
                let original_image = scene.container[i].geo.img;
                scene.container[i].geo.img = highlighted_images[i][0];
                scene.draw();
                a1_index.push(i);
                setTimeout(() => {
                    scene.container[i].geo.img = original_image;
                    scene.draw();
                    for (let j = 0; j < a1_index.length; j++) {
                        a1_labels[a1_index[j]].draw();
                    }
                }, 1000);
                break;
            }
            else {
                found = 2;
                let original_image = scene.container[i].geo.img;
                scene.container[i].geo.img = highlighted_images[i][1];
                scene.draw();
                setTimeout(() => {
                    scene.container[i].geo.img = original_image;
                    scene.draw();
                    for (let j = 0; j < a1_index.length; j++) {
                        a1_labels[a1_index[j]].draw();
                    }
                }, 1000);
            }
        }
    }
    if (found == 1) {
        display_result = new Chemistry.Text("Bingo! it is correct", new Chemistry.Point(1100, 450), canvas);
        display_result.color = "yellow";
        display_result.font = "24px";
        //display_result.draw();
        if (current_question <= question.length) {
            current_question++;
            current_hint = 1;
            total_score += current_score;
            current_score = 3;
            global_score = total_score;
        }
        // if(current_question == question.length) {
        //     current_question++;
        // }
        timer1 = setTimeout(a1_change_question, 2000);
        //document.getElementById("result-101").innerText = "Correct!";
        add_to_content("Great!! <div> That is <span class='text-color-blue'>Correct<span></div>");
        // setTimeout(() => {
        // }, 1000);
    }
    else if (found == 2) {
        console.log(current_hint);
        //display_result=new Chemistry.Text("Try again. Hint:"+question[current_index].hint[current_hint-1],new Chemistry.Point(1100,450),canvas);
        document.getElementById("question-div-box").innerHTML = `
        <div class='text-color-purple'>Thats not a ${ans}</div>
        <div>Try Again!!</div>
        <div>Hint: <span class="text-color-blue">${question[current_index].hint[current_hint - 1]}</span></div>
        `;
        // document.getElementById("result-101").innerText = "Try again. Hint:"+question[current_index].hint[current_hint-1];
        if (current_hint < 3) {
            current_score = 3 - current_hint;
            current_hint++;
        }
        display_result.color = "white";
        display_result.font = "15px";
        //display_result.draw();
        timer1 = setTimeout(a1_change_question, 2000);
    }
}
function a1_change_question() {
    if (current_question > 9) {
        scene.draw();
        for (let j = 0; j < a1_index.length; j++) {
            a1_labels[a1_index[j]].draw();
        }
        document.getElementById("score-div-box").innerText = total_score.toString();
        // question_text=new Chemistry.Text("Activity 1 Completed",new Chemistry.Point(1100,520),canvas);
        // question_text.color="White";
        // question_text.draw();
        // display_result=new Chemistry.Text(`You Scored ${total_score}/27`,new Chemistry.Point(1100,450),canvas)
        // display_result.color="Green";
        // display_result.draw();
        global_score = total_score;
        const act2 = document.createElement("input");
        act2.type = "button";
        act2.onclick = activity2;
        //document.getElementById("root").appendChild(act2);
        act2.value = "Next";
        act2.className = "btn btn-success";
        act2.style.fontSize = "1.0vw";
        // guide.value  = "Click Next Button";
        //document.getElementById("question-div-box").innerText = "";
        add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" onclick="(() =>{
            document.getElementById('screen-button').remove();
            canvas.removeEventListener('click',a1_mouseclick);
            activity2();})();">Next</button>`);
        //document.getElementById("question-div-box").appendChild(act2);
        window.removeEventListener("resize", a1_display_current_question);
        //clearInterval(timer1);
    }
    else {
        a1_display_current_question();
        //clearInterval(timer1);
        // for(let j = 0; j<a1_index.length; j++) {
        //     a1_labels[a1_index[j]].draw();
        // }
    }
}
function display_message(text) {
    guide.disabled = false;
    guide.value = text;
    guide.disabled = true;
}
function add_to_content(text) {
    let div = document.getElementById("question-div-box");
    div.innerHTML = text;
}
function disable_score() {
    let div = document.getElementById("ts");
    div.style.display = "none";
}
function add_button(text) {
    //let div = document.createElement('button');
    let div1 = document.getElementById("panel-bottom");
    let temp = div1.innerHTML;
    div1.innerHTML = text;
    div1.innerHTML += temp;
}
//# sourceMappingURL=activity1.js.map