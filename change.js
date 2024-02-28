// 상품 
let productPriceArray = {
    '고소팝콘' : 5530, '달콤팝콘' : 6700, '어니언팝콘' : 5880, '치즈팝콘' : 6150,
    '라지콤보' : 21340, '더블콤보' : 15610, '스몰콤보' : 9820,
    '아메리카노' : 4690, '아이스아메리카노' : 6340, '탄산음료' : 3560,
    '나쵸' : 7990, '오징어' : 2450, '핫도그' : 4120
}

// 돈
let money_object = {
    'fifty_thousand':50000, 'ten_thousand':10000 , 'five_thousand':5000,
    'one_thousand':1000, 'five_hundred':500, 'one_hundred':100,
    'fifty':50, 'ten':10
}

// 총금액 담을 변수
let all_result_price = 0;
// 받은 금액 담을 변수
let total_payment = 0;
// 거스름돈 담을 변수
let change_money = 0;

// 총금액, 받은 금액, 거스름돈 박스
let input_all_price_box = 0;
let input_get_money_box = 0;
let input_change_money_box = 0;

// 상품 카운트
let basic_popcorn_count = 0;
let sweet_popcorn_count = 0;
let onion_popcorn_count = 0;
let cheese_popcorn_count = 0;
let large_combo_count = 0;
let double_combo_count = 0;
let small_combo_count = 0;
let hot_americano_count = 0;
let ice_americano_count = 0;
let soda_drink_count = 0;
let nacho_combo_count = 0;
let squid_combo_count = 0;
let hotdog_combo_count = 0;

// 지폐 갯수 박스
let fifty_thousand_change_result = 0;
let ten_thousand_change_result = 0;
let five_thousand_change_result = 0;
let one_thousand_change_result = 0;
let five_hundred_change_result = 0;
let one_hundred_change_result = 0;
let fifty_won_change_result = 0;
let ten_won_change_result = 0;

// 정규식으로 콤마찍기
let regexp = /\B(?=(\d{3})+(?!\d))/g;

// 팝업창 레이어 함수
function pop_up_layer_check(innerhtml){
    $('.pop_up_layer').css('display','block');
    $('.pop_up_layer > span').html(innerhtml);
}

this.addEventListener("click", function(e) {
    switch (e.target.id) {
        // 상품이미지를 눌렀을 때 수량, 총금액에 더해지는 부분
        case 'basic_popcorn' :
            basic_popcorn_count++;
            all_result_price += productPriceArray['고소팝콘'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['고소팝콘'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.basic_popcorn_count').html(basic_popcorn_count);
            }
            break;
        case 'sweet_popcorn' :
            sweet_popcorn_count++;
            all_result_price += productPriceArray['달콤팝콘'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['달콤팝콘'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.sweet_popcorn_count').html(sweet_popcorn_count);
            }
            break;
        case 'onion_popcorn' :
            onion_popcorn_count++;
            all_result_price += productPriceArray['어니언팝콘'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['어니언팝콘'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.onion_popcorn_count').html(onion_popcorn_count);
            }
            break;
        case 'cheese_popcorn' :
            cheese_popcorn_count++;
            all_result_price += productPriceArray['치즈팝콘'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['치즈팝콘'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.cheese_popcorn_count').html(cheese_popcorn_count);
            }
            break;
        case 'large_combo' :
            large_combo_count++;
            all_result_price += productPriceArray['라지콤보'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다."); 
                all_result_price -= productPriceArray['라지콤보'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.large_combo_count').html(large_combo_count);
            }
            break;
        case 'double_combo' :
            double_combo_count++;
            all_result_price += productPriceArray['더블콤보'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['더블콤보'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.double_combo_count').html(double_combo_count);
            }
            break;
        case 'small_combo' :
            small_combo_count++;
            all_result_price += productPriceArray['스몰콤보'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['스몰콤보'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.small_combo_count').html(small_combo_count);
            }
            break;
        case 'hot_americano' :
            hot_americano_count++;
            all_result_price += productPriceArray['아메리카노'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['아메리카노'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.hot_americano_count').html(hot_americano_count);
            }
            break;
        case 'ice_americano' :
            ice_americano_count++;
            all_result_price += productPriceArray['아이스아메리카노'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['아이스아메리카노'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.ice_americano_count').html(ice_americano_count);
            }
            break;
        case 'soda_drink' :
            soda_drink_count++;
            all_result_price += productPriceArray['탄산음료'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['탄산음료'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.soda_drink_count').html(soda_drink_count);
            }
            break;
        case 'nacho_combo' :
            nacho_combo_count++;
            all_result_price += productPriceArray['나쵸'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다."); 
                all_result_price -= productPriceArray['나쵸'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.nacho_combo_count').html(nacho_combo_count);
            }
            break;
        case 'squid_combo' :
            squid_combo_count++;
            all_result_price += productPriceArray['오징어'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다."); 
                all_result_price -= productPriceArray['오징어'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.squid_combo_count').html(squid_combo_count);
            }
            break;
        case 'hotdog_combo' :
            hotdog_combo_count++;
            all_result_price += productPriceArray['핫도그'];
            if ( all_result_price > 100000) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['핫도그'];
            } else {
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                $('.hotdog_combo_count').html(hotdog_combo_count);
            }
            break;

    // + 버튼을 눌렀을 때 수량과 총금액이 더해지게 하는 부분
        case 'basic_popcorn_plus_btn' :
            basic_popcorn_count++;
            all_result_price += productPriceArray['고소팝콘'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['고소팝콘'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.basic_popcorn_count').html(basic_popcorn_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'sweet_popcorn_plus_btn' :
            sweet_popcorn_count++;
            all_result_price += productPriceArray['달콤팝콘'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['달콤팝콘'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.sweet_popcorn_count').html(sweet_popcorn_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'onion_popcorn_plus_btn' :
            onion_popcorn_count++;
            all_result_price += productPriceArray['어니언팝콘'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['어니언팝콘'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.onion_popcorn_count').html(onion_popcorn_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'cheese_popcorn_plus_btn' :
            cheese_popcorn_count++;
            all_result_price += productPriceArray['치즈팝콘'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['치즈팝콘'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.cheese_popcorn_count').html(cheese_popcorn_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'large_combo_plus_btn' :
            large_combo_count++;
            all_result_price += productPriceArray['라지콤보'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['라지콤보'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.large_combo_count').html(large_combo_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'double_combo_plus_btn' :
            double_combo_count++;
            all_result_price += productPriceArray['더블콤보'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['더블콤보'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.double_combo_count').html(double_combo_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'double_combo_plus_btn' :
            double_combo_count++;
            all_result_price += productPriceArray['더블콤보'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['더블콤보'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.double_combo_count').html(double_combo_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'small_combo_plus_btn' :
            small_combo_count++;
            all_result_price += productPriceArray['스몰콤보'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['스몰콤보'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.small_combo_count').html(small_combo_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'hot_americano_plus_btn' :
            hot_americano_count++;
            all_result_price += productPriceArray['아메리카노'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['아메리카노'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.hot_americano_count').html(hot_americano_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'ice_americano_plus_btn' :
            ice_americano_count++;
            all_result_price += productPriceArray['아이스아메리카노'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['아이스아메리카노'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.ice_americano_count').html(ice_americano_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'soda_drink_plus_btn' :
            soda_drink_count++;
            all_result_price += productPriceArray['탄산음료'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['탄산음료'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.soda_drink_count').html(soda_drink_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'nacho_combo_plus_btn' :
            nacho_combo_count++;
            all_result_price += productPriceArray['나쵸'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['나쵸'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.nacho_combo_count').html(nacho_combo_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'squid_combo_plus_btn' :
            squid_combo_count++;
            all_result_price += productPriceArray['오징어'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['오징어'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.squid_combo_count').html(squid_combo_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;
        case 'hotdog_combo_plus_btn' :
            hotdog_combo_count++;
            all_result_price += productPriceArray['핫도그'];
            if ( all_result_price > 100000 ) {
                pop_up_layer_check("100,000원을 초과하였습니다.");
                all_result_price -= productPriceArray['핫도그'];
            } else {
                if ( all_result_price < 100000 ) {
                    $('.hotdog_combo_count').html(hotdog_combo_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                }
            }
            break;

    // - 버튼을 눌렀을 때 수량과 총금액이 빠지게 하는 부분
        case 'basic_popcorn_minus_btn' :
                if (basic_popcorn_count != 0) {
                    basic_popcorn_count--;
                    all_result_price -= productPriceArray['고소팝콘'];
                    $('.basic_popcorn_count').html(basic_popcorn_count);
                    $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
                } else if (basic_popcorn_count < 0 || basic_popcorn_count == 0) {}
                break;
        case 'sweet_popcorn_minus_btn' :
            if (sweet_popcorn_count != 0) {
                sweet_popcorn_count--;
                all_result_price -= productPriceArray['달콤팝콘'];
                $('.sweet_popcorn_count').html(sweet_popcorn_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (sweet_popcorn_count < 0 || sweet_popcorn_count == 0) {}
            break;
        case 'onion_popcorn_minus_btn' :
            if (onion_popcorn_count != 0) {
                onion_popcorn_count--;
                all_result_price -= productPriceArray['어니언팝콘'];
                $('.onion_popcorn_count').html(onion_popcorn_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (onion_popcorn_count < 0 || onion_popcorn_count == 0) {}
            break;
        case 'cheese_popcorn_minus_btn' :
            if (cheese_popcorn_count != 0) {
                cheese_popcorn_count--;
                all_result_price -= productPriceArray['치즈팝콘'];
                $('.cheese_popcorn_count').html(cheese_popcorn_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (cheese_popcorn_count < 0 || cheese_popcorn_count == 0) {}
            break;
        case 'large_combo_minus_btn' :
            if (large_combo_count != 0) {
                large_combo_count--;
                all_result_price -= productPriceArray['라지콤보'];
                $('.large_combo_count').html(large_combo_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (large_combo_count < 0 || large_combo_count == 0) {}
            break;
        case 'double_combo_minus_btn' :
            if (double_combo_count != 0) {
                double_combo_count--;
                all_result_price -= productPriceArray['더블콤보'];
                $('.double_combo_count').html(double_combo_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (double_combo_count < 0 || double_combo_count == 0) {}
            break;
        case 'small_combo_minus_btn' :
            if (small_combo_count != 0) {
                small_combo_count--;
                all_result_price -= productPriceArray['스몰콤보'];
                $('.small_combo_count').html(small_combo_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (small_combo_count < 0 || small_combo_count == 0) {}
            break;
        case 'hot_americano_minus_btn' :
            if (hot_americano_count != 0) {
                hot_americano_count--;
                all_result_price -= productPriceArray['아메리카노'];
                $('.hot_americano_count').html(hot_americano_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (hot_americano_count < 0 || hot_americano_count == 0) {}
            break;
        case 'ice_americano_minus_btn' :
            if (ice_americano_count != 0) {
                ice_americano_count--;
                all_result_price -= productPriceArray['아이스아메리카노'];
                $('.ice_americano_count').html(ice_americano_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (ice_americano_count < 0 || ice_americano_count == 0) {}
            break;
        case 'soda_drink_minus_btn' :
            if (soda_drink_count != 0) {
                soda_drink_count--;
                all_result_price -= productPriceArray['탄산음료'];
                $('.soda_drink_count').html(soda_drink_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (soda_drink_count < 0 || soda_drink_count == 0) {}
            break;
        case 'nacho_combo_minus_btn' :
            if (nacho_combo_count != 0) {
                nacho_combo_count--;
                all_result_price -= productPriceArray['나쵸'];
                $('.nacho_combo_count').html(nacho_combo_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (nacho_combo_count < 0 || nacho_combo_count == 0) {}
            break;
        case 'squid_combo_minus_btn' :
            if (squid_combo_count != 0) {
                squid_combo_count--;
                all_result_price -= productPriceArray['오징어'];
                $('.squid_combo_count').html(squid_combo_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (squid_combo_count < 0 || squid_combo_count == 0) {}
            break;
        case 'hotdog_combo_minus_btn' :
            if (hotdog_combo_count != 0) {
                hotdog_combo_count--;
                all_result_price -= productPriceArray['핫도그'];
                $('.hotdog_combo_count').html(hotdog_combo_count);
                $('.input_all_price_box').html(all_result_price.toString().replace(regexp,','));
            } else if (hotdog_combo_count < 0 || hotdog_combo_count == 0) {}
            break;

    // 지폐 이미지를 눌렀을 때 받은 금액에 누른 금액만큼 들어가기
        case 'fifty_thousand_img' :
                total_payment += money_object['fifty_thousand'];
                if ( total_payment > 100000) {
                    pop_up_layer_check("충분한 금액입니다.");
                    total_payment -= money_object['fifty_thousand'];
                } else {
                    $('.input_get_money_box').html(total_payment.toString().replace(regexp,','));
                }
                break;
        case 'ten_thousand_img' :
            total_payment += money_object['ten_thousand'];
            if ( total_payment > 100000) {
                pop_up_layer_check("충분한 금액입니다.");
                total_payment -= money_object['ten_thousand'];
            } else {
                $('.input_get_money_box').html(total_payment.toString().replace(regexp,','));
            }
            break;
        case 'five_thousand_img' :
            total_payment += money_object['five_thousand'];
            if ( total_payment > 100000) {
                pop_up_layer_check("충분한 금액입니다.");
                total_payment -= money_object['five_thousand'];
            } else {
                $('.input_get_money_box').html(total_payment.toString().replace(regexp,','));
            }
            break;
        case 'one_thousand_img' :
            total_payment += money_object['one_thousand'];
            if ( total_payment > 100000) {
                pop_up_layer_check("충분한 금액입니다.");
                total_payment -= money_object['one_thousand'];
            } else {
                $('.input_get_money_box').html(total_payment.toString().replace(regexp,','));
            }
            break;
        case 'five_hundred_img' :
            total_payment += money_object['five_hundred'];
            if ( total_payment > 100000) {
                pop_up_layer_check("충분한 금액입니다.");
                total_payment -= money_object['five_hundred'];
            } else {
                $('.input_get_money_box').html(total_payment.toString().replace(regexp,','));
            }
            break;
        case 'one_hundred_img' :
            total_payment += money_object['one_hundred'];
            if ( total_payment > 100000) {
                pop_up_layer_check("충분한 금액입니다.");
                total_payment -= money_object['one_hundred'];
            } else {
                $('.input_get_money_box').html(total_payment.toString().replace(regexp,','));
            }
            break;
        case 'fifty_won_img' :
            total_payment += money_object['fifty'];
            if ( total_payment > 100000) {
                pop_up_layer_check("충분한 금액입니다.");
                total_payment -= money_object['fifty'];
            } else {
                $('.input_get_money_box').html(total_payment.toString().replace(regexp,','));
            }
            break;
        case 'ten_won_img' :
            total_payment += money_object['ten'];
            if ( total_payment > 100000) {
                pop_up_layer_check("충분한 금액입니다.");
                total_payment -= money_object['ten'];
            } else {
                $('.input_get_money_box').html(total_payment.toString().replace(regexp,','));
            }
            break;
    
    // 결제 버튼을 누르면 받은금액-총금액이 거스름돈에 나오게 / 잔돈 갯수 나오게
        case 'change_result_btn' :
            // 지폐를 더 누르고 결제를 누르면 값이 누적되지 않게 비워주는 것
            fifty_thousand_change_result = 0;
            ten_thousand_change_result = 0;
            five_thousand_change_result = 0;
            one_thousand_change_result = 0;
            five_hundred_change_result = 0;
            one_hundred_change_result = 0;
            fifty_won_change_result = 0;
            ten_won_change_result = 0;
            $('.fifty_thousand_change_result').html(fifty_thousand_change_result);
            $('.ten_thousand_change_result').html(ten_thousand_change_result);
            $('.five_thousand_change_result').html(five_thousand_change_result);
            $('.one_thousand_change_result').html(one_thousand_change_result);
            $('.five_hundred_change_result').html(five_hundred_change_result);
            $('.one_hundred_change_result').html(one_hundred_change_result);
            $('.fifty_won_change_result').html(fifty_won_change_result);
            $('.ten_won_change_result').html(ten_won_change_result);

            if (total_payment > all_result_price) {
                // change_money => 거스름돈 
                let change_money = total_payment - all_result_price;
                let change_money_temp = total_payment - all_result_price;
                $('.input_change_money_box').html(change_money.toString().replace(regexp,',')).css('color','rgb(34, 34, 34)');
                if (change_money_temp >= 50000) {
                    $('.fifty_thousand_change_result').html(parseInt(change_money_temp/50000));
                    change_money_temp = change_money_temp - (parseInt(change_money_temp/50000)*50000);
                    //console.log(change_money_temp);
                }
                if (change_money_temp >= 10000) {
                    $('.ten_thousand_change_result').html(parseInt(change_money_temp/10000));
                    change_money_temp = change_money_temp - (parseInt(change_money_temp/10000)*10000);
                    //console.log(change_money_temp);
                }
                if (change_money_temp >= 5000) {
                    $('.five_thousand_change_result').html(parseInt(change_money_temp/5000));
                    change_money_temp = change_money_temp - (parseInt(change_money_temp/5000)*5000);
                    //console.log(change_money_temp);
                }
                if (change_money_temp >= 1000) {
                    $('.one_thousand_change_result').html(parseInt(change_money_temp/1000));
                    change_money_temp = change_money_temp - (parseInt(change_money_temp/1000)*1000);
                    //console.log(change_money_temp);
                }
                if (change_money_temp >= 500) {
                    $('.five_hundred_change_result').html(parseInt(change_money_temp/500));
                    change_money_temp = change_money_temp - (parseInt(change_money_temp/500)*500);
                    //console.log(change_money_temp);
                }
                if (change_money_temp >= 100) {
                    $('.one_hundred_change_result').html(parseInt(change_money_temp/100));
                    change_money_temp = change_money_temp - (parseInt(change_money_temp/100)*100);
                    //console.log(change_money_temp);
                }
                if (change_money_temp >= 50) {
                    $('.fifty_won_change_result').html(parseInt(change_money_temp/50));
                    change_money_temp = change_money_temp - (parseInt(change_money_temp/50)*50);
                    //console.log(change_money_temp);
                }
                if (change_money_temp >= 10) {
                    $('.ten_won_change_result').html(parseInt(change_money_temp/10));
                    change_money_temp = change_money_temp - (parseInt(change_money_temp/10)*10);
                    //console.log(change_money_temp);
                }
            } else if (total_payment < all_result_price) {
                $('.input_change_money_box').html((all_result_price - total_payment).toString().replace(regexp,',') + "원이 부족합니다.").css('color','red');
            } else { 
                let change_money = total_payment - all_result_price;
                $('.input_change_money_box').html(change_money.toString().replace(regexp,','));
            }
            break;
    // 처음으로 버튼 누르면 수량, 금액, 전체가 초기화되게
        case 'change_reset_btn' :
            // 상품 초기화
            basic_popcorn_count = 0;
            sweet_popcorn_count = 0;
            onion_popcorn_count = 0;
            cheese_popcorn_count = 0;
            large_combo_count = 0;
            double_combo_count = 0;
            small_combo_count = 0;
            hot_americano_count = 0;
            ice_americano_count = 0;
            soda_drink_count = 0;
            nacho_combo_count = 0;
            squid_combo_count = 0;
            hotdog_combo_count = 0;
            // 총금액, 받은 금액, 거스름돈 초기화
            all_result_price = 0;
            total_payment = 0;
            change_money = 0;
            // 지폐 초기화
            fifty_thousand_change_result = 0;
            ten_thousand_change_result = 0;
            five_thousand_change_result = 0;
            one_thousand_change_result = 0;
            five_hundred_change_result = 0;
            one_hundred_change_result = 0;
            fifty_won_change_result = 0;
            ten_won_change_result = 0;
            // 상품 초기화
            $('.basic_popcorn_count').html(basic_popcorn_count);
            $('.sweet_popcorn_count').html(sweet_popcorn_count);
            $('.onion_popcorn_count').html(onion_popcorn_count);
            $('.cheese_popcorn_count').html(cheese_popcorn_count);
            $('.large_combo_count').html(large_combo_count);
            $('.double_combo_count').html(double_combo_count);
            $('.small_combo_count').html(small_combo_count);
            $('.hot_americano_count').html(hot_americano_count);
            $('.ice_americano_count').html(ice_americano_count);
            $('.soda_drink_count').html(soda_drink_count);
            $('.nacho_combo_count').html(nacho_combo_count);
            $('.squid_combo_count').html(squid_combo_count);
            $('.hotdog_combo_count').html(hotdog_combo_count);
            // 총금액, 받은 금액, 거스름돈 초기화
            $('.input_all_price_box').html(all_result_price);
            $('.input_get_money_box').html(total_payment);
            $('.input_change_money_box').html(change_money);
            // 지폐 초기화
            $('.fifty_thousand_change_result').html(fifty_thousand_change_result);
            $('.ten_thousand_change_result').html(ten_thousand_change_result);
            $('.five_thousand_change_result').html(five_thousand_change_result);
            $('.one_thousand_change_result').html(one_thousand_change_result);
            $('.five_hundred_change_result').html(five_hundred_change_result);
            $('.one_hundred_change_result').html(one_hundred_change_result);
            $('.fifty_won_change_result').html(fifty_won_change_result);
            $('.ten_won_change_result').html(ten_won_change_result);
                break;
    }
}); 

// 팝업창 버튼 누르면 팝업창 닫기
$('.pop_up_layer > button').on('click',function(){
    $('.pop_up_layer').css('display','none');
});
