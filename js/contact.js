var lang = $('html').attr('lang');

var headline;
switch(lang)
{
  case "cz":
    headline = "Kontakt";
    break;
  case "en":
    headline = "Contact";
    break;
  case "de":
    headline = "Kontakt";
    break;
  case "fr":
    headline = "Contact";
    break;
}

$('.contact > strong').html(headline);
