$(function(){ 
<<<<<<< Updated upstream
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message">
         <div class="upper-message">
           <div class="upper-message__user-name">
             ${message.user_name}
           </div>
           <div class="upper-message__date">
             ${message.created_at}
           </div>
         </div>
         <div class="lower-message">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message">
         <div class="upper-message">
           <div class="upper-message__user-name">
             ${message.user_name}
           </div>
           <div class="upper-message__date">
             ${message.created_at}
           </div>
         </div>
         <div class="lower-message">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
=======
  var buildHTML = function(message) {
    if (message.content && message.image) {
      
      var html =` <div class="message" data-message-id=  ${message.id} >
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
          <img src=" ${message.image} " class="lower-message__image" >
        </div>
      </div>`
    } else if (message.content) {
     
      var html = `<div class="message" data-message-id= ${message.id} >
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div> 
          <div class="upper-message__date">
            ${message.created_at}
          </div>
      </div>
        <div class="lower-message">
            <p class="lower-message__content">
            ${message.content}
          </p> 
        </div> 
      </div>`
    } else if (message.image) {
     
      var html = `<div class="message" data-message-id = ${message.id} >
        <div class="upper-message">
          <div class="upper-message__user-name">
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div> 
        </div>
        <div class="lower-message">
          <img src=" ${message.image} " class="lower-message__image" >
        </div> 
      </div>`
    };
    return html;
>>>>>>> Stashed changes
   };
 }
$('#new_message').submit(function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
  $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.main__content__name__box').append(html)
    $('.main__content').animate({ scrollTop: $('.main__content')[0].scrollHeight});
    $('form')[0].reset();
  })
  .fail(function(){
    alert("メッセージの送信に失敗しました");
  });
    return false;
  });
});