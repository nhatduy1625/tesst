import { usedToBeLovers } from "../hooks/usedToBeLovers";

export default function WindowSizeDisplay() {
  const { width, height } = usedToBeLovers();

  return (
    <div style={{ padding: 20, border: '1px solid #ccc', marginBottom: 20 }}>
      <h2>📐 Window Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}