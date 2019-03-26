var main = document.getElementsByClassName("header")


/*should have just swapped style sheets- only realising this now */
if(!main )
{
main.classList.add(".main-header-border-1");
}

 document.getElementById("toggle").onclick = function(){
	 if(document.getElementsByClassName("dark-mode").length >0)
{
	 window.location.reload();
	
}



	 var buttonClicked= true;
 document.getElementsByClassName("container")[0].style.backgroundImage = "none";

 document.getElementsByClassName("container")[0].classList.add("dark-mode");
document.getElementsByClassName("container__inner")[0].classList.add("dark-mode");
 document.getElementsByClassName("container__inner")[0].style.border = "3px solid white";

var content = document.getElementsByClassName("container__content")[0].classList.add("dark-mode");
var cv = document.getElementsByClassName("header__cv");
function check() {
if ( main === null){
// if   main header isnt being used- im really sorry about this
 var cv = document.getElementsByClassName("header__cv")[0].classList.add("dark-mode");
return;
}
else {
 main = document.getElementsByClassName("header")[0].classList.add("dark-mode");
 main.classList.add(".main-header-border-2");

}
}
//loads of manual style changes

var p = document.getElementsByTagName("p");
if( p){

		 for (i = 0; i < p.length; i++) {
			 			 p[i].classList.add("dark-two");

          }

	}
	


var h2 = document.getElementsByTagName("h2");


if( h2){

		 for (i = 0; i < h2.length; i++) {
			 			 h2[i].classList.add("dark-two");

          }

	}
	

var h1= document.getElementsByTagName("h1");
if(h1){
		
		 for (i = 0; i < h1.length; i++) {
			 h1[i].classList.add("dark-two");
       }

	}
	
var lbl= document.getElementsByTagName("label");
if(lbl){
		
		 for (i = 0; i < lbl.length; i++) {
			 lbl[i].classList.add("dark-two");
       }

	}
document.getElementsByClassName("footer")[0].classList.add("dark-text");

var nav__item = document.getElementsByClassName("nav__item")
for(var i=0; i<nav__item.length;i++){
		nav__item[i].classList.add("dark-text");
           nav__item[i].style.borderRight="none";
		   nav__item[i].style.borderBottom= "solid 1px #FEFAF7";
}
//loops through loads of elements
if(document.getElementsByClassName("language"))
{
var language = document.getElementsByClassName("language")
for(var i=0; i<language.length;i++){
	
		language[i].classList.add("dark-two");

}
}

if(document.getElementsByClassName("container__para")[0]&& document.getElementsByClassName("container__para")[1]){
	console.log("works m8");
document.getElementsByClassName("container__para")[0].style.color="#FEFAF7";
document.getElementsByClassName("container__para")[1].style.color="#FEFAF7";

}
{

return false;

// stops it refreshing page and removing changes on click
 }
 
};


 