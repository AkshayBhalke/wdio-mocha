

describe("verifying file uploading",function(){

    const filepath=('/Users/akshay/Desktop/webdio/aaa.png')
    it("file uploading",async function(){

        await browser.url("https://the-internet.herokuapp.com/upload")
        
        const remoteFilePath= await browser.uploadFile(filepath)
        await $('#file-upload').setValue(remoteFilePath)
        await $('#file-submit').click()
        await browser.pause(3000)
        const uploaded =await $('#uploaded-files').getText()
        expect(uploaded).toContain('aaa')
        console.log(uploaded)

    })
})