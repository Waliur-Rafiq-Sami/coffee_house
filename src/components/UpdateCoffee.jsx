import { MdOutlineArrowBackIosNew } from "react-icons/md";
import bg_img from "../assets/images/more/11.png";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, Chef, Supplier, Taste, Category, Details, Photo, Price, _id } =
    coffee;

  const navigate = useNavigate();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.Name.value;
    const Chef = form.Chef.value;
    const Supplier = form.Supplier.value;
    const Taste = form.Taste.value;
    const Category = form.Category.value;
    const Details = form.Details.value;
    const Photo = form.Photo.value;
    const Price = form.Price.value;

    const updateCoffee = {
      name,
      Chef,
      Supplier,
      Taste,
      Category,
      Details,
      Photo,
      Price,
    };
    // console.log(newCoffee);
    fetch(`http://localhost:5000/UpdateCoffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          Swal.fire({
            title: "Coffee Update Successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div
      className="w-full bg-cover bg-center font-rancho  bg-[#fff] text-black "
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <div className="container mx-auto md:py-10 p-1 md:p-0 md:max-w-2xl">
        <button
          onClick={() => navigate("/")}
          className="btn bg-[#D2B48C] btn-outline border-none hover:bg-[#331A15]"
        >
          <span className="">
            <MdOutlineArrowBackIosNew />
          </span>
          <span> Back to home</span>
        </button>
        <div className="text-center rounded-xl bg-[#F4F3F0] mx-auto py-10 my-10">
          <h2
            className="text-4xl font-bold text-black"
            style={{
              textShadow: `
                  2px 2px 2px gray,  
                  2px 2px 3px white,  
                  3px 1px 0px black  
      `,
            }}
          >
            Update Coffee
          </h2>
          <p className="md:max-w-4/5 mx-auto py-3 text-justify md:text-center px-0 md:px-2 ">
            Welcome to Espresso Emporium, where every sip is a new experience.
            Here, you can add and refine coffee blends, bringing rich flavors to
            life. Let your creations become part of our ever-growing coffee
            journey.
          </p>
          <div className="mx-auto">
            <form onSubmit={handleUpdateCoffee} className="">
              {/* // field 1  */}
              <div className="flex flex-col md:flex-row justify-center items-center w-full gap-5 px-5 py-2">
                <div className="form-control w-full gap-2 text-left">
                  <label className="label p-2 font-bold">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="Name"
                    name="Name"
                    defaultValue={name}
                    placeholder="Enter Coffee Name "
                    className="input input-bordered bg-white w-full focus:bg-gray-200
                      focus:outline-0 "
                    required
                  />
                </div>
                <div className="form-control w-full gap-2 text-left">
                  <label className="label p-2 font-bold">
                    <span className="label-text">Chef</span>
                  </label>
                  <input
                    type="text"
                    name="Chef"
                    defaultValue={Chef}
                    placeholder="Enter Coffee Chef "
                    className="input input-bordered bg-white w-full focus:bg-gray-200
                      focus:outline-0 "
                    required
                  />
                </div>
              </div>
              {/* // field 2  */}
              <div className="flex flex-col md:flex-row justify-center items-center w-full  gap-5 px-5">
                <div className="form-control w-full gap-2 text-left">
                  <label className="label p-2 font-bold">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    type="text"
                    name="Supplier"
                    defaultValue={Supplier}
                    placeholder="Enter Coffee Supplier "
                    className="input input-bordered bg-white w-full focus:bg-gray-200
                      focus:outline-0 "
                    required
                  />
                </div>
                <div className="form-control w-full gap-2 text-left">
                  <label className="label p-2 font-bold">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={Taste}
                    name="Taste"
                    placeholder="Enter Coffee Taste"
                    className="input input-bordered bg-white w-full focus:bg-gray-200
                      focus:outline-0 "
                    required
                  />
                </div>
              </div>
              {/* // field 3 */}
              <div className="flex flex-col md:flex-row justify-center items-center w-full  gap-5 px-5 py-2">
                <div className="form-control w-full gap-2 text-left">
                  <label className="label p-2 font-bold">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    name="Category"
                    defaultValue={Category}
                    placeholder="Enter Coffee Category"
                    className="input input-bordered bg-white w-full focus:bg-gray-200
                      focus:outline-0 "
                    required
                  />
                </div>
                <div className="form-control w-full gap-2 text-left">
                  <label className="label p-2 font-bold">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    name="Details"
                    defaultValue={Details}
                    placeholder="Enter Coffee Details"
                    className="input input-bordered bg-white w-full focus:bg-gray-200
                      focus:outline-0 "
                    required
                  />
                </div>
              </div>
              {/* // field 4  */}
              <div className="flex  flex-col md:flex-row justify-center items-center w-full  gap-5 px-5 py-2">
                <div className="form-control w-full gap-2 text-left">
                  <label className="label p-2 font-bold">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    defaultValue={Photo}
                    name="Photo"
                    placeholder="Enter Coffee Photo URL"
                    className="input input-bordered bg-white w-full focus:bg-gray-200
                      focus:outline-0 "
                    required
                  />
                </div>
                <div className="form-control w-full gap-2 text-left">
                  <label className="label p-2 font-bold">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={Price}
                    name="Price"
                    placeholder="Enter price"
                    className="input input-bordered bg-white w-full focus:bg-gray-200
                      focus:outline-0 "
                    required
                  />
                </div>
              </div>
              {/* // field 5  */}
              <div className="flex  flex-col justify-center items-center w-full  gap-5 px-5 py-2">
                <div className="form-control w-full gap-2 text-left">
                  <input
                    type="submit"
                    placeholder="Your mail"
                    className="input input-bordered btn w-full focus:bg-gray-200
                      focus:outline-0 bg-[#D2B48C] hover:bg-[#331A15] font-bold tracking-wide text-lg"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
