
import { Label } from "../ContactMe/label";
import { Input } from "../ContactMe/input";
import { cn } from "../../../utils/cn";
import { ChangeEvent } from "react";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import { headers } from "next/headers";
import { errorToast, successToast } from "../../../../app/services/toastify.service";
import { json } from "stream/consumers";




export default function Social() {
  const [state,setState]=useState();
  const [name , setName]=useState('');
 const [email,setEmail]=useState('');
 const [message,setMessage]=useState('');  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log('name:',name)
    console.log('email:',email)
    console.log('message:',message)
    
    try {
      const res = await fetch('http://localhost:8085/api/user/contact', {
          method: 'POST', // Assuming you're making a POST request
          body: JSON.stringify({
              name: name, // Replace with actual data
              email: email, // Replace with actual data
              message: message, // Replace with actual data
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      
      
        });
        const resdata=await res.json()
    
      if (res.status==200) {
       
        
        successToast(resdata.message);
      } else if (res.status==400){
        errorToast(resdata.message);
      }
      
  } catch (error) {
      console.error('Error:', error);
  }
  

  };
  return (
    <div className="relative lg:ml-16 -ml-11 items-center rounded-3xl w-96 lg:w-full lg:h-[38rem] h-[58rem] isolate overflow-hidden ">
      
      <div className="lg:flex    flex-row  justify-around   gap-32   ">

      <div className="sm:mt-12 mt-28 m-12 justify-around sm:ml-48 ml-12 items-center  ">
 
  <form className="my-8" onSubmit={handleSubmit}>
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
      <LabelInputContainer>
        <Label htmlFor="firstname">First name</Label>
        <Input id="firstname" placeholder="Milan" type="text"  value={name} onChange={(e)=>setName(e.target.value)} />
      </LabelInputContainer>
    
    </div>
    <LabelInputContainer className="mb-4">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" placeholder="abc@gmail.com" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </LabelInputContainer>
    <LabelInputContainer className="mb-4">
      <Label htmlFor="textarea">Your Message</Label>
      <Input className="p-12" id="textarea" placeholder="Type your Message" type="text" value={message} onChange={(e)=>setMessage(e.target.value)}  />
    </LabelInputContainer>
    
   
    <button
      className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      type="submit"
    >
      Send &rarr;
    
    </button>

    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

    
  </form>
  </div> 

  <div className="w-96 h-12  items-center ">
  <div className="mapouter ">
    <div className="gmap_canvas">
      <iframe width="942" height="430" id="gmap_canvas" src="https://maps.google.com/maps?q=surkhet&t=&z=13&ie=UTF8&iwloc=&output=embed"    ></iframe>
      <a href="https://timenowin.net/">online clock</a>
      <a href="https://www.analarmclock.com/"></a>
    </div>
  </div>
</div>


 






      </div>
    
    
   
      

      
    </div>
  )
}
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};