export default function HTMLCSSPage(){
    return(
        <main className="bg-[#F4D04E] h-screen">
        <div className="flex items-center justify-center h-screen">
        <div className="place-items-center flex flex-col  items-center justify-items-center 
        md:w-[327px]  md:h-[501px] lg:w-[384px] lg:h-[522px]  border border-black bg-white rounded-[20px]">
        <img src="/learning/blogImage.png" alt="image for blog "className="mt-[20px] lg:w-[336px]" />
        <div className="place-items-start ml-[20px] mt-[20px] md:w-[279px] md:h-[173px] lg:w-[336px] lg:h-[194px] ">
        <div className="bg-[#F4D04E] w-[73px] h-[16px] place-items-center ml-[-5px]">
        <p className="text-[12px] text-[#111111] leading-[150%] font-extrabold font-[figtree]  ">Learning</p>
        </div>
        <p className=" font-[figtree] text-[12px] font-medium leading-[150%] text-[#111111] mt-[10px] ">Published 21 Dec 2023</p>
        <p className="font-[figtree] text-[20px] font-extrabold leading-[150%] text-[#111111] mt-[10px]">HTML & CSS foundations</p>
      
        <p className="text-[#6B6B6B] text-[14px] font-medium leading-[150%] mt-[10px]">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        
        <div className="mt-[30px] flex flex-row ">
        <img src="/learning/userPic.png" alt="pic of user" /> <p className="text-[12px]  text-[#111111] font-[figtree] font-extrabold mt-[5px] ml-[20px]">Greg Hooper</p>
        </div>
        </div>
        </div>
        </div>
        <div className="card"></div>
        </main>
    );
};


