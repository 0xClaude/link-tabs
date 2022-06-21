let linklist = document.querySelectorAll(".link");

// adding EvenListeners to every link
for (let i=0; i<linklist.length; i++)
 {
    linklist[i].addEventListener("click", (e) => {
        // remove "active" class from previous selected menu
        // then add "inactive" class
        let old = document.querySelector(".active");
        old.classList.remove("active");
        old.classList.add("inactive");

        // remove the old submenu
        let oldid = old.id;
        document.querySelector(".linklist-" + old.id).classList.remove("show");
        document.querySelector(".linklist-" + old.id).classList.add("hide");
        
        // show the newly clicked link as active
        // and remove the "inactive" class
        e.target.classList.remove("inactive");
        e.target.classList.add("active");

        // show the new submenu
        let id = e.target.id;
        document.querySelector(".linklist-" + id).classList.remove("hide");
        document.querySelector(".linklist-" + id).classList.add("show");
    });
 }
