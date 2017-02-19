Template.photos.onCreated(function () {

    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none",
        padding:0, margin:0,
        
        beforeShow: function () {
        $("body *:not(.fancybox-overlay, .fancybox-overlay *)").addClass("blur");
        },
        afterClose: function () {
            $("body *:not(.fancybox-overlay, .fancybox-overlay *)").removeClass("blur");
        }
        
    });



// var photos = {};
//  Meteor.call('instagram', photos, function(err,res){
//  	if(err){
//  		console.log(err, "error");
//  	} else {
//  		console.log(res, "success");
//  	}
//  })

//  var token = '13591390.01bf291.28c2c17dbd214e2f8e6aeda1ef08da7b',

//     username = 'tjette', // rudrastyh - my username :)
//     num_photos = 4;
 
// $.ajax({ // the first ajax request returns the ID of user rudrastyh
// 	url: 'https://api.instagram.com/v1/users/search',
// 	dataType: 'jsonp',
// 	type: 'GET',
// 	data: {access_token: token, q: username}, // actually it is just the search by username
// 	success: function(data){
// 		console.log(data);
// 		$.ajax({
// 			url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
// 			dataType: 'jsonp',
// 			type: 'GET',
// 			data: {access_token: token, count: num_photos},
// 			success: function(data2){
// 				console.log(data2);
// 				for(x in data2.data){
// 					$('.instaTags').append('<li><img src="'+data2.data[x].images.thumbnail.url+'"></li>');  
// 				}
//     			},
// 			error: function(data2){
// 				console.log(data2);
// 			}
// 		});
// 	},
// 	error: function(data){
// 		console.log(data);
// 	}
// });
});


