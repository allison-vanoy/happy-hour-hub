/*************************
 specific happy hour voting
*************************/
	//increase likes on upvote
	let upVoteArr = $('.thumbUp');
	upVoteArr.click(function() {
		let numLikes = $(this).closest('.happyHourSpecial').find('.voteTotal span');
		let numLikesVal = parseInt(numLikes[0].innerText);
		numLikes[0].innerText = numLikesVal + 1;
		//change thumb color and make other thumb grey
		$(this).css('color', '#6c978f');
		$(this).siblings('.thumbDown').css('color', '#d4d4d4');
	});

	//decrease likes on downvote
	let downVoteArr = $('.thumbDown');
	downVoteArr.click(function() {
		let numLikes = $(this).closest('.happyHourSpecial').find('.voteTotal span');
		let numLikesVal = parseInt(numLikes[0].innerText);
		numLikes[0].innerText = numLikesVal - 1;
		//change thumb color and make other thumb grey
		$(this).css('color', '#6c978f');
		$(this).siblings('.thumbUp').css('color', '#d4d4d4');
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
		$(cloneContent).clone() //duplicate content section
							.find('input:text').val('').end() //clear input values
							.find('input:checkbox').prop('checked', false).end() //clear selected checkboxes
							.appendTo('#happyHourContainer'); //add duplicate to parent div
	});


	$(document).on('click', '.happyHourDelete', function() {
		if( $('.happyHourDelete').length > 1 ) {
			$(this).closest('.happyHourContent').remove();
		}
	});
/*************************
end add/delete another happy hour
*************************/



/*************************
 Modals
*************************/
	//open/close login modal
	$('#loginLink').click(function() {
		$('#loginModal').modal('show');
	});
		$('.close').click(function() {
			$('#loginModal').modal('hide');
		});

	//open/close create account modal
	$('#newAcctLink').click(function() {
		$('#newAcctModal').modal('show');
	});
		$('.close').click(function() {
			$('#newAcctModal').modal('hide');
		});

	//when deal is downvoted, open modal with questions
	$('.thumbDown').click(function() {
		$('#downVoteModal').modal('show');
	});
		$('.close, #downVoteModal .modalSubmit').click(function() {
			$('#downVoteModal').modal('hide');
			console.log($('input:selected').siblings('label').innerText);
		});

/*************************
 end modals
*************************/

