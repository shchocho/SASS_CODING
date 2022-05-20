$(function() {

  function getAddr(domain) {
    let thisDomain = $(domain).attr("href");
    thisDomain = thisDomain.split("/");
    let thisDomainLeng = thisDomain.length;
    let thisAddr = thisDomain[thisDomainLeng - 1];
    return thisAddr;
  }

  let sitedomain = getAddr(location);

  $("#lnb li a").each(function() {
    let thisdomain = getAddr(this);

    if (sitedomain == thisdomain) {
      $(this).addClass("on");
    }
  })



  $("dd:not(:first)").css("display", "none");

  $("dl dt").click(function() {
    let elem = $("+dd", this);

    if (elem.css("display") == "none") {
      elem.css("display", "block").css("height", 0);
      elem.animate({
        height: "300px"
      }, function() {
        $("dd").not(elem).animate({
            height: 0
          },
          function() {
            $("dd").not(elem).css("display", "none")
          })
      });
    }
  })




})
