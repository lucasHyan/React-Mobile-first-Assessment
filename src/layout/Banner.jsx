import { WebSiteLogo } from "../components/WebSiteLogo";

export function Banner() {
    return (
        <div className="bg-main-color bg-cover w-full h-[674px] bg-center p-12 overflow-auto flex items-center justify-center">
            <div className="text-black text-center flex flex-col items-center justify-center">
                <WebSiteLogo className="w-3/4 h-3/4"/>
                <h1 className="mt-16 mb-6 text-[3rem] font-normal leading-[1.167] tracking-normal font-roboto">Título do banner</h1>
                <h2 className="text-[2.125rem] font-roboto font-light leading-tight">Texto do subtítulo.</h2>
            </div>
        </div>
    );
}