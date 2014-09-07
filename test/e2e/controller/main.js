describe('chart e2e test', function() {
  var date = element(by.model('value.date'));
  var url = element(by.model('value.url'));
  var time = element(by.model('value.time'));
  var goButton = element(by.id('goButton'));
  var inputs = element.all(by.repeater('v in inputs'));
//var latestResult = element(by.binding('latest'));

  function add(a, b, c) {
    date.sendKeys(a);
    url.sendKeys(b);
    time.sendKeys(c);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://localhost:9000/');
  });

  it('inputs should match', function() {
    expect(inputs.count()).toEqual(3);
    
    add('March 26 2014', 'http://www.test.com', 121);
//    add(3, 4); 
//
//    expect(history.count()).toEqual(2);
//
//    add(5, 6);

    expect(inputs.count()).toEqual(4); 
    

//    expect(history.last().getText()).toContain('1 + 2');
//    expect(history.first().getText()).toContain('5 + 6'); 
  });
});