import { ChangeEvent, FormEvent } from "react";

interface Props {
  submitForm: (e: FormEvent<HTMLFormElement>) => void;
  handleInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleImageInput: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  addImage: () => void;
  images: Set<string>;
}
export default function CreateProductForm({
  submitForm,
  handleInput,
  handleImageInput,
  addImage,
  images,
}: Props) {
  return (
    <form
      className="py-6 px-9"
      action="https://api.escuelajs.co/api/v1/products/"
      method="POST"
      onSubmit={(e) => submitForm(e)}
    >
      <div className=" grid mt-10 grid-cols-1 gap-x-8 gap-y-6 mb-5">
        <div className="mb-5 block text-xl font-bold text-[#07074D]">
          Add a new product
        </div>

        <input
          type="text"
          name="title"
          placeholder="Name"
          required
          minLength={1}
          onChange={handleInput}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <input
          type="number"
          name="price"
          placeholder="Price in $"
          required
          onChange={handleInput}
          min={0}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <textarea
          name="description"
          placeholder="Description"
          required
          onChange={handleInput}
          minLength={1}
          rows={5}
          cols={20}
          className="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <input
          type="number"
          name="categoryId"
          placeholder="Category id"
          min={0}
          required
          onChange={handleInput}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className=" grid mt-5 grid-cols-1 gap-x-1 gap-y-2 mb-5 pt-3">
        <label className="mb-5 block text-xl font-semibold text-[#07074D]">
          Images
        </label>

        <input
          type="url"
          name="images"
          placeholder="Image URL"
          required
          onChange={handleImageInput}
          className="form-control w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />

        <a
          className="mt-2 ml-2 w-32 bg-gray-900 text-white rounded-md px-7 py-2 text-sm font-medium hover:opacity-75"
          onClick={addImage}
        >
          Add URL
        </a>
        <ul>
          {Array.from(images).map((image, index) => (
            <li key={index}>{image}</li>
          ))}
        </ul>
        <br></br>
      </div>
      <div>
        <button
          type="submit"
          className="hover:shadow-form w-full rounded-md bg-gray-900 py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Add product
        </button>
      </div>
    </form>
  );
}
