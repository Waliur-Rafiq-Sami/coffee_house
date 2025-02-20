import { FaEye, FaPencilAlt } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Coffee = ({ info, coffee, setCoffee }) => {
  const navigate = useNavigate();
  const { _id, name, Chef, Photo, Price } = info;
  const handleCoffeeDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/Coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setCoffee(coffee.filter((c) => c._id !== id));
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your coffee data is safe :)", "error");
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] text-black rounded-xl shadow-xl md:mx-0 mx-5">
      <div className="flex justify-center gap-10 items-center">
        <div>
          <img className="md:w-50" src={Photo} alt="Coffee Img" />
        </div>
        <div className="-ml-10 space-y-2">
          <p className="font-bold">
            Name : <span className="font-normal">{name} </span>
          </p>
          <p className="font-bold">
            Chef : <span className="font-normal">{Chef} </span>
          </p>
          <p className="font-bold">
            Price :
            <span className="font-normal">
              {" "}
              {Price}
              <FaBangladeshiTakaSign className="inline text-gray-600 -ml-[1px] mr-1" />
              Take
            </span>
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <button onClick={() => navigate(`/DetailsPage/${_id}`)}>
            <FaEye className="text-3xl  p-[6px] text-white  bg-[#D2B48C] rounded-sm shadow hover:scale-105" />
          </button>
          <button onClick={() => navigate(`/UpdateCoffee/${_id}`)}>
            <FaPencilAlt className="text-3xl  p-[6px] text-white  bg-[#3C393B] rounded-sm shadow hover:scale-105" />
          </button>
          <button onClick={() => handleCoffeeDelete(_id)}>
            <RiDeleteBin2Fill className="text-3xl  p-[6px] text-white  bg-[#EA4744] rounded-sm shadow hover:scale-105" />
          </button>
        </div>
      </div>
    </div>
  );
};

Coffee.propTypes = {
  info: PropTypes.object,
  coffee: PropTypes.array,
  setCoffee: PropTypes.func,
};

export default Coffee;
