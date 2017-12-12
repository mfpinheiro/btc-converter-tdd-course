const expect = require('chai').expect;
const exec = require('child_process').exec;
const pkg = require('../package');
const btcConverter = './src/main.js';


describe('Main CLI', () => {
  it('should return version of btc-conversion', (done) => {
    exec(`${btcConverter} --version`, (err, stdout) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return the description when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) throw err;
      expect(stdout.includes('Convert Bitcoin to any currency defined')).to.be.true;
      done();
    });
  });

  it('should return currency option when BTC-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) throw  err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('should return amount option when BTC-coverter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) throw err;
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });
});
