

describe("varifying iframe",function(){
    it("iframe",async function(){
        await browser.url("https://the-internet.herokuapp.com/iframe")
       

        await browser.switchToFrame(await $('[class="tox-edit-area"] iframe'))
        // await $("#tinymce").clearValue();
        await $('#tinymce').waitForEnabled();
        await $('#tinymce').click();
        await browser.keys(['Meta', 'a'])
        await browser.keys(['Meta', 'x'])
        await $('#tinymce').setValue("hello");
        await browser.pause(5000);
        const result = await $('#tinymce > p').getText();
        expect(result).toEqual('hello');
        await browser.switchToParentFrame()
        await $('.tox-tbtn__select-label').click()
        const heading= await $('div h3').getText();
        expect(heading).toEqual('An iFrame containing the TinyMCE WYSIWYG Editor')
    })
})