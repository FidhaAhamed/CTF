export default function PChallengeUI({ value, setValue, err, onSubmit, number, title, hiddenError = false }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 p-6 rounded-xl bg-neutral-900 shadow-xl">
      <h1 className="text-xl font-bold mb-4">{`Challenge ${number}: ${title}`}</h1>
      <input
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="flag"
        className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3"
        required
      />
      {err && (
        <p
          className="text-red-400"
          style={
            hiddenError
              ? {
                  color: "transparent",
                  userSelect: "text",
                  pointerEvents: "auto",
                  cursor: "help",
                  transition: "color 0.3s ease",
                }
              : {}
          }
          title={hiddenError ? "Try changing my CSS color to reveal the hidden text" : undefined}
        >
          {err}
        </p>
      )}
      <button type="submit" className="w-full rounded-lg bg-red-600 hover:bg-red-700 px-4 py-3">
        Submit
      </button>
    </form>
  );
}
