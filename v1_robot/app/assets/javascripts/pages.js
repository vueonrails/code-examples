$(document).ready(function() {
  $("#q").on( "input", function() {
    question()
  })
})

function question(){
  $("#result").val = 'Waiting for you to stop typing...'
  getAnswer()
}

function getAnswer(){
  if ($("#q").val().indexOf('?') === -1) {
    $("#result").text('Questions usually contain a question mark. :)')
    return
  }    

  $("#result").text('Thinking...')
}




