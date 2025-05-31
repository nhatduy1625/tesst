import { usedToBeLovers } from "../hooks/usedToBeLovers";

export default function LazyLoadVideo() {
  const { width } = usedToBeLovers();

  const videoQuality =
    width > 1200 ? 'High (1080p)' :
    width > 768 ? 'Medium (720p)' :
    'Low (480p)';

  return (
    <div style={{ padding: 20, border: '1px solid #ccc' }}>
      <h2>🎬 Lazy Load Video</h2>
      <p>Video quality selected: <strong>{videoQuality}</strong></p>
    </div>
  );
}