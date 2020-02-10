let petNames= ['Darcy', ' Jack', ' Jerry', ' Marty', ' Vito', ' Vinny', ' Riley', ' Saddie', ' Marge', ' Sam'];
console.log(`${petNames}`)

let withMarmaduke= petNames.push('Marmaduke');

let userChoice = prompt("Please choose what action you want to take:\n 1 Remove Vinny from the array \n 2 Remove Marty from the array \n 3 Add Nancy \n 4 Add your name to the end of the array \n 5 Find out where Riley is located \n 6 Find out where Cindy is located \n 7 Show the Marmaduke array")
switch(userChoice) {
case(userChoice="1"):
  let removeVinny=petNames.splice([5])
  alert(`The action take was: Remove Vinny from the array \n The remaining data are: ${petNames}.`);
  break;

case(userChoice="2"):
  let removeMarty= petNames.splice([3])
  alert(`The action take was: Remove Marty from the array \n The remaining data are: ${petNames}.`);
  break;

case(userChoice="3"):
  let addNancy= petNames.unshift('Nancy')
  alert(`THe action take was: Add Nancy to the front of the array \n The remaining data are: ${petNames}.`);
  break;

case(userChoice="4"):
let userName=prompt("Enter your name: ")
alert(`The action take was: Add user name ${petNames.push((userName))} to the end of the array \n The remaining data are: ${petNames}.`);
break;

case(userChoice="5"):
let rileyIndex= petNames.indexOf('Riley')
alert(`The action taken was: Riley is located at ${rileyIndex} in the array \n The remaining data are: ${petNames}.`);
break;

case(userChoice="6"):
let cindyIndex= petNames.indexOf('Cindy')
alert(`The action take was: Cindy is located at ${cindyIndex} in the array \n The remaining data are: ${petNames}.`);
break;

case(userChoice="7"):
alert(`The action taken was: You chose the array ${withMarmaduke} \n The remaining data are: ${petNames}.`);
break;

default:
alert('Have a great day!');
}


/*start of Scenario AB*/

let removePet=petNames.shift()
alert(`The action taken was: Removed the front item of the array \n The remianing data are: ${petNames}`);

let addBarney=petNames.unshift('Barney')
alert(`The action taken was: Add Barney to the array \n The remaining data are: ${petNames}`);

let allPets=petNames.push(['Ted', ' Fred', ' Jed', ' Ned', ' Ed', ' Zed'])
alert(`The action taken was: Addition of 6 more pet names to the array \n The remaining data are: ${petNames}`);

let addPets= ['Bob, Sam, Andy']
let stringPets= petNames.concat(addPets)
alert(`The action taken was: Add new pets \n The remaining data are: ${stringPets}`);

let addAgnes= petNames.unshift('Agnes')
alert(`The action taken was: Adding Agnes \n The remaining data are: ${petNames}`);








