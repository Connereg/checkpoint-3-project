const existingemployeeinfoArray = require("../testAssets/existingemployeeinfoArray.js")

var employeeManagerCommands = {
 
    checkSearch: function(existingemployeeinfo){
        //Finding Searchbar And Enetering the Current name in the starting Loop
        this    
                .waitForElementPresent('input[name="searchBox"]')
                .click('input[name="searchBox"]')
                .clearValue('input[name="searchBox"]')
                .pause(1000)
                .setValue('input[name="searchBox"]', existingemployeeinfo.startingName)
        //Clicking the Employee Name in List to Open Employee Card/ Verifying Correct Original Card
                .pause(1000)
                .click(`li[name="employee${existingemployeeinfo.startingID}"]`)
                .verify.containsText('#employeeTitle', existingemployeeinfo.startingName)
        return this

    },
    checkCancelButton: function(existingemployeeinfo){
        this
            .pause(1000)
            .clearValue('@nameField')
            .setValue('@nameField', existingemployeeinfo.temptestname)
            .pause(500)
            .clearValue('@phoneField')
            .pause(500)
            .setValue('@phoneField', existingemployeeinfo.temptestPhone)
            .pause(500)
            .clearValue('@emailField')
            .pause(500)
            .setValue('@emailField', existingemployeeinfo.tesptestEmail)
            .pause(500)
            .clearValue('@titleField')
            .setValue('@titleField', existingemployeeinfo.temptestTitle)
            .pause(2000)
            .click('@cancelButton')
            .pause(2000)
        return this
        
    },
    verifyCancelButton: function(existingemployeeinfo){
        this.
                pause(2000)
            this.expect.element('@nameField').value.to.equal(existingemployeeinfo.startingName)
            this.pause(1000)
            this.expect.element('@phoneField').value.to.equal(existingemployeeinfo.startingPhone)
            this.pause(1000)
            this.expect.element('@emailField').value.to.equal(existingemployeeinfo.startingEmail)
            this.pause(1000)
            this.expect.element('@titleField').value.to.equal(existingemployeeinfo.startingTitle)
            this.pause(1000)
            this.click('button[name="clearSearch"]')
        return this
    
    },
    checkCreateNewEmployee: function(existingemployeeinfo){
        this.navigate()
            .pause(1000)
            .click('@addButton')
            .pause(1000)
            .click('@newEmployee')
            .pause(1000)
            .clearValue('@nameField')
            .pause(1000)
            .setValue('@nameField', existingemployeeinfo.temptestName)
            .pause(1000)
            .clearValue('@phoneField')
            .setValue('@phoneField', existingemployeeinfo.temptestPhone)
            .pause(1000)
            .clearValue('@emailField')
            .pause(1000)
            .setValue('@emailField', existingemployeeinfo.temptestEmail)
            .pause(1000)
            .clearValue('@titleField')
            .pause(1000)
            .setValue('@titleField', existingemployeeinfo.temptestTitle)
            .pause(1000)
            .click('@saveButton')
        return this
    },
    verifyCreateNewEmployee: function(existingemployeeinfo){
        this.navigate()
        this.click('@connerisLearning')
        this.expect.element('@nameField').value.to.equal(existingemployeeinfo.temptestName)
            this.pause(500)
            this.expect.element('@phoneField').value.to.equal(existingemployeeinfo.temptestPhone)
            this.pause(500)
            this.expect.element('@emailField').value.to.equal(existingemployeeinfo.temptestEmail)
            this.pause(500)
            this.expect.element('@titleField').value.to.equal(existingemployeeinfo.temptestTitle)
        return this
    },
    makeemployeetoDelete: function(){
        this.navigate()
            .pause(1000)
            .click('@addButton')
            .pause(1000)
            .click('@newEmployee')
            .clearValue('@nameField')
            .pause(1000)
            .setValue('@nameField', "THIS IS FOR DELETION")
            .click('@saveButton')
        return this

    },


    deleteNewEmployee: function(){
        this.navigate()
            .click('@markedforDeletion')
            .click("@deleteButton")
            .api.acceptAlert()
        return this
    },
    crazyloopIdea1: function(existingemployeeinfoArray){
        this 
            .checkSearch(existingemployeeinfoArray)
            .checkCancelButton(existingemployeeinfoArray)
            .verifyCancelButton(existingemployeeinfoArray) 
            .checkCreateNewEmployee(existingemployeeinfoArray)
            .verifyCreateNewEmployee(existingemployeeinfoArray)
            .makeemployeetoDelete()
            .deleteNewEmployee()
        return this
    }

}
    
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeManagerCommands],
    elements: {
        versionNumber: 'footer',
        addButton: 'li[name="addEmployee"]',
        newEmployee: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        connerisLearning: {
            selector: '//li[text()="Conner is learning"]',
            locateStrategy: 'xpath'
        },
        markedforDeletion: {
            selector: '//li[text()="THIS IS FOR DELETION"]',
            locateStrategy: 'xpath'
        },
        cardTitle: '#employeeTitle',
        nameField: 'input[name="nameEntry"]',
        emailField: 'input[name="emailEntry"]',
        phoneField: 'input[name="phoneEntry"]',
        titleField: 'input[name="titleEntry"]',
        saveButton: '#saveBtn',
        cancelButton: 'button[name="cancel"]',
        deleteButton: 'button[name="delete"]',
    }
}

/* 



for (let i = 0, let j = 0; i< existingemployeeinfoArray.length, j < existingemployeeinfoArray.length; i++, j++) {
  
}











clickEmployee: function(employeeName) {
    this.api.useXpath()
    this.click(`//li[text()="${employeeName}"]`)
    this.api.useCss()
    return this
}, 
editEmployee: function(employeeInfo){
    if(employeeInfo.name){
        this
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', employeeInfo.name)
    }
    if(employeeInfo.phone){
        this
            .clearValue('input[name="emailEntry"]')
            .setValue('input[name="emailEntry"]', employeeInfo.phone)
    }
    if(employeeInfo.email){
        this
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', employeeInfo.email)
    
    }       
    if(employeeInfo.title){
        this
            .clearValue('input[name="titleEntry"]', employeeInfo.title)
            .setValue('input[name="titleEntry"]', employeeInfo.title)
    }
    return this
   */