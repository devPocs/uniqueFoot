function App() {
  return (
    <div>
      <header class="m-auto flex items-center justify-between w-[80%]">
        <img src="/uniqueFoot.jpg" alt="pics" class="w-40" />
        <ul className="flex gap-[4vh]">
          <li>
            <i className="material-icons">search</i>
          </li>
          <li>
            <i className="material-icons">person</i>
          </li>
          <li>
            <i className="material-icons">shopping_bag</i>
          </li>
        </ul>
      </header>
      <nav className="flex items-center justify-center bg-gray-800 text-white h-[4.5rem]">
        <ul className="flex items-center justify-center gap-[8rem]">
          <li>Home</li>
          <li>About</li>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
