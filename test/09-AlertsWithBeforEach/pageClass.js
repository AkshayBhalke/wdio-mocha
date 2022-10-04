

class AlertPage{

     getAlertButton (index){
        return $(`ul li:nth-child(${index}) button`)
    }

    clickOnAlertButton= async function(index){
         await this.getAlertButton(index).waitForDisplayed()
         await this.getAlertButton(index).click()

    }

    get result(){
        return $('#result')
    }

    getResultText= async function (){
       return this.result.getText();
    }

}

module.exports= new AlertPage;