const printToDom =(HTMLString)=>{

    document.querySelector("#employee-container").innerHTML+=HTMLString
}

export default printToDom;
