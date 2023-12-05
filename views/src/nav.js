const searchNav = document.querySelector('.search-nav');
const listenerSetion = document.querySelector('.search-result-nav-container');

const listenerSetionOptions = {
  rootMargin: '-20px 0px 0px 0px'
};

const listenerSetionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      $(searchNav).addClass("scrolled");
      $(searchNav).slideDown();
    } else {
      $(searchNav).removeClass("scrolled");
      $(searchNav).slideUp(0);
      $(searchNav).slideDown(0);
    }
  });
}, listenerSetionOptions);

listenerSetionObserver.observe(listenerSetion);