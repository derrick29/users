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
            <h1>Users Table:</h1>
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
                <tfoot>
                    <tr>
                        <td  colspan="5"><a href="#" class="btn-primary" id="btnAdd">Add</a></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>

    <div class="modal">
    <a href="#" id="modal-close" class="modal-close"
        ><i class="fas fa-times"></i
      ></a>
      <h1>Add User:</h1>
      <div class="modal-body">
            <form id="mform">
                <div class="form-group">
                    <label for="first_name">First Name:</label>
                <input type="text" name="first_name" id="first_name" placeholder="First Name">
                </div>
                <div class="form-group">
                    <label for="first_name">Last Name:</label>
                <input type="text" name="last_name" id="last_name" placeholder="Last Name">
                </div>
                <div class="form-group btn-holder">
                    <a href="#" class="btn-primary" id="addSubmit">submit</a>
                </div>
            </form>
      </div>
    </div>

    <script src="https://kit.fontawesome.com/afb9b2a7a4.js"></script>
    <script src="script.js"></script>
</body>
</html>