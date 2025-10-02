function lowerCaseWords(mixArr){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(mixArr)){
            reject('mixArr should be an array');
            return;
        }

        try{
            const newArr = mixArr.filter(item=>typeof item === 'string').map(item=> item.toLowerCase())

            resolve(newArr);
        }
        catch(err){
            reject(err);
        }
    })
}
const mixedArray = ['PIZZA',10, true, 25, false, 'Wings']
lowerCaseWords(mixedArray).then(r => console.log(r))
.catch(err => console.log(err));