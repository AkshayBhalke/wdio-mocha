///<reference types="webdriverio"/>


const FacebookoDate =require('./pageObject')
describe("Dropdown List", function () {


    it("verifying dropdown list by selecting text", async () => {

        await browser.url('https://www.facebook.com/')
        await $('//a[@class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy"]').click()

        await $('#day').selectByVisibleText("22")
        await $('#month').selectByVisibleText("Jan")
        await $('#year').selectByVisibleText("1998")
        await browser.pause(2000)
    })

    it("verifying dropdown list by selecting by index", async () => {

        await browser.url('https://www.facebook.com/')
        await $('//a[@class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy"]').click()

        await $('#day').selectByIndex(6)
        await $('#month').selectByIndex(11)
        await $('#year').selectByIndex(24)
        await browser.pause(2000)
    })

    it("verifying dropdown list by selecting by attribute", async () => {

        await browser.url('https://www.facebook.com/')
        await $('//a[@class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy"]').click()

        await $('#day').selectByAttribute('value', "25")
        await $('#month').selectByAttribute('value', "12")
        await $('#year').selectByAttribute('value', "1998")
        await browser.pause(2000)
    })



    it.only("printing value from dropdown ", async function () {
        await browser.url('https://www.facebook.com/')
        await $('//a[@class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy"]').click()
        await $('#day').click()
        await FacebookoDate.dropDownselect("23","Feb","1998")
        await browser.pause(2000)

    })
})