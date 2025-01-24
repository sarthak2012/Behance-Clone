import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci"; //Imported the Heart Icon for Like Feature from React Icons.
import Model from './Model'; 
// Function List Used here.
const BehanceList = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [likedImages, setLikedImages] = useState({});
  // Created a Function to Enlarge the clicked image.
  const openModel = (image) => {
    setSelectedImage(image);
    setIsModelOpen(true);
  };
  // Created a Function to Close the Enlarged Model.
  const closeModel = () => {
    setIsModelOpen(false);
    setSelectedImage({});
  };
  // Created a Function to toggle Like feature.
  const toggleLike = (imageSrc) => {
    setLikedImages((prevLikedImages) => ({
      ...prevLikedImages,
      [imageSrc]: !prevLikedImages[imageSrc] 
    }
    ));
  };
  
  // Created an Array of TailBlocks with Images.
  const images = [
    {
      src: "https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=800,700,x89,y103,safe&height=900&width=1600&fit=bounds",
      title: "Chichen Itza",
      subtitle: "Subtitle",
      description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
      likes:50,
      symbol:<CiHeart />
      
    },
    {
      src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVBgilJb2vwA/v3/-1x-1.jpg",
      title: "Coloseum Romma", 
      subtitle: "Subtitle",
      description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
      likes:53,
      symbol:<CiHeart />
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5bQrYaZdhcJhm6eVybpwu2_Ss4csP5VH3Tg&s",
      title: "Great Pyramid of Giza",
      subtitle: "Subtitle",
      description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
      likes:52,
      symbol:<CiHeart />
    },
    {
      src: "https://cdn.openart.ai/uploads/image_GSZD71Vp_1696950053725_512.webp",
      title: "San Francisco",
      subtitle: "Subtitle",
      description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
      likes:55,
      symbol:<CiHeart />
    },
    {
        src: "https://www.kapwing.com/resources/content/images/2021/04/how-to-make-aesthetic-wallpaper-10.png",
        title: "Chichhen Itzaa",
        subtitle: "Subtitle",
        description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        likes:54,
      symbol:<CiHeart />
      },
      {
        src: "https://i.pinimg.com/236x/d5/05/f7/d505f77ac37c7118be365dfd50ce1084.jpg",
        title: "Coloseum Romma",
        subtitle: "SUBTITLE",
        description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        likes:56,
      symbol:<CiHeart />
      },
      {
        src: "https://images.unsplash.com/photo-1478144592103-25e218a04891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxuYXR1cmV8ZW58MHx8fHwxNjg3MDk1MDcw&ixlib=rb-4.0.3&q=80&w=400",
        title: "Great Pyramid of Giza",
        subtitle: "Subtitle",
        description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        likes:54,
      symbol:<CiHeart />
      },
      {
        src: "https://www.arbazaar.com/assets/images/products/thumbs/furnato-painting-of-musicians-artistic-painting-with-long-lasting-uv-coated-mdf-framing-laminated-home-decor_2000x2000.jpg",
        title: "San Francisco",
        subtitle: "Subtitle",
        description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        likes:54,
      symbol:<CiHeart />
      }
      ,{
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ltbb1TKeSSUeyFLnQatLBiiXX62oohC9WA&s",
        title: "Chichhen Itzaa",
        subtitle: "SUBTITLE",
        description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        likes:54,
      symbol:<CiHeart />
      },
      {
        src: "https://img.freepik.com/premium-photo/feeling-moving-new-place-aesthetic_74951-26.jpg",
        title: "Coloseum Romma",
        subtitle: "SUBTITLE",
        description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        likes:54,
      symbol:<CiHeart />
      },
      {
        src: "https://assets.entrepreneur.com/content/3x2/2000/1686042484-Untitleddesign83.jpg",
        title: "Great Pyramid of Giza",
        subtitle: "Subtitle",
        description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        likes:54,
      symbol:<CiHeart />
      },
      {
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1",
        title: "San Francisco",
        subtitle: "Subtitle",
        description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        likes:54,
      symbol:<CiHeart />
      },
      {
          src: "https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-an-anime-styled-illustration-of-an-autumn-street-with-vehicles-image_2699860.jpg",
          title: "Chichhen Itzaa",
          subtitle: "Subtitle",
          description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
          likes:54,
        symbol:<CiHeart />
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEJVkrc4Mwyg4GWpSfiA0nihDun-NIJoNtQ&s",
          title: "Coloseum Romma",
          subtitle: "Subtitle",
          description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
          likes:54,
        symbol:<CiHeart />
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReODXJbCH9BfpKN0vUvFkjiEX1pmWFVzuzYQ&s",
          title: "Great Pyramid of Giza",
          subtitle: "SUBTITLE",
          description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
          likes:54,
        symbol:<CiHeart />
        },
        {
          src: "https://markallenassets.blob.core.windows.net/communitycare/2023/02/Artistic-brain-image-Snapshooter-Adobe-Stock.jpg",
          title: "San Francisco",
          subtitle: "Subtitle",
          description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
          likes:54,
        symbol:<CiHeart />
        }
        ,{
            src: "https://www.designboom.com/wp-content/uploads/2020/01/mercedes-benz-vision-avtr-concept-car-ces-2020-designboom03.jpg",
            title: "Chichhen Itzaa",
            subtitle: "SUBTITLE",
            description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
            likes:54,
          symbol:<CiHeart />
          },
          {
            src: "https://assets-global.website-files.com/5ea07140f301fb79b345cb74/621cd7da47fde33b73266113_%CE%A3%CF%87%CE%AD%CE%B4%CE%B9%CE%BF%20%CF%87%CF%89%CF%81%CE%AF%CF%82%20%CF%84%CE%AF%CF%84%CE%BB%CE%BF%20(1).png",
            title: "Coloseum Romma",
            subtitle: "Subtitle",
            description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
            likes:54,
          symbol:<CiHeart />
          },
          {
            src: "https://www.savills.co.uk/_images/adobestock-539646437.jpg",
            title: "Great Pyramid of Giza",
            subtitle: "Subtitle",
            description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
            likes:54,
          symbol:<CiHeart />
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFXVWrkVDrpobEvX5wwqVYlx-mwti3dZy-A&s",
            title: "San Francisco",
            subtitle: "Subtitle",
            description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
            likes:54,
          symbol:<CiHeart />
          },
          {
              src: "https://www.zilliondesigns.com/blog/wp-content/uploads/fashion-1.jpg",
              title: "Chichhen Itzaa",
              subtitle: "Subtitle",
              description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
              likes:54,
            symbol:<CiHeart />
            },
            {
              src: "https://img.freepik.com/premium-photo/women-artistic-portrait_808849-40.jpg",
              title: "Coloseum Romma",
              subtitle: "Subtitle",
              description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
              likes:54,
            symbol:<CiHeart />
            },
            {
              src: "https://miro.medium.com/v2/resize:fit:938/0*Z1h5qOMLSc7G7-Wg.png",
              title: "Great Pyramid of Giza",
              subtitle: "Subtitle",
              description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
              likes:54,
            symbol:<CiHeart />
            },
            {
              src: "https://variety.com/wp-content/uploads/2016/06/cars.jpg?w=1000&h=563&crop=1",
              title: "San Francisco",
              subtitle: "Subtitle",
              description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
              likes:54,
            symbol:<CiHeart />
            }
            ,{
                src: "https://assets.cntraveller.in/photos/60b9f5db2d7743edc6392e43/16:9/w_1920,h_1080,c_limit/wildflowerhalllead.jpg",
                title: "Chichhen Itzaa",
                subtitle: "Subtitle",
                description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
                likes:54,
              symbol:<CiHeart />
              },
              {
                src: "https://www.shutterstock.com/image-photo/little-girl-water-colors-portrait-600nw-151473575.jpg",
                title: "Coloseum Romma",
                subtitle: "Subtitle",
                description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
                likes:54,
              symbol:<CiHeart />
              },
              {
                src: "https://mylittleangel.uk/cdn/shop/products/il_fullxfull.3289808012_h2gb.jpg?v=1648983520",
                title: "Great Pyramid of Giza",
                subtitle: "Subtitle",
                description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
                likes:54,
              symbol:<CiHeart />
              },
              {
                src: "https://e1.pxfuel.com/desktop-wallpaper/670/655/desktop-wallpaper-aesthetic-cartoon-characters-thumbnail.jpg",
                title: "San Francisco",
                subtitle: "Subtitle",
                description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
                likes:54,
              symbol:<CiHeart />
              },
              {
                  src: "https://lifencolors.in/cdn/shop/products/d4050a_51c1d300766d4595ba5614df0d605e93_mv2.jpg?v=1693637253&width=1946",
                  title: "Chichhen Itzaa",
                  subtitle: "Subtitle",
                  description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
                  likes:54,
                symbol:<CiHeart />
                },
                {
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXRsfIOrR8bwGDQP_kFlp5UQ0YOKJbzSXRg&s",
                  title: "Coloseum Romma",
                  subtitle: "Subtitle",
                  description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
                  likes:54,
                symbol:<CiHeart />
                },
                {
                  src: "https://w0.peakpx.com/wallpaper/140/750/HD-wallpaper-cute-bear-cartoon-brown-bear-thumbnail.jpg",
                  title: "Great Pyramid of Giza",
                  subtitle: "Subtitle",
                  description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
                  likes:54,
                symbol:<CiHeart />
                },
                {
                  src: "https://wallpapers.com/images/hd/aesthetic-art-pictures-gjez2pk1c22zmkxu.jpg",
                  title: "San Francisco",
                  subtitle: "Subtitle",
                  description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
                  likes:54,
                symbol:<CiHeart />
                }
                
  ];
 
 return (
  
    <section className="text-gray-600 body-font items-center justify-center text-center pt-40">
    <div className="absolute inset-y-0 left-0 w-1/2 flex flex-col justify-center items-center pr-80 mt-40 animate-slideUp">
    <div className="flex flex-col items-center">
    <img src="/1.webp" alt="Image 1" className="w-32 h-36 mb-2 opacity-50" />
    <img src="/3.webp" alt="Image 3" className="w-32 h-36 mb-2 opacity-50" />
    <img src="/5.webp" alt="Image 5" className="w-32 h-36 mb-2 opacity-50" />
    </div>
  </div>
  <div className="absolute inset-y-0 left-0 w-1/2 flex flex-col justify-center items-center animate-slideUp">
  <div className="flex flex-col items-center">
    <img src="/2.webp" alt="Image 2" className="w-32 h-36 mb-2 opacity-50" />
    <img src="/4.webp" alt="Image 4" className="w-32 h-36 mb-2 opacity-50" />
    <img src="/6.webp" alt="Image 6" className="w-32 h-36 mb-2 opacity-50" />
    </div>
  </div>



  <div className="absolute inset-y-0 right-0 w-1/2 flex flex-col justify-center items-center pl-80 mt-40 animate-slideUp">
    <div className="flex flex-col items-center">
    <img src="/7.webp" alt="Image 1" className="w-32 h-36 mb-2 opacity-50" />
    <img src="/9.webp" alt="Image 3" className="w-32 h-36 mb-2 opacity-50" />
    <img src="/11.webp" alt="Image 5" className="w-32 h-36 mb-2 opacity-50" />
    </div>
  </div>
  <div className="absolute inset-y-0 right-0 w-1/2 flex flex-col justify-center items-center animate-slideUp">
  <div className="flex flex-col items-center">
    <img src="/8.webp" alt="Image 2" className="w-32 h-36 mb-2 opacity-50" />
    <img src="/10.webp" alt="Image 4" className="w-32 h-36 mb-2 opacity-50" />
    <img src="/12.webp" alt="Image 6" className="w-32 h-36 mb-2 opacity-50" />
    </div>
  </div>
      <div className='animate-slideUp'>
         <section className='flex flex-col items-center justify-center text-center py-20 '>
          <div className="container">
    <h1 className="text-8xl font-bold text-black">The World's</h1>
    <h1 className="text-8xl font-bold text-blue-500">Best Creators</h1>
    <h1 className="text-8xl font-bold text-black">Are On Behance</h1>
  </div>
  <div className="container-flex m mt-6">
    <h1 className="text-gray-600 text-2xl ">
      A comprehensive platform to help hirers and creators navigate the creative
    </h1>
    <h1 className="text-gray-600 text-2xl ">
      world from discovering inspiration, to connecting with one another
    </h1>
  </div>
  <div className="mt-8 flex space-x-4">
    <button className="bg-blue-500 white text-white p px-6 py-3 text-lg rounded">
      Hire a Freelancer
    </button>
    <button className="border border-blue-500 text-blue-500 px-6 py-3 p text-lg m rounded">
      Try Behance Pro
    </button>
  </div>
              </section>
         </div>
      <div className="container px-4 py-0 mx-auto">
        <div className="flex flex-wrap w-full mb-2">
          <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
            
          </div>
        </div>
        <div className="flex p flex-wrap -m-4">
          {images.map((image, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/3 p-4 p">
              <div className="bg-gray-100 p-6 rounded-lg m hover:shadow-xl transition-shadow p duration-300 ease-in-out">
                <img
                  className="h-60 rounded w-full object-cover object-center mb-6 cursor-pointer"
                  src={image.src}
                  alt={image.title}
                  onClick={() => openModel(image)}
                />
                <h3 className="tracking-widest text-indigo-500 m text-xs font-medium title-font">{image.subtitle}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{image.title}</h2>
                <p className="leading-relaxed p text-base">{image.description}</p>
                <div className="flex items-center mt-4">
                  <CiHeart className={`h-5 w-5 mr-1 ${likedImages[image.src] ? 'text-red-500' : 'text-gray-500'}`} onClick={(e) => { e.stopPropagation(); toggleLike(image.src); }} />
                  <span className="text-gray-500">{likedImages[image.src] ? '1 like' : '0 likes'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <Model   //Model functions used.
          isOpen={isModelOpen}
          onClose={closeModel}
          imageSrc={selectedImage.src}
          onLike={() => toggleLike(selectedImage.src)}
          isLiked={likedImages[selectedImage.src]}
          title={selectedImage.title}
          description={selectedImage.description}
        />
      )}
    </section>
  );
};

export default BehanceList;