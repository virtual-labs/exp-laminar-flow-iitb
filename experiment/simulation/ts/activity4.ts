var drag=false;
var geo;
var scene1;
var current_msg_i=0;
var green_circle=[];
var all_labels:Chemistry.Text[]=[];
var dx: number;
var dy: number;
var a4_total_score: number = 0;
var allow_labels = false;
var show_sections: boolean = false;
// All Messages

var a5_msg=["Drag the pump to the assembly area","Drag the test section to the assembly area","Drag the horigontal pipe to the assembly area","Drag the glass to the assembly area","Drag the vertical pipe to the assembly area","Drag the heater to the assembly area","Drag the temperature controller to the assembly area","Drag the first inlet cold fluid temperature indicator","Drag the second outlet cold fluid temperature indicator","Drag the first inlet hot fluid temperature indicator","Drag the second outlet hot fluid temperature indicator "];

var obj_names = ['Pump', 'Test', 'Hpipe', 'Glass', 'Vpipe', 'Heater', 'Temp_con', 'Temp_in_cold', 'Temp_out_cold', 'Temp_in_hot', 'Temp_out_hot'];

// All Adjustments

// addj => [{fixed coordinates adjustments, relative movable coordinate adjustments}];

var adj = [
    [{x: 0, y: 0}, {x: 0, y: 0}],
	[{x: 271, y: 100},   { x: 100, y: -50 }],
	[{x: 196, y: 215},{ x: -10, y: -210 }],
	[{x: 218, y: 633},  { x: -160, y: -8 } ],
	[{x: 551, y: 620}, { x: 15, y: 95 }],
	[{x: 551, y: 405},{ x: 15, y: 90 }],
	[{x: 620, y: 155}, { x: -78, y: -5 }],
	//[{x: 641, y: 260},{ x: -50, y: -20 }],
    [{x: 564, y: 155},{ x: -50, y: -20 }],
	[{x: 301, y: 305}, { x: 2, y: -34 }],
	[{x: 120, y: 517}, { x: 0, y: -32 } ],
	[{x: 209, y: 243}, { x: -45, y: -2 }],
	[{x: 196, y: 610},{ x: -55, y: 0 }]
];

// hint box vertical or horizontal

var hint_orientation = [
    "v","v","h","h","h","h","h","h","h","h","v"
]


var fixed_hint: Chemistry.Rectangle;
var movable_hint: Chemistry.Rectangle;




function activity4(){

    document.getElementById("root").innerHTML="";
    canvas=<HTMLCanvasElement>document.createElement("canvas");
    canvas.id="canvas_activity1";
    green_circle=[];
    document.getElementById("root").appendChild(canvas);
    canvas.style.cursor="crosshair";
    context=canvas.getContext("2d");

    if(document.getElementById('screen-button')) {
        document.getElementById('screen-button').remove();
    }

    rect=canvas.getBoundingClientRect();
    // scene= new Scene();
    // scene1= new Scene();

    //add_a4_panel(canvas, `${rect.x + canvas.width - 300}px`, `${rect.y}px`);
    panel.style.display = "flex";
    panel.style.width = "22%";


    // //section names

    // let left_section = document.createElement("div");
    // left_section.innerText = "Assembly Area";
    // left_section.setAttribute("class", "assembly-area");


    // let right_section = document.createElement("div");
    // right_section.innerText = "Component Library";
    // right_section.setAttribute("class", "component-library");


    // root.appendChild(left_section);
    // root.appendChild(right_section);

    // window.onload=a5_windowresize;
    // window.onresize=a5_windowresize;

    
    // fixed_container1();
    // a5_draw_all_components();

    scene = new Scene();

    let full_assembly = new Chemistry.Custome_image(seq0_img, new Chemistry.Point(750, 450), 872.6, 800, canvas);

    scene.add(full_assembly);

    scene.draw();


    window.onload=a5_windowresize;
    window.onresize=a5_windowresize;


    

    // document.getElementById("description-box").innerText = "Assemble the experimental setup. The assembled set up will be used to carry out the experimentation to study the heat transfer coefficient, in a double-pipe heat exchanger with, parallel configuration under the Laminar Flow.";
    document.getElementById("description-box").innerText = "Figure shows the experimental setup. The assembled set up will be used to carry out the experimentation to study the heat transfer coefficient, in a double-pipe heat exchanger with, parallel configuration under the Laminar Flow.";
    document.getElementById("description-box").style.textAlign = "justify";
    document.getElementById("description-box").style.fontSize = "1.2vw";

    add_to_content(`Observe the assembly.
    Next task is to <span class="text-color-blue">Assemble it yourself.<span>
    `);
    document.getElementById("question-div-box").style.fontSize = "1.1vw"

    document.getElementById("ts").style.display = "none";

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-info");
    btn.innerText = "Next";
    btn.setAttribute("id", "a4-btn");
    btn.onclick = a4_first;

    document.getElementById("panel-bottom").appendChild(btn);

    a5_windowresize();

    

}


function load_new_scene() {

    scene= new Scene();
    scene1= new Scene();

    //add_a4_panel(canvas, `${rect.x + canvas.width - 300}px`, `${rect.y}px`);
    

    //section names

    let left_section = document.createElement("div");
    left_section.innerText = "Assembly Area";
    left_section.setAttribute("class", "assembly-area");


    let right_section = document.createElement("div");
    right_section.innerText = "Component Library";
    right_section.setAttribute("class", "component-library");


    root.appendChild(left_section);
    root.appendChild(right_section);


    
    fixed_container1();
    a5_draw_all_components();
}


function a4_first() {

    show_sections = true;
    load_new_scene();
    a5_windowresize();

    document.getElementById("description-box").innerText = "Assemble the experimental setup. The assembled set up will be used to carry out the experimentation to study the heat transfer coefficient, in a double-pipe heat exchanger with, parallel configuration under the Laminar Flow.";

    add_to_content(`Drag and assemble the components from the Component Library to the Assembly Area. Click <span class="text-color-blue" >Start</span> to assemble.`);
    document.getElementById("a4-btn").remove();
    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-info");
    btn.innerText = "Start";
    btn.setAttribute("id", "a4-btn");
    btn.onclick = a4_second;

    document.getElementById("panel-bottom").appendChild(btn);
}

function a4_second() {
    
    document.getElementById("a4-btn").remove();
    canvas.addEventListener("mousemove",mousemove1);
    canvas.addEventListener("mousedown",mousedown1);
    canvas.addEventListener("mouseup",mouseup1);
    canvas.addEventListener("touchmove",touchmove1);

    allow_labels = true;
    // fixed_container1();
    // a5_draw_all_components();

    
    
    current_msg_i=0;
    all_labels=[];
    drag=false;
    geo="Drag";
    
    a5_display_msg();
    create_labels();
    display_labels();

    document.getElementById("ts").style.display = "block";


    
}

function a5_windowresize(){

    canvas_box_scale = 1.1;

    
    //canvas size
    a5_canvas_size();
    //canvas mapping
    a5_canvas_mapping();
    //draw border or rectangle

    panel.style.height = canvas.height*(1-0.04) + "px";

    scene.draw();

    if(show_sections) {
        scene1.draw();
        scene.draw();

         // line to devide canvas in two sections

        context.beginPath();
        context.moveTo(canvas.width/2.25, 25*lscale);
        context.lineTo(canvas.width/2.25, canvas.height-10*lscale);
        context.stroke();

        create_labels();

    }


    
    // let show_score = new Chemistry.Text(`Score: ${a4_total_score}/11`, new Chemistry.Point(50, 650), canvas);
    // show_score.color = "yellow";
    // show_score.draw();

    

   
    
    if(allow_labels) {
        a5_display_msg();
        display_labels();
    }
}


function a5_canvas_size(){
    canvas.width=window.innerWidth*0.97;
    canvas.height=canvas.width*1080.0/1920*0.85;
    lscale=canvas.width/1920.0;

}

function a5_canvas_mapping(){
    context.translate(0,canvas.height);
    context.scale(1,-1);
}


function mousemove1(e:MouseEvent){
    if(drag && geo=="Drag"){
        let x=Math.round((e.clientX-rect.x)/lscale);
        let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
        // m1.value=`${x},${y}`;
        console.log(x,y);
        
        drag_geo1(x,y);
        display_labels();
        
        
    }
 
}

function mousedown1(e:MouseEvent){
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
   
    drag=true;
    console.log(x, y);
    
}

function mouseup1(e:MouseEvent){
    
    drag=false;
}

function touchmove1(e:TouchEvent){
    if(geo=="Drag"){
        let x=Math.round((e.touches[0].clientX-rect.x)/lscale);
        let y=Math.round((canvas.height- (e.touches[0].clientY-rect.y))/lscale);
        drag_geo1(x,y);
        display_labels();
    }
}

function a5_draw_all_components(){
    var sq=new Chemistry.Custome_image(tank_img,new Chemistry.Point(475,175),382,287,canvas);
    sq.name="Tank";
    sq.lock();
    scene.add(sq);
    var sq=new Chemistry.Custome_image(pump_img,new Chemistry.Point(1000,670),207,146,canvas);
    sq.name="Pump";
    scene.add(sq);
    var sq=new Chemistry.Custome_image(test_img,new Chemistry.Point(1010,240),320,419,canvas);
    sq.name="Test";
    scene.add(sq);
    var sq=new Chemistry.Custome_image(pipe_h_img,new Chemistry.Point(1190,775),351,63,canvas);
    sq.name="Hpipe";
    scene.add(sq);
    var sq=new Chemistry.Custome_image(glass_img,new Chemistry.Point(1230,300),71,215,canvas);
    sq.name="Glass";
    scene.add(sq);
    var sq=new Chemistry.Custome_image(pipe_v_img,new Chemistry.Point(1190,600),50,195,canvas);
    sq.name="Vpipe";
    scene.add(sq); 
    var sq=new Chemistry.Custome_image(heater_img,new Chemistry.Point(1000,500),204,40,canvas);
    sq.name="Heater";
    scene.add(sq);
    var sq=new Chemistry.Custome_image(temp_con_img,new Chemistry.Point(1355,630),183,179,canvas);
    sq.name="Temp_con";
    scene.add(sq);
    var sq=new Chemistry.Custome_image(temp_cold_in_img,new Chemistry.Point(1370,240),98,93,canvas);
    sq.name="Temp_in_cold";
    scene.add(sq);
    var sq=new Chemistry.Custome_image(temp_cold_out_img,new Chemistry.Point(1370,100),98,93,canvas);
    sq.name="Temp_out_cold";
    scene.add(sq);
    var sq=new Chemistry.Custome_image(temp_hot_in_img,new Chemistry.Point(1360,450),130,62,canvas);
    sq.name="Temp_in_hot";
    scene.add(sq);
    var sq=new Chemistry.Custome_image(temp_hot_out_img,new Chemistry.Point(1360,350),130,62,canvas);
    sq.name="Temp_out_hot";
    scene.add(sq);
}

var repeat = 0;

function drag_geo1(x:number,y:number){

    for(let i=0;i<scene.container.length;i++){
        if(scene.container[i].geo.isinside(new Chemistry.Point(x,y)) && scene.container[i].geo.draggable ){
            scene.container[i].geo.stpt=new Chemistry.Point(x,y);
            console.log(i);

            //drawing the rectangle hint boxes
            if(i>5) { 

                movable_hint = new Chemistry.Rectangle(12, 30, new Chemistry.Point(x + adj[i+1][1].x, y + adj[i+1][1].y), canvas);
                fixed_hint = new Chemistry.Rectangle(12, 30, new Chemistry.Point(adj[i+1][0].x, adj[i+1][0].y), canvas);
                if(hint_orientation[i] == "h") {
                    movable_hint.angle = 90;
                    fixed_hint.angle = 90;
                }
                
            } else {
                movable_hint = new Chemistry.Rectangle(12, 30, new Chemistry.Point(x + adj[i][1].x, y + adj[i][1].y), canvas);
                fixed_hint = new Chemistry.Rectangle(12, 30, new Chemistry.Point(adj[i][0].x, adj[i][0].y), canvas);
                if(hint_orientation[i] == "h") {
                    movable_hint.angle = 90;
                    fixed_hint.angle = 90;
                }
            }
           
            
            assemble1(scene.container[i].geo);
            scene.draw();


            // line to devide canvas in two sections

            context.beginPath();
            context.moveTo(canvas.width/2.25, 25*lscale);
            context.lineTo(canvas.width/2.25, canvas.height-10*lscale);
            context.stroke();
             
            a5_display_msg();

        

            if(movable_hint) {
                movable_hint.draw();
                fixed_hint.draw();
                
            }
            // let show_score = new Chemistry.Text(`Score: ${a4_total_score}/11`, new Chemistry.Point(50, 650), canvas);
            // show_score.color = "yellow";
            // show_score.draw();
            break;
           
        }
        // let show_score = new Chemistry.Text(`Score: ${a4_total_score}/11`, new Chemistry.Point(50, 650), canvas);
        // show_score.color = "yellow";
        // show_score.draw();
        
        // line to devide canvas in two sections

        context.beginPath();
        context.moveTo(canvas.width/2.25, 25*lscale);
        context.lineTo(canvas.width/2.25, canvas.height-10*lscale);
        context.stroke();

        
    }

    
}

function assemble1(obj:Chemistry.Geometry){
    for(let i=0;i<scene1.container.length;i++){
        if(scene1.container[i].geo.isinside(new Chemistry.Point(obj.stpt.x,obj.stpt.y)) && scene1.container[i].geo.name==obj.name && obj.name == obj_names[current_msg_i]){
            obj.stpt=scene1.container[i].geo.stpt;
            obj.lock();
            //on lock set hints null
            fixed_hint = null;
            movable_hint = null;
            if(obj.name == obj_names[current_msg_i]) {
                a4_total_score++;
                global_score++; 
                //document.getElementById("a4-score-div-box").innerText = `${global_score}`; 
            }
            console.log(obj.name, obj_names[current_msg_i]);
            
            current_msg_i++;
            
            all_labels.splice(0,1);
            //if heater remove heater and change tank image
            if(obj.name=="Heater"){
                change_tank_image1();
                adj[7][0].x = 645;
                adj[7][0].y = 262;
            }

            if(current_msg_i == 11) {
                create_activity_5_button();
            }

            break;
        }
    }

}

function fixed_container1(){
    let c1=new Chemistry.Geometry();
    c1.stpt=new Chemistry.Point(181,149);
    c1.name="Pump";
    scene1.add(c1);
    
    
    let c2=new Chemistry.Geometry();
    c2.stpt=new Chemistry.Point(216,430);
    c2.name="Test"
    scene1.add(c2);
    

    let c3=new Chemistry.Geometry();
    c3.stpt=new Chemistry.Point(356,650);
    c3.name="Hpipe"
    scene1.add(c3);
    

    let c4=new Chemistry.Geometry();
    c4.stpt=new Chemistry.Point(521,511);
    c4.name="Glass"
    scene1.add(c4);
    

    let c5=new Chemistry.Geometry();
    c5.stpt=new Chemistry.Point(521,306);
    c5.name="Vpipe"
    scene1.add(c5);
   

    let c6=new Chemistry.Geometry();
    c6.stpt=new Chemistry.Point(598,153);
    c6.name="Heater"
    scene1.add(c6);
   

    let c7=new Chemistry.Geometry();
    c7.stpt=new Chemistry.Point(655,231);
    c7.name="Temp_con"
    scene1.add(c7);
    

    let c8=new Chemistry.Geometry();
    c8.stpt=new Chemistry.Point(285,337);
    c8.name="Temp_in_cold"
    scene1.add(c8);
   

    let c9=new Chemistry.Geometry();
    c9.stpt=new Chemistry.Point(96,549);
    c9.name="Temp_out_cold"
    scene1.add(c9);
   

    let c10=new Chemistry.Geometry();
    c10.stpt=new Chemistry.Point(240,240);
    c10.name="Temp_in_hot"
    scene1.add(c10);
    

    let c11=new Chemistry.Geometry();
    c11.stpt=new Chemistry.Point(240,613);
    c11.name="Temp_out_hot"
    scene1.add(c11);
   
    
}


function a5_display_msg(){
    if(current_msg_i>=a5_msg.length){
        //activity4 completed
        a5_remove_event();

    }
    else{
        
        add_to_content(a5_msg[current_msg_i]);
       
    }    
}

function change_tank_image1(){
    
    for(let i=0;i<scene.container.length;i++){
        if(scene.container[i].geo.name=="Tank"){
            scene.container[i].geo.img=tank2_img;
            scene.container[i].geo.dx=411;
            scene.container[i].geo.dy=287;
            scene.container[i].geo.stpt.x+=14.5;
            break;
        }
    }
    for(let i=0;i<scene.container.length;i++){
        if(scene.container[i].geo.name=="Heater"){
            scene.container.splice(i,1);
            break;
        }
    }
}


function a5_remove_event(){
    canvas.removeEventListener("mousemove",mousemove);
    canvas.removeEventListener("mousedown",mousedown);
    canvas.removeEventListener("mouseup",mouseup);
    canvas.removeEventListener("touchmove",touchmove);
    window.removeEventListener("load",a5_windowresize);
    window.removeEventListener("resize",a5_windowresize);
    
}

function create_activity_5_button() {
    console.log("created");
    
    let a5_btn = document.createElement('button');
    a5_btn.setAttribute("class", "btn btn-info");
    a5_btn.id = "a5_last_button";
    a5_btn.onclick = activity5;
    a5_btn.innerText = "Activity 5";
    a5_btn.style.fontSize = "1.5vw";
    a5_btn.style.margin = "2%";
    a5_btn.style.width = "95%";
    // a5_btn.style.position = "absolute";
    // a5_btn.style.top = `${rect.y + canvas.height - 100}px`
    // a5_btn.style.left = `${rect.x + canvas.width - 150}px`;
   // document.getElementById("a4_panel").appendChild(a5_btn);

   document.getElementById("panel-bottom").appendChild(a5_btn);
}




























