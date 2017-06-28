$(window).load(function () {

var size = 1;
var button = 1;
var button_class = "gallery-header-center-right-links-current";
var normal_size_class = "gallery-content-center-normal";
var full_size_class = "gallery-content-center-full";
var $container = $('#gallery-content-center');
    
$container.isotope({ itemSelector: '.project-list li' });

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

    // query string: ?foo=lorem&bar=&baz
var ptype = getParameterByName('type'); // "lorem"

if ((ptype == 'all') || ((ptype == null))) {
        button = 1;
        $container.isotope({ filter: '.all' }); button = 1; check_button();
    
    } else if (ptype == 'commercial') {
        button = 2;
        $container.isotope({ filter: '.commercial' }); button = 2; check_button();
    } else if (ptype == 'public') {
        button = 3;
        $container.isotope({ filter: '.public' }); button = 3; check_button();
    } else if (ptype == 'Industrial') {
        button = 4;
        $container.isotope({ filter: '.Industrial' }); button = 4; check_button();
    }else if (ptype == 'faith') {
        button = 5;
        $container.isotope({ filter: '.faith' }); button = 5; check_button();
    } else if (ptype == 'construction') {
        button = 6;
        $container.isotope({ filter: '.construction' }); button = 6; check_button();
    } else if (ptype == 'underconstruction') {
        button = 7;
        $container.isotope({ filter: '.underconstruction' }); button = 7; check_button();
    }
    


    function check_button(){
	$('.gallery-header-center-right-links').removeClass(button_class);
	if(button==1){
		$("#filter-all").addClass(button_class);
		$("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==2){
		$("#filter-commercial").addClass(button_class);
		$("#gallery-header-center-left-title").html('commercial project-gallery');
		}
	if(button==3){
		$("#filter-public").addClass(button_class);
		$("#gallery-header-center-left-title").html('public project-gallery');
	}
	if (button == 4) {
	    $("#filter-Industrial").addClass(button_class);
	    $("#gallery-header-center-left-title").html('Industrial project-gallery');
	}
	if(button==5){
		$("#filter-faith").addClass(button_class);
		$("#gallery-header-center-left-title").html('faith project-gallery');
	}
	if (button==6) {
	    $("#filter-construction").addClass(button_class);
	    $("#gallery-header-center-left-title").html('construction project-gallery');
	}
	if (button == 7) {
	    $("#filter-underconstruction").addClass(button_class);
	    $("#gallery-header-center-left-title").html('underconstruction project-gallery');
	}
	
}
	
function check_size(){
	$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
	if(size==0){
		$("#gallery-content-center").addClass(normal_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
		}
	if(size==1){
		$("#gallery-content-center").addClass(full_size_class); 
		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
		}
	$container.isotope({itemSelector : '.project-list li'});
}


	
$("#filter-all").click(function() { $container.isotope({ filter: '.all' }); button = 1; check_button(); });
$("#filter-commercial").click(function() {  $container.isotope({ filter: '.commercial' }); button = 2; check_button();  });
$("#filter-public").click(function() {  $container.isotope({ filter: '.public' }); button = 3; check_button();  });
$("#filter-Industrial").click(function () { $container.isotope({ filter: '.Industrial' }); button = 4; check_button(); });
$("#filter-faith").click(function () { $container.isotope({ filter: '.faith' }); button = 5; check_button(); });
$("#filter-construction").click(function () { $container.isotope({ filter: '.construction' }); button = 6; check_button(); });
$("#filter-underconstruction").click(function () { $container.isotope({ filter: '.underconstruction' }); button = 7; check_button(); });

$("#gallery-header-center-left-icon").click(function () { if (size == 0) { size = 1; } else if (size == 1) { size = 0; } check_size(); });


check_button();
check_size();
});