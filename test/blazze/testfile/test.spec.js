const { default: $$ } = require('webdriverio/build/commands/browser/$$')
const Blazepage = require('../POM/pom')

describe("ts02-Blaze",function(){
    it(" get text of all header li",async function(){

         await browser.url("https://www.blazemeter.com/")
         await (await Blazepage).litext
       
          
        //   await browser.pause(2000)

    })

    //  it('heading display or not', async function(){
    //     //  await browser.url("https://www.blazemeter.com/")
    //        console.log(Blazepage.heading.isDisplayed())
    // })
    
    //  it('heading enabled or not', async function(){
    //     //  browser.url("https://www.blazemeter.com/")
    //        await (await Blazepage).clickonproduct()
    //        await browser.pause(4000)
    // })

    it('heading enabled or not', async function(){
         await browser.url("https://www.blazemeter.com/")
         const button = await $('//a[text()="Start Testing Now"]')
        await button.click()
        await browser.pause(4000)

    })
    
    
})