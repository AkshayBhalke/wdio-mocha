// const { default: $ } = require('webdriverio/build/commands/browser/$')
// const { default: url } = require('webdriverio/build/commands/browser/url')
const InternetH = require('../POM/class')

describe("internethuroku checkbox",function(){

    it("checkbox click",async ()=>{

         browser.url("https://the-internet.herokuapp.com/")
        await $('ul li:nth-child(6) a')
        await link.click()
        await InternetH.getcheckboxel(1).click(0)
        // await $('form#checkboxes input:nth-child(1)').click();
        // await check.click()

        // const url1= await browser.url()
        //  await expect ($('form#checkboxes input:nth-child(1)')).toBeSelected()


        await browser.pause(4000)

    })
})