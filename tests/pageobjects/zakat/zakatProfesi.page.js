const waitHelper = require('../../../helpers/waitHelper');

class ZakatPage {

    get inputAkumulasiGaji(){
        return $('xpath://android.widget.EditText')
    }

    get textJumlahZakat(){
        return $('xpath://android.view.View[contains (@content-desc, "Jumlah Zakat yang Wajib Dibayarkan")]')
    }

    async inputGaji(number){
        await this.inputAkumulasiGaji.click();
        await this.inputAkumulasiGaji.setValue(number);
    }

    async getZakat(){
        return this.textJumlahZakat.getAttribute('content-desc');
    }

}
module.exports = new ZakatPage()
