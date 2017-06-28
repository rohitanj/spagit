var feedsLibrary = {
  bdc: "http://feeds.feedburner.com/bdcnetwork/news",
  cd: "http://www.constructiondive.com/feeds/news/",
  cam: "http://www.commercialarchitecturemagazine.com/feed/",
  enr: "http://www.enr.com/rss/articles"
  };

$.each(feedsLibrary, function(siteId, feedsUrl) {
  var baseUrl = "http://query.yahooapis.com/v1/public/yql?q=";
  var queryString = encodeURI("SELECT * FROM feed WHERE url='" + feedsUrl + "' LIMIT 7");
  var format = "&format=json";

  var rssFeedPath = baseUrl.concat(queryString, format);

  $.getJSON(rssFeedPath, function(response) {
    var feedItems = response.query.results.item;

    $.each(feedItems, function( index ) {
      var item = feedItems[index];

      var ulElement = $('#' + siteId);
      ulElement.append('<li class="feed-item"><a class="feed-link" target="_blank" href="' + item.link + '">' + item.title +'</a></li>');
    });
  });
});
