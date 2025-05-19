import ResponsiveLayout from "./responsive-layout";

export default function PerfumePage(){
    return( 
            <main className="bg-[#F5F5DC]">   
            <div className="flex items-center justify-center h-screen">   
            <div className="md:place-items-center md:flex md:flex-col  mid:items-center md:justify-items-center md:w-[343px]  md:h-[611px]  border border-black bg-white rounded-[20px] 
            lg:flex lg:flex-row lg:w-[600px] lg:h-[450px] ">
            <div className= "md:w-[342px] md:h-[240px] md:rounded-t-[20px] overflow-hidden lg:w-[300px] lg:h-[450px] lg:rounded-t-[0px] lg:rounded-l-[20px] ">
                <img src="/perfume/perfume-img.png" alt="perfumepic" className= "md:object-cover md:w-full md:h-full "/></div>
            <div className="md:ml-[20px]"> 
                <p className="text-sm font-medium text-[#6C7289] md:mt-[10px] font-[montserrat] tracking-[5px]">PERFUME </p>
                <p className="text-[#1C232B] text-[32px] leading-[32px] font-bold mt-[10px] font-[fraunces] ">Gabrielle Essence Eau De Parfum</p>
                <p className="text-[#6C7289] text-[14px] leading-[23px] mt-[10px] font-[montserrat]">A floral, solar and voluptuous <br />interpretation composed by Olivier <br />
                 Polge, Perfumer-Creator for the House of CHANEL.</p>
                <p className="inline-block text-[#3D8168] leading[32px] font-[fraunces] mt-[20px] text-[32px] font-[700] ">$149.99 </p> 
                <p className="inline-block line-through font-[montserrat] ml-[20px] text-[13px] text-[#6C7289]"> $169.99</p>
                <img src="/perfume/Group.png" alt="addtocart" className="md:mt-[20px] ml-[30px]" />
            </div>
            </div> 
            </div>                      
            </main>
            
    );
};


/*pake 1/2 untuk di W
default nggak perlu pake md lg*/

/*
<div style={{marginLeft:"auto",marginRight:"auto"}}>
            <div style={{
                border: "1px solid #111111",
                borderRadius:"20px",
                boxShadow: "8px 8px 0px 0px #000000",
                height:"501px",
                width:"327px",
                margin:"auto",
                marginTop:"50px",
                backgroundColor:"white",}} ></div>

 </div> */