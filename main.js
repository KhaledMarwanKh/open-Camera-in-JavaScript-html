let camera=document.getElementById("video");

navigator.mediaDevices.getUserMedia({video:true})
.then(strem=>{camera.srcObject=strem;})
.catch(error=>{comsol.log('Error accessing camera: ${error}')});