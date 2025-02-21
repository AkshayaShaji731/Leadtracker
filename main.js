
// chrome://extensions/
  
let myLeads=[]
const inputEl =document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el") 
const deleteBtn=document.getElementById("delete-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const tabBtn=document.getElementById("tab-btn")
// console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
}
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        console.log(tabs);
        
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderLeads()
    })
})
deleteBtn.addEventListener("dblclick", function () {
    myLeads = []
    localStorage.clear()
    renderLeads()
})
// console.log(leadsFromLocalStorage)
// localStorage.clear()
inputBtn.addEventListener("click",function(){
    // console.log("clicked");
    
    myLeads.push(inputEl.value) 
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    // console.log(localStorage.getItem("myLeads"))
    renderLeads()  
    inputEl.value=""
})
function renderLeads(){ 
    console.log(myLeads);
    
    let listitem ="" 
    for(let i=0;i<myLeads.length;i++){
        listitem += `<li>
        <a href='#' target='_black'>
        ${myLeads[i]}
        </a> 
        </li>`
    }
    ulEl.innerHTML= listitem
}

