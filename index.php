<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exam</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="tables">
        <div class="section1">
        <h1>Users Table:</h1><a href="#" class="btn-primary" id="btnAdd">Add User</a>
        </div>
            
            <table id="mtable">
                <thead>
                    <tr>
                        <td>User ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Remaining Points</td>
                        <td>Action</td>
                    </tr>
                   
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>

    <div class="modal">
    <a href="#" id="modal-close" class="modal-close"
        ><i class="fas fa-times"></i
      ></a>
      <h1 id="mtitle"></h1>
      <div class="modal-body">
            <form id="mform">
                <input type="text" name="showtype" id="showtype" value="" hidden>
                <input type="text" name="hdnId" id="hdnId" value="" hidden>
                <div class="form-group">
                    <label for="first_name">First Name:</label>
                <input type="text" name="first_name" id="first_name" placeholder="First Name">
                </div>
                <div class="form-group">
                    <label for="first_name">Last Name:</label>
                <input type="text" name="last_name" id="last_name" placeholder="Last Name">
                </div>
                <div class="form-group btn-holder">
                    <a href="#" class="btn-primary" id="btnsubmit">OK</a>
                </div>
            </form>
      </div>
    </div>

    <div class="h-modal">
    <a href="#" id="h-modal-close" class="h-modal-close"
        ><i class="fas fa-times"></i
      ></a>
      <h1 id="htitle">Points History:</h1>
      <p id="tname"></p>
      <p id="tid"></p>
      <div class="h-modal-body">
      <input type="text" name="h-hdnId" id="h-hdnId" value="" hidden>
        <table id="htable" class="htable">
                <thead>
                    <tr>
                        <td>Points ID</td>
                        <td>Added Points</td>
                        <td>Deducted Points</td>
                        <td>Remarks</td>
                        <td>Created Date</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <input type="number" name="txpoint" id="txpoint" placeholder="Point">
            <input type="text" name="txremark" id="txremark" placeholder="Remarks">
            <button class="h-add-btn" id="h-add-btn">add</button>
            <button class="h-ded-btn" id="h-ded-btn">deduct</button>
      </div>
    </div>

    <script src="https://kit.fontawesome.com/afb9b2a7a4.js"></script>
    <script src="script.js"></script>
</body>
</html>