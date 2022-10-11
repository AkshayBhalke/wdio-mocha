// const { default: $ } = require("webdriverio/build/commands/browser/$")

class Blazepage {

    get parentel(){
        return $$('.menu.menu-level-0')[3] 
    }
    get childel(){
        return this.parentel.$$('li')
    }
    get litext(){
        return this.childel.filter(function(text){
             console.log(text.getText())
        })
    }
    get heading(){
        return $('//h2[text()="BlazeMeter: One App for Everyone"]') 
    }
   
    get productTab(){
        return $('//a[text()="Start Testing Now"]')
    }
     clickonproduct(){
        if(this.productTab.isDisplayed() === true){
            this.productTab.click();
        }
    }

}

module.exports=new Blazepage();