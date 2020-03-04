//Hide collapse navbar manu after click
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});

var lang = $('html').attr('lang');

var headline;
var aboutUs;
var events;
var gallery;
var contact;
var langDropShortcuts;
var langDropHrefs;
switch(lang)
{
    case "cz":
      headline = "Folklórní soubor Velička";
      aboutUs = "O nás";
      events = "Události";
      gallery = "Galerie";
      contact = "Kontakt";
      langDropShortcuts = ["CZ", "EN", "DE", "FR"];
      langDropHrefs = ["en", "de", "fr"];
      break;
    case "en":
      headline = "Folklore group Velička";
      aboutUs = "About us";
      events = "Events";
      gallery = "Gallery";
      contact = "Contact";
      langDropShortcuts = ["EN", "DE", "FR", "CZ"];
      langDropHrefs = ["de", "fr", "https://www.fsvelicka.cz/"];
      break;
    case "de":
      headline = "Volksgruppe Velička";
      aboutUs = "Über uns";
      events = "Ereignisse";
      gallery = "Galerie";
      contact = "Kontakt";
      langDropShortcuts = ["DE", "EN", "FR", "CZ"];
      langDropHrefs = ["en", "fr", "https://www.fsvelicka.cz/"];
      break;
    case "fr":
      headline = "Groupe folklorique Velička";
      aboutUs = "À propos de nous";
      events = "Événements";
      gallery = "Galerie";
      contact = "Contact";
      langDropShortcuts = ["FR", "EN", "DE", "CZ"];
      langDropHrefs = ["en", "de", "https://www.fsvelicka.cz/"];
      break;
}
$('.navbar > .name-long > .navbar-text').html(headline);
$('.navbar > .collapse #about-us > strong').html(aboutUs);
$('.navbar > .collapse #events > strong').html(events);
$('.navbar > .collapse #gallery > strong').html(gallery);
$('.navbar > .collapse #contact > strong').html(contact);
$('.navbar > .collapse .dropdown-toggle > strong').html(langDropShortcuts[0]);
$('.navbar > .collapse .dropdown-menu > .first > strong').html(langDropShortcuts[1]);
$('.navbar > .collapse .dropdown-menu > .first').attr('href', langDropHrefs[0]);
$('.navbar > .collapse .dropdown-menu > .second > strong').html(langDropShortcuts[2]);
$('.navbar > .collapse .dropdown-menu > .second').attr('href', langDropHrefs[1]);
$('.navbar > .collapse .dropdown-menu > .third > strong').html(langDropShortcuts[3]);
$('.navbar > .collapse .dropdown-menu > .third').attr('href', langDropHrefs[2]);
