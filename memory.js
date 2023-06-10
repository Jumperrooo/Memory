var arrayOfCards=["ciri.png", "geralt.png", "dandelion.png","dandelion.png","iorweth.png", "triss.png","geralt.png","yen.png","ciri.png","triss.png","yen.png", "iorweth.png"];

var cards=document.querySelectorAll('[id^="card"]');
cards.forEach(function(card,index){
    card.addEventListener("click",function()
    {
        revealCard(index);
    })
})

var oneVisible= false;
var turnCounter=0;
var indexOfPreviusCard;

function revealCard(nr)
{
var obraz = "url(img/"+ arrayOfCards[nr] + ")";

$('#card'+nr).css('background-image', obraz);
$('#card'+nr).addClass('activeCard');
$('#card'+nr).removeClass('card');


if(!oneVisible)
{
    //first card of pair
oneVisible=true;
indexOfPreviusCard=nr;
}
else
{
    //second card of pair
    if(arrayOfCards[indexOfPreviusCard]==arrayOfCards[nr])
    {
        setTimeout(function()
        {hideBothCards(nr,indexOfPreviusCard)},750);
    }
    else
    {

    }

    turnCounter++;
    $('.score').html("Which Turn: "+turnCounter);
    oneVisible=false;
}
 
}

function hideBothCards(nr1, nr2)
{
    $('#card'+nr1).css('opacity','0');
    $('#card'+nr2).css('opacity','0');
}

