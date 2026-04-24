import { useForm } from "react-hook-form";

export default function Step2({ prev, data }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    const file = formData.file[0];

    console.log("Name:", data.name);
    console.log("File:", file);

    alert("Form Submitted Successfully");
  };

  return (
    <div>
      <h3>Step 2</h3>

      <p>Name: {data.name}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file")} />

        <br /><br />

        <button type="button" onClick={prev}>
          Back
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}