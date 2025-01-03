import "./Navbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center pt-[30px]">

        <a href="/" className="flex items-end gap-2 h-[90px]">
          <h1 className="text-[16px] font-[900] text-[#b93f3f] uppercase micro text-right">
            Virtual <br /> Fitting Room
          </h1>
        </a>
        <div className="flex space-x-[80px]">
          <div className="rounded-[48px]  flex justify-between px-2 items-center">
            <button className="w-[180px] h-[50px] text-white bg-[#b93f3f] rounded-full px-4 py-1 text-sm font-medium">
              <ShoppingCartIcon />  Add to Cart
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
