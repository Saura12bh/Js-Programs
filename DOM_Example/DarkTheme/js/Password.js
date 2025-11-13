//password show kraych logic
//toggle mhnje call back fucntion madhe event call kryacha kiva as mhnu shkto on ch off as example
document.getElementById("btn").addEventListener("click", () => {
  //input type=password ahe tr aplya text kraycha mhnje password show hoto

  let pass = document.getElementById("password");
  //adhi password apn pass madhe ghetla ani tyacha type check kela jr password asel tr text hoyl ani text asel tr password hoyl type
  pass.type = pass.type === "password" ? "text" : "password";
});
