///<reference types= "webdriverio" />

// const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("sauceDemoSite", function () {
  it("sauce demo add to cart", async function () {
    await browser.url("https://www.saucedemo.com/");
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();
    await browser.pause(1000);
    await $$(".inventory_item_price").forEach(async function (el) {
      let price = await el.getText();
      button = await $(".btn.btn_primary.btn_small.btn_inventory");

      if (price === "$7.99") {
        await button.click();
      }
      await browser.pause(3000);
      // console.log(price);
    });

    const cartval = await $(".shopping_cart_link").getText();
    expect(cartval).toEqual("1");

    await browser.pause(4000);
  });

  it.only("sauce demo add to cart", async function () {
    let value = [];
    let least;
    await browser.url("https://www.saucedemo.com/");
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    await $$(".inventory_item_price").map(async function (element) {
      const text = await element.getText();
      await value.push(text);
      let price = [];
      let k = value.join("");
      price = k.split("$");
      // console.log(price);
      let z = [];
      price.forEach(async function (el, index) {
        if (index > 0) {
          z.push(Number(el));
        }
      });

      z.sort(async function (a, b) {
        return a - b;
      });
      least = "$" + z[1];

      if (text === least) {
        await $("#add-to-cart-sauce-labs-backpack").click();
      }
    });

    // console.log(least);
    await browser.pause(4000);
  });
});
