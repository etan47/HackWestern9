let table = document.getElementById("list");
let addBtn = document.getElementById("add");
let deleteAll = document.getElementById("deleteAll");

addBtn.addEventListener('click', createEntry);
deleteAll.addEventListener('click', deleteAllEntries);

function createEntry(){
    if(document.getElementById("input").value != 0){
        table.innerHTML += `
            <div class="item">
                <span id="description">
                    ${document.getElementById("input").value}
                </span>
                <button class="delete">Delete</button>
            </div>
        `;

        let tasks = document.querySelectorAll(".delete");
        for(let i = 0; i < tasks.length; i++){
            tasks[i].addEventListener('click', deleteEntry);
        }
        function deleteEntry(){
            this.parentNode.remove();
        }
    }
}

function deleteAllEntries(){
    table.innerHTML = "";
}