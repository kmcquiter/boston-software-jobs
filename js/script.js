/*When the user clicks the "Add a company" button on the Companies page,
 a pop-up should appear that asks for a URL to a corporate logo. 
 You can use the file below (URL list for corporate logos.txt) for examples.
 
 1) create a prompt that says:

 Copy and paste URL of company logo
 
 create an if-else statement that if the user did not
 enter an url, then prompt them to use again.


 */

 function addCompany (){


        let companyLogo = prompt("Copy and paste URL company logo:");
        if (companyLogo === 0){


            prompt("Copy and paste URL company logo:");
    
        }
    
        else{
    
            document.getElementById('company-logos').innerHTML += `<img src ="${companyLogo}"></img>`;
        }
    }
    
  
        
    

    
 