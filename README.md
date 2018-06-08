# fsvelicka.cz

## About Us

How to change description in particular language

There are two columns on the page. First column can be changed in folder about_us/lang/first_col.html, the second in about_us/lang/second_col.html. Formatting can be done through HTML. The two columns are merged on mobile devices to one, the first is on the top. 

## Events

How to add event

Event can be added through events/evenst.xml file. 

The XML format of event is as follows:

```xml
<event>
  <name>
    <cz>Name of the event in czech</cz>
    <en>Name of the event in english</en>
    <de>Name of the event in german</de>
    <fr>Name of the event in french</fr>
  </name>
  <date>
    <day>Number of the day</day>
    <month>Number of the month</month>
    <year>Year</year>
  </date>
  <town>
    <cz>Name of the town in czech</cz>
    <en>Name of the town in english</en>
    <de>Name of the town in german</de>
    <fr>Name of the town in french</fr>
  </town>
  <map>
    <google>Link to the town on google maps</google>
    <seznam>Link to the town on seznam maps</seznam>
  </map>
  <web>
    <name>Name of the event website</name>
    <link>Link to the event website</link>
  </web>
  <fcb>Link to the event facebook page</fcb>
  <img>Link to the event image/poster</img>
</event>
```

Example:

```xml
<event>
  <name>
    <cz>Velikonoční slavnosti</cz>
    <en>Paasfeesten Leuven</en>
    <de>Paasfeesten Leuven</de>
    <fr>Paasfeesten Leuven</fr>
  </name>
  <date>
    <day>14</day>
    <month>4</month>
    <year>2017</year>
  </date>
  <town>
    <cz>Lovaň</cz>
    <en>Leuven</en>
    <de>Leuven</de>
    <fr>Leuven</fr>
  </town>
  <map>
    <google>https://goo.gl/maps/Pq5DcEjRtY82</google>
    <seznam>https://mapy.cz/s/2kj6s</seznam>
  </map>
  <web>
    <name>paasfeestenleuven.be</name>
    <link>http://www.paasfeestenleuven.be/</link>
  </web>
  <fcb>https://www.facebook.com/events/1912410548996402/</fcb>
  <img>events/leuven2017.jpg</img>
</event>
```

If any field doesn't have a value, leave it empty (typically website or image). Names have to be specified, otherwise nothing will be shown on particular language page. Store images of events to events folder and link them as events/image_name.jpg. The latest event is on the top.  


## Gallery
