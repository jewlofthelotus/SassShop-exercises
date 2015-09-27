var names = ['Tiger', 'Samuel', 'Leeloo',
             'Bella', 'Mo', 'Sly',
             'Beezy', 'Maple', 'Rodney',
             'Yonce', 'Reginald', 'Winifred'];

var ages  = ['9 Weeks', '12 Weeks', '3 Months',
             '8 Weeks', '1 Year', '15 Weeks',
             '4 Months', '2 Months', '14 Weeks',
             '6 Months', '10 Weeks', '8 Months'];

$('.kittens').find('li').each( function(i, el) {
  var img = $(el).find('img');
  var name = $(el).find('.name');
  var age = $(el).find('.age');

  var w = 250;
  var h = 250;

  img.attr('src', 'http://placekitten.com/'+w+'/'+h+'?image='+i);
  name.text(names[i]);
  age.text(ages[i]);
});
