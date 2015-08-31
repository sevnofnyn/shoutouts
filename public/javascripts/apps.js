
$(document).ready(function() {
    $('.carousel').carousel();
    var i =0;
    var assignID = function(data){
        i += 1;
        var $name = $('<h3>');
        var $shoutOut = $('<p>');
        var $div= $('<div>');
        var $placer = $('#div'+i);


        if(typeof data == 'array') {
            data.forEach(function (elem) {
                $name.text(elem.name);
                $shoutOut.text(elem.shoutout);
                $div.append($name).append($shoutOut);
                $placer.append($div);
            })
        } else {
            $name.text(data.name);
            $shoutOut.text(data.shoutout);
            $div.append($name).append($shoutOut);
            $placer.append($div);
        }
    };

    var callAjax = function() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/shoutOuts/',
            complete: function () {
                console.log('Ajax Complete!')
            },
            success: function (data) {
                console.log(data);
                data.forEach(assignID);
            },
            error: function (req, errorType, errorMessage) {
                console.log('There was an error: ', errorMessage);
            }
        });
    };
    callAjax();
});










////http://jsfiddle.net/technotarek/gXN2u/
//
////setCarouselHeight('#carousel-example');
////
////function setCarouselHeight(id)
////{
////    var slideHeight = [];
////    $(id+' .item').each(function()
////    {
////        // add all slide heights to an array
////        slideHeight.push($(this).height());
////    });
////
////    // find the tallest item
////    max = Math.max.apply(null, slideHeight);
////
////    // set the slide's height
////    $(id+' .carousel-content').each(function()
////    {
////        $(this).css('height',max+'px');
////    });
////}
//
//
//
//
//// When the DOM is ready
//$(document).ready(function () {
//
//    // get our content UL
//    var $results = $('#shoutOut');
//    var id = 0;
//
//    // Activate Carousel
//    $("#myCarousel").carousel();
//
//    $('.carousel').carousel({
//        interval: 2000,
//        pause: 'hover',
//        wrap: true
//});
//
////// Enable Carousel Indicators
////    $(".item").click(function(){
////        $("#myCarousel").carousel(1);
////    });
////
////// Enable Carousel Controls
////    $(".left").click(function(){
////        $("#myCarousel").carousel("prev");
////    });
//
//    // On doc ready, do an ajax call to get all students
//    $.ajax({
//        type: 'GET',
//        dataType: 'json',
//        url: '/shoutOuts'
//    }).done(function (data) {
//        // same as success
//
//        // for each student, create an LI with their name in a P tag
//
//        data.forEach(function (elem) {
//
//            // create a new LI node with the id set to the student id
////DID I MAKE A MESS HERE?????????
//            var $li = $('<li>', {id: elem.id});
//            $li.text(elem.id);
//            var $p = $('<p>');
//            $p.text('name: ' + elem.name + elem.id);
//            $li.append($p);
//            $results.append($li);
//
//            // go get their shout out
//            getShoutOut(elem.shoutOut);
//        });
//    }).fail(function (jqXHR, textStatus, errorThrown) {
//        // same as error
//        console.log('There was an error: ', errorThrown);
//    }).always(function () {
//        // same as complete
//        console.log('Ajax Complete!');
//    });
//
//    function getShoutOut(id) {
//        $.ajax({
//            type: 'GET',
//            dataType: 'json',
//            url: '/shoutOuts/' + id
//        }).done(function (data) {
//
//            // find what the parent LI is by ID
//            var $parentLi = $('#' + id);
//
//            // create a new UL with the id set to "shout out" plus the customer ID
//            var $ul = $('<ul>', {id: 'shoutOut' + id});
//            var $p = $('<p>');
//            $p.text('Shout Out:');
//            $ul.append($p);
//
//            // if there is no shout out, then don't add the data. Save that for later.
//            if (data != null) {
//
//                appendData($ul, data);
//            }
//
//            $parentLi.append($ul);
//
//        }).fail(function (jqXHR, textStatus, errorThrown) {
//            console.log('There was an error: ', errorThrown);
//        }).always(function () {
//            console.log('Ajax Complete!');
//        });
//    }
//
//    // a helper function that appends the given data to the given UL element
//    function appendData($ul, data) {
//
//        var $name= $('<li>');
//        $name.text('Name: ' + data.name1);
//        $ul.append($name);
//
//        var shoutOut = $('<li>');
//        $shoutOut.text('Shout Out: ' + data.shoutOut);
//        $ul.append($shoutOut);
//
//
//    }
//})
//
