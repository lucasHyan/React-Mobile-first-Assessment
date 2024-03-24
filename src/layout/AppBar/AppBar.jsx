import { IconButton } from "../../components/IconButton";
import { WebSiteLogo } from "../../components/WebSiteLogo";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { ScrollButton } from "../../components/ScrollButton";

export function AppBar() {
  return (
    <header className="flex justify-between text-cor-principal bg-white shadow-custom font-roboto">
      <ActionsDiv />
      <LogosDiv />
    </header>
  );
}

function LogosDiv() {
  return (
    <div className="text-cor-principal flex items-center p-3 space-x-3">
      <div className="transition-colors duration-150 ease-in-out rounded-full hover:bg-gray-300 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center">
        <IconButton className="text-center text-lg">
          <FaGithub className="w-2 h-2 sm:w-4 sm:h-4 md:w-6 md:h-6" />
        </IconButton>
      </div>
      <div className="transition-colors duration-150 ease-in-out rounded-full hover:bg-gray-300 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center">
        <IconButton className="text-center text-lg">
          <RxHamburgerMenu className="w-2 h-2 sm:w-4 sm:h-4 md:w-6 md:h-6" />
        </IconButton>
      </div>
    </div>
  );
}
function ActionsDiv() {
  return (
    <div className="text-cor-principal flex items-center p-3 space-x-8">
      <IconButton>
        <div className="flex items-center space-x-3">
          <WebSiteLogo />
          <span>AppBoilerplate</span>
        </div>
      </IconButton>
      <ScrollButton className="opacity-70 flex" targetId="#">Acessar o Blog</ScrollButton>
      <ScrollButton className="opacity-70 flex" targetId="#">Realizar Contato</ScrollButton>
    </div>
  );
}