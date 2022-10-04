

class FacebookoDate {
    dropDownselect = async function (day, month, year) {
    
        const daysList = await $$(`#day option`)
        const monthListList = await $$(`#month option`)
        const yearList = await $$(`#year option`)

        for (let i = 0; i < daysList.length; i++) {
            const element = await daysList[i]
            // await console.log(element.getText())
            if (await element.getText() === day) {
                element.click()
                for (let i = 0; i < monthListList.length; i++) {
                    const element = await monthListList[i]
                    // await console.log(element.getText())
                    if (await element.getText() === month) {
                        element.click()
                        for (let i = 0; i < yearList.length; i++) {
                            const element = await yearList[i]
                            // await console.log(element.getText())
                            if (await element.getText() === year) {
                                element.click()
                                break;
                            }
                        }
                    }
                }
            }
        }

    }

}

module.exports = new FacebookoDate;