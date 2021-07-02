# まず最初にライブラリ(gem)のlaunchyを読み込む
require 'launchy'
# Launchy.openを使用して、引数として渡したURLをブラウザで開きます。
Launchy.open("https://www.youtube.com/watch?v=O1bhZgkC4Gw")
# 60 × 24 秒ここで処理を停止する
sleep(60 * 24)
# 24分後休憩用のサイトを聞く
Launchy.open("https://diveintocode.jp/")