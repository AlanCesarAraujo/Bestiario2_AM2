
		$(document).ready(function(){

		$("#list1").hide()
		$("#list2").hide()
		$("#list3").hide()
		$("#smoke").hide()

		$("#menunaturais").click(function(){
			$("#list1").toggle()
			$("#list2").hide()
			$("#list3").hide()
			
		});

		$("#menusemisinteticas").click(function(){
			$("#list2").toggle()
			$("#list1").hide()
			$("#list3").hide()
		});

		$("#menusinteticas").click(function(){
			$("#list3").toggle()
			$("#list1").hide()
			$("#list2").hide()
		});

		$(".imagem").draggable()
	

		$("#pipe").droppable({
			drop: function(){
			$(".fumavel").click(function(){
			$(this).hide(100)
			$(smoke).show(100)
			$(".fumavel").off("click");
			});
		}
			});

		$("#seringa").droppable({
			drop: function(){
			$(".injetavel").click(function(){
			$(this).hide(100)
			$("#seringa").attr("src","img/seringa2.png")
			$(".injetavel").off("click");
			});
		}
		});

		$("#prato").droppable({
			drop: function(){
			$(".comestivel").click(function(){
			$(this).hide(100)
			$("#prato").attr("src","img/prato2.png")
			$(".comestivel").off("click");
			});
		}
		});

	

		var availableTags = [
		"Maconha",
		"Haxixe",
		"Cogumelos",
		"Ópio",
		"Morfina",
		"Heroína",
		"Cocaína",
		"Crack",
		"LSD",
		"Ecstasy",
		"Metanfetamina",
		"Anfetamina"
		];

		$("#tags").autocomplete({
			source: availableTags
		});
		
		//$("img[src*=img]").attr('src','img/alpaca.jpg')
		//$(".imagem").attr('src','img/alpaca.jpg')
		});