import Image from "next/image"
import logo from '@/assets/coderhouse.svg'
import Menu from "./Menu"

const Header = () => {

    return (
        <header className="w-full bg-gray-600">
            <div className="container m-auto py-6 flex justify-between items-center">
                <Image
                    alt="Logo"
                    src={logo}
                    width={200}
                    height={50}
                />

                <Menu />
            </div>
        </header>
    )
}

export default Header