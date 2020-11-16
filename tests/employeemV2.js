var pageObject = {}
let employeeManagerCommands = require('../page-objects/employeemV2Page')
let existingemployeeinfoArray = require('../testAssets/existingemployeeinfoArray.js')
let tempemployeeinfoArray = require('../GitHubRepos/checkpoint-3-project/testAssets/tempemployeeinfo')
const { forEach } = require('../GitHubRepos/checkpoint-3-project/testAssets/tempemployeeinfo')


module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.employeemV2Page()
        pageObject
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        pageObject
        .end()

    },

    'console log test' : browser => {
        pageObject
        console.log(existingemployeeinfoArray[1])
    },
    'check 1' : browser => {
        pageObject
        existingemployeeinfoArray.forEach(existingemployeeinfo => {
                            pageObject.crazyloopIdea1(existingemployeeinfo)
            })
           

            

//    'check 2': browser => {
//        existingemployeeinfoArray.forEach((employeeInfo, index) => {

//        })
//    }




//$$$$$$$$$$$$$$$$  CONCEPTS     #################//
 

//for (let i = 0, j = 0; i < existingemployeeinfoArray.length, j < tempemployeeinfoArray.length; i++, j++) {
//    pageObject 
//    .crazyloopIdea(existingemployeeinfoArray[i], tempemployeeinfoArray[j])
//}



//STRING INTERPOLATION
//(`li[name="employee${existingemployeeinfo.startingID}"]`)    

//    },
//    'Crazy Loop Time' : browser =>
//            existingemployeeinfoArray.forEach(existingemployeeinfo => {
//                pageObject.runcrazyloopidea(existingemployeeinfo)
//    })


    }
}
