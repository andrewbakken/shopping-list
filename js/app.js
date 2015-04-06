$(document).ready(function () {

    // Validate text box, then add value in text box to list

    $('#add-to-list').click(function() {
        if( $('input#text-typed-in').val().trim().length == 0 ) {
                $('#error').show();
        } 

        else {         

    $('ul').append('<li class="todo"><button class="item">cross off</button>' + $('input#text-typed-in').val() + '<button class="item2">Delete</button>' + '</li>');
    $('#error').hide();

        };  

    });
    
    // Clears text box after submit

    $('input:text').click(function() {
        $(this).val('');
    });

    // both generated list item buttons    

    $('ul').on('click', '.item', function() {
        $(this).closest('li').toggleClass('done');
    });

     $('ul').on('click', '.item2', function() {
        $(this).closest('li').hide();
    });

});