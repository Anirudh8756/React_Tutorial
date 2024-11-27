import React from 'react'; 
const Page = ({params}: {params: {id: string}}) => {
  const id = params.id;
  return (
    <div className="text-4xl w-[1440px] mx-auto mt-[24px]">
        User Profile: {id}
    </div>
  );
}

export default Page;