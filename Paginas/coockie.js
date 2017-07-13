window.onload = function(name, value, days){

	function storeValues(form){
	    writeCookie("droga1", form.droga1.value, 1);
	    writeCookie("droga2", form.droga2.value, 1);
	    writeCookie("droga3", form.droga3.value, 1);
	    writeCookie("droga4", form.droga4.value, 1);
	    writeCookie("droga5", form.droga5.value, 1);
	    writeCookie("droga6", form.droga6.value, 1);
	    writeCookie("droga7", form.droga7.value, 1);
	    writeCookie("droga8", form.droga8.value, 1);
	    writeCookie("droga9", form.droga9.value, 1);
	    writeCookie("droga10", form.droga10.value, 1);
	    writeCookie("droga11", form.droga11.value, 1);
	    writeCookie("droga12", form.droga12.value, 1);
	    return true;
  	}

	function writeCoockie(){
		var expires = "";

		if(days){
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		} 

		if(value != null && value != null && value != null){
			document.coockie = name + "=" + value + expires + "path=/";
		}
	}

	function readCoockie(name){
		var searchName = name + "=";
		var coockies = document.coockie.split(';');
		for(var i = 0; i<coockies.length; i++){
			var c = coockies[i];
			while(c.charAt(0)==' ')
			c = c.substring(1, c.length);
			if(c.indexOf(searchname) == 0)
			return c.substring(searchname.length, c.length);
		}

	return null;

	}
	
};