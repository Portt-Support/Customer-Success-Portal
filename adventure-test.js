//In progress rewrite to success portal CYI script

//configure the options used in each object
let optionConfiguration = new Map();
contractregister = ["account-codes", "contract-types", "workflow-basic", "stakeholders-basic", "core", "compliance-basic", "contract", "organization", "report", "stakeholders"];
endorsements = ["workflow-advanced", "compliance", "account-codes", "contract-types", "workflow-basic", "stakeholders-basic", "core", "compliance-basic", "contract", "organization"];
milestones = ["milestone-types", "contract", "core"];
collaboratewithvendors = ["portt-hub", "sharing", "contract", "core", "organization"];
contractissues = ["issues", "contract", "core", "organization"];
supplierperformance = ["supplier-performance", "organization-assessments", "issues", "analytics", "contract", "core", "organization"]; 
scheduleofrates = ["rate-types", "unit-types", "panel", "contract", "core", "organization"];
panels = ["panel-types", "panel-hierarchies", "contract", "core", "organization"];
compliance = ["compliance-types", "template-generation", "compliance", "contract", "core", "organization", "procurement"];
spendtracking = ["financial", "contract-types", "workflow-basic"];
trackbenefits = ["benefits"];
complexcompliance = ["compliance"];
collaborateoncompliance = ["portt-hub", "sharing", "organization-certifications", "organization-assessments"];
organisationinformation = ["analytics", "landing-page"];
processinformation = ["landing-page"];


//store a map of all option buttons
//an object is stored against a map
let optionButtonMap = new Map();

for(optionButton of document.getElementsByClassName("optionbutton")){

  var option = optionButton.className.replace("optionbutton ", "").replace(" w-button", "");
  
    optionButtonMap[option] = {
      htmlElement: optionButton,
      enabled: false,
      //stores the friendly names in array of any modules or functions that are linked
      optionConfiguration: []
    }
     
}

for(option in optionButtonMap){
  console.log(option.htmlElement);
}

optionButtonMap.forEach(optionButtonMap => {
  console.log('a');
  console.log(optionButtonMap.enabled);
})

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
