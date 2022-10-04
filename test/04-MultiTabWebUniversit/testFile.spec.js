// const { default: $ } = require("webdriverio/build/commands/browser/$")

describe("TS-01 varifying multitab",async function(){
    it("clicking on contact button",async function (){
        await browser.url("http://www.webdriveruniversity.com/")
    await $('//div/h1[text()="CONTACT US"]').click()
    await browser.switchWindow('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    await $('//input[@name="first_name"]').setValue("abcd")
    await browser.pause(2000)
    })
    

})