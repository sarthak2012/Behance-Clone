import React, { useState } from 'react';
// Use of Different React Icons.
import { IoSearchSharp, IoClose } from 'react-icons/io5';
import { MdArrowDropDown, MdImageSearch } from 'react-icons/md';
import { CgMenuLeft } from 'react-icons/cg';
import { IoIosMenu, IoIosArrowDown } from 'react-icons/io';
import { FaBell } from 'react-icons/fa';
import { behance_logo, adobeLogo } from '../Data'; // Importing Data file to access the image links stored.

// Drop Down function
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Recommended'); 
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    const mainHeader = document.getElementById('header');
    mainHeader.classList.toggle('menuopen');
  };

  
  const closeMenu = () => {
    toggleMenu(); 
  };
  // To toggle the Explore Dropdown menu.
  const toggleExploreDropdown = () => {
    setIsExploreDropdownOpen(!isExploreDropdownOpen);
  };

  // Function to Check Suggestions in the Search.
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const mockSuggestions = getMockSuggestions(value);
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  // Some Random suggestions to be fetched through API.
  const getMockSuggestions = (value) => {
    const suggestions = [
      `${value} asthetic`,
      `${value} photography`,
      `${value} crative`,
      `Architecture ${value}`,
      `banner ${value}`,
    ];
    return suggestions;
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  
  return (
    // Display Content Of Header.
    <header className="header" id="header">
      <div id="menu" className="menu duration-300  bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 z-20 p-5">
        <div className="text-3xl absolute right-3 cursor-pointer text-[#333]" onClick={closeMenu}>
          <IoClose />
        </div>
      </div>

      <div className="border-b fixed w-full top-0 bg-white z-10">
        <div className="container-fluid">
          <div className="top-header py-4 lg:py-3 px-5 border-b border">
            <div className="navbar flex items-center justify-between">
              <div className="brand-logo flex items-center">
                <div className="phone-menu pr-3 text-2xl cursor-pointer block lg:hidden" onClick={toggleMenu}>
                  <CgMenuLeft />
                </div>
                <a href="/" target="_blank" rel="noopener noreferrer">
                <img src={behance_logo} alt="Behance Logo" className="w-auto h-4" />
                </a>
                
                <div className="page-links lg:ml-3 relative">
      <ul className="flex items-center">
        <li
          className="mx-3 font-medium text-md flex items-center cursor-pointer"
          onClick={toggleExploreDropdown}
        >
          Explore
          <IoIosArrowDown className="ml-1" />
        </li>
        <li className="mx-3 font-medium text-md">
          <a href="/" target="_blank" rel="noopener noreferrer">Assets</a>
        </li>
        <li className="mx-3 font-medium text-md">
          <a href="/" target="_blank" rel="noopener noreferrer">Jobs</a>
        </li>
        <li className="mx-3 font-medium text-md flex items-center">
          <a href="/" target="_blank" rel="noopener noreferrer">Behance</a>
          <span className="ml-2 bg-blue-600 text-white px-1 py-0.5 rounded-full text-xs font-bold">PRO</span>
        </li>
        <span className="text-gray-300">|</span>
        <li className="mx-5 font-medium text-md flex items-center cursor-pointer">
          Hire Freelancers
          <IoIosArrowDown className="ml-1" />
        </li>
      </ul>
      {isExploreDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-52">
          <ul>
            <li className="px-4 py-2 text-orange-600 font-bold">
              <a href="/">Search & Explore</a>
            </li>
          
            <hr />
            <li className="px-4 py-4 hover:text-blue-600 text-sm text-black">
              <a href="/">Best of Behance</a>
            </li>
            <li className="px-4 py-2 hover:text-blue-600 text-sm text-black">
              <a href="/">Graphic Design</a>
            </li>
            <li className="px-4 py-2 hover:text-blue-600 text-sm text-black">
              <a href="/">Illustration</a>
            </li>
            <li className="px-4 py-2 hover:text-blue-600 text-sm text-black">
              <a href="/">Photography</a>
            </li>
            <li className="px-4 py-2 hover:text-blue-600 text-sm text-black">
              <a href="/">UI/UX</a>
            </li>
            <li className="px-4 py-2 hover:text-blue-600 text-sm text-black">
              <a href="/">3D Art</a>
            </li>
          </ul>
        </div>
      )}
    </div>
              </div>
              <div className="hidden lg:block">
                <div className="action-area flex items-center">
                  <FaBell className='mr-2 cursor-pointer' />
                  <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff]">
                    <a href="/" className="text-[#0057ff] font-medium text-md">LogIn</a>
                  </div>
                  <div className="login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]">
                    <a href="/" className="text-white font-medium text-md">Sign Up</a>
                  </div>

                  <div className="relative group">
                    <div className="adobe-btn mx-4 flex items-center hover:opacity-70 cursor-pointer">
                      <img src={adobeLogo} alt="Adobe Logo" className="w-5 h-5" />
                      <a href="/" className="pl-1 font-bold text-black text-sm"> Adobe</a>
                    </div>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 mt-2 w-100 z-20 left-0">
                      <div className="dropdown-item py-2">
                        <a href="https://adobe.com" className="block font-bold text-black">Go to adobe.com</a>
                        <p className="text-sm text-gray-500">Access your apps, services, files, and more</p>
                      </div>
                      <div className="dropdown-item py-2">
                        <a href="https://adobe.com/express" className="block font-bold text-black">Get Adobe Express free</a>
                        <p className="text-sm text-gray-500">Quickly make content from thousands of free templates</p>
                      </div>
                      <div className="dropdown-item py-2">
                        <a href="https://behance.net" className="block font-bold text-black">7 day free trial of Behance Pro</a>
                        <p className="text-sm text-gray-500">Supercharge your creative career with Behance Pro</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="phone-search block lg:hidden cursor-pointer pr-3 text-2xl">
              
                <IoSearchSharp />
              </div>
              
            </div>
          </div>
          
         <section>
         
          <div className="search-area p-5 flex items-center justify-between">
            <div className="filter-button border rounded-full p-3 flex items-center cursor-pointer mr-4 w-40 h-10 justify-center">
              <IoIosMenu className="text-2xl mr-1" />
              <span className="text-lg font-bold text-[#000000]">Filter</span>
            </div>
            <div className="search-box w-full border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between">
              <div className="input-box relative lg:w-full">
                <input
                  type="text"
                  placeholder="Search the creative world at work"
                  className="bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl  text-[#010101] custom-placeholder"
                  value={query}
                  onChange={handleChange}
                />
                <div className="search-icon text-2xl text-[#777] absolute top-[2px] left-4">
                  {/* Search Bar Content */}
                  <IoSearchSharp />
                </div>
                </div>
                {suggestions.length > 0 && (
                  <ul className="absolute left-40 right-40 top-full bg-white border mt-1 shadow-lg z-10 rounded-lg overflow-hidden">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              
              <div className="tags-search bg-white px-4 py-3 border-l-2 flex items-center">
                <ul className="flex items-center">
                  <li className="bg-white mx-1 py-1 text-black px-3 font-medium text-sm flex items-center whitespace-nowrap cursor-pointer">
                    <MdImageSearch className="mr-2" />
                    <a
                      href="https://auth.services.adobe.com/en_US/deeplink.html?deeplink=signup&callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252Fauth%252Flogin%253Fdestination%253D%252Fsearch%252Fimages%2523old_hash%253D%2526from_ims%253Dtrue%2526client_id%253DBehanceWebSusi1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Csao.cce_private%252Ccreative_cloud%252Ccreative_sdk%252Cbe.pro2.external_client%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%25228efcb87f-5f69-4dc2-824d-2dbc7fbd6231%2522%252C%2522timestamp%2522%253A%25221718708176426%2522%252C%2522context%2522%253A%257B%2522intent%2522%253A%2522signUp%2522%257D%252C%2522jslibver%2522%253A%2522v2-v0.41.0-12-g3caf235%2522%252C%2522nonce%2522%253A%25221256081304573354%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%228efcb87f-5f69-4dc2-824d-2dbc7fbd6231%22%2C%22timestamp%22%3A%221718708176426%22%2C%22context%22%3A%7B%22intent%22%3A%22signUp%22%7D%2C%22jslibver%22%3A%22v2-v0.41.0-12-g3caf235%22%2C%22nonce%22%3A%221256081304573354%22%7D&relay=d7302bb7-01eb-4d76-8cdd-66e0951b8014&locale=en_US&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=create_account&el=true&s_p=google%2Cfacebook%2Capple%2Cmicrosoft&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.behance.net%2Fauth%2Flogin%3Fdestination%3D%2Fsearch%2Fimages%23old_hash%3D%26from_ims%3Dtrue%26client_id%3DBehanceWebSusi1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&use_ms_for_expiry=true#/signup"
                    >
                      Search by Image
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Sorting Content */}
            <div className="relative ml-4 border rounded-lg p-2 hover:border-black cursor-pointer" onClick={toggleDropdown}>
              <span className="text-xs font-bold text-[#626161]">Sort</span>
              <div className="flex items-center">
                <p className="text-m font-medium">{selectedOption}</p>
                <MdArrowDropDown />
              </div>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-1 px-2 w-28">
                  <div
                    className={`dropdown-item px-2 py-1 cursor-pointer ${selectedOption === 'Recommended' ? 'font-bold text-blue-500' : 'text-black'} hover:text-blue-500`}
                    onClick={() => handleOptionClick('Recommended')}
                  >
                    Recommended
                  </div>
                  <div
                    className={`dropdown-item px-2 py-1 cursor-pointer ${selectedOption === 'Curated' ? 'font-bold text-blue-500' : 'text-black'} hover:text-blue-500`}
                    onClick={() => handleOptionClick('Curated')}
                  >
                    Curated
                  </div>
                  <div
                    className={`dropdown-item px-2 py-1 cursor-pointer ${selectedOption === 'Appreciated' ? 'font-bold text-blue-500' : 'text-black'} hover:text-blue-500`}
                    onClick={() => handleOptionClick('Appreciated')}
                  >
                    Most Appreciated
                  </div>
                  <div
                    className={`dropdown-item px-2 py-1 cursor-pointer ${selectedOption === 'Viewed' ? 'font-bold text-blue-500' : 'text-black'} hover:text-blue-500`}
                    onClick={() => handleOptionClick('Viewed')}
                  >
                    Most Viewed
                  </div>
                  <div
                    className={`dropdown-item px-2 py-1 cursor-pointer ${selectedOption === 'Discussed' ? 'font-bold text-blue-500' : 'text-black'} hover:text-blue-500`}
                    onClick={() => handleOptionClick('Discussed')}
                  >
                    Most Discussed
                  </div>
                  <div
                    className={`dropdown-item px-2 py-1 cursor-pointer ${selectedOption === 'Recent' ? 'font-bold text-blue-500' : 'text-black'} hover:text-blue-500`}
                    onClick={() => handleOptionClick('Recent')}
                  >
                    Most Recent
                  </div>
                </div>
              )}
            </div>
          </div>
         </section>

          
        </div>  
       
      </div>
      
    </header>
  );
};

export default Header;