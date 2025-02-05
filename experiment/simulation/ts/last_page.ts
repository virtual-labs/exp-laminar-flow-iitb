function last_page() {
    // new_task("");
    // new_message("Completed")
    // new_score(global_score);
    root.innerHTML = "";
    root.style.backgroundColor = "#C2CBCD";

    root.innerHTML = `
    <h2 style="padding: 15px; text-align: center; background-color: #023047; color: white;">Your Total Score</h2>

    <br><br>

    <div style= "color: #023047; text-align: center; font-size: 1.5vw; font-weight: 700; padding: 5vw 0;">
    ${global_score} / 104
    </div>

`
}
