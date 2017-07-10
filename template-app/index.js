const app = require('electron').remote; 
const dialog = app.dialog;
const fs = require('fs');
// const zerorpc = require("zerorpc")
// let client = new zerorpc.Client()

// client.connect("tcp://127.0.0.1:4242")


// console.log(client)

// client.invoke("echo", "server ready", (error, res) => {
//   if(error || res !== 'server ready') {
//     console.error(error)
//   } else {
//     console.log("server is ready")
//   }
// })

// // console.log('hi')

// client.invoke("streaming_range", 10, 20, 2, function(error, res, more) {
//     console.log(res);
// });

// client.invoke("sending", function(error, res, more) {
//     console.log(res);
// });

// // console.log('hi11')

// let content = "Some text to save into the file";

// function save(){// You can obviously give a direct path without use the dialog (C:/Program Files/path/myfileexample.txt)
// dialog.showSaveDialog((fileName) => {
//     if (fileName === undefined){
//         console.log("You didn't save the file");
//         return;
//     }

//     // fileName is a string that contains the path and filename created in the save file dialog.  
//     fs.writeFile(fileName, content, (err) => {
//         if(err){
//             alert("An error ocurred creating the file "+ err.message)
//         }
                    
//         alert("The file has been succesfully saved");
//     });
// }); 
// }
