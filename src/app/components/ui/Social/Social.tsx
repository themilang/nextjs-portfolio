import { useState } from "react";
import { successToast, errorToast } from "../../../../app/services/toastify.service";
import { RiLoader5Fill } from "react-icons/ri";
import { Label } from "../ContactMe/label";
import { Input } from "../ContactMe/input";
import { cn } from "../../../utils/cn";


export default function Social() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');  
  const [loading, setLoading] = useState(false);
  const [messageState, setMessageState] = useState("");
  const [success, setSuccess] = useState<boolean>(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('https://contactform-backend-oujb.onrender.com/api/user/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const resdata = await res.json();
      
      if (res.status === 200) {
        setSuccess(true)

        // successToast(resdata.message);
        setMessageState(resdata.message)

      } else if (res.status === 400) {
        setSuccess(false)

        // errorToast(resdata.message);
        setMessageState(resdata.message)

      }
    } catch (error) {
      console.error('Error:', error);
      errorToast("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative lg:ml-16 -ml-11 items-center rounded-3xl w-96 lg:w-full lg:h-[38rem] h-[58rem] isolate overflow-hidden">
      <div className="lg:flex flex-row justify-around gap-32">
        <div className="sm:mt-12 mt-28 m-12 justify-around sm:ml-48 ml-12 items-center">
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Milan" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="abc@gmail.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="textarea">Your Message</Label>
              <Input className="p-12" id="textarea" placeholder="Type your Message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            </LabelInputContainer>
            <button
              disabled={loading}
              type="submit"
              className="mt-5 w-full rounded-md bg-black py-3 px-5 text-white dark:bg-gray-600 dark:hover:bg-green-600 hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-opacity-60 md:mt-0 md:w-auto"
            >
              {!loading ? (
                "SUBSCRIBE"
              ) : (
                <div className="flex w-full items-center justify-center ">
                  <RiLoader5Fill className="w-8 animate-spin" />
                </div>
              )}
            </button>
            {success ? (
            <p className="mt-2 text-green-400 dark:text-green-400">
             {messageState}
            </p>
          ) : (
            <p className="mt-2 text-pink-500 dark:text-pink-500">
            {messageState}
            </p>
          )}
          </form>
        </div>
        <div className="w-96 h-12 items-center">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="942" height="430" id="gmap_canvas" src="https://maps.google.com/maps?q=surkhet&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              <a href="https://timenowin.net/">online clock</a>
              <a href="https://www.analarmclock.com/"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
