describe("date picker", function () {
  it("date selecting functionality", async function () {
    let date2 = new Date();
    date2.setDate(date2.getDate() + 200);
    let month = date2.toLocaleString("default", { month: "long" });
    let year = date2.getFullYear();
    let date = date2.getDate();
    await browser.url("https://www.globalsqa.com/demo-site/datepicker/");
    const frame = await $(
      '//*[@id="post-2661"]/div[2]/div/div/div[1]/p/iframe'
    );
    await browser.switchToFrame(frame);
    await (await $("#datepicker")).click();
    const yrtext = await $('//span[@class="ui-datepicker-year"]').getText();
    const mntext = await $('//span[@class="ui-datepicker-month"]').getText();
    const nxtbutton = await $(
      '//span[@class="ui-icon ui-icon-circle-triangle-e"]'
    );
    //
    //
    //
    //
    //

    yearAndMonthSelect = async function () {
      if (yrtext !== year) {
        await nxtbutton.click();
        await yearAndMonthSelect();
        // if (mntext !== month) {
        //   await nxtbutton.click();
        //   await yearAndMonthSelect();
        // }
      }
    };

    await yearAndMonthSelect();
    // console.log(year);
    await browser.pause(3000);
  });
});
