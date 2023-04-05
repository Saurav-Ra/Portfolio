let main=document.getElementById("main");
const Theme=()=>{
    if(main.classList.contains("dark")){
        main.classList.remove("dark");
    }else{
        main.classList.add("dark");

    }

}