const HomePage = require('./pageobjects/home.page')
const { delay } = require('../../helpers/delayHelper')

describe('Instagram Apps', () => {
    it('Instagram search and Follow', async () => {
        // await delay(5000);
        await HomePage.clickSearchIcon()
        await HomePage.typeSearchColumn()
        await HomePage.followAccount()
    })
})