function noSelection(currentTarget){
if (currentTarget.selectedIndex === 0){
			return false
  } else {
			return true
  }
}

function makeInvalid(currentTarget){
	$(currentTarget)
  	.removeClass('valid')
    .addClass('invalid')
}

function makeValid(currentTarget){
	$(currentTarget)
  	.removeClass('invalid')
    .addClass('valid')
}

$('select').on('blur change', function(e){
  if (noSelection(e.currentTarget)){
  		makeValid(e.currentTarget)
		  $('#msg').html('succeeded')
  } else {
   		makeInvalid(e.currentTarget)
		  $('#msg').html('failed')
  }
})
