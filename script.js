






async function convertJsToJson(url) {

    const request = new Request(url);
    
    const response = await fetch(request);
    
    const jsText = await response.text();

    
    const jsFile = JSON.parse(jsText);


    accessObject(jsFile);
}



function accessObject(obj) {
    console.log( `Squad Name: ${obj.squadName}\nHometown: ${obj.homeTown}\nFormed: ${obj.formed}\nSecret Base: ${obj.secretBase}\nActive: ${obj.active}
Members: ${obj.members.map(member => {return `Name: ${member.name}\nAge: ${member.age}\nSecret Identity: ${member.secretIdentity}\nPowers: ${member.powers.join(", ")}\n`})}`);
}



convertJsToJson("./sample.json");




