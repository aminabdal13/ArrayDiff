const array1 = [1,2,3,4,];
const array2 = [1,2,3,7,8,9,10];
const arrayDiff = (a,b) => {
    let c;
    if(array1[0] != undefined && array2[0] != undefined){
        array1.forEach(item =>{
            if(array2.includes(item)&&item != undefined){
                 array2.splice(array2.indexOf(item),1);
                 c = array2;
            }else
                c.push(item);
        })
        console.log(c);
    }
    array1[0] == undefined ? console.log(array2):null;
    array2[0] == undefined ? console.log(array1):null;
}
arrayDiff(array1,array2);