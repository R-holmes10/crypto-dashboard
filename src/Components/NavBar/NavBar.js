import React from 'react';
import Logo3 from '../../assets/Logo3.png'


function NavBar() {
    return(
        <>
        <div className="sticky top-0 z-50">
        <nav className="relative w-full flex flex-wrap  py-2 bg-gray-100 shadow-lg">
  <div className="container-fluid w-full flex flex-wrap   px-10">
    <div className="container-fluid">
      
        <img src={Logo3} style={{height: "4rem"}} alt="" loading="lazy" />
        <span className=" italic text-sky-700 font-extrabold px-8">SPARK</span>
    </div>
  </div>
</nav>
<br>
</br>

</div>
        </>
    )
}

export default NavBar