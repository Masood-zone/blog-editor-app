function UploadPost({ onSubmit }: { content: string; onSubmit: () => void }) {
  return (
    <button className="btn" onClick={onSubmit}>
      Submit
    </button>
  );
}

export default UploadPost;
