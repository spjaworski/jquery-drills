$(document).ready(function(){

let submitBtn = $("#btnSubmit");

$('#btnSubmit').prop('disabled', true);

if ( $("#btnSubmit").val() !== '') {
   $('#btnSubmit').prop('disabled', false);
};

$('#btnSubmit').click(function() {
   alert($("input[id=textSubmit]").val());
});

let containerDiv = document.createElement('div');
document.body.append(containerDiv);

$(document).on('mouseover', '.headerList', function() {
   console.log('hovering');
   $(this).css({
      'background-color': 'red',
      'border-radius': '10px'
   })
})

$(document).on('mouseleave', '.headerList', function(){
   console.log('mouse has left');
   $(this).css({
      'background-color': 'white',
      'border-radius': '0px'
   })
})

$('#btnSubmit').click(function() {
   let inputItem = document.createTextNode(( $("input[id=textSubmit]").val())); 
   let newHeader = document.createElement('h2');
   newHeader.className = 'headerList';
   newHeader.append(inputItem);
   containerDiv.append(newHeader);
   return false;
});


});
