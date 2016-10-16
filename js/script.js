
  $(document).ready(function(){
    $('.popup .close_window, .overlay').click(function (){
      $('.popup, .overlay').css({'opacity':'0', 'visibility':'hidden'});
    });
    $('a.open_window').click(function (e){
      $('.popup').css({'opacity':'1', 'visibility':'visible'});
      $('.overlay').css({'opacity':'0.5', 'visibility':'visible'});

      e.preventDefault();
    });
  });


function show_payment()
{
var payment = $('input[name=payment]').val();
if (payment!=null && payment!="")
{
document.getElementById('parent1').innerHTML = '<img src="styles/icons/close.svg" style="position: absolute;right: 22%;top: 340px;"><div style="color:#4097dc;">' + payment + ' &#8399; ' + '</div></br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Экономия 25000 &#8399; ';

}
}
