var lang = $('html').attr('lang');

var headline;
switch(lang)
{
  case "cz":
    headline = "Galerie";
    break;
  case "en":
    headline = "Gallery";
    break;
  case "de":
    headline = "Galerie";
    break;
  case "fr":
    headline = "Galerie";
    break;
}

$('.gallery > strong').html(headline);

$('.gallery-row').each(function()
{
  var row = this;
  var smallestImgHeight = getSmallestHeight($(row).children());
  var finalImgsWidth = getFinalImgsWidth(row, $(row).children(), smallestImgHeight);
  $(row).attr('class', 'd-flex flex-row');
  var rowHTML = "";
  for (var i = 0; i < finalImgsWidth.length; ++i)
  {
    var src = $($(row).children()[i]).attr('src');
    var width = finalImgsWidth[i] * 100;
    var lastImg = finalImgsWidth.length - 1;
    rowHTML += '<div style="width: ' + width + '%; height: auto;"> \
                  <a href="' + src + '"> \
                    <img class="gallery-img lazy img-fluid" data-src="' + src + '"></img> \
                  </a> \
                </div>';
  }
  $(row).html(rowHTML);
});

function getFinalImgsWidth(row, imgs, smallestImgHeight)
{
  var prepImgsWidth = [];
  imgs.each(function()
  {
    var width = Number($(this).attr('width'));
    var height = Number($(this).attr('height'));
    prepImgsWidth.push(width / (height / smallestImgHeight));
  });
  prepWidthSum = prepImgsWidth.reduce(function getSum(total, num){
                                        return total + num;
                                      });
  var finalImgsWidth = [];
  for (var i = 0; i < prepImgsWidth.length; ++i)
  {
    finalImgsWidth.push(prepImgsWidth[i] / prepWidthSum);
  }
  return finalImgsWidth;
}

function getSmallestHeight(imgs)
{
  var smallestHeight = 100000;
  imgs.each(function()
  {
    actualHeight = Number($(this).attr('height'));
    if (actualHeight < smallestHeight)
    {
      smallestHeight = actualHeight;
    }
  });
  return smallestHeight
}
