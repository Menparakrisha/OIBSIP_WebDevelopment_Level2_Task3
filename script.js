function addTask(){

    let title =
    document.getElementById("title").value;

    let description =
    document.getElementById("description").value;

    if(title === "" || description === ""){

        alert("Please fill out this field.");

        return;
    }

    let taskList =
    document.getElementById("taskList");

    let task =
    document.createElement("div");

    task.classList.add("task");

    task.innerHTML = `

        <div>${title}</div>

        <div>${description}</div>

        <div>
            <button class="delete-btn">
                X
            </button>
        </div>
    `;

    // Delete Button

    task.querySelector(".delete-btn")
    .addEventListener("click",function(){

        task.remove();

    });

    taskList.appendChild(task);

    // Clear Inputs

    document.getElementById("title").value = "";

    document.getElementById("description").value = "";
}