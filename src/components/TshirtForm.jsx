import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./TshirtForm.css";

const schema = yup.object().shape({
    name: yup.string().min(2, "Ім'я складається мінімум з двух символів").required("Введіть ім'я"),
    size: yup.string().required("Оберіть розмір"),
    comments: yup.string().max(200, "Введіть в поле не більше, ніж 200 символів"),
});

const TShirtForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), });
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    const previewImage = "../public/dog.jpg"


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>T-Shirt Sign Up</h1>
            <h4>Enter your name and size to sign up for a T-Shirt.</h4>
            <div className="inputdiv">
                <label htmlFor="name">Name *</label>
                <input id="name" {...register("name")} />
                {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            </div>
            <div className="inputdiv">
                <label>Shirt size</label>
                <div>
                    <label>
                        <input type="radio" value="XS" {...register("size")} />
                        XS
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" value="S" {...register("size")} />
                        S
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" value="M" {...register("size")} />
                        M
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" value="L" {...register("size")} />
                        L
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" value="XL" {...register("size")} />
                        XL
                    </label>
                </div>
                {errors.size && <p style={{ color: "red" }}>{errors.size.message}</p>}
            </div>
            <div className="inputdiv">
                <label>T-Shirt Preview</label>
                <img src={previewImage} alt="T-Shirt Preview" />
            </div>
            <div className="inputdiv">
                <label htmlFor="comments">Other thoughts or comments</label>
                <textarea id="comments" {...register("comments")} />
                {errors.comments && <p style={{ color: "red" }}>{errors.comments.message}</p>}
            </div>
            <button type="submit">Надіслати</button>
        </form>
    );
};
export default TShirtForm;