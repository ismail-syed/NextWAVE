// Template.home.onRendered(function () {
// 	debugger; 
//  	var navbarAccountsBtn = $('#navbar-btn-accounts');
// 	if( !navbarAccountsBtn.parent().hasClass('open') ){
// 		var loginSignInLink = $('#login-sign-in-link');
// 		loginSignInLink.click();
// 		// loginSignInLink.css('display', 'none')
// 	}
// 	else{
// 		return;
// 	}
// });

// Template.home.onRendered(function () {
//   // Template.loginButtons.onRendered(function () {

//     $('#login-sign-in-link').click();
//   // });
// });

Template.home.rendered = function () {
  this.autorun(function () {
    $('#login-sign-in-link').click();
  });
};