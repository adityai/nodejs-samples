import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://www.google.com`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {
    await t
        .typeText('div.FPdoLc.VlcLAe > center > input:nth-of-type(1)', 'Aditya Inapurapu')
        .pressKey('enter')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#rso > div:first-child > div.srg > div:first-child > div > div.rc > h3.r > a').innerText).eql('Aditya Inapurapu - Senior Automation / Release Engineer - Blue ...');
});