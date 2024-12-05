// Elements
var logo_Button = document.getElementById("Menu-Buttons");
const H1 = document.getElementById("SubIntroTitle2")

// Constants
const Email = "HunterStudio122@Gmail.com"
const Phone_Number = "(682)-203-2642"
const Big_Screen = 1000;
const Cool_Down_Time = 1;

// Variables
var Last_Time = Date.now();
var Last_Screen_Size = window.innerWidth

// Mobile Device Clicked Logo Event
document.getElementById('Logo-Button').onclick = function() {
    //Variables
    var Calc_Time = (Date.now() - Last_Time);
    var Time_In_Seconds = (Calc_Time / 1000)

    //Checks
    if (window.innerWidth >= Big_Screen){ console.log("Big Screen!"); return;}
    if ( Time_In_Seconds < Cool_Down_Time ){ return;}

    // Animate Drop Down
    if (logo_Button.style.visibility === "visible") {
        logo_Button.style.top = "0vh";
        logo_Button.style.visibility = "hidden";

    } else {
        logo_Button.style.transition = "0.5s";
        logo_Button.style.top = "10vh";
        logo_Button.style.visibility = "visible";

    }

    // Update Last Click
    Last_Time = Date.now();
}

// Click To Copy Phone Number
try{
    document.getElementById('Copy_Phone').onclick = function() {
        navigator.clipboard.writeText(Phone_Number).then(function(){
            alert("Copied Phone Number.")
        })
    }
}catch{};


// Click To Copy Phone Number
try {
    document.getElementById('Copy_Email').onclick = function() {
        navigator.clipboard.writeText(Email).then(function() {
            alert("Copied Email.")
        })
    }
}catch{};


// Refresh CSS on Window Resize if not Mobile Device

window.addEventListener("resize", function(){
    logo_Button = document.getElementById("Menu-Buttons")
    if (this.window.innerWidth >= Big_Screen && Last_Screen_Size < Big_Screen){
        logo_Button.style.visibility = "visible";
        try{
            H1.style.visibility = "visible";
        }catch (error){
            console.error("An Error Occurred:", error.message);
        }
        logo_Button.style.transition = "0s";
        logo_Button.style.fontSize = "3.5vh";
        logo_Button.style.top = "0vh";
        //ReloadCSS(CSS_Styles);
    }else if (this.window.innerWidth < Big_Screen && Last_Screen_Size >= Big_Screen){
        logo_Button.style.top = "0vh";
        logo_Button.style.visibility = "hidden";
        try{
            H1.style.visibility = "hidden"; 
        }catch (error){
            console.error("An Error Occurred:", error.message);
        }
    }
    
    Last_Screen_Size = this.window.innerWidth;
}); 