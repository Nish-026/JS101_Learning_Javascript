var storedusername="nish123";
var storedpassword="12345";

var inputusername="nish123";
var inputpassword="123456";
if(storedusername==inputusername)
{
  if(storedpassword==inputpassword)
  {
    console.log("User is logged in")
  }
  else
  {
    console.log("password incorrect");
  }
}
else
{
  console.log("You can't login")
}