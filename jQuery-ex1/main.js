$(function() {
    $('.tab li').on('click', function(){
      $('.tab li').removeClass('select');
      // //クリックされたタブにクラスselectをつけます。
      $(this).addClass('select');
    });
  });

  $(function() {
    $('.tab li').on('click', function(){
      $('.tab li').removeClass('select');
      $(this).addClass('select');
      // <ul class="content">内のすべてのliタグを取得
      $('.content li').addClass('hide');
    });
  });

  $(function() {
    $('.tab li').on('click', function(){
      $('.tab li').removeClass('select');
      $(this).addClass('select');
      $('.content li').addClass('hide');
      // 何番目の子要素か調べる
      let index = $('.tab li').index($(this));
      console.log(index);
    });
  });

  $(function() {
    $('.tab li').on('click', function(){
      $('.tab li').removeClass('select');
      $(this).addClass('select');
      $('.content li').addClass('hide');
      // 何番目の子要素か調べる
      let index = $('.tab li').index($(this));
      // ↑で取得したindex値から該当するコンテンツを取得
      $('.content li').eq(index).removeClass('hide');
    });
  });