var http =require("http");
var cheerio=require("cheerio")//实现网页的过滤
var url='http://www.100kjg.com/mobile/';

function guolv (html) {
	var $ = cheerio.load(html);
	return $("footer");

}

http.get(url,function(res){
	var html ="";
	res.on("data",function(data){
		html+=data;

	})
	res.on("end",function(data){
		var html1 = guolv(html)
		console.log(html1);

	})
}).on("error",function (argument) {
	console.log("error!");
})