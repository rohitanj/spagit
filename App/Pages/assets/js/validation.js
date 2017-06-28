jQuery(function($) {"use strict";
	var Site = {

		initialized : false,

		initialize : function() {

			if (this.initialized)
				return;
			this.initialized = true;

			this.build();
			this.validation();
			//this.events();
		},

		build : function() {
		},
		
		validation : function() {
			var bool = true;

			$('#name,#sub,#email,#message').blur(function() {
				validateForm2(this);
			});

			$('#submit').click(function() {
				var i = 0;
				var x = $('#name').val();

				if (x == null || x == "" || x == "Name") {

					$('#name').addClass('error')
					bool = false;

				} else {
					i++;
					$('#name').removeClass('error');
					name_val = $('#name').val();

				}

				var x = $('#sub').val();

				if (x == null || x == "" || x == "Name") {
					$('#sub').addClass('error')
					bool = false;

				} else {
					i++;
					$('#sub').removeClass('error');
					subject = $('#sub').val();

				}

				var x = $('#company').val();

				if (x != null ) {
				    comp_val = $('#company').val();
				}

				var x = $('#email').val();

				var atpos = x.indexOf("@");
				var dotpos = x.lastIndexOf(".");
				if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length || x == 'Email') {
				    $('#email').addClass('error');
					bool = false;
				} else {

					i++;
					$('#email').removeClass('error');
					email_val = $('#email').val();

				}

				msg_val = $('#message').val();

				phone = $('#phone').val();
				//alert(i);

				if (i == 3) {

					bool = true;
				}

				if (!bool) {

					return false;
				} else {


//alert(1);
				    $.post('http://developbuilders.com/service.asmx/EmailNotification', {
				    //$.post('http://angulardemo/service.asmx/EmailNotification', {
						name : name_val,
						email : email_val,
						company : comp_val,
						msg: msg_val,
						subject: subject,
                        phone:phone
					}, function(data) {
						//alert(2);
					    $("body").scrollTop(0);
						 
							setTimeout(function() {
								$('#name').val('');
								$('#email').val('');
								$('#sub').val('');
								$('#message').val('');
								$('#company').val('');
								$('#phone').val('');

								//$('#name,#sub,#email,#message').next().removeClass("focussed");
								$('.ch').css('top', 0)
								$('#success').find('div').fadeOut();
								$('#success').fadeIn(500);
								
								$('#success').find('div').fadeIn();
								setTimeout(function() {
									$('#success').find('div').fadeOut();

								}, 250000)
							}, 500);

						 
					})
				
				}

			});

			function validateForm2(abc) {

				if ($(abc).val() != "") {
					$(abc).removeClass('error');

				} else {
					$(abc).addClass('error');

				}
				//email
				if ($(abc).attr('id') == 'email') {
					if (($(abc).val() != "" || $(abc).val() != null) && ($(abc).val().match(emailRegex))) {
						$(abc).removeClass('error');

					} else {
						$(abc).addClass('error');
					}
				}

			}

			var name_val = ''
			var email_val = '';

			var msg_val = '';
			var comp_val = '';

			var phone = '';
			var subject = '';

			var emailRegex = /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
			var numericExpression = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
		}
	};

	Site.initialize();
})
