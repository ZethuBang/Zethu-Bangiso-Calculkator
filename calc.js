const add = ()=>{

    let input1;
    let input2;

    input1 = document.querySelector("#input1").value 
    input2 = document.querySelector("#input2").value

    let result =  +input1 + +input2;
    
    //alert("Result: " +  result);
    console.log("Result " ,  result);
    document.querySelector("#resultValue").innerHTML = result

}

const minus = ()=>{

    let input1;
    let input2;
    input1= document.querySelector("#input1").value
    input2= document.querySelector("#input2").value 

    let result = +input1 - +input2;

    //alert("Result: " +  result);
    console.log("Result " , result);
    document.querySelector("#resultValue").innerHTML = result

}

const multiply = ()=>{

    let input1;
    let input2;
    input1= document.querySelector("#input1").value 
    input2= document.querySelector("#input2").value 

    let result = +input1 * +input2;

    //alert("Result: " +  result);
    console.log("Result " ,  result);
    document.querySelector("#resultValue").innerHTML = result

}

const divide = ()=>{

    let input1;
    let input2;
    input1= document.querySelector("#input1").value
    input2= document.querySelector("#input2").value

    let result = +input1 / +input2;

    //alert("Result: " +  result);
    console.log("Result " ,  result);
    document.querySelector("#resultValue").innerHTML = results
    
    
}