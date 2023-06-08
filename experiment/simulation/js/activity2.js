//------------------new code for activity 2------------------//
var img = document.createElement("img");
img.setAttribute("id", "flow_animations");
var compare_img_one = document.createElement("img");
compare_img_one.id = "comp_flow_1";
compare_img_one.src = "./images/laminar_flow.gif";
var compare_img_two = document.createElement("img");
compare_img_two.id = "comp_flow_2";
compare_img_two.src = "./images/laminar_flow.gif";
var questions = [];
var ques_number = 0;
var changed = true;
var verify = 0;
function activity2() {
    document.getElementById("root").innerHTML = "";
    canvas = document.createElement("canvas");
    canvas.id = "canvas_activity2";
    document.getElementById("root").appendChild(canvas);
    canvas.style.cursor = "crosshair";
    context = canvas.getContext("2d");
    rect = canvas.getBoundingClientRect();
    scene = new Scene();
    panel.style.display = "flex";
    let video = document.createElement('video');
    video.src = './videos/flow_types.mp4';
    video.style.position = "absolute";
    video.style.width = "62%";
    video.style.top = '8%';
    video.style.left = '5%';
    video.setAttribute('loop', "true");
    video.setAttribute('type', 'video/mp4');
    video.muted;
    document.getElementById('root').append(video);
    add_to_content("");
    window.onload = a2_windowresize;
    window.onresize = a2_windowresize;
    a2_windowresize();
    add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%; font-size: 1.6vw !important" 
   onclick="change_first_image();">Start</button>`);
    document.getElementById("description-box").innerHTML = `
    Let's Understand the different
    <span style="color: #018fc3; font-size: 1.6vw;" id="des"> 
    Flow types
    </span>`;
    // load_activity2_images();
}
function change_first_image() {
    add_to_content(`Observe the change in <span class="text-color-blue">Re</span> Value with change in Flow Rate`);
    document.getElementById('screen-button').remove();
    let video = document.getElementsByTagName('video')[0];
    video.play();
    // img.src = './images/laminar_flow.gif';
    while (questions.length < 5) {
        let i = (Math.random() * 13).toFixed(0);
        if (!questions.includes(i)) {
            questions.push(i);
            console.log(i);
        }
    }
    setTimeout(() => {
        add_to_content(`<p style='font-size: 1.7vw'>Click on the Quiz button</p>`);
        add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" onclick="load_question('${activity_2_questions[questions[ques_number]]}', '${questions[ques_number]}');">Quiz</button>`);
    }, 5000);
}
function load_question(question, num) {
    if (document.getElementById('screen-button')) {
        document.getElementById('screen-button').remove();
    }
    if (document.getElementsByTagName('video')[0]) {
        document.getElementsByTagName('video')[0].remove();
    }
    add_to_content(`<p style='font-size: 1.7vw'>Click on the correct option<p>`);
    console.log(num);
    let div = document.createElement('div');
    div.id = "question-container";
    div.innerHTML = `

        <div class="activity2-question">
        ${question}
        </div>


        <div class="activity2-options">
            <div id="act2-op-1"><input type="radio" name="option" id="a2op1"> ${activity_2_options[parseInt(num)][0]}</div>
            <div id="act2-op-2"><input type="radio" name="option" id="a2op2"> ${activity_2_options[parseInt(num)][1]}</div>
            <div id="act2-op-3"><input type="radio" name="option" id="a2op3"> ${activity_2_options[parseInt(num)][2]}</div>
            <div id="act2-op-4"><input type="radio" name="option" id="a2op4"> ${activity_2_options[parseInt(num)][3]}</div>
        </div>

        <div style="text-align: center">
        <button class="btn btn-info" onclick="check_answers_1('${activity_2_answers[parseInt(num)]}');" style="color: white;">Check</button>
        </div>
        `;
    div.style.position = "absolute";
    div.style.width = "62%";
    div.style.top = '8%';
    div.style.left = '5%';
    div.setAttribute('loop', "true");
    document.getElementById('root').appendChild(div);
    // add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" 
    // onclick="change_third_image();">Start</button>`);
}
function check_answers_1(str) {
    if (verify != ques_number) {
        changed = true;
    }
    let op = '';
    let rb1 = document.getElementById('a2op1');
    let rb2 = document.getElementById('a2op2');
    let rb3 = document.getElementById('a2op3');
    let rb4 = document.getElementById('a2op4');
    if (rb1.checked) {
        op = 'a';
    }
    else if (rb2.checked) {
        op = 'b';
    }
    else if (rb3.checked) {
        op = 'c';
    }
    else if (rb4.checked) {
        op = 'd';
    }
    if (str == op) {
        add_to_content(`<p style='font-size: 1.7vw'>You answer is <span class="text-color-blue">Correct</span></p>`);
        if (changed) {
            global_score += 2;
            document.getElementById('ts').innerText = "Score: " + global_score;
            verify = ques_number;
        }
        setTimeout(() => {
            add_to_content('');
            if (ques_number < 4) {
                ques_number++;
                if (document.getElementById('question-container')) {
                    document.getElementById('question-container').remove();
                }
                load_question(activity_2_questions[questions[ques_number]], questions[ques_number]);
            }
            else {
                add_to_content(`<p style='font-size: 1.7vw'>Quiz completed!!</p>`);
                add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" onclick="activity4();">Next Activity</button>`);
            }
        }, 1000);
    }
    else {
        changed = false;
        verify = ques_number;
        add_to_content(`
        <div style='font-size: 1.7vw' class='text-color-purple'>Incorrect!!</div>
        `);
        setTimeout(() => {
            add_to_content('');
        }, 1500);
    }
}
function load_second_question() {
    activity4();
}
// function change_third_image() {
//     document.getElementById('screen-button').remove();
//         img.src = './images/turbulent_flow.gif';
//         add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" 
//         onclick="compare();">Start</button>`);
// }
// function compare() {
//     document.getElementById('screen-button').remove();
//     img.remove();
//     let div1 =  document.createElement("div");
//     let div2 =  document.createElement("div");
//     div1.id = "comp-1";
//     div2.id = "comp-2";
//     let slider_1 = document.createElement("input");
//     slider_1.id = "slider-1";
//     slider_1.onclick = sliding_function_1;
//     //-----------range slider one
//     slider_1.type = "range";
//     slider_1.step = "1";
//     slider_1.min = "0";
//     slider_1.max = "3";
//     let slider_2 = document.createElement("input");
//     slider_2.id = "slider-2";
//     slider_2.onclick = sliding_function_2;
//      //-----------range slider one
//      slider_2.type = "range";
//      slider_2.step = "1";
//      slider_2.min = "0";
//      slider_2.max = "3";
//     div1.appendChild(compare_img_one);
//     div1.appendChild(slider_1);
//     div2.appendChild(compare_img_two);
//     div2.appendChild(slider_2);
//     root.appendChild(div1);
//     root.appendChild(div2);
// }
//window.onresize = a1_windowresize;
function a2_windowresize() {
    //canvas size
    a2_canvas_size();
    //canvas mapping
    a2_canvas_mapping();
    panel.style.height = canvas.height * (1 - 0.04) + "px";
    // img.style.top = 10*lscale + "%";
    scene.draw();
}
function a2_canvas_size() {
    canvas.width = window.innerWidth * 0.97;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.85;
    lscale = canvas.width / 1920.0;
    main.style.height = canvas.height + "px";
}
function a2_canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
//to load the gif image
// function load_activity2_images() {
// img.src = "./images/no_flow.png";
// img.id = "ac2-gif";
// root.appendChild(img);
// }
// function sliding_function_1() {
//     let selector: HTMLInputElement = <HTMLInputElement> document.getElementById("slider-1");
//     if(selector.value == "0") {
//         compare_img_one.src = "./images/no_flow.png";
//     }else if(selector.value == "1") {
//         compare_img_one.src = "./images/laminar_flow.gif";
//     }else if(selector.value == "2") {
//         compare_img_one.src = "./images/transitional_flow.gif";
//     }else if(selector.value == "3") {
//         compare_img_one.src = "./images/turbulent_flow.gif";
//     }
// }
// function sliding_function_2() {
//     let selector: HTMLInputElement = <HTMLInputElement> document.getElementById("slider-2");
//     if(selector.value == "0") {
//         compare_img_two.src = "./images/no_flow.png";
//     }else if(selector.value == "1") {
//         compare_img_two.src = "./images/laminar_flow.gif";
//     }else if(selector.value == "2") {
//         compare_img_two.src = "./images/transitional_flow.gif";
//     }else if(selector.value == "3") {
//         compare_img_two.src = "./images/turbulent_flow.gif";
//     }
// }
//# sourceMappingURL=activity2.js.map