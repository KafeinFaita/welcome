const Menu = () => {
  return (
    <>
      <div className="menu flex justify-between bg-gray-700 px-5 py-6">
        <p className="text-green-500 font-extrabold text-3xl">
          Polenlyn Solutions
        </p>
        <ul className="flex flex-row justify-between border border-yellow-500 text-white font-semibold text-xl gap-5">
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
