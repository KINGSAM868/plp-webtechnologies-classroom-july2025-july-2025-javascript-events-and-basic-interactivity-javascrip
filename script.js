// DOMContentLoaded ensures the script runs only after the full page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // --- Interactive Feature 1: Accordion/Collapsible Content ---
    // Get all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');
            
            // Toggle the visibility of the content
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.textContent = '-';
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                icon.textContent = '+';
                icon.classList.remove('rotate-180');
            }
        });
    });

    // --- Interactive Feature 2: Image Slider ---
    const slides = document.querySelectorAll('.slider-img');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    let currentSlide = 0;

    // Function to show a specific slide
    const showSlide = (n) => {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        // Show the current slide
        slides[n].classList.add('active');
    };

    // Event listener for the "next" button
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Event listener for the "previous" button
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // --- Interactive Feature 3: Custom Form Validation ---
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    const messageBox = document.getElementById('message-box');

    // Function to show a message in the custom box
    const showMessage = (msg, type) => {
        messageBox.textContent = msg;
        messageBox.classList.remove('success', 'error');
        messageBox.classList.add(type, 'show');
        setTimeout(() => {
            messageBox.classList.remove('show');
        }, 3000);
    };

    // Function to validate an email address
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    form.addEventListener('submit', (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Reset error messages
        nameError.classList.add('hidden');
        emailError.classList.add('hidden');
        messageError.classList.add('hidden');

        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.classList.remove('hidden');
            isValid = false;
        }

        // Validate Email
        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value.trim())) {
            emailError.classList.remove('hidden');
            isValid = false;
        }

        // Validate Message
        if (messageTextarea.value.trim() === '') {
            messageError.classList.remove('hidden');
            isValid = false;
        }

        // If the form is valid, submit it (or simulate submission)
        if (isValid) {
            // Simulate successful form submission
            showMessage('Thank you for your message!', 'success');
            form.reset();
        } else {
            showMessage('Please correct the errors in the form.', 'error');
        }
    });
});