// const { default: $$ } = require("webdriverio/build/commands/browser/$$");

describe("amazon", function () {
  this.beforeAll(async function () {
    await browser.url("./");
  });
  it("amazon", async function () {
    await (await $("#twotabsearchtextbox")).setValue("iphone");
    await $('//div[@aria-label="iphone 14 pro case"]').click();
    const elements = await $$(".s-heavy");
    for (let i = 0; i < elements.length; i++) {
      if ((await elements[i].getText()) == " 13 pro max case");
      await elements[i].getText();
      return false;
    }
    await browser.pause(3000);
  });

  it.only("amazon", async function () {
    await (await $("#twotabsearchtextbox")).setValue("iphone");
    await browser.pause(2000);
    const allval = await $$(
      '//div[@class="autocomplete-results-container"]//div[@class="s-suggestion s-suggestion-ellipsis-direction"]'
    );

    for (let i = 0; i < allval.length; i++) {
      const texts = await allval[i].getAttribute("aria-label");
      if (texts.trim() == "iphone 14 case") {
        await allval[i].click();
        return false;
      }
      await browser.pause(3000);
    }
  });
});
