
import './App.css';
import NavbarMenu from './Components/Navbar/index'
import NavbarMenu2 from './Components/Navbar/index-under'

function App() {
  return (
    <div className="App">
      <div id="header-topbar">
        <div className="header-menu">
          <div className="header-menu-1">
            <div><NavbarMenu className="navbar-top navbar-fix navbar-style" /></div>
          </div>
            <div className="header-menu-2">
           <div ><NavbarMenu2 className="navbar-bot navbar-fix" /></div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
