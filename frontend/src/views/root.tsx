import { useState } from 'react';

export default function Root() {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked((previousState) => !previousState);
  }
  return (
    <>
      <div className="landscape:hidden h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto rounded-[100px]"
            src="tablet.webp"
            alt="TruckTrack"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            TruckTrack: Manage your food trucks with ease.
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          {checked ?
            <>

              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium leading-6 ">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder='Enter your username'
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      required
                      className=" bg-gray-400 block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-200  focus:ring-2  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                      Password
                    </label>

                  </div>
                  <div className="mt-2">
                    <input
                      placeholder='Enter your password'
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className=" bg-gray-400 block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-200  focus:ring-2  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm"
                  >
                    Sign in
                  </button>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-semibold ">
                    Forgot password?
                  </a>
                </div>
              </form>

            </>
            : (<>
              <div className='h-[184px]'>
                <p className='text-center'>
                  Log in securely to access inventory and truck tracking

                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleChecked}
                  className="flex w-full justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Welcome
                </button>

              </div>
            </>

            )}
        </div>


      </div>
      <div className="portrait:hidden grid grid-cols-2 h-screen">
        <div className="bg-red-500"></div>scale 
        <div className="bg-blue-500">
          <img
            className="object-cover"
            src="tablet.webp"
            alt="TruckTrack"
          />
        </div>
      </div>

    </>
  )
}
