document.addEventListener("DOMContentLoaded", () => {

    const add = document.querySelector("button")
    const input = document.querySelector("input");
    const line = document.querySelector("#line")


    function addToList() {
        let counter = 0
        let newRecord = input.value
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
        if(input.value.length > 0)
        addToList();
    })


});