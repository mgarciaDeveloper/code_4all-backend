const pdfjs = require('pdfjs-dist/legacy/build/pdf')

async function getContent(src) {
    const doc = await pdfjs.getDocument(src).promise;
    const page = await doc.getPage(1);
    return await page.getTextContent();
}

async function readPdf(src, callBack) {
    const pdfContent = await getContent(src);
    if (pdfContent) {
        pdfContent.items.map((each, index) => {
            console.log(`${index}-${each.str}`)
        })

        return callBack(`o cliente ${pdfContent.items[19].str} 
        consumiu ${pdfContent.items[29].str}kWh, 
        e irá pagar R$ ${pdfContent.items[38].str}.`)
    }
}

module.exports = { readPdf }