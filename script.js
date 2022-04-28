

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQEp6sRxY1OrAtaV2K49eK4_8Ubfjp0oSFhtL5fAr5AyyWCG6yfWsBO5Kg0f0dS0x6L3aMkqWghuVfznCer4QLCGp30.jpg?r=597", "https://www.quever.news/u/fotografias/m/2021/10/21/f608x342-17567_47290_22.jpg","https://www.industriaanimacion.com/wp-content/uploads/2020/12/murder-mystery.jpg"];
  let action =["https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfaYBFoSX2JbnnHH4jVdqk2pzb7gni6ElWqbHxOVlijv7HV8QMYnbg8DbYdORazgWVH1pG6p3jp0rvDiPNWvRYnLOS5bM6aGjom6QL8Yv2H10BiDKYBQhLpQJct7.jpg?r=0fe", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6-en-la-sombra-2-1585813193.jpg?crop=1xw:1xh;center,top&resize=480:*","https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/04/05/15861081503285.png"];
 let drama =["https://www.eluniverso.com/resizer/-wCZPUeRBqxEmoMrrxnmhR5gPMs=/1024x632/smart/filters:quality(70)/cloudfront-us-east- .arcpublishing.com/eluniverso/PWAQRQSNZZAAHGT25GSKCDVCKA.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzm9sH-bHnSNla5jiQqMMLwMK148qQAenVY9C7mNqHZQsIyBC5oDg7pLTThaVKY6gcGmw&usqp=CAU","https://es.web.img2.acsta.net/c_310_420/pictures/21/11/01/10/18/5276813.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
   if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
   }
}
   else if( genreInput==="action"){
    for (let show of action){
    $(".shows").append("<img src="+ show+">");
   }
    }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
     console.log(comedy);
   action.push(suggestion);
   console.log(action);
   drama.push(suggestion);
   console.log(drama);

    
});