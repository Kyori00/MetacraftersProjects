/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNFT = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _head, _body, _eyes, _legs) {
   const myNFTs = {
      "name": _name,
      "head": _head,
      "body": _body,
      "eyes": _eyes,
      "legs": _legs
   }
   myNFT.push(myNFTs);
   console.log("Your NFT has been minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
let i = 0;
while(i < myNFT.length){
   console.log ("\nID: \t\t" + "0x" + (i+1));
   console.log ("Name: \t\t" + myNFT[i].name);
   console.log ("Head: \t\t" + myNFT[i].head);
   console.log ("Body: \t\t" + myNFT[i].body);
   console.log ("Eyes: \t\t" + myNFT[i].eyes);
   console.log ("Legs: \t\t" + myNFT[i].legs);
   i++;
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log ("\nTotal NFTs: " + myNFT.length);
}

// call your functions below this line
mintNFT("Yurielle", "Angelic", "Daedalic", "Kitsune", "Raijin");
mintNFT("Zirealle", "Demonic", "Aesir", "Neko", "Akuma");
mintNFT("Azrael", "Mystic", "Jotnar", "Tora", "Yurei");
listNFTs();
getTotalSupply();
