import React from 'react';
import { CiHeart } from "react-icons/ci"; // React icon for like Icon.

const Model = ({ isOpen, onClose, imageSrc, onLike, isLiked, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-3xl font-semibold">
              {title}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
            </button>
          </div>
          
          <div className="relative p-6 flex-auto">
            <img
              src={imageSrc}
              alt={title}
              className="rounded-lg object-contain w-full h-auto"
            />
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {description}
            </p>
          </div>
          
          <div className="flex items-center justify-between p-6 border-t border-solid border-gray-300 rounded-b">
            <div className="flex items-center">
              <button
                className="flex items-center mr-4 bg-transparent border-none outline-none focus:outline-none"
                onClick={onLike}
              >
                <CiHeart className={`text-xl mr-1 ${isLiked ? 'text-red-500' : 'text-gray-400'}`} />
                <span className="text-sm">{isLiked ? 'Liked' : 'Like'}</span>
              </button>
              <span className="text-gray-500">{isLiked ? '1 like' : '0 likes'}</span>
            </div>
            <button
              className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-green-500 rounded outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
