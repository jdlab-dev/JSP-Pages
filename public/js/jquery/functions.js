// JavaScript Document

//functions of java script
/*

$(document).ready(function() {

	$('#notifications').addClass('visible');

});

*/

/* check all function, select all  */
/* eslint-disable */
$(document).ready(function() {


	 //////////////////////// not working

	 $('#selecctall').click(function(event) {  //on click
         if(this.checked) { // check select status
             $('.checkbox1').each(function() { //loop through each checkbox
                 this.checked = true;  //select all checkboxes with class "checkbox1"
             });
         }else{
             $('.checkbox1').each(function() { //loop through each checkbox
                 this.checked = false; //deselect all checkboxes with class "checkbox1"
             });
         }
     });



	//hide notification
	$(".notification").addClass("in").fadeOut(10000);



	//check if he/ she agrees or not
  $('#save_declaration').click(function(){

	  if ($('#checkbox-id').is(':checked'))
	  {

			 //do this
			 var element = $(this);
			 //var id = element.attr("id");
			var id = 1; //pass id  = 1 since 1 indicates election interest
			var info = 'id=' + id;

			if(confirm("Do you  really want to proceed?"))
			 {
			   $.ajax({
			   type: "POST",
			   url: "activate_final_submission.php",
			   data:info,
			   success:function(html)
				  {

					  $('.hide_me').hide(1000); //hide the buttons for showing interest
					  $("#message").show();
					  $("#message").html('<i class="glyphicon glyphicon-ok"></i> Successfully submitted. Please print your Acknowledgement Slip for reference purpose, we will keep you posted on when to log back to application process. Thank You');
					 // $("#message").html(html);
					  location.reload(1000);
					  //$('.show_me').show(1000); //show the infos after the user has showed interest



				  }// end success
			   })
			 }

		  return false;

			   event.preventDefault();
	  }
	  else
	  {
	  		alert('Please click on the check box  to submit your declaration');
			return false;
	  }

	  //var count_checked = $("[name='agreement']:checked").length; // count the checked
//							if(count_checked == 0) {
//								alert("Please select a user(s) to delete.");
//								return false;
//							}
//
  });





	 /////////////////////////////////////// apply for hostel bed space
	$("#message").hide(); //hide the feedback mesage
	$("#loader_gif").hide(); //hide the loader effect


	$('#apply_hostel').click(function(event){


		$("#loader_gif").show(); //show loader effect


			var element = $(this);
			 //var id = element.attr("id");
			var id = 1; //pass id  = 1 since 1 indicates application to stay in the hostel
			var info = 'id=' + id;

	   // if(confirm("Do you  really want to proceed?"))
//		 {
		   $.ajax({
		   type: "POST",
		   url: "apply_hostel.php",
		   data:info,
		   success:function(html)
			  {
				  $("#loader_gif").hide(); //hide the loader effect
				  $('.hide_me').hide(1000); //slide away the layout
				  $("#message").show();
				  $("#message").html('<i class="glyphicon glyphicon-ok"></i> We have received your application and now reviewing it, please check back  in a week\'s time. Thank you');
				 // $("#message").html(html);



			  }// end success
		   })
		// }

	  return false;

		   event.preventDefault();

		  });

		///end of button de activate the election interest


		 ////////////////////////////////////////// validation for changing password//////////////////////////////////////////////////

	 ///////////// for password
	 $('.error_msg_old_pw').hide(); // hide old password error first
	 $('.error_msg_new_pw').hide(); // hid new password error first
	 $('.error_msg_cm_pw').hide(); // hide confirm error password first
	 $('.change_password').click(function(event){ // then if update is clicked



		 var old_password = $('#old_password').val();
		 var old_password_len = old_password.length; // collect the lenght of the pw

		 var new_password = $('#new_password').val();
		 var new_password_len = new_password.length; //collect tghe legnth of the npw

		 var confirm_new_password = $('#confirm_new_password').val();

		 var data = 'old_password='+old_password+'&new_password='+new_password;  // collect all the dat and pass to php file





		 if(old_password_len < 1)
		 {
			 $('.error_msg_old_pw').show();

		 }
		 else if(new_password_len < 1)
		 {
			 $('.error_msg_new_pw').show();

		 }
		 else if(new_password != confirm_new_password)
		 {
			 $('.error_msg_cm_pw').show();


		 }
		 else
		 {



			 if(confirm("Do you  really want to update the password ?"))
			 {
			   $("#flash").show();
			   $("#flash").fadeIn(400).html('Updating...');


			   $.ajax({
			   type: "POST",
			   url: "update_users_password.php",
			   data: data,
			   cache: true,
			   success:function(html)
				  {


					  $("#flash").hide();
					  $('#feedback_message').html(html);

					  /*$(".restore").fadeOut(1000);
					  location.reload();
					  */



				  }// end success
			   })
		   }

		   return false;

		 }//end of else

		 event.preventDefault();





	 });




	 /////////////////////////////////////// end of password validation //////////////////////////////////////////////////



	 ////show departments offfering programmes type
	 //this is to load departments attached to different programmes type
			 $('#loader1').hide();
			 $('#show_programme').show();
			 $('#show_sub_programme').hide();
		     $('#search_department_id').change(function(){


				$('#show_programme').show();
				$('#show_sub_programme').show();
				$('#loader1').show();


			  	var value1 = $('#search_prog_type_id').val();
				var value = $('#search_department_id').val();

				if(value1  == '0' || value == '0' )
				{
					alert('Please select either Programme Type or Department');
				}
				else
				{
					var data='value='+value+'&value1='+value1;


				}


			  	//var data='value='+value;


				$.ajax({
					type:"GET",
					url:"show_programmes.php",
					data:data,
					success:function(html) {
					$('#loader1').hide();
					$('#hide_sub_programme').hide();
					$('#show_sub_programme').show();
					$("#show_sub_programme").html(html);

					}
				});



			 	return false;

			 });





	 /**********************  this he function that initiates the tooltip **************
	 ** it allows tooltip to show *****************************************************/

  	$('[data-toggle="tooltip"]').tooltip();




	/********************************* this is the finction for pop over ***********************/
	$('[data-toggle="popover"]').popover();






	 /************** this is for data table ******************
	 ** it activates the table to be allowe to use  ************
     *********************** activate datatables ----*/
     $('#example').DataTable({

		responsive: true, // for table responsiveness


		 "pageLength": 10, //default page lenght



		"lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]], //for showing all the rows

		stateSave: true, // for saving a aprticular state in tables position




	});



	 /////////////////////////////////////// end of pay school fee //////////////////////////////////////////////////



	//ajaxTime.php is called every second to get time from server
	// var refreshId = setInterval(function()
//	 {
//	   $('.refresh_me').load('load_payment.php');
//	 }, 1000);
//




});

/*dialog box delete*/
jQuery(function($) {




	////////////////////////////////// check all ////////////////////////////////////////////
	$("form input[id='check_all']").click(function() { // triggred check

		var inputs = $("form input[type='checkbox']"); // get the checkbox

		for(var i = 0; i < inputs.length; i++) { // count input tag in the form
			var type = inputs[i].getAttribute("type"); //  get the type attribute
				if(type == " functioncheckbox") {
					if(this.checked) {
						inputs[i].checked = true; // checked
					} else {
						inputs[i].checked = false; // unchecked
				 	 }
				}
		}
	});

















}); // jquery end









//print function
	//function for printing a page
function doit(){
if (!window.print){
alert("You need NS4.x to use this print button!")
return
}
window.print()
}
