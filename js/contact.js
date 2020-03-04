var lang = $('html').attr('lang');

var headline;
var organization;
var performances;
switch(lang)
{
  case "cz":
    headline = "Kontakt";
    organization = "Organizace";
    performances = "Vystoupení";
    break;
  case "en":
    headline = "Contact";
    organization = "Organization";
    performances = "Performances";
    break;
  case "de":
    headline = "Kontakt";
    organization = "Organisation";
    performances = "Aufführungen";
    break;
  case "fr":
    headline = "Contact";
    organization = "Organisation";
    performances = "Performances";
    break;
}

$('.contact > strong').html(headline);
$('.organization').append(organization);
$('.performances').append(performances);
