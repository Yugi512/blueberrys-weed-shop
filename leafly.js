const fs =  require('fs');

fs.readFile("leafly_data.json", "utf8", (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    try{
        const array = JSON.parse(data);
        const url = array.map(obj =>  obj.img_url);
        const filtered = url.filter((obj) => {
            if(obj !== "" || obj !== ''){
                console.log(`{${obj}}`);
                // console.log(`{ protocol: "https", hostname: ${obj} },`);
            }
        })
        console.log(filtered)
    } catch (error){
        console.log(error)
    }
})
