$(function(){
/*
* первый параметр - id формы; 
* второй - id блока, куда подгружаем форму, 
* третий - xsl-шаблон формы, 
* четвертый показывать капчу - true. не показывать - false
*/
    ShowForm(18, 'modal_24_inner', 'ПодпискаНаНовостиTwee', false);
    

});


function ShowForm(form_id, block, xslForm, captcha){
    var form_block = $("#"+block);
    var c;
    var item_id;
    if(captcha){
        c = 1;
    }
    else{
        c = 0
    }
    
    
    if(form_block.length > 0){
        $.ajax({
          type: "POST",
          url: "/form/form_twee.php",
          data: "show_form=1&form_id="+form_id+"&xsl="+xslForm+"&captcha="+c,
          success: function(data){
            form_block.html(data);
          }
        });
    }
    return false;
}

function SendForm(form){
    var s = $(form).serialize();
    
    if($("#item_id").length > 0 && $("#item_id").val() !==''){
        item_id = parseFloat($("#item_id").val());
    }
    
    $.ajax({
      type: "GET",
      url: "/form/form_twee.php",
      data: s+"&item_id="+item_id,
      success: function(data){
          
        if(data ==1){
            form.find(".result").html("Ваше сообщение отправлено!");
            form.find("input[type='text']").val("");
            form.find("textarea").val("");
            form.find("input[type='checkbox']").prop("checked", false);
            form.find("select").prop('selectedIndex', 0);      
            form.find(".change_captcha").click();

            
        }
        else{
            if(data =='-1'){
                form.find(".result").html("Неверный код!");
                form.find(".change_captcha").click();
            }
        }

      }
    });   
   
}































