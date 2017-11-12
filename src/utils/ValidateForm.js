import $ from 'jquery';

function validateForm(form) {
   var dataValidate = [];

   $("#" + form).find("input").each(function(index, el) {
      var element = this;
      var dataName = $("#" + element.id).attr("data-name");

      switch(element.type)
      {
         case 'password':
            if($("#" + element.id).attr("data-confirm") !== undefined)
            {
               var dataNameConfirm = $("#" + $("#" + element.id).attr("data-confirm")).attr("data-name");

               if($("#" + $("#" + element.id).attr("data-confirm")).val() !== "" && $("#" + $("#" + element.id).attr("data-confirm")).val().length > 7)
               {
                  if($("#" + element.id).val() === $("#" + $("#" + element.id).attr("data-confirm")).val())
                  {
                     $("#formGroup" + dataNameConfirm).addClass("has-success");
                     $("#formGroup" + dataNameConfirm).removeClass("has-error");
                     $("#ok" + dataNameConfirm).show();
                     $("#error" + dataNameConfirm).hide();

                     $("#formGroup" + dataName).addClass("has-success");
                     $("#formGroup" + dataName).removeClass("has-error");
                     $("#ok" + dataName).show();
                     $("#error" + dataName).hide();

                     dataValidate.push(true);
                  } else {
                     $("#formGroup" + dataName).addClass("has-error");
                     $("#formGroup" + dataName).removeClass("has-success");
                     $("#error" + dataName).show();
                     $("#ok" + dataName).hide();

                     dataValidate.push(false);
                  }
               } else {
                  $("#formGroup" + dataNameConfirm).addClass("has-error");
                  $("#formGroup" + dataNameConfirm).removeClass("has-success");
                  $("#error" + dataNameConfirm).show();
                  $("#ok" + dataNameConfirm).hide();

                  $("#formGroup" + dataName).addClass("has-error");
                  $("#formGroup" + dataName).removeClass("has-success");
                  $("#error" + dataName).show();
                  $("#ok" + dataName).hide();

                  dataValidate.push(false);
               }
            }
         break;
         default:
            if($("#" + element.id).attr("data-required") === "true")
            {
               if($("#" + element.id).val() === "")
               {
                  $("#formGroup" + dataName).addClass("has-error");
                  $("#formGroup" + dataName).removeClass("has-success");
                  $("#error" + dataName).show();
                  $("#ok" + dataName).hide();

                  dataValidate.push(false);
               } else {
                  $("#formGroup" + dataName).addClass("has-success");
                  $("#formGroup" + dataName).removeClass("has-error");
                  $("#ok" + dataName).show();
                  $("#error" + dataName).hide();

                  dataValidate.push(true);
               }
            }
         break;
      }
   });

   $("#" + form).find("select").each(function(index, el) {
      var element = this;
      var dataName = $("#" + element.id).attr("data-name");

      if($("#" + element.id).attr("data-required") === "true")
      {
         if($("#" + element.id).val() === "")
         {
            $("#formGroup" + dataName).addClass("has-error");
            $("#formGroup" + dataName).removeClass("has-success");

            dataValidate.push(false);
         } else {
            $("#formGroup" + dataName).addClass("has-success");
            $("#formGroup" + dataName).removeClass("has-error");

            dataValidate.push(true);
         }
      }
   });

   var returnDataForm;
   for(var i in dataValidate)
   {
      if(dataValidate[i] === false)
      {
         returnDataForm = false;
         break;
      } else {
         returnDataForm = true;
      }
   }

   return returnDataForm;
}

function validateInput(e) {
   var elementDataName = $("#" + e.target.id).attr("data-name");

   if($("#" + e.target.id).attr("data-required") === "true")
   {

      if(e.target.type === "password")
      {
         var elementDataNameConfirm = $("#" + e.target.id).attr("data-confirm")

         if($("#" + e.target.id).attr("data-confirm") === undefined)
         {
            var passLength = $("#" + e.target.id).val().length;

            if(passLength > 7)
            {
               if($("#" + e.target.id).val() === "")
               {
                  $("#formGroup" + elementDataName).addClass("has-error");
                  $("#formGroup" + elementDataName).removeClass("has-success");
                  $("#error" + elementDataName).show();
                  $("#ok" + elementDataName).hide();
               } else {
                  $("#formGroup" + elementDataName).addClass("has-success");
                  $("#formGroup" + elementDataName).removeClass("has-error");
                  $("#ok" + elementDataName).show();
                  $("#error" + elementDataName).hide();
               }
            } else {
               $("#formGroup" + elementDataName).addClass("has-error");
               $("#formGroup" + elementDataName).removeClass("has-success");
               $("#error" + elementDataName).show();
               $("#ok" + elementDataName).hide();
            }
         } else {
            var passLengthConfirm = $("#" + e.target.id).val().length;

            if(passLengthConfirm > 7)
            {
               if($("#" + elementDataNameConfirm).val() === "")
               {
                  $("#formGroup" + elementDataName).addClass("has-error");
                  $("#formGroup" + elementDataName).removeClass("has-success");
                  $("#error" + elementDataName).show();
                  $("#ok" + elementDataName).hide();

                  $("#formGroup" + elementDataNameConfirm).addClass("has-error");
                  $("#formGroup" + elementDataNameConfirm).removeClass("has-success");
                  $("#error" + elementDataNameConfirm).show();
                  $("#ok" + elementDataNameConfirm).hide();
               } else {
                  if($("#" + e.target.id).val() === $("#" + elementDataNameConfirm).val())
                  {
                     $("#formGroup" + elementDataName).addClass("has-success");
                     $("#formGroup" + elementDataName).removeClass("has-error");
                     $("#ok" + elementDataName).show();
                     $("#error" + elementDataName).hide();
                  } else {
                     $("#formGroup" + elementDataName).addClass("has-error");
                     $("#formGroup" + elementDataName).removeClass("has-success");
                     $("#error" + elementDataName).show();
                     $("#ok" + elementDataName).hide();
                  }
               }
            } else {
               $("#formGroup" + elementDataName).addClass("has-error");
               $("#formGroup" + elementDataName).removeClass("has-success");
               $("#error" + elementDataName).show();
               $("#ok" + elementDataName).hide();

               $("#formGroup" + elementDataNameConfirm).addClass("has-error");
               $("#formGroup" + elementDataNameConfirm).removeClass("has-success");
               $("#error" + elementDataNameConfirm).show();
               $("#ok" + elementDataNameConfirm).hide();
            }
         }
      } else {
         if($("#" + e.target.id).val() === "")
         {
            $("#formGroup" + elementDataName).addClass("has-error");
            $("#formGroup" + elementDataName).removeClass("has-success");
            $("#error" + elementDataName).show();
            $("#ok" + elementDataName).hide();
         } else {
            $("#formGroup" + elementDataName).addClass("has-success");
            $("#formGroup" + elementDataName).removeClass("has-error");
            $("#ok" + elementDataName).show();
            $("#error" + elementDataName).hide();
         }
      }
   }
}

export { validateInput, validateForm };