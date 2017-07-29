// const {ipcRenderer} = require('electron');
const $= require('jQuery');



const categories=['gamma','clahe']

function category(division){
	categories.forEach(function(item){
		// console.log(item)
		$('#'+item).css('display','none');
		// $('#'+item+'select').removeClass('active');
		// console.log('#'+item+'select')

	})
	$('#'+division).css('display','');
	// $('#'+division+'select').addClass('active');
}

function execute() {
	// body...
	var clip=$("#gammav").val()
	var file=document.getElementById("clvid").files[0].path
	
	console.log(file)
	console.log(clip)
	ipcRenderer.send('run',clip,file);
}

ipcRenderer.on('ping', (event, arg) => {  

    console.log(arg);
    let bar = document.querySelector("x-progressbar");
    if(isNaN(arg)){
    	arg=Number(arg)
    }
    bar.value=arg/540
    console.log('percent '+(arg/540));
  // let callback = () => bar.value >= 1 ? bar.value = 0 : bar.value += 0.15;
  // setInterval(callback, 1000);

});