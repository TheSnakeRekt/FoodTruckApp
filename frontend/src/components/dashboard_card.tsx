export default function DashBoardCard({
    image,
    overlayText,
    topRight,
    bottomLeft,
    bottomRight }: any) {
    console.log(image);
    return (<>
        <div className="rounded-lg bg-gray-600    w-fit px-3 py-2 ">
            <img src={image} className="h-20 w-52 object-cover rounded-lg">
            </img>
            <div className="bg-gray-800 font-semibold py-1 px-2 rounded-lg shadow-lg   max-w-[50%]  -mt-4 ml-2 z-10 relative text-sm">
                {overlayText}
            </div>
            <div className="flex justify-between p-2">
                {bottomLeft}
                {bottomRight}
                
            </div>
        </div>
    </>)
}