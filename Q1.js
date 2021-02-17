string1 = "10011001";
string2 = "01100110";

function minSwaps(string1, string2)
{
 var count=0;

   for(i=0; i<string1.length; i++)
   {
       if(string1.charAt(i)!=string2.charAt(i))
       count++;
   }
   if(count%2==0)
   {
       console.log(count/2);
   }
   else
   {
       console.log("Not possible");
   }


}
minSwaps(string1,string2);