
function validateForm() {
    let x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  function validateForm() {
    let x = document.forms["myForm"]["lastname"].value;
    if (x == "") {
      alert("Last name must be filled out");
      return false;
    }
  }

  function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
  }

  function validateForm() {
    let x = document.forms["myForm"]["subject"].value;
    if (x == "") {
      alert("Subject must be filled out");
      return false;
    }
  }