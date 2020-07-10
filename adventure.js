//Forward://
//Maps are defined as map_name[unique key] = value, used to store a value against a unique key
//Forward//

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
elementMap["contract"] = document.getElementsByClassName("module contract w-richtext")[0];
elementMap["procurement"] = document.getElementsByClassName("module procurement w-richtext")[0];
elementMap["organization"] = document.getElementsByClassName("module organization w-richtext")[0];
elementMap["core"] = document.getElementsByClassName("module core w-richtext")[0];
elementMap["panel"] = document.getElementsByClassName("module panel w-richtext")[0];
elementMap["report"] = document.getElementsByClassName("module report w-richtext")[0];
elementMap["analytics"] = document.getElementsByClassName("module module analytics w-richtext")[0];
elementMap["financial"] = document.getElementsByClassName("module financial w-richtext")[0];
elementMap["landing-page"] = document.getElementsByClassName("module landingpage w-richtext")[0];
elementMap["portt-hub"] = document.getElementsByClassName("module portt-hub w-richtext")[0];

//Functions
elementMap["account-codes"] = document.getElementsByClassName("feature accountcodes w-richtext")[0];
elementMap["benefits"] = document.getElementsByClassName("feature benefits w-richtext")[0];
elementMap["compliance-types"] = document.getElementsByClassName("feature compliancetypes w-richtext")[0];
elementMap["compliance"] = document.getElementsByClassName("feature compliance w-richtext")[0];
elementMap["compliance-basic"] = document.getElementsByClassName("feature compliance basic w-richtext")[0];
elementMap["issues"] = document.getElementsByClassName("feature issues w-richtext")[0];
elementMap["sharing"] = document.getElementsByClassName("feature sharing w-richtext")[0];
elementMap["stakeholders"] = document.getElementsByClassName("feature stakeholders w-richtext")[0];
elementMap["stakeholders-basic"] = document.getElementsByClassName("feature stakeholders basic w-richtext")[0];
elementMap["contract-types"] = document.getElementsByClassName("feature contracttypes w-richtext")[0];
elementMap["workflow-basic"] = document.getElementsByClassName("feature workflow basic w-richtext")[0];
elementMap["workflow-advanced"] = document.getElementsByClassName("feature workflow advanced w-richtext")[0];
elementMap["milestone-types"] = document.getElementsByClassName("feature milestonetypes w-richtext")[0];
elementMap["organization-assessments"] = document.getElementsByClassName("feature organizationassessments w-richtext")[0];
elementMap["organization-certifications"] = document.getElementsByClassName("feature organizationcertification w-richtext")[0];
elementMap["panel-hierarchies"] = document.getElementsByClassName("feature panelhierarchies w-richtext")[0];
elementMap["panel-types"] = document.getElementsByClassName("feature paneltypes w-richtext")[0];
elementMap["rate-types"] = document.getElementsByClassName("feature ratetypes w-richtext")[0];
elementMap["supplier-performance"] = document.getElementsByClassName("feature supplierperformance w-richtext")[0];
elementMap["template-generation"] = document.getElementsByClassName("feature templategeneration w-richtext")[0];
elementMap["unit-types"] = document.getElementsByClassName("feature unittypes w-richtext")[0];

//Option Array - Configure the different options
//These arrays contain the friendly names for elements found in elementMap
//option_name = [elementMap key]
option_contractRegister = ["account-codes", "contract-types", "workflow-basic", "stakeholders-basic", "core", "compliance-basic"];
option_endorsements = ["workflow-advanced", "compliance"];
option_milestones = ["milestone-types"];
option_collaborateWithVendors = ["portt-hub", "sharing"];
option_contractIssues = ["issues"];
option_supplierPerformance = ["supplier-performance", "organization-assessments", "issues", "analytics"]; 
option_scheduleOfRates = ["rate-types", "unit-types", "panel"];
option_panels = ["panel-types", "panel-hierarchies"];
option_compliance = ["compliance-types", "template-generation"];
option_spendTracking = ["financial"];
option_trackBenefits = ["benefits"];
option_complexCompliance = ["compliance"];
option_collaborateOnCompliance = ["portt-hub", "sharing", "organization-certifications", "organization-assessments"];
option_organisationInformation = ["analytics", "landing-page"];
option_processInformation = ["landing-page"];

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
optionControlMap["contract-register"].addEventListener("click", updateFunctions("contract-register"));
optionControlMap["endorsements"].addEventListener("click", updateFunctions("endorsements"));
optionControlMap["milestones"].addEventListener("click", updateFunctions("milestones"));
optionControlMap["collaborate-with-vendors"].addEventListener("click", updateFunctions("collaborate-with-vendors"));
optionControlMap["contract-issues"].addEventListener("click", updateFunctions("contract-issues"));
optionControlMap["supplier-performance"].addEventListener("click", updateFunctions("supplier-performance"));
optionControlMap["schedule-of-rates"].addEventListener("click", updateFunctions("schedule-of-rates"));
optionControlMap["panels"].addEventListener("click", updateFunctions("panels"));
optionControlMap["compliance"].addEventListener("click", updateFunctions("compliance"));
optionControlMap["spend-tracking"].addEventListener("click", updateFunctions("spend-tracking"));
optionControlMap["track-benefits"].addEventListener("click", updateFunctions("track-benefits"));
optionControlMap["complex-compliance"].addEventListener("click", updateFunctions("complex-compliance"));
optionControlMap["collaborate-on-compliance"].addEventListener("click", updateFunctions("collaborate-on-compliance"));
optionControlMap["organisation-information"].addEventListener("click", updateFunctions("organisation-information"));
optionControlMap["process-information"].addEventListener("click", updateFunctions("process-information"));
//Event Listeners//

updateFunctions();


//Firstly loops through all disabled options, and disables the elements/functions part of their config. 
//Secondly loops through all of the enabled options, and ebales the elements/functions part of their config. 
//This should remove the issue where elements required as part of enabled options were being disabled when one of the options was disabled
//By looping through and finding out where those elements are still required
//In laymans terms, we disable everything, and then only reenable the items that are necessary
function updateFunctions(){
  
  for(option in optionControlMap){
    if(optionControlMap[option] == false){
      for(element of options[option]){
        //remove heighlight
        elementMap[element].setAttribute('style', 'background-color:none');
      }
    }
  }

  for(option in optionControlMap){
    if(optionControlMap[option] == true){
      for(element of options[option]){
        //What happens to functions that have been selected
        //i.e. they glow to show they've been selected
        //innerContent should just change the text
        elementMap[element].setAttribute('style', 'background-color:blue');
        //square overlay that's a background tint cyan or purple tint
      }
    }
  }

}

function optionSelected(optionName){
  if(optionName == null){
    console.log("No option selected, yet event handler 'optionSelected' was called");
    return false;
  }
  if(!optionControlMap[optionName]){optionControlMap[optionName] = true;}
  else{optionControlMap[optionName] = false;}
  updateFunctions();
}

