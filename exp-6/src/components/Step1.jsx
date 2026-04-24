export default function Step1({ next, data, setData }) {
  return (
    <div>
      <h3>Step 1</h3>

      <input
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        placeholder="Enter Name"
      />

      <br /><br />

      <button onClick={next}>Next</button>
    </div>
  );
}