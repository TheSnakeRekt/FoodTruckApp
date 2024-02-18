export default function Root() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white mt-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto rounded-[100px]"
            src="tablet.webp"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            TruckTrack: Manage your food trucks with ease.
          </h2>
        </div>

        
          <p className="my-20 text-center text-sm font-semibold">
            Log in securely to access your inventory and truck tracking
          </p>

          <button href="" className="my-40 mx-auto text-black bg-gray-200 py-2 rounded-2xl w-[30%]"> Login </button>
        
      </div>
    </>
  )
}
