
// const { default: $ } = require("webdriverio/build/commands/browser/$")
const Homepage=require("./pom/pom")

describe("ts pom first sampple",  function(){
    it("login", async function(){
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await browser.pause(2000)
        // await Homepage.username1.setValue("Admin")
        // await Homepage.password.setValue("admin123")
        await Homepage.login("Admin","admin123")
        await Homepage.button.click()
        await browser.pause(4000)
    })
})