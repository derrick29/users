const modalclose = document.getElementById("modal-close");
const modal = document.getElementsByClassName("modal");
const hmodal = document.getElementsByClassName("h-modal");
const hmodalclose = document.getElementById("h-modal-close");

const btnAdd = document.getElementById("btnAdd");
const btnsubmit = document.getElementById("btnsubmit");

const btnAddPoint = document.getElementById("h-add-btn");
const btnDedPoint = document.getElementById("h-ded-btn");

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
  } else if (contentType == "urlform") {
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }
  xhr.onload = function() {
    if (this.status == 200) {
      callback(this.responseText);
    }
  };
  if (method == "POST" && contentType == "application/json") {
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }
}

function renderUserTable() {
  var options = {
    url: "http://localhost/users/data.php",
    method: "GET"
  };
  mAjax(options, res => {
    console.log(JSON.parse(res));
    let resData = JSON.parse(res);
    let table = document
      .getElementById("mtable")
      .getElementsByTagName("tbody")[0];

    let newtbody = document.createElement("tbody");
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
      acCell.innerHTML = `<button class="btnView" onclick="showHModal(${
        resData[i].user_id
      }, '${resData[i].first_name}', '${
        resData[i].last_name
      }')">View Point</button><button onclick="showUpModal(${
        resData[i].user_id
      })" class="btnUp">Update</button><button onclick="deleteUser(${
        resData[i].user_id
      })" class="btnd">Delete</button>`;
    }

    table.parentNode.replaceChild(newtbody, table);
  });
}

renderUserTable();

function deleteUser(id) {
  let options = {
    method: "DELETE",
    url: "http://localhost/users/userdata.php?id=" + id
  };

  mAjax(options, res => {
    let status = JSON.parse(res).status;
    if (status == "OK") {
      renderUserTable();
    }
  });
}

function renderPointsTable() {}

function showHModal(id, first_name, last_name) {
  document.getElementById(
    "tname"
  ).innerHTML = `Name: ${first_name} ${last_name}`;
  document.getElementById("tid").innerHTML = `User Id: ${id}`;
  document.getElementById("h-hdnId").value = id;
  let options = {
    method: "GET",
    url: "http://localhost/users/pointsData.php?id=" + id
  };

  mAjax(options, res => {
    let resData = JSON.parse(res);
    let table = document
      .getElementById("htable")
      .getElementsByTagName("tbody")[0];

    let newtbody = document.createElement("tbody");
    newtbody.setAttribute("class", "tbody");

    for (let i = 0; i < resData.length; i++) {
      let row = newtbody.insertRow();
      let idCell = row.insertCell(0);
      let aCell = row.insertCell(1);
      let dCell = row.insertCell(2);
      let rCell = row.insertCell(3);
      let crCell = row.insertCell(4);

      idCell.innerHTML = resData[i].points_id;
      aCell.innerHTML = resData[i].added_points;
      dCell.innerHTML = resData[i].deducted_points;
      rCell.innerHTML = resData[i].remarks;
      crCell.innerHTML = resData[i].created_at;
    }

    table.parentNode.replaceChild(newtbody, table);
  });

  hmodal[0].classList.add("active");
}

function showUpModal(id) {
  let options = {
    method: "GET",
    url: "http://localhost/users/userdata.php?id=" + id
  };

  mAjax(options, res => {
    let userdata = JSON.parse(res)[0];
    document.getElementById("mtitle").innerHTML =
      "Update User: ID-" + userdata.user_id;
    document.getElementById("showtype").value = "update";
    modal[0].classList.add("active");

    document.getElementById("first_name").value = userdata.first_name;
    document.getElementById("last_name").value = userdata.last_name;
    document.getElementById("hdnId").value = userdata.user_id;
  });
}

btnAdd.addEventListener("click", function() {
  document.getElementById("mtitle").innerHTML = "Add User:";
  document.getElementById("showtype").value = "add";
  modal[0].classList.add("active");
});

modalclose.addEventListener("click", function() {
  document.getElementById("mtitle").innerHTML = "";
  document.getElementById("showtype").value = "";
  document.getElementById("hdnId").value = "";
  modal[0].className = "modal";
});

hmodalclose.addEventListener("click", function() {
  document.getElementById("tname").innerHTML = "";
  document.getElementById("tid").innerHTML = "";
  document.getElementById("h-hdnId").value = "";
  hmodal[0].className = "h-modal";
});

btnsubmit.addEventListener("click", function() {
  let fname = document.getElementById("first_name").value;
  let lname = document.getElementById("last_name").value;
  let id = document.getElementById("hdnId").value;
  let type = document.getElementById("showtype").value;

  var options;

  if (fname === "" || lname === "") {
    alert("Please fill out all the fields");
  } else {
    if (type == "add") {
      options = {
        url: "http://localhost/users/postUser.php",
        method: "POST",
        contentType: "application/json",
        data: {
          first_name: fname,
          last_name: lname
        }
      };
    } else if (type == "update") {
      options = {
        url: "http://localhost/users/updateUser.php",
        method: "POST",
        contentType: "application/json",
        data: {
          id: id,
          first_name: fname,
          last_name: lname
        }
      };
    }

    mAjax(options, res => {
      // console.log(JSON.parse(res));
      let status = JSON.parse(res).status;
      if (status == "OK") {
        renderUserTable();
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
      }

      document.getElementById("mtitle").innerHTML = "";
      document.getElementById("showtype").value = "";
      document.getElementById("hdnId").value = "";
      modal[0].className = "modal";
    });
  }
});

btnAddPoint.addEventListener("click", function() {
  let id = document.getElementById("h-hdnId").value;
  let points = document.getElementById("txpoint").value;
  let remarks = document.getElementById("txremark").value;

  let options = {
    url: "http://localhost/users/addPointRecord.php",
    method: "POST",
    contentType: "application/json",
    data: {
      user_id: id,
      added_points: points,
      deducted_points: 0,
      remarks: remarks,
      type: "add"
    }
  };

  mAjax(options, res => {
    // console.log(JSON.parse(res));
    let status = JSON.parse(res).status;
    if (status == "OK") {
      document.getElementById("txpoint").value = "";
      document.getElementById("txremark").value = "";
    }
    console.log(JSON.parse(res).remaining);
  });
});

btnDedPoint.addEventListener("click", function() {
  let id = document.getElementById("h-hdnId").value;

  console.log(id);
});
