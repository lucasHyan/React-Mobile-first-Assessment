import { IconButton } from "../../components/IconButton";
import { WebSiteLogo } from "../../components/WebSiteLogo";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { ScrollButton } from "../../components/ScrollButton";

export function AppBar() {
  return (
    <header className="flex justify-between text-cor-principal">
      <ActionsDiv />
      <LogosDiv />
    </header>
  );
}

function LogosDiv() {
  return (
    <div className="text-cor-principal flex items-center p-3 space-x-3">
      <IconButton>
        <FaGithub />
      </IconButton>
      <IconButton>
        <RxHamburgerMenu />
      </IconButton>
    </div>
  );
}

function ActionsDiv() {
  return (
    <div className="text-cor-principal flex items-center p-3 space-x-3">
      <IconButton>
        <div className="flex items-center space-x-3">
          <WebSiteLogo />
          <span>AppBoilerplate</span>
        </div>
      </IconButton>
      <div className="opacity-70">
        <ScrollButton className="p-3" targetId="#">Acessar o Blog</ScrollButton>
        <ScrollButton className="p-3" targetId="#">Realizar Contato</ScrollButton>
      </div>
    </div>
  );
}