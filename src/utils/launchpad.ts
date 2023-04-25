// Launch pad upvote (jQuery)
$('.button-upvote').click(function () {
  $(this).closest('form').submit();
});

$(function () {
  $(window).keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

function myVote(shortcode) {
  $(document).on('submit', 'form', function () {
    // Set product in local storage
    localStorage.setItem(shortcode, 'true');
    // Refresh page after 3000 milliseconds
    setTimeout(function () {
      location.reload(true);
    }, 1500);
  });
}

const allthethings = [];
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  allthethings.push(localStorage.key(i));
  document.getElementById(localStorage.key(i)).style.display = 'none';
}
