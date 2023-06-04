function hideResults() {
    document.getElementById("Javascript").setAttribute("class", "hidden");
    document.getElementById("Ruby").setAttribute("class", "hidden");
    document.getElementById("Python").setAttribute("class", "hidden");
  }
  
  window.onload = function() {
    document.querySelector("form").onsubmit = function(event) {
      event.preventDefault();
      hideResults();
      const age = parseInt(document.querySelector("input#name").value);
    };
  };