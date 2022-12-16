//modal window - newsletter & validation
const modal2 = document.getElementById("myModal2");
const subscribeNewsletterBtn = document.getElementById("subscribeNewsletter");

subscribeNewsletterBtn.onclick = function () {
  const newsletterForm = document.getElementById("formNewsletter");

  if (newsletterForm.checkValidity()) {
    modal2.style.display = "block";
  } else {
    newsletterForm.reportValidity();
  }
};

//modal window - idea
const modal = document.getElementById("myModal");
const submitIdea = document.getElementById("submitIdea");

submitIdea.onclick = function () {
  const ideasForm = document.getElementById("ideasForm");

  if (ideasForm.checkValidity()) {
    modal.style.display = "block";
  } else {
    ideasForm.reportValidity();
  }
};
