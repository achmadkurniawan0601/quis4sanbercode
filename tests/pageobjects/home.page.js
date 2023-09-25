
const waitHelper = require('../../helpers/waitHelper');

class HomePage {
    get buttonOthers(){
        return $('~Lainnya')
    }

    get menuKalkulatorZakat(){
        return $('xpath://android.widget.ImageView[@content-desc="Kalkulator Zakat"]')
    }

    async clickButtonLainya(){
        await waitHelper.waitAndClick(this.buttonOthers);
    }

    async openZakatPage(){
        await waitHelper.waitAndClick(this.buttonOthers);
        await waitHelper.waitAndClick(this.menuKalkulatorZakat);
    }

}

module.exports = new HomePage()
