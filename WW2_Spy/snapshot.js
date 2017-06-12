
$(document).ready(function () {
        window.score = 0;
        var vid = document.getElementById('video');
        var vidSrc = document.getElementById('vidSrc');
        vid.currentTime = 0;
        var audio = document.getElementById("audio");
        var snapNo = 0;
        
        //swap the main video witht the score video
        function results(){
                    vid.pause();
                    vidSrc.src = `media/scores/rank${score}.mp4`;
                    vid.load();
                    vid.play();
                    snap = null;
                }
        
        //check if the main video has finished
        function finishCheck(){
            if(vid.currentTime > 308.8){
                results();
            }
        }
        
        window.setInterval(function(){finishCheck();}, 1000);
    
        // Takes a snapshot of the video
		function snap() {
        audio.play();
        $("video").fadeIn(80).fadeOut(80).fadeIn(80).fadeOut(80).fadeIn(80);
        snapNo += 1;
        // Get handles on the video and canvas elements
		var video = document.querySelector('video');
		var canvas = document.querySelector('.canvas');
        var prime = document.getElementsByClassName('.canvas');
		// Get a handle on the 2d context of the canvas element
		var context = canvas.getContext('2d');
		// Define some vars required later
		var w, h, ratio;
        var nextId = 0;

        // Calculate the ratio of the video's width to height
        ratio = video.videoWidth / video.videoHeight;
        // Define the required width as 100 pixels smaller than the actual video's width
        w = video.videoWidth - 100;
        // Calculate the height based on the video's width and the ratio
        h = parseInt(w / ratio, 10);
        // Set the canvas width and height to the values just calculated
        canvas.width = w;
        canvas.height = h;	
            
	    // Define the size of the rectangle that will be filled (basically the entire element)
	    context.fillRect(0, 0, w, h);
	    // Grab the image from the video
	    context.drawImage(video, 0, 0, w, h);
              
        //create a new canvas
        container = document.getElementById('container');
        var d = document.createElement("canvas");
        container.appendChild(d);
        //remove old canvas id
        $(canvas).removeClass('canvas');
        //set new canvas as prime
        $(d).addClass('canvas');
           
        nextId += 1;
          if(vid.currentTime > 90.01 & vid.currentTime < 96.19){ 
            $("#v2").show();
            $("#v2tick").show();
            score += 1;
        }else if (vid.currentTime > 125.17 & vid.currentTime < 127.40){
            $("#hitler").show();
            $("#hittick").show();
            score += 1;
        }else if (vid.currentTime > 158.03 & vid.currentTime < 171.24){
            $("#ho").show();
            $("#hotick").show();
            score += 1;
        }else if (vid.currentTime > 220.14 & vid.currentTime < 228.08){
            $("#schwerer").show();
            $("#schtick").show();
            score += 1;
        }else if (vid.currentTime > 294.24 & vid.currentTime < 305.09){
            $("#panzer").show();
            $("#tanktick").show();
            score += 1;
        }else{
            $("#wrong").show().delay(3000).fadeOut(function(){$(this).hide();});
        }
        
        if(snapNo > 9 || score > 4){
            results();
            }
        }
        
        document.body.onkeyup = function(e){
            if(e.keyCode == 32){
                snap();
                
            }
        }
});

    
    
    



        