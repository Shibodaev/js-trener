let myScripts = {
    run() {
        let i = 0;
        document.addEventListener('click' , function () {
            console.log(i++);
        })
    }
}
module.exports  =  myScripts;