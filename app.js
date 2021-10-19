$(document).ready(function(){

let submitBtn = $("#btnSubmit");

$('#btnSubmit').prop('disabled', true);

if ( $("#btnSubmit").val() !== '') {
   $('#btnSubmit').prop('disabled', false);
};

let containerDiv = document.createElement('div');
document.body.append(containerDiv);

$('#btnSubmit').click(function() {
   let inputItem = document.createTextNode(( $("input[id=textSubmit]").val())); 
   let newHeader = document.createElement('h2');
   newHeader.className = 'headerList';
   newHeader.appendChild(inputItem);
   containerDiv.appendChild(newHeader);
   return false;
});
$('.headerList').hover(function() {
   $('.headerList').css({
      'background-color': 'red',
      'border-radius': '10px'
   })
}
)
});
