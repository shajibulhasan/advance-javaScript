const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);
//slice a first index koto thake suro korbe bujai & second index koto porjonto bujai. ata mul array tik rake a 
const remove = nums.splice(2,5);
// splice a first index koto thake start bujai & second index koita remove korbe bujai. ata mul array thake tik rake na
console.log(part);
console.log(remove);
console.log(nums);
const together = nums.join("");
const together1 = nums.join(" ");
const together2 = nums.join(",");
console.log(together);
console.log(together1);
console.log(together2);