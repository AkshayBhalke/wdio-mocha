// const { default: $ } = require("webdriverio/build/commands/browser/$");

// const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("shadow DOM", function () {
  it("shadow element", async function () {
    await browser.url("https://qavbox.github.io/demo/shadowDOM/");
    await browser.pause(2000);
    const main = await $("my-open-component");
    await main.shadow$("input").setValue("aaaaa");

    // await $("el").setValue("input some");
    await browser.pause(2000);
  });

  it.only("nested shadow", async function () {
    await browser.url("https://shop.polymer-project.org/");
    // await browser.pause(2000);

    const element = await await $("[page=home]")
      .shadow$(".iron-selected")
      .shadow$("a")
      .click();

    console.log(element);
    await browser.pause(2000);
  });
});
