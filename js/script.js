const fullSize = (event) => {
    event.target.requestFullscreen();
}

window.onresize = () => {
    let hobj = document.querySelector('.people-list');
    hobj.style.height = (screen.height - 150) + "px"
    console.log(screen.height - 150);
}

const listItems = `
<li>
    <div class="people-card people-card-effect flex">
        <div class="people-img img-size">
            <img onclick="fullSize(event)" class="img-size" src="https://images.unsplash.com/photo-1601880348117-25c1127a95df?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="sleeping dog">
        </div>
        <div class="people-info">
            <div class="flex">
                <div class="people-name">
                    Jennifer Fritz
                </div>
                <div class="convo-time chat-list-font">
                    3:35pm
                </div>
            </div>
            <div class="people-convo chat-list-font">
                I'm looking to work with a designer that...
            </div>
        </div>
    </div>
</li>`

window.onload = () =>{
    let obj = document.querySelectorAll('.people-list-fill');
    obj.forEach((item)=>{
        item.innerHTML = listItems;
    })

    let hobj = document.querySelector('.people-list');
    hobj.style.height = (screen.height - 150) + "px"
    console.log(screen.height - 150);
}

