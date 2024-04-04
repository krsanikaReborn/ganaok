$(()=>{
    
    //마이페이지 뒤로가기 뺴기
    if(location.href.includes('27247')
        || location.href.includes('26927')
    ){
        $('#icon_back').attr('onclick', '').attr('id', '');
    }

})