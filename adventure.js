//Forward://
//Maps are defined as map_name[unique key] = value, used to store a value against a unique key
//Forward//

console.log("CHOOSE YOUR OWN ADVENTURE SCRIPT 'adventure.js' LOADED!");
console.log("WHY JAVASCRIPT? WHY?");



//DECLARATION SECTION
//Stores a reference to the HTML element against a friendly name
//optionControlMap[Friendly Name] = HTML element
 

let optionControlMap = new Map();
optionControlMap["contract-register"] = document.getElementsByClassName("optionbutton contract-register w-button")[0];
optionControlMap["endorsements"] = document.getElementsByClassName("optionbutton endorsements w-button")[0];
optionControlMap["milestones"] = document.getElementsByClassName("optionbutton milestones w-button")[0];
optionControlMap["collaborate-with-vendors"] = document.getElementsByClassName("optionbutton collaborate-with-vendors w-button")[0];
optionControlMap["contract-issues"] = document.getElementsByClassName("optionbutton contract-issues w-button")[0];
optionControlMap["supplier-performance"] = document.getElementsByClassName("optionbutton supplier-performance w-button")[0];
optionControlMap["schedule-of-rates"] = document.getElementsByClassName("optionbutton schedule-of-rates w-button")[0];
optionControlMap["panels"] = document.getElementsByClassName("optionbutton panels w-button")[0];
optionControlMap["compliance"] = document.getElementsByClassName("optionbutton compliance w-button")[0];
optionControlMap["spend-tracking"] = document.getElementsByClassName("optionbutton spend-tracking w-button")[0];
optionControlMap["track-benefits"] = document.getElementsByClassName("optionbutton track-benefits w-button")[0];
optionControlMap["complex-compliance"] = document.getElementsByClassName("optionbutton complex-compliance w-button")[0];
optionControlMap["collaborate-on-compliance"] = document.getElementsByClassName("optionbutton collaborate-on-compliance w-button")[0];
optionControlMap["organisation-information"] = document.getElementsByClassName("optionbutton organisation-information w-button")[0];
optionControlMap["process-information"] = document.getElementsByClassName("optionbutton process-information w-button")[0];

//Used to track what options have been enabled/disabled.


let optionEnabledMap = new Map();
optionEnabledMap["contract-register"] = false;
optionEnabledMap["endorsements"] = false;
optionEnabledMap["milestones"] = false;
optionEnabledMap["collaborate-with-vendors"] = false; 
optionEnabledMap["contract-issues"] = false;
optionEnabledMap["supplier-performance"] = false;
optionEnabledMap["schedule-of-rates"] = false;
optionEnabledMap["panels"] = false;
optionEnabledMap["compliance"] = false;
optionEnabledMap["spend-tracking"] = false;
optionEnabledMap["track-benefits"] = false;
optionEnabledMap["complex-compliance"] = false;
optionEnabledMap["collaborate-on-compliance"] = false;
optionEnabledMap["organisation-information"] = false;
optionEnabledMap["process-information"] = false;

//optionControlMap["contract-register"].addEventListener("click", contract-register);

//Option declaration over

//Map houses the functions and modules
//Originally two seperate maps, but combined for easiness
//elementMap[Friendly Name for Element] = reference to HTML element
//getElementsByClassName returns an array, the item we want is always the first element in the array. 


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

//Option Array - Configure the different options
//These arrays contain the friendly names for elements found in elementMap
//option_name = [elementMap key]
option_contractRegister = ["account-codes", "contract-types", "workflow-basic", "stakeholders-basic", "core", "compliance-basic", "contract", "organization", "report", "stakeholders"];
option_endorsements = ["workflow-advanced", "compliance", "account-codes", "contract-types", "workflow-basic", "stakeholders-basic", "core", "compliance-basic", "contract", "organization"];
option_milestones = ["milestone-types", "contract", "core"];
option_collaborateWithVendors = ["portt-hub", "sharing", "contract", "core", "organization"];
option_contractIssues = ["issues", "contract", "core", "organization"];
option_supplierPerformance = ["supplier-performance", "organization-assessments", "issues", "analytics", "contract", "core", "organization"]; 
option_scheduleOfRates = ["rate-types", "unit-types", "panel", "contract", "core", "organization"];
option_panels = ["panel-types", "panel-hierarchies", "contract", "core", "organization"];
option_compliance = ["compliance-types", "template-generation", "compliance", "contract", "core", "organization", "procurement"];
option_spendTracking = ["financial", "contract-types", "workflow-basic"];
option_trackBenefits = ["benefits"];
option_complexCompliance = ["compliance"];
option_collaborateOnCompliance = ["portt-hub", "sharing", "organization-certifications", "organization-assessments"];
option_organisationInformation = ["analytics", "landing-page"];
option_processInformation = ["landing-page"];

//A map of all options where the option array is stored against a friendly name for the option
//options[Friendly Name for Option] = option array
let options = new Map();
options["contract-register"] = option_contractRegister;
options["endorsements"] = option_endorsements;
options["milestones"] = option_milestones;
options["collaborate-with-vendors"] = option_collaborateWithVendors; 
options["contract-issues"] = option_contractIssues;
options["supplier-performance"] = option_supplierPerformance;
options["schedule-of-rates"] = option_scheduleOfRates;
options["panels"] = option_panels;
options["compliance"] = option_compliance;
options["spend-tracking"] = option_spendTracking;
options["track-benefits"] = option_trackBenefits;
options["complex-compliance"] = option_complexCompliance;
options["collaborate-on-compliance"] = option_collaborateOnCompliance;
options["organisation-information"] = option_organisationInformation;
options["process-information"] = option_processInformation;

//DECLARATION SECTION OVER

//Event Listeners//
//This shit is supremely ugly
//This is all Brendan Eich's fault 

btn = optionControlMap['contract-register'];

btn.onclick = function eventFunction(){
  console.log("contract-register");
  if(!optionEnabledMap["contract-register"])
    optionEnabledMap["contract-register"] = true;
  else                                      
    optionEnabledMap["contract-register"] = false;
  updateFunctions();
};

btn = optionControlMap['endorsements'];

btn.onclick = function eventFunction(){
  console.log('endorsements');
  if(!optionEnabledMap['endorsements'])
    optionEnabledMap['endorsements'] = true;
  else                                      
    optionEnabledMap['endorsements'] = false;
  updateFunctions();
};

btn = optionControlMap['milestones'];

btn.onclick = function eventFunction(){
  console.log('milestones');
  if(!optionEnabledMap['milestones'])
    optionEnabledMap['milestones'] = true;
  else                                      
    optionEnabledMap['milestones'] = false;
  updateFunctions();
};

btn = optionControlMap['collaborate-with-vendors'];

btn.onclick = function eventFunction(){
  console.log('collaborate-with-vendors');
  if(!optionEnabledMap['collaborate-with-vendors'])
    optionEnabledMap['collaborate-with-vendors'] = true;
  else                                      
    optionEnabledMap['collaborate-with-vendors'] = false;
  updateFunctions();
};

btn = optionControlMap["contract-issues"];

btn.onclick = function eventFunction(){
  console.log('contract-issues');
  if(!optionEnabledMap['contract-issues'])
    optionEnabledMap['contract-issues'] = true;
  else                                      
    optionEnabledMap['contract-issues'] = false;
  updateFunctions();
};

btn = optionControlMap["supplier-performance"];

btn.onclick = function eventFunction(){
  console.log('supplier-performance');
  if(!optionEnabledMap['supplier-performance'])
    optionEnabledMap['supplier-performance'] = true;
  else                                      
    optionEnabledMap['supplier-performance'] = false;
  updateFunctions();
};

btn = optionControlMap["schedule-of-rates"];

btn.onclick = function eventFunction(){
  console.log('schedule-of-rates');
  if(!optionEnabledMap['schedule-of-rates'])
    optionEnabledMap['schedule-of-rates'] = true;
  else                                      
    optionEnabledMap['schedule-of-rates'] = false;
  updateFunctions();
};

btn = optionControlMap["panels"];

btn.onclick = function eventFunction(){
  console.log('panels');
  if(!optionEnabledMap['panels'])
    optionEnabledMap['panels'] = true;
  else                                      
    optionEnabledMap['panels'] = false;
  updateFunctions();
};

btn = optionControlMap["compliance"];

btn.onclick = function eventFunction(){
  console.log('compliance');
  if(!optionEnabledMap['compliance'])
    optionEnabledMap['compliance'] = true;
  else                                      
    optionEnabledMap['compliance'] = false;
  updateFunctions();
};

btn = optionControlMap["spend-tracking"];

btn.onclick = function eventFunction(){
  console.log('spend-tracking');
  if(!optionEnabledMap['spend-tracking'])
    optionEnabledMap['spend-tracking'] = true;
  else                                      
    optionEnabledMap['spend-tracking'] = false;
  updateFunctions();
};

btn = optionControlMap["track-benefits"];

btn.onclick = function eventFunction(){
  console.log('track-benefits');
  if(!optionEnabledMap['track-benefits'])
    optionEnabledMap['track-benefits'] = true;
  else                                      
    optionEnabledMap['track-benefits'] = false;
  updateFunctions();
};

btn = optionControlMap["complex-compliance"];

btn.onclick = function eventFunction(){
  console.log('complex-compliance');
  if(!optionEnabledMap['complex-compliance'])
    optionEnabledMap['complex-compliance'] = true;
  else                                      
    optionEnabledMap['complex-compliance'] = false;
  updateFunctions();
};

btn = optionControlMap["collaborate-on-compliance"];

btn.onclick = function eventFunction(){
  console.log('collaborate-on-compliance');
  if(!optionEnabledMap['collaborate-on-compliance'])
    optionEnabledMap['collaborate-on-compliance'] = true;
  else                                      
    optionEnabledMap['collaborate-on-compliance'] = false;
  updateFunctions();
};

btn = optionControlMap["organisation-information"];

btn.onclick = function eventFunction(){
  console.log('organisation-information');
  if(!optionEnabledMap['organisation-information'])
    optionEnabledMap['organisation-information'] = true;
  else                                      
    optionEnabledMap['organisation-information'] = false;
  updateFunctions();
};

btn = optionControlMap["process-information"];

btn.onclick = function eventFunction(){
  console.log('process-information');
  if(!optionEnabledMap['process-information'])
    optionEnabledMap['process-information'] = true;
  else                                      
    optionEnabledMap['process-information'] = false;
  updateFunctions();
};

//Event Listeners//

updateFunctions();


//Firstly loops through all disabled options, and disables the elements/functions part of their config. 
//Secondly loops through all of the enabled options, and ebales the elements/functions part of their config. 
//This should remove the issue where elements required as part of enabled options were being disabled when one of the options was disabled
//By looping through and finding out where those elements are still required
//In laymans terms, we disable everything, and then only reenable the items that are necessary
function updateFunctions(){
  
  for(option in optionControlMap){
    //console.log(option);  
    if(optionEnabledMap[option] == false){
      for(element of options[option]){
        //remove heighlight
        console.log(element);
        elementMap[element].setAttribute('style', 'display:none');
        console.log(element);
      }
    }
  }

  for(option in optionControlMap){
    if(optionEnabledMap[option] == true){
      for(element of options[option]){
        
        //What happens to functions that have been selected
        //i.e. they glow to show they've been selected
        //innerContent should just change the text
        elementMap[element].setAttribute('style', 'display:visible');
        //square overlay that's a background tint cyan or purple tint
        
      }
    }
  }

}

//Probably no longer useful, this was an actually clean solution
//Now it's all just hard coded bs
function optionSelected(optionName){
  console.log(optionName)
  console.log("Event Handler: Option Selected - " + optionName);
  if(optionName == null){
    console.log("No option selected, yet event handler 'optionSelected' was called");
    return false;
  }
  else if(!optionControlMap[optionName]){optionControlMap[optionName] = true;}
  else{optionControlMap[optionName] = false;}
  updateFunctions();
}

