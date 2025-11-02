document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-success.clickEffect');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const paragraph = this.previousElementSibling;
        
        // Check if the paragraph exists before trying to access its style
        if (paragraph) {
            // Check if the inline display style is currently 'block'
            if (paragraph.style.display === 'block') {
                paragraph.style.display = 'none'; // Hide it
            } else {
                paragraph.style.display = 'block'; // Show it (and overwrite the CSS 'none')
            }
        }
    });
  });

const contactUs = document.getElementById("contactForm")
    contactUs.addEventListener("submit", function(e){
        e.preventDefault()
        // picking values from the form
        const email = document.getElementById("email").value
        const phone = document.getElementById("phoneNo").value
        const fname = document.getElementById("fName").value

        const msg = "The persona " + fname + " email us " + email + " phone " + phone 
        // alert message
        alert(msg)

    })
    })
    ;