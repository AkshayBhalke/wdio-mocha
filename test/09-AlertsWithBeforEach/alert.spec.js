const AlertPage= require ('./pageClass')


describe("handeling alerts in js",function(){

    beforeEach(async()=>{
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
    })


    it("accept Js alert",async function(){
        // await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        await AlertPage.clickOnAlertButton(1);
        const text= await browser.getAlertText()
        // console.log(text)
       await expect(text).toEqual("I am a JS Alert")
        await browser.acceptAlert()
        const resultText= await AlertPage.getResultText()
        // console.log(resultText)
        expect(resultText).toEqual("You successfully clicked an alert")
        await browser.pause(3000)
    })


    it("cancel the alert",async function(){
        // await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        await AlertPage.clickOnAlertButton(1);
        await browser.dismissAlert()
        const reslttxt= await AlertPage.getResultText();
        console.log(reslttxt)
    })

    it("confirm ok in the alert",async function(){
        // await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        await AlertPage.clickOnAlertButton(2);
        const text1= await browser.getAlertText()
        console.log(text1)
        await browser.acceptAlert()
        const reslttxt= await AlertPage.getResultText();
        console.log(reslttxt)
    })

    it("confirm cancel in the alert",async function(){
        // await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        await AlertPage.clickOnAlertButton(2);
        const text1= await browser.getAlertText()
        console.log(text1)
        await browser.dismissAlert()
        const reslttxt= await AlertPage.getResultText();
        console.log(reslttxt)
    })

    it("prompt enter string n  ok in the alert",async function(){
        // await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        await AlertPage.clickOnAlertButton(3);
        const text1= await browser.sendAlertText("hello")
        console.log(text1)
        await browser.acceptAlert()
        const reslttxt= await AlertPage.getResultText();
        console.log(reslttxt)
    })

    it("prompt cancel in the alert",async function(){
        // await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        await AlertPage.clickOnAlertButton(3);
        await browser.dismissAlert()
        const reslttxt= await AlertPage.getResultText();
        console.log(reslttxt)
        await browser.pause(3000)
    })

})