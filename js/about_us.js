//Show description according to language
var lang = $('html').attr('lang');

//Headline
var headline;
switch(lang)
{
    case "cz":
      headline = "O nás";
      break;
    case "en":
      headline = "About us";
      break;
    case "de":
      headline = "Über uns";
      break;
    case "fr":
      headline = "À propos de nous";
      break;
}

$('.about-us > strong').html(headline);
$('.about-us-first-col').load("about_us/desc/" + lang + "/first_col.html");
$('.about-us-second-col').load("about_us/desc/" + lang + "/second_col.html");
