Template.home.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      	$('#login-sign-in-link').click();
	   $('#login-dropdown-list').addClass('open');
	   // alert('rendered');

    }
}