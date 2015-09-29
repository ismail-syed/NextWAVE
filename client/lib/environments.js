// Configuration of any client side packages

	Accounts.ui.config({
    	passwordSignupFields: 'USERNAME_ONLY'
	});


	Router.route('/', function () {
		this.render('home');
	});

	Router.route('/subscribedPosts', function () {
		this.render('subscribedPosts');
	});
	// Router.route('/post');

	// Router.route('/post', {
	//     data: function(){
	//     }
	// });

	Router.route('/post/:_id', {
	    template: 'postDetails',
	    data: function(){
	    	 var currentPost = this.params._id;
    	     return Posts.findOne({ _id: currentPost })
	    }
	});