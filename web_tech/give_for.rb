
require 'cgi'
cgi = CGI.new
cgi.out("type" => "text/html", "charset" => "UTF-8") {
  get = cgi['give']
  "<html>
    <body>
      <p>譲渡先の情報は下記となります</p>
      <p>文字列 : #{get}</p>
    </body>
   </html>"
}