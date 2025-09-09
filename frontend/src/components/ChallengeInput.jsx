// ChallengeInput.jsx
export default function ChallengeInput({ value, setValue, err, onSubmit, title, number }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 p-6 rounded-xl bg-neutral-900 shadow-xl max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{`Challenge ${number}: ${title}`}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type your answer here"
        className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-white"
        required
        autoComplete="off"
      />
      {err && <p className="text-red-400">{err}</p>}
      <button
        type="submit"
        className="w-full rounded-lg bg-red-600 hover:bg-red-700 px-4 py-3 font-semibold"
      >
        Submit
      </button>
    </form>
  );
}
