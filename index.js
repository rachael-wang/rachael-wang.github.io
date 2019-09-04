(function() {
  "use strict";

  // MODULE GLOBAL VARIABLES, CONSTANTS, AND HELPER FUNCTIONS CAN BE PLACED
  // HERE
  const API_URL = ""; // it's good to factor out your url base as a constant
  const DATABASE = ["images/database.jpg", "images/database2.jpg", "images/database3.jpg"];
  const OMNI = ["images/img4.jpg","images/img5.jpg","images/img6.jpg","images/img7.jpg"];
  let timer1 = null;
  let count1 = 0;
  let count2 = 0;
  /**
   *  Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", initialize);

  /**
   *  CHANGE: Describe what your initialize function does here.
   */
  function initialize() {
    // THIS IS THE CODE THAT WILL BE EXECUTED ONCE WEBPAGE LOADS
    $("page").addEventListener("mouseenter",zoomin);
    $("page").addEventListener("mouseleave",zoomout);
    timer1 = setInterval(changeDataPic, 2500);
    window.changeNavOnScroll = function() {
      if (window.pageYOffset > 150) {
        $("page").backgroundImage = 'url("images/img3.jpg")';
        $("page").backgroundColor = "white";
        alert("hi");
      } else {
        $("page").backgroundImage = "url('images/img2.jpg')";
      }
    };
    window.addEventListener("scroll", changeBackground);
    let sections = qsa("nav span");
    for (let i = 0; i < sections.length; i ++) {
      sections[i].addEventListener("click", changeView);
    }
  }

  function zoomin() {
    $("profile").style.width = "220px";
    $("profile").style.height = "220px";
  }

  function zoomout() {
    $("profile").style.width = "200px";
    $("profile").style.height = "200px";
  }

  function changeBackground() {
    if (window.pageYOffset > 150) {
      $("page").style.backgroundImage = "url('images/img3.jpg')";
      qs("body").style.backgroundColor = "#ec571e";
    } else {
      $("page").style.backgroundImage = "url('images/img2.jpg')";
      qs("body").style.backgroundColor = "orange";
    }
  }

  function changeView() {
    let str = this.innerText;
    let sections = qsa("section");
    for (let i = 0; i < sections.length; i ++) {
      if (sections[i].id === str) {
        sections[i].classList.remove("hidden");
      } else {
        sections[i].classList.add("hidden");
      }
    }
  }

  function changeDataPic() {
    $("database").src = DATABASE[(count1 + 1) % 3];
    count1 = (count1 + 1) % 3;
    qs("#omni img").src = OMNI[(count2 + 1) % 4];
    count2 = (count2 + 1) % 4;
  }
  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @returns {object} DOM object associated with id.
   */
  function $(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();
