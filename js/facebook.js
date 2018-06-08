$(document).ready(function()
{
  $.ajax(
    {
      url: '//connect.facebook.net/en_US/sdk.js',
      dataType: 'script',
      cache: true,
      success:function(script, textStatus, jqXHR)
      {
        FB.init(
          {
            appId      : '{1731232310303247}',
            xfbml      : true,
            version    : 'v3.0'
          }
        );
        FB.api(
            "/260429494144896/feed",
            { access_token : "" },
            function (response) {
              if (response && !response.error) {
                console.log(response);
              }
              else {
                console.log(response);
              }
            }
        );
      }
    });
});
