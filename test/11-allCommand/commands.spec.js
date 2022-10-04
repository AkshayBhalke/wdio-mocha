describe("wdio commands", function () {
  it("commands in wdio", async function () {
    await browser.url(
      "http://www.webdriveruniversity.com/Data-Table/index.html"
    );

    //browser matcher

    await expect(browser).toHaveUrl(
      "http://www.webdriveruniversity.com/Data-Table/index.html"
    );
    await expect(browser).toHaveUrlContaining("river");
    await browser.pause(3000);

    await expect(browser).toHaveTitle("WebDriver | Data Tables");
    await expect(browser).toHaveTitleContaining("Data");

    //element matchers

    const heading = await $("h1");
    await expect(heading).toBeDisplayed();
    await expect(heading).toExist();
    await expect(heading).toBePresent();
    await expect(heading).toBeExisting();
    // await expect(heading).toBeFocused();
    const dv = await $("#main-header");
    await expect(dv).toHaveAttribute("id", "main-header");
    await expect(dv).toHaveAttributeContaining(
      "class",
      "col-sm-12 text-center"
    );
    await expect(dv).toHaveElementClass("col-sm-12");
    await expect(dv).toHaveElementClassContaining("col-sm-12");
    await expect(dv).toHaveElementProperty("id", "main-header");
    await expect(dv).toBeClickable();
    await expect(dv).toBeEnabled();
    await expect(dv).not.toBeDisabled();
    const about = await $('//a[text()="About Us"]');
    await expect(about).toHaveHref("#");
    await expect(about).toHaveHrefContaining("#");
    await expect(about).toHaveText("About Us");
    await expect(about).toHaveTextContaining("Us");
    const bottom = await $('//div[@class="col-sm-12"]/p');
    await expect(heading).toBeDisplayedInViewport();
    const parent = await $('//ul[@class="pagination traversal-pagination"]');
    await expect(parent).toHaveChildren(7);
    const arr = await $$('//ul[@class="pagination traversal-pagination"]//li');

    await expect(arr).toBeElementsArrayOfSize(7);
  });

  //
  //
  //
  //

  it("triger enter button", async function () {
    await browser.url("https://www.amazon.com/");
    await (await $("#twotabsearchtextbox")).setValue("iphone");
    await browser.keys("Enter");
    await browser.pause(4000);
  });
});
