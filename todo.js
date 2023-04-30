/* Get Elements */
const form = document.getElementById("form");
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");


/* Add Tasks to My Tasks ---> pendingTasks */

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = titleInput.value;
    const description = descriptionInput.value;

    if (title !== "" && description !== "") {
        const liEl = document.createElement("li");
        const listContainerEl = document.createElement("div");
        listContainerEl.classList.add("listitemcard");
        liEl.appendChild(listContainerEl);
        liEl.classList.add("col-12");
        pendingList.appendChild(liEl);

        const date = new Date().toLocaleString();

        const paraEl = document.createElement("p");
        paraEl.classList.add("paragraph");
        paraEl.textContent = title + "   ";
        listContainerEl.appendChild(paraEl);

        const descriptionEl = document.createElement("p");
        descriptionEl.classList.add("paragraph");
        descriptionEl.textContent = description;
        listContainerEl.appendChild(descriptionEl);


        const deleteBtnEl = document.createElement("button");
        deleteBtnEl.classList.add("far", "fa-trash-alt", "delete-icon");
        // listContainerEl.appendChild(deleteBtnEl);

        const completeBtnEl = document.createElement("button");
        completeBtnEl.classList.add("completebutton");
        completeBtnEl.textContent = "Complete";
        listContainerEl.appendChild(completeBtnEl);

        /*  Delete button function*/
        deleteBtnEl.onclick = function() {
            listContainerEl.remove();
        };

        /*  Complete button function*/
        completeBtnEl.addEventListener("click", function() {
            listContainerEl.classList.toggle("completed");
            listContainerEl.appendChild(deleteBtnEl);
            listContainerEl.removeChild(completeBtnEl);
            completedList.appendChild(liEl);
        });

        /*  After adding Task clear Title & Description */
        titleInput.value = "";
        descriptionInput.value = "";
    }

    /* Add Empty input it shows an Error */
    else {
        if (title === "" && description === "") {
            alert("Please Enter a valid Title & Description");
            return;
        }
        if (title === "") {
            alert("Please Enter a valid Title");
            return;
        }
        if (description === "") {
            alert("Please Enter a valid Description");
            return;
        }

    }
});