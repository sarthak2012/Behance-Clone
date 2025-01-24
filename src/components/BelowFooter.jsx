import React, { useEffect, useState } from 'react'; //Use of Hooks
import { adobeLogo } from '../Data'; //Logo images are Imported by creating a data file for it else it can be done by saving the images to public and then rendering it.

const BelowFooter = () => {
    const [isFixedFooterVisible, setIsFixedFooterVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => { //Looks for Scroll Position
            const footerElement = document.getElementById('main-footer');
            if (footerElement) {
                const footerRect = footerElement.getBoundingClientRect();
                const isFooterVisible = footerRect.top < window.innerHeight && footerRect.bottom >= 0;
                setIsFixedFooterVisible(!isFooterVisible);
            }
        };
        // Event added
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <> 
        {/* Basic Visible Footer Content */}
            <section className={`px-4 py-3 fixed w-full bottom-0 bg-white transition-opacity duration-300 ${isFixedFooterVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="container-fluid">
                    <div className="grid lg:grid-cols-2 gap-3 p items-center">
                    <ul className="flex p items-center flex-wrap m text-xs text-gray-500 font-bold">
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>More Behance</a></li>
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>English</a></li>
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>Try Behance Pro</a></li>
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>TOU</a></li>
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>Privacy</a></li>
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>Community</a></li>
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>Help</a></li>
                       
                            <li className="mx-2 hover:text-blue-500 cursor-pointer"><a href='https://www.adobe.com/privacy/us-rights.html'>Do not sell or share my personal information</a></li>
                        </ul>
                        <div className="adobe-right flex lg:justify-end">
                            <div className="adobe-btn mx-4 flex m items-center hover:opacity-70">
                                <img src={adobeLogo} alt="Adobe Logo" className="w-5 h-5" />
                                <a href="" className='pl-1 font-bold text-black text-sm'> Adobe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="main-footer" className="bg-black text-white">
           
       <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <div className="text-5xl font-bold mb-4 mr-5">Bēhance</div>
          </div>
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <h6 className="font-semibold mb-4">Built For Creatives</h6>
            {/* List Of features to be Displayed in the Lower Footer */}
            <ul>   
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Try Behance Pro</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Find Inspiration</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Get Hired</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Sell Creative Assets</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Sell Freelance Services</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <h6 className="font-semibold mb-4">Find Talent</h6>
            <ul>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Post a Job</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">All Featured Freelance Designers</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Graphic Designers</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Photographers</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Video Editors</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Web Designers</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Illustrators</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <h6 className="font-semibold mb-4">Behance</h6>
            <ul>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">About Behance</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Adobe Portfolio</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Download the App</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Careers</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Help Center</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <h6 className="font-semibold mb-4">Social</h6>
            <ul>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li className="mb-2"><a href="http://" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <img src={adobeLogo} alt="Adobe_logo" className="w-5 h-5"  />
              <p className="Adobe">&copy; 2024 Adobe Inc. All rights reserved.</p>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
          
        </>
    );
}

export default BelowFooter;