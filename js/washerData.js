        $.getJSON("https://api.myjson.com/bins/xqs1d", function(data) {
            console.log(data);

            
            $('#hero').append('<ul><li class="itemimage col-md-3"><img class="img-rounded" src=' + data.productList[0].imageUrls.lg + '></li>' +
                '<li class="itembrand col-md-9">' + data.productList[0].brand + '</li>' +
                '<li class="itemdescription col-md-9">' + data.productList[0].description + '</li>' +
                '<li class="cart col-md-9"><button type="button" class="btn btn-primary add-to-cart primarybutton">' + 'Add To Cart' + '</button></li>' + 
                '<li class="itemprice col-md-9"> <p style="float:right">$' + data.productList[0].pricing.price.retail + '</p></li></ul>');

            for (var i = 0; i < data.productList.length; i++) {
                $('#container').append('<div class="productBox-' + i + ' col-md-4"></div>');
                $(' .productBox-' + i + ' ').css("margin-bottom",'50px');
                $(' .productBox-' + i + ' ').append('<ul><li class="itemimage text-center"><img class="img-rounded" src=' + data.productList[i].imageUrls.sm + '></li>' +
                    '<li class="itemBrand text-center">' + data.productList[i].brand + '</li>' +
                    '<li class="itemdescription text-center">' + data.productList[i].description + '</li>' +
                    '<li class="itemprice text-center"> <p>$' + data.productList[i].pricing.price.retail + '</p></li>' +
                    '<li class="itempreview text-center"><button type="button" class="btn btn-primary">' + 'View More' + '</button></li></ul>');
            }

            $('.itempreview').on('click', function() {
                var originalBrand = $('#hero .itemBrand').text(),
                    brand = $(this).closest('ul').find('.itembrand').text(),
                    description = $(this).closest('ul').find('.itemdescription').text(),
                    price = $(this).closest('ul').find('.itemprice').text(),
                    image = $(this).closest('ul').find('img').attr('src');
                image = image.replace(/sm/g, 'lg');
                $('#hero .itemimage img').attr('src', image);
                $('#hero li.itemBrand').text(brand);
                $('#hero li.itemdescription').text(description);
                $('#hero li.itemprice p').text(price);
            });

            $('img').hover(function() {
                var originalBrand = $('#hero .itemBrand').text(),
                    brand = $(this).closest('ul').find('.itembrand').text(),
                    description = $(this).closest('ul').find('.itemdescription').text(),
                    price = $(this).closest('ul').find('.itemprice').text(),
                    image = $(this).closest('ul').find('img').attr('src');
                image = image.replace(/sm/g, 'lg');
                $('#hero .itemimage img').attr('src', image);
                $('#hero li.itemBrand').text(brand);
                $('#hero li.itemdescription').text(description);
                $('#hero li.itemprice p').text(price);
            });


            $('.add-to-cart').on('click', function() {
                var brand = $('#hero .itemBrand').text(),
                    description = $('#hero .itemdescription').text(),
                    price = $('#hero .itemprice').text();

                alert('Added to cart successuflly!' + ' Price: ' + price);
            });

            setInterval(function() {
                if ($(document).width() < 1000) { $('#hero').height(400); } else { $('#hero').height(320); }
            }, 100);
        });