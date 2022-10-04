describe("varifying the intercept", async function () {
  it("get request", async function () {
    await browser.url("https://reqres.in/");
    await browser.setupInterceptor();
    await $('//li[@data-id="users"]').click();

    // const respo = await browser.getRequest(
    //   "GET",
    //   "https://reqres.in/api/users/2"
    // );

    // console.log(respo[0].response.body);
    await $('//li[@data-id="post"]').click();

    const respoPost = await browser.getRequest(
      "POST",
      "https://reqres.in/api/users",
      {
        name: "morpheus",
        job: "leader",
      }
    );
    console.log(respoPost);

    await browser.pause(3000);
  });
});
