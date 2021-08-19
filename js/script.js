const getEle = (ele, cls = "") => {
  let obj = document.createElement(ele);
  obj.classList = cls;
  return obj;
};

const createChat = (msg, time, side) => {
  let ele = "div";
  let obj1 = getEle(ele, side);
  let obj2 = getEle(ele);
  let obj3 = getEle(ele, "time-left");
  obj2.innerHTML = msg;
  obj3.innerHTML = time;
  obj1.append(obj2);
  obj1.append(obj3);
  return obj1;
};

const addPrevChats = (chats, obj) => {
  let left = "message-left";
  let right = "message-right";
  chats.forEach((item) => {
    let temp;
    if (item.client === "user") {
      temp = createChat(item.message, item.time, right);
    } else {
      temp = createChat(item.message, item.time, left);
    }
    obj.append(temp);
  });
};

const fullSize = (event) => {
  event.target.requestFullscreen();
};

const renderChat = () => {
  let width = document.body.clientWidth;
  if (width <= 601) {
    let obj = document.getElementById("chat_section");
    obj.style.display = "block";
    obj.style.width = "100%";
    let sobj = document.getElementById("chat_list");
    sobj.style.display = "none";
  }
};

const showList = () => {
  let width = document.body.clientWidth;
  if (width <= 601) {
    let obj = document.getElementById("chat_section");
    obj.style.display = "none";
    let sobj = document.getElementById("chat_list");
    sobj.style.display = "block";
  }
};

const getNormalizeTime = () => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    if (hr > 12) {
        return `${ hr-12 }:${ min }pm`
    }
    return `${hr}:${min}pm`
} 


// const onEntered = (event) => {
//     if(event.key === "Enter") {
//         addUserMessage()
//     }
// }

const addUserMessage = () => {
    let msg = document.getElementById("user_text");
    if ( msg.value ) {
        let time = getNormalizeTime();
        let cobj = document.querySelector(".chat-surface");
        let obj = createChat(msg.value,time,"message-right");
        cobj.append(obj);
        obj.scrollIntoView();
    } else {
        alert("Message is not valid!");
    }
    msg.value = "";
};

window.addEventListener("resize", () => {
  let width = document.body.clientWidth;
  if (width > 601) {
    let obj = document.getElementById("chat_section");
    obj.style.display = "block";
    let sobj = document.getElementById("chat_list");
    sobj.style.display = "block";
  } else {
    showList();
  }
});

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
</li>`;

window.onload = () => {
  let obj = document.querySelectorAll(".people-list-fill");
  obj.forEach((item) => {
    item.innerHTML = listItems;
  });
  let cobj = document.querySelector(".chat-surface");
  fetch("../json/chats.json")
    .then((response) => response.json())
    .then((data) => {
      chats = data.data;
      addPrevChats(chats, cobj);
    });
  cobj.scrollTop = cobj.scrollHeight;
};
