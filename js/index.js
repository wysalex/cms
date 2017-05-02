/**
 * @author Alex Wang <allenallen2525@gmail.com>
 */

$(function () {
    $('#menu > .container > ul > li.group > div').on('click', function () {
        $(this).parent().toggleClass('active');
    });
});