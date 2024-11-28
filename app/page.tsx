import Image from "next/image";
import Hello from '@/app/components/hello';
export default function Home() {
  console.log("What am I doing here? SERVER SIDE HERE.!!");
  return (
    <>
     <div className="border border-1 rounded-md bg-blue-500 border-blue-900 w-[1080px] mx-auto mt-[20px] p-[20px] flex items-center justify-center text-[25px] font-[600] hover:bg-blue-700 cursor-pointer" >Hello world</div>
    <Hello/>
    </>
  );
}   
