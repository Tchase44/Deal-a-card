
$(document).ready(function(){
var suits = ['♥','♠','♣','♦'];
var faces = ["A",'2','Q','3','4','J','5','6','7','8','K','9','10'];

function randFace(){
return  Math.floor(Math.random()*(faces.length));
};
function randSuit(){
return Math.floor(Math.random()*(suits.length));
};

    $('#clicky').click(function(event){
        event.preventDefault();
        // printCard();
        dealOneMore();
    });
    $('#reset').click(function(event){
        event.preventDefault();
        $('#mat').empty();
    });



function dealOneMore(){
    var no1= randFace();
    var no2= randSuit();
    var mySuit = suits[no2];
    var myFace = faces[no1];
    var divyRed = '<div class="sizeSM">'+
                '<p><span style="color:red">'+myFace+'</span></p>'+
                '<P><span style="color:red">'+mySuit+'</span></P>'+
                '</div>';
     var divyBlack = '<div class="sizeSM">'+
                '<p><span>'+myFace+'</span></p>'+
                '<P><span>'+mySuit+'</span></P>'+
                '</div>';
    function colorNew (val2){
        if (val2 === '♦'||val2==='♥') {
            $('#mat').append(divyRed);
        }else{
            $('#mat').append(divyBlack);
        }
    };
    colorNew(mySuit);
};
});