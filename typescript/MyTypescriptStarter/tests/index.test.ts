const dist = require('../dist');

describe('index', () => {
    it("should say 'hello world'", () => {
        dist.HelloWorld();
        dist.HelloName('Aaron');
    });
});
