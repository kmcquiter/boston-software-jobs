/*When the user clicks the "Add a company" button on the Companies page,
 a pop-up should appear that asks for a URL to a corporate logo. 
 You can use the file below (URL list for corporate logos.txt) for examples.
 
 1) create a prompt that says:

 Copy and paste URL of company logo
 
 create an if-else statement that if the user did not
 enter an url, then prompt them to use again.

Create a while loop that allows the user to 
enter multiple corporate logos.

 */

 function addCompany (){

    while(pastelogo !== 0){

    let pasteLogo = prompt("Copy and paste URL company logo:");
  
        
    if (pasteLogo === 0){

        alert(" Please Copy and paste URL company logo:")
    }

    else{

        document.getElementById('company-logos').innerHTML += `<img src ="${pasteLogo}"></img>`;
    }
}
    
 }