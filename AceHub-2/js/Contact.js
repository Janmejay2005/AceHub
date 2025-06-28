document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for contacting ACEHUB!');
  this.reset();
});
