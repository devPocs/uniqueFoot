function Footer() {
  return (
    <footer className="flex flex-col mt-auto w-[100%] bg-[#2f333a] h-[360px] text-gray-300">
      <div className="grid grid-cols-4 m-auto gap-x-28 w-[80%] mt-16">
        <div className="w-60">
          <h3 className="text-[1.3rem] font-semibold mb-4">ABOUT</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            repellendus perspiciatis corrupti dicta mollitia corporis a ab?
          </p>
        </div>
        <div>
          <h3 className="text-[1.3rem] font-semibold mb-4">INFORMATION</h3>
          <ul>
            <li className="mb-2  transition-all duration-700 ease-in-out hover:pl-2 hover:text-[#fe9227]">
              Tracking Order
            </li>
            <li className="mb-2 transition-all duration-700 ease-in-out hover:pl-2 hover:text-[#fe9227]">
              Privacy And Policy
            </li>
            <li className="mb-2 transition-all duration-700 ease-in-out hover:pl-2 hover:text-[#fe9227]">
              Terms and Conditions
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1.3rem] font-semibold mb-4">MY ACCOUNT</h3>
          <ul>
            <li className="mb-2  transition-all duration-700 ease-in-out hover:pl-2 hover:text-[#fe9227]">
              Login
            </li>
            <li className="mb-2 transition-all duration-700 ease-in-out hover:pl-2 hover:text-[#fe9227]">
              My Cart
            </li>
            <li className="mb-2 transition-all duration-700 ease-in-out hover:pl-2 hover:text-[#fe9227]">
              Wish List
            </li>
            <li className="mb-2 transition-all duration-700 ease-in-out hover:pl-2 hover:text-[#fe9227]">
              My Account
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1.3rem] font-semibold mb-4">CONNECT</h3>
          <ul className="flex justify-between">
            <li>
              <a
                href="#"
                className="fa fa-facebook text-[1.25rem] hover:text-[#fe9227]"
              ></a>
            </li>
            <li>
              <a
                href="#"
                className="fa fa-twitter text-[1.25rem] hover:text-[#fe9227]"
              ></a>
            </li>
            <li>
              <a
                href="#"
                className="fa fa-instagram text-[1.25rem] hover:text-[#fe9227]"
              ></a>
            </li>
            <li>
              <a
                href="#"
                className="fa fa-pinterest text-[1.25rem] hover:text-[#fe9227]"
              ></a>
            </li>
          </ul>
          <p className="mt-4 font-semibold">email: uniqueFoot@gmail.com</p>
          <p className="mt-4 font-semibold">phone: +234987654321</p>
        </div>
      </div>
      <div className="mt-auto w-[100%] h-[70px] bg-[#212121] text-center">
        <p className="text-[1.2rem] pt-7 ">
          uniqueFoot &copy; 2023 <span className="text-red-500">♥</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
