<!DOCTYPE html>
<html>
<head>
  <title>Show/Hide Password</title>
</head>
<body>

  <h2>Password Field</h2>

  <input type="password" id="password" placeholder="Enter password">
  <br><br>
  <input type="checkbox" id="toggle" onclick="togglePassword()"> Show Password

  <script>
    function togglePassword() {
      const passwordInput = document.getElementById("password");
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    }
  </script>

</body>
</html>
