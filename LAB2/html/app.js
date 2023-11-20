    var num = 10;
    let name = "piyadanai"
    age = 20;
    const year = 2003;

    console.log(year);

    fruit = ["banana","apple","orange"];

    console.log(fruit[1]);

    plant = {fruit:"banana",car:"apple",color:"orange"};

    console.log(plant);

    dataJson = {
    employee:[
    {name: "piyadanai"},{age: 20},{year: 2003}],
    };
    
    console.log(dataJson.employee[0].name);

    let msg = name + " " + year;
    msg = ${name} ${year};

    console.log(msg);

    document.getElementById('title').innerHTML = msg;

    $(function(){
        $('#title').html(msg + 'jQuery').addClass("red");
    });