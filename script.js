document.addEventListener("DOMContentLoaded", () => {

    const add = document.querySelector("button")
    const input = document.querySelector("input");
    const line = document.querySelector("#line")
    let records = []


    function addToList() {
        let newRecord = input.value
        records.push(newRecord)
        let newspan = document.createElement("span");


        let textspan = document.createTextNode(newRecord);

        let newcheckbox = document.createElement("input")
        newcheckbox.type = "checkbox"

        newspan.appendChild(newcheckbox);
        newspan.appendChild(textspan)
        line.appendChild(newspan)

        // let br = document.createElement("br")
        // line.appendChild(br)

        let hr = document.createElement("hr")
        line.appendChild(hr)

        newcheckbox.addEventListener("click", () => {
            if (newcheckbox.checked) {
                newspan.style.textDecoration = "line-through";
            } else {
                newspan.style.textDecoration = "none";
            }

        });

    }

    add.addEventListener("click", () => {
        
        if(input.value.trim().length > 0 && !records.includes(input.value))
        addToList();
        input.value = ""
    })


});