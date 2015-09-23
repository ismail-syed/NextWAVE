Template.navbar.events({
	"click #navbar-btn-accounts": function(){
		// debugger;
		var navbarAccountsBtn = $('#navbar-btn-accounts');

		if( !navbarAccountsBtn.parent().hasClass('open') ){
			// debugger; 
			var loginSignInLink = $('#login-sign-in-link');
			loginSignInLink.click();
			// loginSignInLink.css('display', 'none')
		}
		else{
			return;
		}

	}
});