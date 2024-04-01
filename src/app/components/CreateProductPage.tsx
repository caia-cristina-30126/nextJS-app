"use client";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { Product } from "../Product";
import ButtonComponent from "./common/ButtonComponent";
import NewProductForm from "./product/NewProductForm";

export default function CreateProductPage() {
  const [formData, setFormData] = useState({
    title: "",
    price: -1,
    description: "",
    categoryId: -1,
    images: new Set<string>(),
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");
  const [image, setImage] = useState("");

  function handleInput(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  }

  function handleImageInput(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setImage(e.target.value);
  }

  function addImage() {
    const newImages = new Set(formData.images);
    newImages.add(image);

    setFormData((prevState) => ({
      ...prevState,
      images: newImages,
    }));
    setImage("");
  }

  function resetFormData() {
    setFormData({
      title: "",
      price: -1,
      description: "",
      categoryId: -1,
      images: new Set(),
    });
    setImage("");
  }

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData.images.size);
    if (formData.images.size <= 0) {
      alert("At least one image is required");
      return;
    }
    const formURL = "https://api.escuelajs.co/api/v1/products/";

    fetch(formURL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        images: Array.from(formData.images),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        resetFormData();
        setFormSuccess(true);
        setFormSuccessMessage(
          `Product with id ${(data as Product).id} and name ${(data as Product).title} created`
        );
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        {formSuccess ? (
          <>
            <div>{formSuccessMessage}</div>
            <Link href={"/"}>
              <ButtonComponent actionText="Home page" />
            </Link>
          </>
        ) : (
          <NewProductForm
            submitForm={submitForm}
            handleInput={handleInput}
            handleImageInput={handleImageInput}
            addImage={addImage}
            images={formData.images}
          />
        )}
      </div>
    </div>
  );
}
