import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">Payment failed!</div>
                    <div className="text-base mt-5">
                    If you encounter any challenges or have questions about the process, our dedicated team is ready to assist you. Simply drop us an email at <b className="underline">thefaashionhive@gmail.com</b>. We're committed to making sure your shopping experience with The Fashion Hive is exceptional.

In the meantime, feel free to continue exploring our latest collections and trends. Your fashion journey with us is important, and we appreciate your understanding as we work together to resolve this matter.

Thank you for choosing The Fashion Hive!


                    </div>
                  

                    <Link href="/" className=" inline-flex mt-10">
                                        
                        <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">Continue Shopping..</span>
                        <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
                            <svg className="h-3 w-3" aria-hidden="true" focusable="false" data-icon="chevron-right" role="img"  viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" /></svg>
                        </span>
                  
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Failed;