let fakeDataBase = [
    {id:1, task:"lvla till 34", ready:false},
    {id:2, task:"Lär nya spells", ready:false},
    {id:3, task:"Gå till Desolace", ready:false}

];

renderFakeData();

function _getId(id)
{
    return document.getElementById(id);
}

function renderFakeData(){
    //skapar html utifrån vår fakedatabas
    let htmlOutput = fakeDataBase.map(function(taskObject){

        
        return `
        <div>
        <h1>${taskObject.task} </h1>
        <button>Delete</button>
        </div>
        
        `;

    }); //end map
    _getId("taskList").innerHTML = htmlOutput.join("");

}