const storage = new Map();

const savePerson = () => {
  const fnameElement = document.getElementById("fname").value;
  const lnameElement = document.getElementById("lname").value;
  const addressElement = document.getElementById("add").value;
  const cityElement = document.getElementById("city").value;
  const provinceElement = document.getElementById("pro").value;
  const pcodeElement = document.getElementById("pos").value;
  const phonenoElement = document.getElementById("phone").value;
  const emailElement = document.getElementById("email").value;
  const notesElement = document.getElementById("notes").value;
  const errorMessage = document.getElementById("error");
 

  function PostalCode(pcodeElement) {
    const postalCodeRegex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i);

    if (pcodeElement.match(postalCodeRegex)) {
      return true;
    } else {
      Message+="Postal code must have A8Y 2K9 format!\n";
    }
  }

  function phonenumber(phonenoElement) {
    var phoneno = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    if (phonenoElement.match(phoneno)) {
      return true;
    } else {
      Message+="Phone Number must have 000-000-0000 format!\n";
    }
  }
  
 let Message="";
  if (fnameElement == "" || fnameElement == null) {
    Message="First Name is Required!\n";
  }
   if(lnameElement == "" || lnameElement == null) {const storage = new Map();

    const savePerson = () => {
      const fnameElement = document.getElementById("fname").value;
      const lnameElement = document.getElementById("lname").value;
      const addressElement = document.getElementById("add").value;
      const cityElement = document.getElementById("city").value;
      const provinceElement = document.getElementById("pro").value;
      const pcodeElement = document.getElementById("pos").value;
      const phonenoElement = document.getElementById("phone").value;
      const emailElement = document.getElementById("email").value;
      const notesElement = document.getElementById("notes").value;
      const errorMessage = document.getElementById("error");
     
    
      function PostalCode(pcodeElement) {
        const postalCodeRegex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i);
    
        if (pcodeElement.match(postalCodeRegex)) {
          return true;
        } else {
          Message+="Postal code must have A8Y 2K9 format!\n";
        }
      }
    
      function phonenumber(phonenoElement) {
        var phoneno = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
        if (phonenoElement.match(phoneno)) {
          return true;
        } else {
          Message+="Phone Number must have 000-000-0000 format!\n";
        }
      }
      
     let Message="";
      if (fnameElement == "" || fnameElement == null) {
        Message="First Name is Required!\n";
      }
       if(lnameElement == "" || lnameElement == null) {
        Message+=" Last Name is Required! \n";
      }
      if(addressElement == "" || addressElement == null)
      {
        Message+=" Address is Required!\n";
      }
     if (cityElement == "" || cityElement == null) {
      Message+=" City is Required!\n";
      } if (provinceElement == "" || provinceElement == null) {
      Message+=" Province is Required!\n";
      } if (pcodeElement =="" || pcodeElement== null) {
        Message+=" Postal code is Required!\n";
      }
       if(pcodeElement !="" || pcodeElement != null){
        PostalCode(pcodeElement);
      }
         
    if (phonenoElement =="" || phonenoElement== null) {
          Message+=" Phone number is Required!\n";
          }
      if(phonenoElement !="" || phonenoElement != null)
      {
        phonenumber(phonenoElement);
      }
      if(emailElement == "" || emailElement == null) {
        Message+=" Email is Required! \n";
      }if(notesElement == "" || notesElement == null) {
        Message+=" Notes are Required! \n";
      }
      
      if (Message.length > 0) {
        errorMessage.innerText = Message;
      }
      else{
    
    
      const id = storage.size + 1;
    
    
      const person = {
        id,
        fnameElement,
        lnameElement,
        addressElement,
        cityElement,
        provinceElement,
        pcodeElement,
        phonenoElement,
        emailElement,
        notesElement,
      };
    
      storage.set(id, person);
      
      displayPerson(person);
      showDiv("display");
      
    }
    };
    
    const showDiv = (name) => {
      const homeElement = document.getElementById("home");
      const formElement = document.getElementById("form");
      const displayElement = document.getElementById("display");
      const searchElement = document.getElementById("search");
      if (name === "home") {
        formElement.style.display = "none";
        homeElement.style.display = "block";
        displayElement.style.display = "none";
        searchElement.style.display = "none";
      } else if (name === "display") {
        formElement.style.display = "none";
        homeElement.style.display = "none";
        displayElement.style.display = "block";
        searchElement.style.display = "none";
      } else if (name === "form") {
        formElement.style.display = "block";
        homeElement.style.display = "none";
        displayElement.style.display = "none";
        searchElement.style.display = "none";
      } else {
        formElement.style.display = "none";
        homeElement.style.display = "none";
        displayElement.style.display = "none";
        searchElement.style.display = "block";
      }
    };
    
    const displayPerson = (person) => {
      
      const errorMessage = document.getElementById("error");
      errorMessage.innerHTML=null;
      const personElement = document.getElementById("person");
      personElement.innerHTML = `
      <p>Id: ${person.id}</p>
      <p>First Name: ${person.fnameElement}</p>
      <p>Last Name: ${person.lnameElement}</p>
      <p>Address: ${person.addressElement}</p>
      <p>City: ${person.cityElement}</p>
      <p>Province: ${person.provinceElement}</p>
      <p>Postal Code: ${person.pcodeElement}</p>
      <p>Phone number: ${person.phonenoElement}</p>
      <p>Email: ${person.emailElement}</p>
      <p>Notes: ${person.notesElement}</p>
      `;
    };
    
    const search = (id) => {
      const personElement = document.getElementById("id");
      storage.get(id);
      
      personElement.innerHTML = `
      <p>Id: ${person.id}</p>
      <p>First Name: ${person.fnameElement}</p>
      <p>Last Name: ${person.lnameElement}</p>
      <p>Address: ${person.addressElement}</p>
      <p>City: ${person.cityElement}</p>
      <p>Province: ${person.provinceElement}</p>
      <p>Postal Code: ${person.pcodeElement}</p>
      <p>Phone number: ${person.phonenoElement}</p>
      <p>Email: ${person.emailElement}</p>
      <p>Notes: ${person.notesElement}</p>
      `;
      showDiv("display");
    };
    
    Message+=" Last Name is Required! \n";
  }
  if(addressElement == "" || addressElement == null)
  {
    Message+=" Address is Required!\n";
  }
 if (cityElement == "" || cityElement == null) {
  Message+=" City is Required!\n";
  } if (provinceElement == "" || provinceElement == null) {
  Message+=" Province is Required!\n";
  } if (pcodeElement =="" || pcodeElement== null) {
    Message+=" Postal code is Required!\n";
  }
   else if(pcodeElement !="" || pcodeElement != null){
    PostalCode(pcodeElement);
  }
     
if (phonenoElement =="" || phonenoElement== null) {
      Message+=" Phone Number is Required!\n";
      }
  else if(phonenoElement !="" || phonenoElement != null)
  {
    phonenumber(phonenoElement);
  }
  if(emailElement == "" || emailElement == null) {
    Message+=" Email is Required! \n";
  }if(notesElement == "" || notesElement == null) {
    Message+=" Notes are Required! \n";
  }
  
  if (Message.length > 0) {
    errorMessage.innerText = Message;
  }
  else{


  const id = storage.size + 1;


  const person = {
    id,
    fnameElement,
    lnameElement,
    addressElement,
    cityElement,
    provinceElement,
    pcodeElement,
    phonenoElement,
    emailElement,
    notesElement,
  };

  storage.set(id, person);
  displayPerson(person);
  showDiv("display");
}
};

const showDiv = (name) => {
  const homeElement = document.getElementById("home");
  const formElement = document.getElementById("form");
  const displayElement = document.getElementById("display");
  const searchElement = document.getElementById("search");
  if (name === "home") {
    formElement.style.display = "none";
    homeElement.style.display = "block";
    displayElement.style.display = "none";
    searchElement.style.display = "none";
  } else if (name === "display") {
    formElement.style.display = "none";
    homeElement.style.display = "none";
    displayElement.style.display = "block";
    searchElement.style.display = "none";
  } else if (name === "form") {
    formElement.style.display = "block";
    homeElement.style.display = "none";
    displayElement.style.display = "none";
    searchElement.style.display = "none";
  } else {
    formElement.style.display = "none";
    homeElement.style.display = "none";
    displayElement.style.display = "none";
    searchElement.style.display = "block";
  }
};

const displayPerson = (person) => {
  const errorMessage = document.getElementById("error");
  errorMessage.innerHTML=null;
  const personElement = document.getElementById("person");
  personElement.innerHTML = `
  <p>Id: ${person.id}</p>
  <p>First Name: ${person.fnameElement}</p>
  <p>Last Name: ${person.lnameElement}</p>
  <p>Address: ${person.addressElement}</p>
  <p>City: ${person.cityElement}</p>
  <p>Province: ${person.provinceElement}</p>
  <p>Postal Code: ${person.pcodeElement}</p>
  <p>Phone number: ${person.phonenoElement}</p>
  <p>Email: ${person.emailElement}</p>
  <p>Notes: ${person.notesElement}</p>
  `;
};

const search = (person) => {
  const personElement = document.getElementById("searchList");
  var i;

console.log("local storage");
for (i = 0; i < storage.length; i++)   {
    console.log(storage.key(i) + "=[" + storage.getItem(storage.key(i)) + "]");

  
  personElement.innerHTML = `
 <table><tr> <td>Id: ${person.id}</td>
  <td>First Name: ${person.fnameElement}</td>
  <td>Last Name: ${person.lnameElement}</td>
  <td>Address: ${person.addressElement}</td>
  <td>City: ${person.cityElement}</td>
  <td>Province: ${person.provinceElement}</td>
  <td>Postal Code: ${person.pcodeElement}</td>
  <td>Phone number: ${person.phonenoElement}</td>
  <td>Email: ${person.emailElement}</td>
  <td>Notes: ${person.notesElement}</td></tr></table>
  `;
}
  showDiv("display");

};
