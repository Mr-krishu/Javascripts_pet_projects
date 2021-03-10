/*function charcountupdate(event) {
	var str = event.target.value;
	var lng = str.length;
	document.getElementById('charcount').innerHTML = lng + ' out of 400 characters';
}
document.getElementById('text').value.addEventListener('keyup', charcountupdate(event));
*/
document.getElementById('text1').addEventListener('keyup', function(event) {
	var str = event.target.value;
	console.log(str);
	var lng = str.length;
	console.log(lng);
	document.getElementById('charcount').innerHTML = 'Letter Count:' + lng;
});
