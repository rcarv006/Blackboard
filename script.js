var canvas,
				canvasContext,
				img,
				brushThickness = 10,
				painting = false,
				color = "white";//This will be set to true when the mouse button is clicked. And will paint where we drag the mouse.


			function clearIt(e){

				
				drawCanvas("black");
			}
			
			
			window.onload = function(){
			canvas = document.getElementById("drawCanvas");
			canvasContext = canvas.getContext('2d');

			

			drawCanvas("black");
			
			canvas.addEventListener('mousedown',beginBrushStroke );
			canvas.addEventListener('mousemove', paint);
			canvas.addEventListener('mouseup', endBrushStroke);

			clear = document.getElementById("clear");
			clear.onclick= function(){
				drawCanvas("black");
				}; 
			
				thicker = document.getElementById("plus");
				thicker.onclick= function(){
				brushThickness +=5;
				document.getElementById("thickness").innerHTML="Size: " + brushThickness;
				}; 
				
			thinner = document.getElementById("minus");
			
				thinner.onclick= function(){
				brushThickness -=5;
				document.getElementById("thickness").innerHTML="Size: " + brushThickness;
				};
				
				yellow = document.getElementById("yellow");
				yellow.onclick = function(){
					color = "yellow";
				
					
				}
				
				white = document.getElementById("white");
				white.onclick = function(){
					color = "white";
									}
				
				blue = document.getElementById("blue");
				blue.onclick = function(){
					color = "blue";
				}
				
				green = document.getElementById("green");
				green.onclick = function(){
					color = "green";
					
				}
				
				red = document.getElementById("red");
				red.onclick = function(){
					color = "red";
				}
				
				grey = document.getElementById("grey");
				grey.onclick = function(){
					color = "grey";
				}
				
				
				
				black = document.getElementById("black");
				black.onclick = function(){
					color ="black";
				}
				
				save = document.getElementById("save");
				save.onclick = function(){
				
				var data = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
				window.location.href = data;
				
				}
				
				document.getElementById("thickness").innerHTML="Size: " + brushThickness;
				
				
			}//End window.onload function. 
			

			function beginBrushStroke(evt){//Set painting to true, and drop a dab of paint.
				painting = true;
				paint(evt);
			}
			
			function endBrushStroke(){//set painting to false.
				painting = false;
				canvasContext.beginPath();
			}
			
			function paint(evt){
			
				if(painting){//We only paint if painting is true.
				//rest of drawRect function. simple, really.
				//This is all I really needed.
					var rect = canvas.getBoundingClientRect();
					
					mouseX = evt.clientX - rect.left;
					mouseY = evt.clientY - rect.top;
					
					console.log(mouseX + " "+mouseY);
					canvasContext.lineTo(mouseX,mouseY);
					brushStroke(mouseX,mouseY,brushThickness, brushThickness, color);
				canvasContext.beginPath();
					canvasContext.moveTo(mouseX,mouseY);
					
				}
			}
			
			
			function drawCanvas(color){
				canvasContext.fillStyle = color;
				canvasContext.fillRect(0,0,canvas.width, canvas.height)
			}
			
			function brushStroke(x,y,width, height, color){
				canvasContext.fillStyle=color;
				canvasContext.fillRect(x,y,width,height);
			}
			
					
			