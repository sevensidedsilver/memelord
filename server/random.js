var request = require('request');
var cheerio = require('cheerio');
var rp = require('request-promise')
var app = require('./index.js')

var internalLinks = [];

let scrapeThis = 'https://www.reddit.com/r/all/'

var scrapeLinks = function(scrapeThis){
  if (scrapeThis.endsWith('/')){
    scrapeThis = scrapeThis.substring(0, scrapeThis.length - 1);
  }
  rp(scrapeThis, function(err,resp,body){
     var $ = cheerio.load(body);

     $("a").each(function() {
       // Zelda, or is it Link?  :P
       let zelda = $(this).attr().href

      // cut any element IDs from the href
      if (typeof zelda == 'string' && zelda.includes("#")){
        let cut = zelda.indexOf("#")
        zelda = zelda.substring(0, cut)
      }

      //only add the link if it's not in the array (indexOf -1)
      if (internalLinks.indexOf(zelda) === -1){
        internalLinks.push(zelda);
      }

      })
      console.log(internalLinks)
     //x return internalLinks

// end of request
  })

  .then(function(){
		console.log("this is the .then function output")

})


}

// run the function
scrapeLinks(scrapeThis);
