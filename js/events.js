//Show events according to language
var lang = $('html').attr('lang');

var headline;
switch(lang)
{
  case "cz":
    headline = "Události";
    break;
  case "en":
    headline = "Events";
    break;
  case "de":
    headline = "Ereignisse";
    break;
  case "fr":
    headline = "Événements";
    break;
}

$('.events > strong').html(headline);

//Parse events.xml and create HTML events using Bootstrap Card
var xmlString = "";
$.ajax({
  url: "events/events.xml",
  type: 'get',
  dataType: 'xml',
  success: function(xml)
    {
    var counter = 0;
    $(xml).find('event').each(function() {
      var name = $(this).find('name').find(lang).text();
      var date = parseDate(lang, $(this).find('date'));
      var day = $(this).find('date').find('day').text();
      var month = $(this).find('date').find('month').text();
      var year = $(this).find('year').find('year').text();
      var town = $(this).find('town').find(lang).text();
      var map = parseMap(lang, $(this).find('map'));
      var webName = $(this).find('web').find('name').text();
      var webLink = $(this).find('web').find('link').text();
      var fcb = $(this).find('fcb').text();
      var img = $(this).find('img').text();
      var calendarProp = getCalendar($(this).find('date'));

      //Card
      $('.events-container').append('<div class="card"></div>');
      //Card header
      $('.events-container > .card:last').append('<div class="card-header py-2" \
                                                       data-toggle="collapse" \
                                                       data-target="#event_' + counter + '" \
                                                       aria-expanded="true" \
                                                       aria-controls="event_' + counter + '" \
                                                       id="heading_' + counter + '"> \
                                                       ' + name + ' \
                                                     <p class="d-none d-xl-block float-right mb-0"> \
                                                       ' + date + '\
                                                       <i class="far ' + calendarProp[0] + ' fa-fw pl-2" style="color: ' + calendarProp[1] + ';"></i> \
                                                     </p> \
                                                     <p class="d-xl-none float-right mb-0 pt-2 pl-3"> \
                                                       <i class="far ' + calendarProp[0] + '" style="color: ' + calendarProp[1] + ';"></i> \
                                                     </p> \
                                                   </div>');
      //Card collapse
      $('.events-container > .card:last').append('<div id="event_' + counter + '" \
                                                       class="collapse" \
                                                       aria-labelledby="heading_' + counter + '"></div>');
      //Card body
      $('.events-container > .card:last > .collapse').append('<div class="card-body d-none d-xl-block px-5 py-4"></div>');
      $('.events-container > .card:last > .collapse').append('<div class="card-body d-xl-none px-4 py-2"></div>');
      //Map
      if (map.trim())
      {
        $('.events-container > .card:last > .collapse > .card-body').append('<div class="row"> \
                                                                              <a href="' + map + '" target="_blank"> \
                                                                                <strong> \
                                                                                  <i class="fas fa-fw fa-map-marker-alt"></i> \
                                                                                  ' + town + ' \
                                                                                </strong> \
                                                                              </a> \
                                                                            </div>');
      }
      //Date
      if (date.trim())
      {
        $('.events-container > .card:last > .collapse > .card-body').append('<div class="row"> \
                                                                               <strong> \
                                                                                 <span class="fa-layers fa-fw"> \
                                                                                   <i class="fas fa-calendar"></i> \
                                                                                     <span class="fa-layers-text fa-inverse" \
                                                                                           data-fa-transform="shrink-8 down-3"> \
                                                                                           ' + day + ' \
                                                                                     </span> \
                                                                                   </span> \
                                                                                   ' + date + ' \
                                                                                 </strong> \
                                                                              </div>');
      }
      //Web
      if (webName.trim() && webLink.trim())
      {
        $('.events-container > .card:last > .collapse > .card-body').append('<div class="row"> \
                                                                               <a href="' + webLink + '" target="_blank"> \
                                                                                 <strong> \
                                                                                   <i class="fas fa-fw fa-globe"></i> \
                                                                                   ' + webName + ' \
                                                                                 </strong> \
                                                                               </a> \
                                                                             </div>');
      }
      //Facebook
      if (fcb.trim())
      {
        $('.events-container > .card:last > .collapse > .card-body').append('<div class="row"> \
                                                                               <a href="' + fcb + '" target="_blank"> \
                                                                                 <strong> \
                                                                                   <i class="fab fa-fw fa-facebook-square"></i> \
                                                                                   Facebook \
                                                                                 </strong> \
                                                                               </a> \
                                                                             </div>');
      }
      //Image
      if (img.trim())
      {
        $('.events-container > .card:last > .collapse > .card-body').append('<div class="row pt-2"> \
                                                                               <div class="col-sm-12 col-md-10 px-0"> \
                                                                                 <img class="lazy-event img-fluid" data-src="' + img + '"></img> \
                                                                               </div> \
                                                                             </div>');
      }
      ++counter;
    });
    //Show image of event after click
    $('.events-container .card-header').click(function() {
      var imgs = $(this).siblings('.collapse').find('.lazy-event');
      imgs.each(function ()
      {
        $(this).attr('src', $(this).attr('data-src'));
        console.log("hoj");
      });
    });
  }
});


function parseDate(lang, date)
{
  var day = getDay(lang, Number(date.find('day').text()));
  var month = getMonth(lang, date.find('month').text());
  var year = date.find('year').text();
  return day + ' ' + month + ' ' + year;
}

function getDay(lang, day)
{
  switch(lang)
  {
    case "cz":
      return day + ".";
    case "en":
      if(day > 3 && day < 21) return day + "th"; // thanks kennebec
        switch (day % 10) {
          case 1:  return day + "st";
          case 2:  return day + "nd";
          case 3:  return day + "rd";
          default: return day + "th";
        }
    case "de":
      return day + ".";
    case "fr":
      return day;
  }
}

function getMonth(lang, month)
{
  czMonths = ["ledna", "února", "březena", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"];
  enMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  deMonths = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  frMonths = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];
  switch(lang)
  {
    case "cz":
      return czMonths[month - 1];
    case "en":
      return enMonths[month - 1];
    case "de":
      return deMonths[month - 1];
    case "fr":
      return frMonths[month - 1];
  }
}

function parseMap(lang, map)
{
  var langMap;
  switch(lang)
  {
    case "cz":
      langMap = map.find('seznam').text();
      break;
    default:
      langMap = map.find('google').text();
  }
  return langMap;
}

function getCalendar(date)
{
  var day = Number(date.find('day').text());
  var month = Number(date.find('month').text());
  var year = Number(date.find('year').text());
  var now = new Date();
  var eventDate = new Date(year, month, day);
  if (now > eventDate)
  {
    return ["fa-calendar-check", "black"];
  }
  else
  {
    return ["fa-calendar", "#2075fc"];
  }
}
