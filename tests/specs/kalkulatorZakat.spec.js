const HomePage = require('../pageobjects/home.page')
const ZakatPage = require('../pageobjects/zakat/zakat.page')
const ZakatProfesiPage = require('../pageobjects/zakat/zakatProfesi.page')

describe('Test Kalkulator Zakat', () => {
    it('Open Zakat Menu', async () => {
        await HomePage.openZakatPage();
    });

    it('Select Zakat Profesi', async () => {
        await ZakatPage.clickMenuZakatProfesi();
    });

    it('Verify Calculation Zakat Profesi', async () => {
        await ZakatProfesiPage.inputGaji(100000000);
        const zakat = await ZakatProfesiPage.getZakat();
        await expect(zakat).toContain("2.500.000");
    });
    
});