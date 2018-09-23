function postProject() {
   var projName = document.getElementById('inputName').value;
   var instructions = document.getElementById('instructions').value;

   var fullPath = document.getElementById('file').value;
   var file = "";
   if (fullPath) {
      var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
      var filename = fullPath.substring(startIndex);
      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
         filename = filename.substring(1);
      }
      file = filename;
   }

   var available = document.querySelector('input[name="available"]:checked').value;

   var displayOn = document.getElementById('displayOn').value;

   if (!displayOn) {
      displayOn = "";
   }
   var dueDate = document.getElementById('dueDate').value;
   var course = document.getElementById('courses').value;

   fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       body: JSON.stringify({
         title: projName,
         body: instructions + ' Filename: ' + file + '  Available: ' + available +
         ' Display Date: ' + displayOn + ' Due Date: ' + dueDate + ' Course: ' + course,
         userId: 1
       }),
       headers: {
         "Content-type": "application/json; charset=UTF-8"
       }
     })
     .then(response => console.log(response.status))
     // Uncomment to change the output to the console
     // .then(response => response.json())
     // .then(json => console.log(json))
}
