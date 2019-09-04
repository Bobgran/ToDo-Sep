let fakeDataBase;

if(localStorage.getItem("attGöra"))
{
    fakeDataBase = JSON.parse(localStorage.getItem("attGöra"));
}
else{
    fakeDataBase = [];
}

let order = true;

function changeOrder(){
    order = !order;
        renderFakeData();
}

renderFakeData();

function _getId(id)
{
    return document.getElementById(id);
}

function deleteTask(index){
    fakeDataBase.splice(index, 1);
    renderFakeData();
    saveLocal();

}

function completeTask(index){
    let objectTask = fakeDataBase[index];
    objectTask.ready = !objectTask.ready;
   

    renderFakeData();
    saveLocal();
}

_getId("orderBtn").addEventListener("click", changeOrder);

function renderFakeData(){
    //skapar html utifrån vår fakedatabas
    let htmlOutput = fakeDataBase.map(function(taskObject, index){
        console.log(index);
        
        return `
        <div>
        <h1 id= "${index}">${taskObject.task} <sub>${taskObject.ready} </sub></h1>
        <button id="${index}" ONCLICK ="deleteTask(${index})">Delete</button>
        <button ONCLICK ="completeTask(${index})">Complete</button>
        </div>
        
        `;

    }); //end map

    if(order == true)
    {
    _getId("taskList").innerHTML = htmlOutput.join("");
    }
    else
    {_getId("taskList").innerHTML = htmlOutput.reverse().join("");}
}

//lyssna efter form submit

_getId("taskForm").addEventListener("submit", addTask);

function saveLocal()
{
    localStorage.setItem("attGöra", JSON.stringify(fakeDataBase));
}

function addTask(event){
    //Hindra formuläret att skickas till servern
    event.preventDefault();
   //hämta input-datan
    let inputText =  _getId("taskId").value;
   //skapa ett task-objekt
   if(inputText.trim() != "")
   {
   let taskObjekt = {id: Date.now(), task:inputText, ready:false}
   //spara i fakeDataBase
   fakeDataBase.push(taskObjekt);
   //spara lokalt
   saveLocal();
   //rendera på nytt
   renderFakeData();
   _getId("taskId").value = "";
   _getId("taskId").focus();
   }
   
   
}