

// navbar utility script
//Like all my other scripts
//Dont bother maintaining just start again
//Written By: Not Matthew Holmes



//Added this to try and force GC to reload 
console.log("Accordion Navbar - Version 1.1.0");

//store all topic blocks once at page load
  var topicBlocks = document.getElementsByClassName("topic-block");


	//function used to determine what nav bar items should be shown or hidden
  function navbar_check(){
		
    //loop over every topic block found on the page
    for(topicBlock of topicBlocks){
      
      //Gets the first nav_link in the topic block
      //The first nav_link in the topic block points to the container for the entire topic
      var className = topicBlock.getElementsByClassName("nav_link")[0].className;
      
      //if the first nav_link in the topic block is active, show all sub links
      //else we hide all sub links
   		if (className == "nav_link w--current"){
        //I guess it's possible that there are multiple wrapps found in the same topic block
        //To get around this we store the list and loop through it
        for(subWrapper of topicBlock.getElementsByClassName("sub-link-wrapper")){
        	subWrapper.style.display = "block";
        }
      }
      else{
      	for(subWrapper of topicBlock.getElementsByClassName("sub-link-wrapper")){
        	subWrapper.style.display = "none";
        }
      }
        
    }
    setTimeout(navbar_check, 100);
  }

  navbar_check();	
