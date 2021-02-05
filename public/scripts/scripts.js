document.getElementById("customButton").addEventListener("click", function(){
  document.getElementById("fileUpload").click();  // trigger the click of actual file upload button
});

document.getElementById("fileUpload").addEventListener("change", function(){
  var fullPath = document.getElementById('fileUpload').value;
  var fileName = fullPath.split(/(\\|\/)/g).pop();  // fetch the file name
  document.getElementById("fileName").innerHTML = fileName;  // display the file name
}, false);

document.getElementById("customButton2").addEventListener("click", function(){
    document.getElementById("fileUpload2").click();  // trigger the click of actual file upload button
  });
  
  document.getElementById("fileUpload2").addEventListener("change", function(){
    var fullPath = document.getElementById('fileUpload2').value;
    var fileName = fullPath.split(/(\\|\/)/g).pop();  // fetch the file name
    document.getElementById("fileName2").innerHTML = fileName;  // display the file name
  }, false);
