//preloader

$(window).on("load",function(){
    $('.preloader-img').fadeOut(800);
    $('.preloader').delay(850).fadeOut(800);
});



$(document).ready(function(){

    //Menu Section

    $('.menu-filter-items').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');

        let getfiltervalue = $(this).attr('data-filter');

        if(getfiltervalue === 'all'){
            $('.mainfood-items').show("slide",300);
        }else{
            $('.mainfood-items').hide();
            $('.mainfood-items').not('.'+getfiltervalue).hide("slide",300);
            $('.mainfood-items').filter('.'+getfiltervalue).show("slide",300);
        }
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        mouseDrag:false,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:4000,
        slideTransition:`linear`,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })

    // lightbox2
    lightbox.option({
        
      'resizeDuration': 100,
      'wrapAround': true,
      'fadeDuration':300,
      'resizeDuration':300,
    })


    //drink
    let mainimg1 = document.querySelector('.bottle-unboxs');
    let mainimg2 = document.querySelector('.bottle-boxs');

    let drinkData ={
        jd:{
            img1:'./assets/img/drink/item1.png',
            img2:'./assets/img/drink/item1-1.png',
            name:'Jack Danial 1L',
            AlcoholPercentage:40,
            BottleVolume:1000,
            Brand:'Jack Daniels',
            Country:'United States',
            Type:'Bourbon',
            Price:'$44'
        },
        blt:{
            img1:'./assets/img/drink/item2.png',
            img2:'./assets/img/drink/item2-2.png',
            name:'Ballantines The Original',
            AlcoholPercentage:40,
            BottleVolume:750,
            Brand:'Ballantines',
            Country:'Scotland',
            Type:'Scotch Whisky',
            Price:'$34.4'
        },
        jwwhite:{
            img1:'./assets/img/drink/item3.png',
            img2:'./assets/img/drink/item3-3.png',
            name:'Johnnie Walker A Song of Ice',
            AlcoholPercentage:40.2,
            BottleVolume:750,
            Brand:'Johnnie Walker',
            Country:'Scotland',
            Type:'Scotch Whisky',
            Price:'$108.99'
        },
        jwblack:{
            img1:'./assets/img/drink/item4.png',
            img2:'./assets/img/drink/item4-4.png',
            name:'Jonnie Walker Black Label',
            AlcoholPercentage:40,
            BottleVolume:700,
            Brand:'Johnnie Walker',
            Country:'Scotland',
            Type:'Scotch Whisky',
            Price:'$58'
        },
        jwgreen:{
            img1:'./assets/img/drink/item5.png',
            img2:'./assets/img/drink/item5-5.png',
            name:'Jonnie Walker Green Label',
            AlcoholPercentage:43,
            BottleVolume:700,
            Brand:'Johnnie Walker',
            Country:'Scotland',
            Type:'Scotch Whisky',
            Price:'$96'
        }
    }
    mainimg1.src = drinkData.jd.img1;
    mainimg2.src = drinkData.jd.img2;

    let imgGallary = document.querySelectorAll('.btn-image');
    imgGallary.forEach(function(val){
        val.addEventListener('click',function(){
            mainimg1.src = drinkData[val.id].img1;
            mainimg2.src = drinkData[val.id].img2;
            $('#label').text(drinkData[val.id].name);
            $('#percentage').text(drinkData[val.id].AlcoholPercentage);
            $('#volume').text(drinkData[val.id].BottleVolume);
            $('#brandname').text(drinkData[val.id].Brand);
            $('#brandcountry').text(drinkData[val.id].Country);
            $('#type').text(drinkData[val.id].Type);
            $('#price').text(drinkData[val.id].Price);
        })
    })
})




