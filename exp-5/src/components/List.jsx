export default function List() {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

  return (
    <div style={{ height: "200px", overflowY: "scroll" }}>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}