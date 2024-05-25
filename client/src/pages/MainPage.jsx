import { ImHome } from "react-icons/im";

export function MainPage(){
    return (
        <div className="flex justify-center items-center p-10">
            <div>
                <ImHome className="text-6xl text-gray-400 m-auto my-2"/>
                <h1 className="font-bold text-xl">
                    Bienvenido a la pagina principal
                </h1>
            </div>
        </div>
    );
}