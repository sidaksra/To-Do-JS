document.addEventListener("DOMContentLoaded", function(){

    const input = document.querySelector(".enterItem")
    const desc = document.querySelector(".enterDesc")
    const form = document.querySelector("form")
   

    const tasks = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")):[]
    showAllTasks()
    form.addEventListener("submit", (e)=>{
        removeTasks()
        e.preventDefault()
        tasks.push({
            input:input.value,
            desc: desc.value,
        })

        
        localStorage.setItem("tasks", JSON.stringify(tasks))

        showAllTasks()
        input.value=""
        desc.value = ""

       
    })
   

    function showAllTasks(){
        tasks.forEach((value, index)=>{
            const div = document.createElement("div")
            div.setAttribute("id", "content")

            const innerDiv =document.createElement("div")
            div.append(innerDiv)

            const h2 = document.createElement("h2")
            h2.innerText = value.input 
            const p = document.createElement("p")
            p.innerText = value.desc
            innerDiv.append(h2)
            innerDiv.append(p)

            const innerDivbtn =document.createElement("div")
            div.append(innerDivbtn)
            const buttonDel = document.createElement("button")
            buttonDel.innerText = "-"
            buttonDel.setAttribute("id", "delete")


            buttonDel.addEventListener("click",()=>{
                removeTasks()
                tasks.splice(index, 1)
                localStorage.setItem("tasks", JSON.stringify(tasks))
                showAllTasks()
            })

            innerDivbtn.append(buttonDel)

            document.body.append(div)
            
        })
    }

    function removeTasks(){
        tasks.forEach(()=>{
            const div=document.querySelector("#content")
            div.remove()
        })
    }
  
})