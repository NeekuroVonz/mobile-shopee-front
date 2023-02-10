$(document).ready(function() {
   
//success toast
    var options = {
        autoClose: true,
        progressBar: true,
        enableSounds: true,
        sounds: {
        
            info: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233294/info.mp3",
            // path to sound for successfull message:
            success: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
            // path to sound for warn message:
            warning: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233563/warning.mp3",
            // path to sound for error message:
            error: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233574/error.mp3",
        }, 
    };
        
    var toast = new Toasty(options);
    toast.configure(options);

    $('#loginsuccesstoast').click(function() {
        toast.success("Login Success, Enjoy Your Stay :D");
    });
    $('#regissuccesstoast').click(function() {
        toast.success("Register Success, Hope You Stay Along With Us :)");
    });

    $('.addtocart').click(function() {
        toast.success("Add To Cart Success!");
    });
    $('#addtocartprod').click(function() {
        let prod = $('#product .row > div:nth-child(2) > h5').text();
        toast.success("Add "+prod+" To Cart Success!");
    });
    $('#resetpass').click(function() {
        toast.success("We have send you an email, plz check!");
    });
    
    $('#infotoast').click(function() {
        
        toast.info("This toast notification with sound");
        
    });
    
    $('#warningtoast').click(function() {
        
        toast.warning("This toast notification with sound");
        
    });
    
    $('#errortoast').click(function() {
        
        toast.error("This toast notification with sound");
        
    });
    
});