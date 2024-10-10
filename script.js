document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real-world scenario, you would send this data to a server
            // For now, we'll just log it to the console
            const formData = new FormData(contactForm);
            console.log('Form submitted with the following data:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Clear the form
            contactForm.reset();

            // Show a success message
            showNotification('Thank you for your message. We will get back to you soon!');
        });
    }

    // Add a scroll event listener to change header style on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(28, 35, 49, 0.9)';
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = '#1c2331';
            header.style.boxShadow = 'none';
        }
    });

    // Function to show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#4CAF50';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1000';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }

    // Testimonial rotation
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;

    function rotateTestimonials() {
        testimonials[currentTestimonial].style.opacity = '0';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.opacity = '1';
    }

    // Set initial opacity
    testimonials.forEach((testimonial, index) => {
        testimonial.style.opacity = index === 0 ? '1' : '0';
        testimonial.style.transition = 'opacity 0.5s ease';
    });

    // Rotate testimonials every 5 seconds
    setInterval(rotateTestimonials, 5000);
});
