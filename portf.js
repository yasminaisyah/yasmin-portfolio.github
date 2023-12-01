/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

 
   <script>
    function addAnimation(element) {
        element.classList.add("hovered");
    }

    function removeAnimation(element) {
        element.classList.remove("hovered");
    }

    function validateForm(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("All fields must be filled out!");
            return false;
        }

        // You can add more advanced validation logic here if needed

        alert("Form submitted successfully!");
        document.getElementById("contact-form").reset();
    }
</script>
