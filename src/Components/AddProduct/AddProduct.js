import { useContext, useState } from "react";
import "./AddProduct.css";
import { AppContext } from "../../App";
import { productsCollection, uploadProductPhoto } from "../../firebase";
import { addDoc } from "firebase/firestore";

export default function AddProduct({ category }) {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [Publisher, setPublisher] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setPicture] = useState(null);
  const [BookOverview, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [Length, setLength] = useState("");


  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangePublisher(event) {
    setPublisher(event.target.value);
  }

  function onChangeLength(event) {
    setLength(event.target.value);
  }
  function onChangePrice(event) {
    setPrice(event.target.value);
  }
  function onChangePicture(event) {
    const file = event.target.files[0];
    setPicture(file);
  }
  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    if (!img) {
      alert("Please upload an picture");
      return;
    }

    setIsSubmitting(true);
    uploadProductPhoto(img)
      .then((pictureUrl) =>
        addDoc(productsCollection, {
          category: category.id,
          name: name,
          Publisher: Publisher,
          Length: Length,
          price: Number(price),
          img: pictureUrl,
          BookOverview: BookOverview,
          slug: name.replaceAll(" ", "-").toLowerCase(),
        })
      )
      .then(() => {
        setName("");
        setPublisher("");
        setLength("");
        setPrice(0.0);
        setPicture(null);
        setDescription("");
      })
      .catch((error) => {
        console.log("Failed to add product:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="AddProduct">
      <form onSubmit={onFormSubmit}>
        <h3>Create a new product</h3>
        <label>
          Name:
          <input
            type="text"
            value={name}
            name="name"
            onChange={onChangeName}
            required
          />
        </label>

        <label>
        Publisher:
          <input
            type="text"
            value={Publisher}
            Publisher="Publisher"
            onChange={onChangePublisher}
            required
          />
        </label>

        <label>
        Length:
          <input
            type="text"
            value={Length}
            Length="Length"
            onChange={onChangeLength}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            name="price"
            step="any"
            onChange={onChangePrice}
            min={0}
            required
          />
        </label>
        <label>
          Picture:
          <input
            type="file"
            name="img"
            onChange={onChangePicture}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            type=""
            name="BookOverview"
            value={BookOverview}
            onChange={onChangeDescription}
            required
          />
        </label>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
}