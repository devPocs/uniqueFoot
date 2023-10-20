function Banner() {
  return (
    <div>
      <div className="h-[600px] bg-gray-200">
        <div className="relative flex justify-between w-[80%] m-auto">
          <div className="my-48 w-[40%]">
            <h3 className="text-[2.4rem]  text-[#212121]">New Products</h3>
            <h1 className="text-[4.8rem]  text-[#212121]">Suede Molina</h1>
            <p className="text-[1.2rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores alias repellendus assumenda labore ex exercitationem
              sint, iure rem, expedita necessitatibus veniam ullam nobis nemo
              explicabo culpa totam deleniti, provident atque?
            </p>
            <div className="w-40 text-center p-3 my-5 bg-[#fe9227] text-slate-100 text-[1.25rem] text">
              Shop Now
            </div>
          </div>
          <img
            src="/suede.jpeg"
            alt="suede"
            className="absolute my-28 w-[400px] shadow-lg shadow-gray-300 right-16 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
