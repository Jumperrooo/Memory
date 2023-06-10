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
var lock=false; 

function revealCard(nr)
{
    var opacityValue= $('#card'+nr).css('opacity');

    if(opacityValue!=0 && lock==false)
    { 
        lock=true;
        var obraz = "url(img/"+ arrayOfCards[nr] + ")";

        $('#card'+nr).css('background-image', obraz);
        $('#card'+nr).addClass('activeCard');
        $('#card'+nr).removeClass('card');
        
        
        if(!oneVisible)
        {
            //first card of pair
        oneVisible=true;
        indexOfPreviusCard=nr;
        lock=false;
        }else{
            //second card of pair
            if(arrayOfCards[indexOfPreviusCard]==arrayOfCards[nr])
            {
                if(indexOfPreviusCard!==nr){
                turnCounter++; 
                setTimeout(function(){
                    hideBothCards(nr,indexOfPreviusCard)
                },750);
                cards[indexOfPreviusCard].removeEventListener("click",revealCard);
                cards[nr].removeEventListener("click", revealCard);
                }
            }
            else
            {
                turnCounter++;
                setTimeout(function(){
                    restoreBothCards(nr,indexOfPreviusCard)
                },750);
            }
        
            $('.score').html("Which Turn: "+turnCounter);
            oneVisible=false;
        }
    }
}

function hideBothCards(nr1, nr2)
{
    $('#card'+nr1).css('opacity','0');
    $('#card'+nr2).css('opacity','0');
    lock=false;
}
function restoreBothCards(nr1, nr2)
{
    $('#card'+nr1).css('background-image', 'url(img/card.png)');
    $('#card'+nr1).addClass('card');
    $('#card'+nr1).removeClass('activeCard');
    
    $('#card'+nr2).css('background-image', 'url(img/card.png)');
    $('#card'+nr2).addClass('card');
    $('#card'+nr2).removeClass('activeCard');
}
