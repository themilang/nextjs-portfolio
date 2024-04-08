// components/ui/Newsletter.tsx

import { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";

export const Newsletter = () => {
  const [email, setEmail] = useState<any | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [messageState, setMessageState] = useState("");

  const handelSubmit= async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log(email)



    try {
      const res = await fetch('https://contactform-backend-oujb.onrender.com/api/user/subscription', {
          method: 'POST', // Assuming you're making a POST request
          body: JSON.stringify({
              email: email, // Replace with actual data
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      
      
        });
        const resdata=await res.json()
    
      if (res.status==200) {
       
        setSuccess(true)
        setMessageState(resdata.message)
      } else if (res.status==400){
        setSuccess(false)
        setMessageState(resdata.message)
      }
      
  } catch (error) {
      console.error('Error:', error);
  }
  




  }

  return (
    <section className=" h-48 rounded-lg container mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid  rounded-lg items-center gap-10  py-[15%] px-[6%] dark:bg-black md:p-[6%] lg:grid-cols-2">
        <div>
          <h3 className="text-5xl font-semibold dark:text-white text-black">
            Join my newsletter
          </h3>
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-500">
            Join my newsletter to get new posts before anyone else, I&apos;ll
            send you an email with links to all of the articles.
          </p>
        </div>

        <form   onSubmit={handelSubmit}>
          <div className="gap-3 md:flex ">
            <input
              type="email"
              className="peer border block w-full rounded-md border-gray-300 bg-white py-3 pl-7 pr-12 text-black focus:border-white focus:ring-white peer-invalid:text-pink-600 dark:border-zinc-500 dark:bg-zinc-900 dark:focus:ring-white sm:text-sm"
              placeholder="Your Email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

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
          </div>

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
    </section>
  );
};