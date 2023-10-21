function getData() {
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let loc = document.getElementById("Location").value;
  const In = document.getElementById("CheckIn").value;
  const Out = document.getElementById("CheckOut").value;
  const member = document.getElementById("guests").value;
  
  var st = In;
  var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  var dt = new Date(st.replace(pattern, "$3-$2-$1"));
  console.log(dt);
  var st = Out;
  var pattern1 = /(\d{2})\.(\d{2})\.(\d{4})/;
  var dt1 = new Date(st.replace(pattern1, "$3-$2-$1"));
  
  let day = dt.getDate();
  let month = months[dt1.getMonth()];
  let year = dt1.getFullYear();

  let date = day+" "+month+" "+year;

  localStorage.setItem("checkDate", date);
  localStorage.setItem("guests", member);
  localStorage.setItem("location", loc);
}
