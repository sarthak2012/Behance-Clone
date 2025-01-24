import React from 'react';
import { SiApple } from "react-icons/si";  //Imported the Heart Icon for Apple Icon from React Icons.
import { ImFacebook2 } from "react-icons/im"; //Imported the Heart Icon for Facebook Icon from React Icons.
import { FcGoogle } from "react-icons/fc";//Imported the Heart Icon for Google Icon from React Icons.


const AboveFooter = () => { // Display Content in Above Footer.
  return (
    <div className="flex-col items-center justify-center bg-white mt-10">
      <div className="text-center justify-center">
        <p className="text-lg">
          <a href="#" className="font-bold text-blue-600 hover:underline">Sign Up</a>{' '}
          or{' '}
          <a href="#" className="font-bold text-blue-600 hover:underline ml-1">Sign In</a>{' '}
          to your account to view more work personalized to your preferences.
        </p>
        <div className="mt-6 flex justify-center">
          <a  //Redirect to adobe link
            href="https://auth.services.adobe.com/en_US/deeplink.html?deeplink=signup&callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252Fauth%252Flogin%253Fdestination%253D%252Fonboarding%2523old_hash%253D%2526from_ims%253Dtrue%2526client_id%253DBehanceWebSusi1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Csao.cce_private%252Ccreative_cloud%252Ccreative_sdk%252Cbe.pro2.external_client%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%25228efcb87f-5f69-4dc2-824d-2dbc7fbd6231%2522%252C%2522timestamp%2522%253A%25221718708176426%2522%252C%2522context%2522%253A%257B%2522intent%2522%253A%2522signUp%2522%257D%252C%2522jslibver%2522%253A%2522v2-v0.41.0-12-g3caf235%2522%252C%2522nonce%2522%253A%25222954807414296535%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%228efcb87f-5f69-4dc2-824d-2dbc7fbd6231%22%2C%22timestamp%22%3A%221718708176426%22%2C%22context%22%3A%7B%22intent%22%3A%22signUp%22%7D%2C%22jslibver%22%3A%22v2-v0.41.0-12-g3caf235%22%2C%22nonce%22%3A%222954807414296535%22%7D&relay=d7302bb7-01eb-4d76-8cdd-66e0951b8014&locale=en_US&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=create_account&el=true&s_p=google%2Cfacebook%2Capple%2Cmicrosoft&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.behance.net%2Fauth%2Flogin%3Fdestination%3D%2Fonboarding%23old_hash%3D%26from_ims%3Dtrue%26client_id%3DBehanceWebSusi1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&use_ms_for_expiry=true#/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700">
              Sign Up With Email
            </button>
          </a>
          <div></div>
          <span className="text-gray-500 mx-2 my-2">or</span>
          <div className="flex space-x-2">
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <SiApple  className="w-6 h-6" />
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <ImFacebook2
                className="w-6 h-6"
              />
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <FcGoogle className="w-6 h-6"/>
                
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-24 border-t-4 border-gradient">
        <div className="text-center p-4 text-m">
          <span className="font-bold p-3">
            Upgrade to Behance Pro Today:
          </span>{' '}
          Get Advanced Analytics, a custom portfolio website, and more features
          to grow your creative career.{' '}
          <a href="#" className="text-blue-600 hover:underline ml-1 font-bold p-2">
            Start your 7 day free trial
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;
