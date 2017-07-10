const app = require('electron').remote; 
const dialog = app.dialog;
const fs = require('fs');

const spawn = require('child_process').spawn;

// const { exec } = require('child_process');

var py;

// function execute(){
// 
py  = spawn('python', ['mosaic.py']);


// exec('python mosaic.py', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stdout);
// });


// py.stdout.on('data', function(data){
//   console.log(data.toString());
// });

// py.stdout.on('end', function(){
//   console.log('completed');
// });


// py.stdin.end();
// }


 