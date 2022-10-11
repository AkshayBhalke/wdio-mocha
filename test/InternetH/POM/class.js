// const { default: $ } = require("webdriverio/build/commands/browser/$");

class InternetH {


    async h3heading(){
         
         return await $('h3')
    }
    async getlinkelement(index){
         return $(`ul li:nth-child(${6}) a`);
    }

    async clickOnlink(){
        let aa= await this.getlinkelement();
       return aa.click();
    }


     getcheckboxel(index ){
        return $(`form#checkboxes input:nth-child(${index})`);
    }

    clickoncheck(index) {
        this.getcheckboxel(index).waitForDisplayed();
        this.getcheckboxel(index).click();

    }
}

module.exports= new InternetH ;