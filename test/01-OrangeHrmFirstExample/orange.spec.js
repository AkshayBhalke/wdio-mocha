


describe("ts-01 login sample site", function () {
    it("login orangehrm", async function () {
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await $('//div/input[1]').setValue("Admin")
        await $('input[name="password"]').setValue("admin123")
        await $('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click() 
        await browser.pause(3000)


    })


})