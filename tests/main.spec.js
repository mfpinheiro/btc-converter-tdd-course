const expect = require('chai').expect;
const exec = require('child_process').exec;
const pkg = require('../package');
const btcConverter = './src/main.js';


describe('Main CLI', () => {
  it('should return version of btc-conversion', done => {
    exec(`${btcConverter} --version`, (err, stdout, sterr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });
});
