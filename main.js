var i=0;
function update()
{
    i++;
    var numbers_of_the_family_member_in_array = 8
    if(i>numbers_of_the_family_member_in_array)
    {
        i=0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];
var names = ["Family Book","Emmanuel Akanno", "Everestus Akanno", "Vivian Akanno", "Great Chukwunonye-Akanno", "Treasure Chukwunonye-Akanno", "Excel Chukwunonye-Akanno", "Unique Chukwunonye-Akanno"];