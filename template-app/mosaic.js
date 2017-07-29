const app = require('electron').remote; 
const dialog = app.dialog;
const fs = require('fs');
const ps = require('python-shell');
const $= require('jQuery');


// const spawn = require('child_process').spawn;

// // const { exec } = require('child_process');

// var py;

// // function execute(){
// // 
// py  = spawn('python', ['mosaic.py']);


// // exec('python mosaic.py', (err, stdout, stderr) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log(stdout);
// // });


// py.stdout.on('data', function(data){
//   console.log(data.toString());
// });

// py.stdout.on('end', function(){
//   console.log('completed');
// });


// py.stdin.end();
// }

// let result = document.querySelector('#display')
// var pyshell;
// function execute(){
// 	var pyshell = new ps('mosaic.py');
// }

// pyshell.on('message', function (message) {
//   // received a message sent from the Python script (a simple "print" statement)
//   // console.log(message);
//   result.textContent = message
// });

const categories=['pipe','video','image','stackimages']

function category(division){
	categories.forEach(function(item){
		console.log(item)
		// document.querySelector('#'+item).display="none";
		// document.querySelector('#'+item+'select').remove="none";
		$('#'+item).css('display','none');
		// $('#'+item+'select').removeClass('active');
		console.log('#'+item+'select')

	})
	$('#'+division).css('display','');
	// $('#'+division+'select').addClass('active');
}