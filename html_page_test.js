const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('Describe first page', () => {
    before((done) => {
        JSDOM.fromFile('page1.html')
        .then((dom) => {
            global.document = dom.window.document
        })
        .then(done, done);
    })

    describe("Message", () => {
        it("Message should be 'Hello Engineers!'", () => {
            let element = document.querySelector('h1')
            expect(element).to.have.text("Hello Engineers!")
        })
    })
})

describe('Describe second page', () => {
    before((done) => {
        JSDOM.fromFile('page2.html')
        .then((dom) => {
            global.document = dom.window.document
        })
        .then(done, done);
    })

    describe("Message", () => {
        it("Message should be 'Welcome to my simple web page.'", () => {
            let element = document.querySelector('h1')
            expect(element).to.have.text("Welcome to my simple web page.")
        })
    })
})