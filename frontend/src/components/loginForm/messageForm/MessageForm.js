const MessageForm = ({ data }) => {
  return (
    <>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      {data && data.message && <p>{data.message}</p>}
    </>
  );
};

export default MessageForm;
