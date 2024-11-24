window.addEventListener("DOMContentLoaded", (e) => {
  getVisitCounter();
});

const functionApi = "";

const getVisitCounter = () => {
  let count = 30;
  fetch(functionApi)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("Website called function API.");
      count = res.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (err) {
      console.log(err);
    });
  return count;
};
