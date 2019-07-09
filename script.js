const modalclose = document.getElementById("modal-close");
const modal = document.getElementsByClassName("modal");

const btnAdd = document.getElementById("btnAdd");
const addSubmit = document.getElementById("addSubmit");

function mAjax(options, callback) {
  var xhr;

  var url = options.url;
  var method = options.method;
  var contentType = options.contentType;
  var data = options.data;

  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  if (contentType == "application/json") {
    xhr.setRequestHeader("Content-Type", "application/json");
  }
  xhr.onload = function() {
    if (this.status == 200) {
      callback(this.responseText);
    }
  };
  if (method == "POST") {
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }
}

function renderUserTable() {
  var options = {
    url: "http://localhost:8081/exam/data.php",
    method: "GET"
  };
  mAjax(options, res => {
    console.log(JSON.parse(res));
    var resData = JSON.parse(res);
    var table = document
      .getElementById("mtable")
      .getElementsByTagName("tbody")[0];

    var newtbody = document.createElement("tbody");
    newtbody.setAttribute("class", "tbody");

    for (let i = 0; i < resData.length; i++) {
      let row = newtbody.insertRow();
      let idCell = row.insertCell(0);
      let fnCell = row.insertCell(1);
      let lnCell = row.insertCell(2);
      let rpCell = row.insertCell(3);
      let acCell = row.insertCell(4);

      idCell.innerHTML = resData[i].user_id;
      fnCell.innerHTML = resData[i].first_name;
      lnCell.innerHTML = resData[i].last_name;
      rpCell.innerHTML = resData[i].remaining_points;
      acCell.innerHTML =
        '<button href="#" class="btnView">View History</button>';
    }

    table.parentNode.replaceChild(newtbody, table);
  });
}

renderUserTable();

btnAdd.addEventListener("click", function() {
  modal[0].classList.toggle("active");
});

modalclose.addEventListener("click", function() {
  modal[0].className = "modal";
});

addSubmit.addEventListener("click", function() {
  let fname = document.getElementById("first_name").value;
  let lname = document.getElementById("last_name").value;

  if (fname === "" || lname === "") {
    alert("Please fill out all the fields");
  } else {
    var options = {
      url: "http://localhost:8081/exam/postUser.php",
      method: "POST",
      contentType: "application/json",
      data: {
        first_name: fname,
        last_name: lname
      }
    };

    mAjax(options, res => {
      // console.log(JSON.parse(res));
      let status = JSON.parse(res).status;
      if (status == "OK") {
        renderUserTable();
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
      }
    });
  }
});
