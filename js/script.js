/*When the user clicks the "Add a company" button on the Companies page,
 a pop-up should appear that asks for a URL to a corporate logo. 
 You can use the file below (URL list for corporate logos.txt) for examples.
 
 1) create a prompt that says:

 Copy and paste URL of company logo
 
 create an if-else statement that if the user did not
 enter an url, then prompt them to use again.

 *UPDATE*

 Create three empty arrays

 edit the function addCompany() and insert the three prompts
 push the info from the prompts into the arrays
 

 */

let nameArr = [];
let logoArr = [];
let aboutCompanyArr = [];

function addCompany(){

    let companyName = prompt("Enter the company name:");
    let companyLogo = prompt("Copy and paste URL company logo:");
    let aboutCompany = prompt("Say a little about the company:");

    nameArr.push(companyName);
    logoArr.push(companyLogo);
    aboutCompanyArr.push(aboutCompany);
    let logoImgList = [];
    let companyInfo = "";
   


        for(let i=0; i < logoArr.length; i++){

            logoImgList[i] = "<img src='" + logoArr[i] + "' width=150 height=150/>"; 

        }
        for(let i=0; i < nameArr.length; i++){
            companyInfo += "<div class='img-thumbnail company-info'>" + logoImgList[i] + "<br>" + nameArr[i] + "<br/>" + aboutCompanyArr[i] + "</div>";
        }
        document.getElementById("companies-inserted").innerHTML = companyInfo;
}