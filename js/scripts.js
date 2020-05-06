/*************************
 specific happy hour voting
*************************/
	//increase likes on upvote
	let upVoteArr = $('.thumbUp');
	upVoteArr.click(function() {
		let numLikes = $(this).closest('.happyHourSpecial').find('.voteTotal span');
		let numLikesVal = parseInt(numLikes[0].innerText);
		numLikes[0].innerText = numLikesVal + 1;
	});

	//decrease likes on downvote
	let downVoteArr = $('.thumbDown');
	downVoteArr.click(function() {
		let numLikes = $(this).closest('.happyHourSpecial').find('.voteTotal span');
		let numLikesVal = parseInt(numLikes[0].innerText);
		numLikes[0].innerText = numLikesVal - 1;
	});
/*************************
 end voting
*************************/


/*************************
add/delete another happy hour
section in form
*************************/
	//add happy hour section when "add more" is clicked
	let cloneContent = $('.happyHourContent');

	$('#happyHourAdd').click(function() {
		$(cloneContent[0]).clone() //duplicate content section
							.find('input:text').val('').end() //clear input values
							.find('input:checkbox').prop('checked', false).end() //clear selected checkboxes
							.appendTo('#happyHourContainer').addClass('mt-4'); //add duplicate to parent div
	});

	//delete happy hour section when X is clicked unless it's the last one
	let deleteBtnArr = $.find('.happyHourDelete');
	let deleteContent = $.find('.happyHourContent');

	$(deleteBtnArr).each(function(i) {
		$(this).click(function() {
			console.log(i);
	//		$(deleteContent[i]).remove();
		});
	});
/*************************
end add/delete another happy hour
*************************/



//open/close login modal
$('#loginLink').click(function() {
	$('#loginModal').modal('show');
});

$('.close').click(function() {
	$('#loginModal').modal('hide');
});

