$(document).ready(function() {
  $("#formAddress").submit(function(){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var addressInput = $("input#address").val();
    var phoneNumberInput = $("input#phoneNumber").val();
    var emailAddressInput = $("input#emailAddress").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".address").text(addressInput);
    $(".phoneNumber").text(phoneNumberInput);
    $(".emailAddress").text(emailAddressInput);
    $("#contact").show();

    event.preventDefault();


  });
  $(".panel").click(function(){
    $(this).find(".panel-body").toggle();
    // $(this).find(".panel-heading").toggle();
  });
});
