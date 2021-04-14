/*exercise1*/
function delete_by_index(arr,x) {
    arr.splice(x,1);
    return arr;
}
alert(delete_by_index(['a','b','c'],1));


/*exercise2*/
function join_arrays(arr1,arr2,...arrn){
    let result_array =arr1.concat(arr2, ...arrn);
    return result_array;
}

function sort_arr(arr) {
    let result_array=arr.sort(function(a,b){return a-b ;})
    return result_array;
}
let a=join_arrays([1,2,3], [4,5,6], [9,8,7,0]);
sort_arr(a);
alert(a);


/*exercise3*/
function remove_repeated_cases(arr) {
    let result_array = [];
    for (let i = 0; i < arr.length; i++) {
        if (result_array.indexOf(arr[i])==-1) {
            result_array.push(arr[i]);
        }
    }
    return result_array;
}
let b=[1,1,4,5,3,5,3,9];
alert(remove_repeated_cases(b));


/*exercise4*/
function extract_number(string) {
    let arr=string.split(''),i=0,num=[],S_num='';
    while(i<arr.length){
        if(Boolean(1*arr[i])===true || arr[i]==="0"){
            S_num=S_num+arr[i];
            if(Boolean(1*arr[i+1])===false && arr[i+1]!=="0"){
                num.push(+S_num);
                S_num='';
            }
        }
        i++;
    }
    return(num);
}
alert(extract_number("i have 2 apples and 3 pineapples"));



/*exercise5*/
function break_internal_arrays(arr) {
    arr = arr.flat(Infinity);
    return arr;
}
alert(break_internal_arrays([[2,3],5,[[[2,9],4],4],1,0]));
