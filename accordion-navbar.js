

// navbar utility script
//Like all my other scripts
//Dont bother maintaining just start again
//Written By: Not Matthew Holmes



//Added this to try and force GC to reload 
console.log("Version 1.0.4");

var navbar_elements = document.getElementsByClassName("topic-block");


function navbar_check(){

	navbar_elements = document.getElementsByClassName("topic-block");

	for(block of navbar_elements){
  
		var targetTopic = block.firstChild.className;  
  
  	var targetClass = block.className;
    var topic = "sub-link-wrapper " + targetClass.replace("topic-block ", "");
    //checks if container is currently in view port
    //When a link references a specific class in WebFlows
    //"w--current" is appended to the classname when in view
    if(targetTopic.includes("w--current")){
			var links = document.getElementsByClassName(topic);
      
      for(link of links){
      	
        link.style.display = "block";
      }
		}
    else{
    	var links = document.getElementsByClassName(topic);
      for(link of links){
        link.style.display = "none";
      }
    }
  	
  }
  
  setTimeout(navbar_check, 200);
}

navbar_check();
