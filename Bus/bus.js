const fs = require('fs')
const puppeteer = require('puppeteer');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://www.linead.fr");

    await page.type('#arret', "Delibes")

    await sleep(3000)

    await page.click(".ui-menu-item-wrapper")

    await sleep(3000)

    await page.click(".btn-passages-form")

    await sleep(3000)

    let foo = await page.$$('.single-passages-choice');
    await foo[1].click();

    await sleep(3000)

    const textSelector = await page.waitForSelector(".hour");
    const text = await page.evaluate(el => el.textContent, textSelector);
    const allSpacesRemoved = text.replaceAll(' ', '');
    console.log(allSpacesRemoved);

    fs.writeFile('time.json', JSON.stringify(allSpacesRemoved), (err) => {
        if (err) throw err;
        console.log("File saved")
    })

    await sleep(10000)

    await browser.close();
})();