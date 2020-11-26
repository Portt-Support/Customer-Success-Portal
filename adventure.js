console.log("Adventure - Version 1.2.2");
//Version 1.2.0: Total rewrite of this script. Previous version 1.1.2, please see GitHub for comits of previous version... FYI, I only include version numbers so I can easily tell if the script has been cached 

//PLS READ
//I'm trying to overcomment this code so that whatever poor sole has to maintain this later, doesn't just straight up quit on the spot
//Friendly Name - a friendly name is an easily rememberable name that gives you some idea over what the object is

//Declaration section
//This section is important for configuring exactly how everything works. 
//optionConfiguration sets an options friendly name against the friendly names for the options it refers to
//elementMap stores references to HTML elements against friendly names


//Configure the options used in each object
//The map is only temporary and each element from the map is removed after being added to an optionButton object
//optionConfiguration[friendly name for option] = [friendly name for element (used in elementMap), etc]
let optionConfiguration = new Map();
optionConfiguration["contract-register"] = ["account-codes", "contract-types", "workflow-basic", "stakeholders-basic", "core", "compliance-basic", "contract", "organization", "report", "stakeholders"];
optionConfiguration["endorsements"] = ["workflow-advanced", "compliance", "account-codes", "contract-types", "workflow-basic", "stakeholders-basic", "core", "compliance-basic", "contract", "organization"];
optionConfiguration["milestones"] = ["milestone-types", "contract", "core"];
optionConfiguration["collaborate-with-vendors"] = ["portt-hub", "sharing", "contract", "core", "organization"]; 
optionConfiguration["contract-issues"] = ["issues", "contract", "core", "organization"];
optionConfiguration["supplier-performance"] = ["supplier-performance", "organization-assessments", "issues", "analytics", "contract", "core", "organization"];
optionConfiguration["schedule-of-rates"] = ["rate-types", "unit-types", "panel", "contract", "core", "organization"];
optionConfiguration["panels"] = ["panel-types", "panel-hierarchies", "contract", "core", "organization"];
optionConfiguration["compliance"] = ["compliance-types", "template-generation", "compliance", "contract", "core", "organization", "procurement"];
optionConfiguration["spend-tracking"] = ["financial", "contract-types", "workflow-basic"];
optionConfiguration["track-benefits"] = ["benefits"];
optionConfiguration["complex-compliance"] = ["compliance"];
optionConfiguration["collaborate-on-compliance"] = ["portt-hub", "sharing", "organization-certifications", "organization-assessments"];
optionConfiguration["organisation-information"] = ["analytics", "landing-page"];
optionConfiguration["process-information"] = ["landing-page"];

//Stores a reference to the HTML element against a friendly name
//Helpful in looking up an element (module or feature only) without needing to know the full class name
//TODO: This doesn't necessarily need to be hard coded
//To improve this wrap in for loop and look up all elements with a class name including module or feature
//Would just take some formatting to get each class name into it's friendly equivalent.
//Alternatively whenever I need to refer to one of these HTML elements I could just format the friendly text into the class name
let elementMap = new Map();
//Modules
elementMap["contract"] = document.getElementsByClassName("module contract")[0];
elementMap["procurement"] = document.getElementsByClassName("module procurement")[0];
elementMap["organization"] = document.getElementsByClassName("module organization")[0];
elementMap["core"] = document.getElementsByClassName("module core")[0];
elementMap["panel"] = document.getElementsByClassName("module panel")[0];
elementMap["report"] = document.getElementsByClassName("module report")[0];
elementMap["analytics"] = document.getElementsByClassName("module analytics")[0];
elementMap["financial"] = document.getElementsByClassName("module financial")[0];
elementMap["landing-page"] = document.getElementsByClassName("module landingpage")[0];
elementMap["portt-hub"] = document.getElementsByClassName("module portt-hub")[0];


//Functions
elementMap["account-codes"] = document.getElementsByClassName("feature accountcodes")[0];
elementMap["benefits"] = document.getElementsByClassName("feature benefits")[0];
elementMap["compliance-types"] = document.getElementsByClassName("feature compliancetypes")[0];
elementMap["compliance"] = document.getElementsByClassName("feature compliance")[0];
elementMap["compliance-basic"] = document.getElementsByClassName("feature compliancebasic")[0];
elementMap["issues"] = document.getElementsByClassName("feature issues")[0];
elementMap["sharing"] = document.getElementsByClassName("feature sharing")[0];
elementMap["stakeholders"] = document.getElementsByClassName("feature stakeholders")[0];
elementMap["stakeholders-basic"] = document.getElementsByClassName("feature stakeholdersbasic")[0];
elementMap["contract-types"] = document.getElementsByClassName("feature contracttypes")[0];
elementMap["workflow-basic"] = document.getElementsByClassName("feature workflowbasic")[0];
elementMap["workflow-advanced"] = document.getElementsByClassName("feature workflowadvanced")[0];
elementMap["milestone-types"] = document.getElementsByClassName("feature milestonetypes")[0];
elementMap["organization-assessments"] = document.getElementsByClassName("feature organizationassessments")[0];
elementMap["organization-certifications"] = document.getElementsByClassName("feature organizationcertifications")[0];
elementMap["panel-hierarchies"] = document.getElementsByClassName("feature panelhierarchies")[0];
elementMap["panel-types"] = document.getElementsByClassName("feature paneltypes")[0];
elementMap["rate-types"] = document.getElementsByClassName("feature ratetypes")[0];
elementMap["supplier-performance"] = document.getElementsByClassName("feature supplierperformance")[0];
elementMap["template-generation"] = document.getElementsByClassName("feature templategeneration")[0];
elementMap["unit-types"] = document.getElementsByClassName("feature unittypes")[0];

//Declaration section over. Poorly written logic lies ahead. I kinda admire CPP, all of the above would be put in a header file. 



//store a map of all option buttons
//an object is stored against a map
let optionButtonMap = new Map();

//Option buttons are all of the selectable buttons on the left hand column of the build your implementation form
//We loop over all of these buttons and store an object that contains a reference back to the HTML element as well as some other helper properties
//Previously a lot of this was stored across multiple maps.
for(optionButton of document.getElementsByClassName("optionbutton")){
  //Formats the class name of the button into the same format as the friendly names used in our Maps
  var option = optionButton.className.replace("optionbutton ", "").replace(" w-button", "");
  //Placeholder variable - originally this was declared and stored at the same time but ran into unrelated issues that arrose become I'm incompotent and so is JS
  var element = {
    //Stores the HTML element so I can find the original element if necessary
    htmlElement: optionButton,
    //true = option has been selected
    enabled: false,
    //stores the friendly names in array of any modules or functions that are linked
    optionConfiguration: optionConfiguration[option]
  }
   //store object
  optionButtonMap[option] = element;
  //The elements stored are no longer necessary so may as well free up some memory
  optionConfiguration.delete(option);

}


//Takes an input string and removes the unneccessary portions of the class name
//Only really meant for formatting optionButtons. Something a little more complex will be necessary if I want this to handle all elements
function convertToFriendly(inputName){
  return inputName.replace("optionbutton ", "").replace(" w-button", "");
}

//Determines if the input option has already been enabled
//If already enabled, set enabled to false
//Else set enabled to true
function flipBool(option){
  if(optionButtonMap[option].enabled){
    optionButtonMap[option].enabled = false;
  }
  else if(!optionButtonMap[option].enabled){
    optionButtonMap[option].enabled = true;
  }
}


//
//Works through each option in the optionMap
//The first loop block hides all modules and features
//The second loop only reenables those that should be enabled
//
function updateInterface(){
  
  //Hides all options
  for(option in optionButtonMap){
    for(element in optionButtonMap[option].optionConfiguration){
      var targetElement = optionButtonMap[option].optionConfiguration[element];
      if(typeof elementMap[targetElement] === 'undefined'){//why the f does JS work like this? I mean I probably just dont understand the language
      }
      else{
        elementMap[targetElement].setAttribute('style', 'display:none');        
      }
    }
  }


  //Shows all options that are enabled
  for(option in optionButtonMap){
    if(optionButtonMap[option].enabled){
      for(element in optionButtonMap[option].optionConfiguration){
        var targetElement = optionButtonMap[option].optionConfiguration[element];
        if(typeof elementMap[targetElement] === 'undefined'){//why the f does JS work like this? I mean I probably just dont understand the language
        }
        else{
          elementMap[targetElement].setAttribute('style', 'display:visible');        
        }
      }
    }
  }


}

//This is the event that is called any time an optionButton is clicked
//The paramater 'option' is the element that called this function
function optionSelected(option){
  var optionSelected = option.target;
  var friendlyOptionName = convertToFriendly(option.target.className);
  flipBool(friendlyOptionName);
  updateInterface();
}

function optionHoveredOver(option){
  console.log(option.target);
  var optionSelected = option.target;
  var friendlyOptionName = convertToFriendly(option.target.className);
  flipBool(friendlyOptionName);
  updateInterface();
}

function optionHoverLeave(option){
  var optionSelected = option.target;
  var friendlyOptionName = convertToFriendly(option.target.className);
  flipBool(friendlyOptionName);
  updateInterface();
}



//Add event listener to all buttons
function addEventListeners(){

  //call this once at runtime in order to ensure all options are hidden
  updateInterface();

  //loop over each button in the map
  //And add an event listener
  for(option in optionButtonMap){
    document.getElementsByClassName(optionButtonMap[option].htmlElement.className)[0].addEventListener("click", optionSelected);
    document.getElementsByClassName(optionButtonMap[option].htmlElement.className)[0].addEventListener("mouseover", optionHoveredOver);
    document.getElementsByClassName(optionButtonMap[option].htmlElement.className)[0].addEventListener("mouseout", optionHoverLeave);
  }
}

addEventListeners();

//a
