import { FaSpinner } from "react-icons/fa";

export default function LoadingPage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <FaSpinner size={100} className="animate-spin"/>
    </div>
  )
}