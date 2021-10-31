var images = ["https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book", "Rupesh Kumar Singh {Father}", "Anita Singh {Mother}", "Jahnvi Singh {Sister}", "Maanvi Singh {ME}", ];
var i = 0;

function update() {

    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
    i++;
    if (i > names.length) {
        i = 0;
    }
}