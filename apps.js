const mobiles = {

    Iphone: {
        IphoneX: {
            Name: "Iphone",
            Model: "Iphone X",
            Ram: "3 GB",
            Rom: "64 GB",
            Price: "$218",
        },
        Iphone12: {
            Name: "Iphone",
            Model: "Iphone 12",
            Ram: "4 GB",
            Rom: "128 GB",
            Price: "$799",
        },
        Iphone13: {
            Name: "Iphone",
            Model: "Iphone 13",
            Ram: "4 GB",
            Rom: "128 GB",
            Price: "$1699",
        },
    },
    Samsung: {
        Note5: {
            Name: "Samsung",
            Model: "Galaxy Note 5",
            Ram: "4 GB",
            Rom: "32 GB",
            Price: "$101",
        },
        Note8: {
            Name: "Samsung",
            Model: "Galaxy Note 8",
            Ram: "6 GB",
            Rom: "64 GB",
            Price: "$419",
        },
        S22: {
            Name: "Samsung",
            Model: "S22",
            Ram: "8 GB",
            Rom: "128 GB",
            Price: "$799",
        },
    },
    Tecno: {
        Spark9: {
            Name: "Tecno",
            Model: "Tecno Spark 9",
            Ram: "4 GB",
            Rom: "32 GB",
            Price: "$50",
        },
        Cammon17: {
            Name: "Tecno",
            Model: "Tecno Cammon 17",
            Ram: "6 GB",
            Rom: "64 GB",
            Price: "$41",
        },
        Cammon15: {
            Name: "Tecno",
            Model: "Tecno Cammon 15",
            Ram: "8 GB",
            Rom: "128 GB",
            Price: "$79",
        },
    },
    Infinix: {
        Note9: {
            Name: "Infinix",
            Model: "Infinix Note 9",
            Ram: "4 GB",
            Rom: "32 GB",
            Price: "$51",
        },
        hot11: {
            Name: "Infinix",
            Model: "Infinix Hot 11",
            Ram: "6 GB",
            Rom: "64 GB",
            Price: "$126",
        },
        Note10: {
            Name: "Infinix",
            Model: "Infinix Note 10",
            Ram: "8 GB",
            Rom: "128 GB",
            Price: "$799",
        },
    },
}


let Name = document.getElementById("Name")
let Model = document.getElementById("Model")


function Device(){
    let mobileKey = Object.keys(mobiles)
    console.log(mobileKey);
    for (let i = 0; i < mobileKey.length; i++) {
    Name.innerHTML += `
    <option value=${mobileKey[i]}>${mobileKey[i]}</option>`
        
    }
}

Device()

function render(){
    Model.disabled = false
    let modelval = Object.keys(mobiles[Name.value])
    console.log(modelval);
    for (let i = 0; i < modelval.length; i++) {
        Model.innerHTML +=`<option value=${modelval[i]}>${modelval[i]}</option>`
        
    }
}

function renderVal(){
    let renderDetails = document.getElementById('renderDetails')
    let MDetails = mobiles[Name.value][Model.value]
    console.log(MDetails);

    renderDetails.innerHTML = `        
    <h1>
         ${MDetails.Name}   
    </h1>
    <h1>
         ${MDetails.Model}   
    </h1>
    <h1>
         ${MDetails.Ram}   
    </h1>
    <h1>
         ${MDetails.Rom}   
    </h1>
    <h1>
         ${MDetails.Price}   
    </h1>
    
    `
}

