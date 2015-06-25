$( document ).ready(function() {
    reviewers = [
        'Olivier Dolbeau',
        'Olivier',
        'Dolbi Dolbeau',
        'Bab',
        'Clément Vasseur',
        'Clément',
        'Matthieu Moquet',
        'MattKetmo',
        'Your PR is not ready to be reviewed!'
    ];

    var index = Math.floor(Math.random()*reviewers.length);

    $('#reviewer').html(reviewers[index]);
});
