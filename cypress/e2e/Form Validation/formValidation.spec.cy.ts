import { testData } from "../Constant/testData/formValidationTestData";

describe('Form validation', () => {

    beforeEach(() => { 
        cy.visit('http://127.0.0.1:5173/')
    })
   
    // Loop through the test data   
    testData.forEach(({name, username, email, phone, testcase}) => {
        it(`${testcase}`, () => {
            cy.get('[id="name"]').clear();
            cy.get('[id="username"]').clear();
            cy.get('[id="email"]').clear();
            cy.get('[type="tel"]').clear();

            // Type the input fields values if they are not null
            if (name.value !== null) {
                cy.get('[name="name"]').type(name.value);
            }      
            if (username.value !== null) {
                cy.get('[name="username"]').type(username.value);
            }      
            if (email.value !== null) {
                cy.get('[name="email"]').type(email.value);
            }      
            if (phone.value !== null) {
                cy.get('[name="phone"]').type(phone.value);
            }
            
            //Click the "Submit" button
            cy.get('[type="submit"]').click(); 

            //Check the validation error message
            if (name.expectError && name.validationmsg) {
                 cy.get('[data-cy="nameError"]').should('contain', name.validationmsg); 
            }
            if (username.expectError && username.validationmsg) {
                cy.get('[data-cy="userNameError"]').should('contain', username.validationmsg); 
            }
            if (email.expectError && email.validationmsg) {
                cy.get('[data-cy="emailError"]').should('contain', email.validationmsg); 
            }
            if (phone.expectError && phone.validationmsg) {
                cy.get('[data-cy="phoneError"]').should('contain', phone.validationmsg); 
            }

            // Add a delay of 2 seconds (2000 milliseconds) after each test case for better view in cypress tool with validations
            cy.wait(1000);
        });
       
    });
});








  
  
  