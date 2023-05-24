//------------------new code for activity 2------------------//
var img = document.createElement("img");
img.setAttribute("id", "flow_animations");
var compare_img_one = document.createElement("img");
compare_img_one.id = "comp_flow_1";
compare_img_one.src = "./images/laminar_flow.gif";
var compare_img_two = document.createElement("img");
compare_img_two.id = "comp_flow_2";
compare_img_two.src = "./images/laminar_flow.gif";
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
    load_activity2_images();
}
function change_first_image() {
    document.getElementById('screen-button').remove();
    img.src = './images/laminar_flow.gif';
    setTimeout(() => {
        add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" onclick="change_second_image();">Next</button>`);
    }, 7500);
}
function change_second_image() {
    document.getElementById('screen-button').remove();
    img.src = './images/transitional_flow.gif';
    add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" 
        onclick="change_third_image();">Start</button>`);
}
function change_third_image() {
    document.getElementById('screen-button').remove();
    img.src = './images/turbulent_flow.gif';
    add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" 
        onclick="compare();">Start</button>`);
}
function compare() {
    document.getElementById('screen-button').remove();
    img.remove();
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.id = "comp-1";
    div2.id = "comp-2";
    let slider_1 = document.createElement("input");
    slider_1.id = "slider-1";
    slider_1.onclick = sliding_function_1;
    //-----------range slider one
    slider_1.type = "range";
    slider_1.step = "1";
    slider_1.min = "0";
    slider_1.max = "3";
    let slider_2 = document.createElement("input");
    slider_2.id = "slider-2";
    slider_2.onclick = sliding_function_2;
    //-----------range slider one
    slider_2.type = "range";
    slider_2.step = "1";
    slider_2.min = "0";
    slider_2.max = "3";
    div1.appendChild(compare_img_one);
    div1.appendChild(slider_1);
    div2.appendChild(compare_img_two);
    div2.appendChild(slider_2);
    root.appendChild(div1);
    root.appendChild(div2);
}
//window.onresize = a1_windowresize;
function a2_windowresize() {
    //canvas size
    a2_canvas_size();
    //canvas mapping
    a2_canvas_mapping();
    panel.style.height = canvas.height * (1 - 0.04) + "px";
    img.style.top = 10 * lscale + "%";
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
function load_activity2_images() {
    img.src = "./images/no_flow.png";
    img.id = "ac2-gif";
    root.appendChild(img);
}
function sliding_function_1() {
    let selector = document.getElementById("slider-1");
    if (selector.value == "0") {
        compare_img_one.src = "./images/no_flow.png";
    }
    else if (selector.value == "1") {
        compare_img_one.src = "./images/laminar_flow.gif";
    }
    else if (selector.value == "2") {
        compare_img_one.src = "./images/transitional_flow.gif";
    }
    else if (selector.value == "3") {
        compare_img_one.src = "./images/turbulent_flow.gif";
    }
}
function sliding_function_2() {
    let selector = document.getElementById("slider-2");
    if (selector.value == "0") {
        compare_img_two.src = "./images/no_flow.png";
    }
    else if (selector.value == "1") {
        compare_img_two.src = "./images/laminar_flow.gif";
    }
    else if (selector.value == "2") {
        compare_img_two.src = "./images/transitional_flow.gif";
    }
    else if (selector.value == "3") {
        compare_img_two.src = "./images/turbulent_flow.gif";
    }
}
//# sourceMappingURL=activity2.js.map