var contactForm = document.querySelector('form#contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var formValues = {};
  formValues.name = contactForm.elements.name.value;
  formValues.email = contactForm.elements.email.value;
  formValues.message = contactForm.elements.message.value;
  console.log(formValues);
  contactForm.reset();
});
