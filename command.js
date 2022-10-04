module.exports = {
    hrmLoginCommand: async function (username, password) {

        await $('//div/input[1]').setValue(username)
        await $('input[name="password"]').setValue(password)
        await $('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()

    },

    otherCommand: async function(){

    }

}

