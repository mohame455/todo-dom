let btn = document.getElementById("addTask")
let myInput = document.getElementById("inputTask")
btn.addEventListener('click', newElement)


function newElement() {
    let madiv = document.createElement("div")
    let btn1 = document.createElement("BUTTON");
    let span = document.createElement("span")
    if (myInput.value === '') {
        alert("You have to add a new task");
    } else {

        btn1.innerHTML = "Complete";
        madiv.appendChild(btn1);
        btn1.setAttribute('class', 'Complete')
        let btn2 = document.createElement("BUTTON");
        btn2.innerHTML = "Delete";
        madiv.appendChild(btn2);
        btn2.setAttribute('class', 'Delete')

        span.innerHTML = myInput.value

        span.setAttribute('class', 'item')
        madiv.appendChild(span);
        myInput.value = "";
        document.body.append(madiv)
        madiv.setAttribute('class', 'newElement')
    }

    let close = document.getElementsByClassName("Delete");

    // console.log(close)
    for (let p of close) {
        // console.log(p)

        p.addEventListener('click', remove)

        function remove(event) {

            let div = this.parentElement;
            div.style.display = "none"

        }
    }


    // let complete = document.getElementsByClassName("Complete")

    // for (let q of complete) {

    //     q.addEventListener('click', check)


    //     function check(event) {


    //         span.classList.toggle('item-checked');

    //     }
    // }

    btn1.addEventListener('click', function undo() {
        btn1.innerHTML = "undo"
            // span.style.textDecorationLine = "line-through"
        span.classList.toggle('item-checked')
    })



}