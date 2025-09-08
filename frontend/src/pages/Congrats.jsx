export default function Congrats() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-neutral-900 rounded-2xl border border-neutral-800 p-10 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">
          🎉 Congratulations! 
        </h1>
        <p className="text-lg text-gray-300">
          You reached the end of the Odyssey of Time CTF!
        </p>
      </div>
    </div>
  );
}
