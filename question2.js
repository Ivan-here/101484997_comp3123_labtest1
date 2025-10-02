const resolvedPromise = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('message: delayed success!');
        },500);
    })
}
const rejectedPromise = () => {
    return new Promise((_,reject) => {
        setTimeout(()=>{
            reject(new Error(`error: delayed exception!`));
        },500);
    })
}
resolvedPromise().then(r => console.log('Resolve:',r))
.catch(err => console.log('Reject:',err));
rejectedPromise().then(r => console.log('Resolve:',r))
.catch(err => console.log('Reject:',err));