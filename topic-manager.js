//Written by Matthew Holmes in order to manage the showing/hiding of related topic information.
//04/02/21

//Setup references to information infoContainer and the grid which contains the topic buttons
var infoContainer = document.getElementsByClassName("advice-body-text")[0];
var topicButtonGrid = document.getElementsByClassName("topic-button-grid")[0];

//Get topic buttons and stores them in an array
var buttons = []
topicButtonGrid.childNodes.forEach( button => {
  if(button.className === "advice-button w-inline-block"){
    buttons.push(button);
  }
});
//

//Stores a list of topic against the information to be displayed in the info container
let topicInformationMap = new Map();

topicInformationMap["What is procurement?"] = "Procurement is really boring aaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaa";
topicInformationMap["Probity and ethical behaviour"] = "None of that thankyou";
topicInformationMap["NSW&nbsp;Government Procurement"] ="";
topicInformationMap["eLearning scripts"] = "";
topicInformationMap["Procurement for UQ"] = "";

//OnClick event for all topic buttons
//Gets the topic clicked and sets the info container accordingly
function updateInfoContainer(topicClicked){
  infoContainer.innerHTML = topicInformationMap[topicClicked.target.innerHTML] ?? "<center><H1>Issue Occured!</H1> \n <p><b>Please contact Portt Support</b></p> \n \n <p>support@portt.com</p></center>";
}

//Adds OnClick event listeners to top buttons -> updateInfoContainer
buttons.forEach(button => button.addEventListener("click", updateInfoContainer));
