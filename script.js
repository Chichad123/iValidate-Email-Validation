let resbox=document.getElementById("result");
document.querySelector("form>button").addEventListener('click',async(e)=>{
    e.preventDefault();
    const email=document.getElementById("emailInput").value;
    // console.log(email);
    resbox.innerHTML=`<img src="images/load.svg" alt="">`;
    let key="ema_live_wsyWN29ZtOhVUgVTbskptOIta1nM1sZyQvgwCEwP";
    let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res =await fetch(url);
    let result=await res.json();

    // console.log(result);

    PrintResult(result);
});


function PrintResult(result){
    const keys=Object.keys(result);//convert to array of keys
    let str=``;
    for(key of keys){
        // console.log(key);
        str=str+`<div>${key} : ${result[key]}</div>`
    }
    resbox.innerHTML=str;
}


