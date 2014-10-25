describe('Top Stories', function() {
  
  describe('sortBySore Function', function() {
    var story1 = {"by":"cybernewsalerts","dead":true,"id":8104927,"score":1,"text":"","time":1406666912,"title":"Israil's ‘Iron Dome’ Missile Defense System Compromised by Chinese Hackers","type":"story","url":"http://www.cybernewsalerts.com/2014/07/israils-iron-dome-missile-defense.html"};
    var story2 = {"by":"andor","id":8104933,"score":1,"text":"","time":1406666998,"title":"Zombies, Run","type":"story","url":"https://www.zombiesrungame.com/"};
    var biggerStory = {"by":"dons","id":814932,"kids":[814966],"score":6,"text":"","time":1252573784,"title":"Hubris and GHC 6.12 + dynamic linking","type":"story","url":"http://www.shimweasel.com/2009/09/10/hubris-and-ghc-6-12-an-experiment-in-dynamic-linking"};
    
    it('should have a sortByScore function', function() {
      expect(sortByScore).to.be.defined;
    });

    it('should return 0 when stories have a similar score', function() {
      expect( sortByScore(story1, story2) ).to.be(0);
    });

    it('should return 1 when the second story has a larger score', function() {
      expect( sortByScore( story1, biggerStory ) ).to.be(1);
    });

    it('should return -1 when the first story has a larger score', function() {
      expect( sortByScore(biggerStory, story1) ).to.be(-1);
    });
  });

  xdescribe('$.ajax GET request', function() {
    xit("should make an AJAX request to the correct URL", function() {
      spyOn($, "ajax");
      expect($.ajax.mostRecentCall.args[0]["url"]).toEqual("/user/seanmccann.json");
    });

    xit('should make a get request to the proper URL', function() {
      expect(expecation).to.equal(equal);
    });
  });

});