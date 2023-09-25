const waitHelper = require('../../../helpers/waitHelper');

class ZakatPage {

    get menuZakatProfesi(){
        return $('xpath://android.view.View[@content-desc="Zakat Profesi"]')
    }

    async clickMenuZakatProfesi(){
        await waitHelper.waitAndClick(this.menuZakatProfesi);
    }
}
module.exports = new ZakatPage()
