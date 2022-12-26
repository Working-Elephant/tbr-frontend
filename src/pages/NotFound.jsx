import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
const Notfound = () => {
	return (
		<div
			className="flex items-center justify-center w-screen h-screen " >
			<div className="px-40 py-20  bg-[#2f2f931f] rounded-md shadow-xl">
				<div className="flex flex-col items-center">
					<h1 className="font-bold text-primary text-9xl ">404</h1>
					<h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
						<span className="text-red-500">Oops!</span> Page not found
					</h6>
					<p className="mb-8 text-center text-gray-500 md:text-lg">
						The page you’re looking for doesn’t exist.
					</p>
					<Link to={'/'} >
						<div className=" text-black flex justify-center items-center py-3 w-[132px] bg-primary rounded-[40px] text-[14px] font-bold">
							<FaHome /> &nbsp;  Go home
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}


export default Notfound
