console.log("Running on main ...");

$('#aboutlinks li a').click(function(){
  var clicked = this.id;
  switch (clicked) {
    case 'company-description':
      var company = "DS Consulting Group, LLC (DSCG) is a boutique fundraising and event planning firm.  We are committed to partnering with our clients to plan and execute results-driven and unique events, tailored to each organization’s mission and strategic fundraising plan.  Our extensive experience in the nonprofit sector enables us to understand your organizational challenges, anticipate your needs, and respond to changing priorities. The combination of fundraising and organizational expertise in events management, and a commitment to high-quality deliverables, ensures that we exceed our clients’ expectations.  	<br><br>As the Co-Founders and Principals of DSCG, Justin Davis and Meredith Sanandres bring over two decades of diversified, nonprofit and for profit fundraising experience and expertise to bear when creating and executing each client’s development plan.  When looking for a competitive edge in the ever-changing philanthropic marketplace, nonprofit organizations frequently turn to Justin and Meredith for their creative insight, knowledge of market trends, and general counsel.	<br><br>In our business, the benchmark of success lies in consistently producing significant, measurable results and our team has a proven track record of success.  We have developed fundraising strategies and managed the execution of more than 500 large-scale, sit down Galas, corporate golf outings, casino nights, and intimate cultivation events that raised more than $100 million.  We have worked with a diverse group of nonprofit organizations whose area of focus include, but are not limited to health, youth development, education, social action, civil rights, and the arts."
       $('#description-text').animate({opacity:0})
                .queue(function(){
                      $('#description-text').html(company);
                     $(this).dequeue()
                })
                .animate({opacity:1});  
      break;
    case 'meredith-description':
      var meredith = "Meredith Sanandres is an equity partner of DS Consulting Group, LLC and has been in the fundraising profession for more than nine years.<br><br>Before starting her own firm, she was Vice President of Vantage Consulting Group, Inc., where she planned and executed over 100 nonprofit, fundraising events each raising $500,000 to more than $1,000,000. Prior to joining Vantage, she was employed by Citibank N.A. as a Financial Analyst, where she managed an upscale consumer client portfolio with total balances exceeding $100MM. Before locating to New York, Ms. Sanandres lived in Hong Kong, Dubai, Greece, Japan and Singapore.<br><br>In addition to her fundraising practice, Ms. Sanandres is a member of the Association of Fundraising Professionals. She is also the Vice President of the Board of Directors of Doing Art Together, Inc., as well as one of the Chairpersons for DAT’s annual benefit. DAT is a nonprofit organization that brings art programs to schools throughout the five boroughs of New York City.<br><br>Ms. Sanandres is a graduate of Southern Methodist University with a Bachelor of Arts in Political Science and a minor in Asian Studies. She also studied at University College in Oxford, UK. Ms. Sanandres makes her home on Manhattan’s Upper Eastside.<br><br>"
      $('#description-text').animate({opacity:0})
              .queue(function(){
                    $('#description-text').html(meredith);
                   $(this).dequeue()
              })
              .animate({opacity:1});    
      break;
    case 'justin-description':
      var justin = "Justin S. Davis is an equity partner of DS Consulting Group, LLC and has been in the fundraising profession for more than ten years.<br><br>Before starting his own firm, he was Senior Account Executive at Vantage Consulting Group, Inc., where he planned and executed over 100 nonprofit, fundraising events, each raising from $500,000 to over $5,000,000. Prior to joining Vantage, he was employed by Susan Ulin Associates, another leading nonprofit fundraising event firm in New York City, as an Account Executive.<br><br>In addition to his fundraising practice, Mr. Davis is a member of the Association of Fundraising Professionals and is involved with a wide spectrum of community, civic and philanthropic endeavors in New York and throughout the country.<br><br>Mr. Davis is a native of Ohio and a graduate of Kenyon College with a Bachelor of Arts in Spanish Area Studies and a minor in Art History. He has also studied at El Instituto Internacional in Madrid, Spain. Mr. Davis resides on Manhattan’s Upper East Side.<br><br>"
       $('#description-text').animate({opacity:0})
                .queue(function(){
                      $('#description-text').html(justin);
                     $(this).dequeue()
                })
                .animate({opacity:1});
      break;      
  }
})

$(document).ready(function(){
  $('.himg').fadeIn(1000);
  $('#home-pictures img').fadeIn(1200);
  $(".fancybox").fancybox();
  console.log("Fading in...");
})

// Add id name to each link that is associated wit hthe html path and hten get that and  set selected to be that one! 
// var DP = (typeof DP == "object") ? DP : {};
// DP.validateForm = function(){
// 
//     //generic check value method
//     var fromReset = function(elmId, wrongValue, messageText){
//         //reset
//         $(".from_wrp input").css({"border":"1px solid #ACA69F"});
//         $(".from_wrp select").css({"border":"1px solid #ACA69F"});
//         $("#error_messages").empty("");
//     }
// 
//     //generic check value method
//     var valueCheck = function(elmId, wrongValue, messageText){
//         if($("#" + elmId).val() == wrongValue){
//             createAlert(elmId, messageText);
//         }
//     }
//     
//     //alert method
//     var createAlert = function(elmId, messageText){
//         $("#" + elmId).css({"border":"1px solid #f00"});
//         //alert(messageText);
//         $("#error_messages").append("" + messageText + ", ");
//     }
// 
//     //zip validation
//     var isZip = function(s){
//         var reZip = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
//         if (!reZip.test(s)) {
//             return false;
//         }
//         return true;
//     }
//     
//     //checks if value is integer
//     var isInt = function(n){
//         var reInt = new RegExp(/^-?\d+$/);
//         if (!reInt.test(n)) {
//             return false;
//         }
//         return true;
//     } 
//     
//     
//     //public method checks fieds
//     //requires 'valSetting' setting object
//     this.runCheck = function(){
//         //reseet form
//         fromReset();
//         //run checks
//         for (i=0;i<this.valSetting.fileds.length;i++){
//             
//             if(this.valSetting.fileds[i].type == "zip"){
//                 //zip check
//                 if(isZip($("#" + this.valSetting.fileds[i].id).val()) == false){    
//                     createAlert(this.valSetting.fileds[i].id, this.valSetting.fileds[i].msg);
//                 }
//             }
//             else if (this.valSetting.fileds[i].type == "number"){
//                 //checks for number
//                 if(isInt($("#" + this.valSetting.fileds[i].id).val()) == false){    
//                     createAlert(this.valSetting.fileds[i].id, this.valSetting.fileds[i].msg);
//                 }
//             }
//             else{
//                 //checks for value
//                 valueCheck(this.valSetting.fileds[i].id, this.valSetting.fileds[i].val, this.valSetting.fileds[i].msg);
//             }
//         }
//     }
// }
// 
//    //creates instance of the validation class
//     var vl = new DP.validateForm();
//     //passes validation settings
//     vl.valSetting = {fileds : [
//         {id : "first_name", val : 0, msg : "First Name", type : ""},
//         {id : "last_name", val : 0, msg : "Last Name", type : ""},
//         {id : "order_address", val : 0, msg : "Address", type : ""},
//         {id : "order_city", val : 0, msg : "City", type : ""},
//         {id : "order_state", val : 0, msg : "State", type : ""}, 
//         {id : "order_zip", val : 0, msg : "State", type : "zip"}
//         ]
//     };