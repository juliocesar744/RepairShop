import Image from "next/image"

export const metadata = {
    title: "Page Not Found",
}
 
export default function NotFound() {
  return (
    <div className="px-2 w-full">
        <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl">Not Found</h2>
            <Image
                className="m-0 rounded-xl"
                src="/images/not-found-img.jpg"
                width={500}
                height={500}
                sizes="500px"
                alt="Page Not Found"
                priority={true}
                title="Page Not Found"
                />
        </div>
    </div>
  )
}