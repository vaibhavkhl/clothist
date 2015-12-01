describe('E2E:Clothist index page',function(){
	beforeEach(function(){
		browser.ignoreSynchronization = true;
		browser.get('#/landing');
	});

	it('should have a title',function(){
		expect(browser.getTitle()).toEqual('Clothist');
	});
});