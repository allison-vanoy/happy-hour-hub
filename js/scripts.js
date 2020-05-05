//increase/decrease likes on upvote or downvote clicks
let likesNumArr = $('.upVotes span');
let upVoteArr = $('.thumbUp');
let downVoteArr = $('.thumbDown');

upVoteArr.on('click', function() {
	let likesContent = parseInt(likesNumArr[0].innerText);
	likesNumArr[0].innerText = likesContent + 1;
});