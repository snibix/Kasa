function Tag({ placeholder = "" }) {
  return (
    <div>
      <div className="tag">
        <p className="tag-content">{placeholder}</p>
      </div>
    </div>
  );
}

export default Tag;
