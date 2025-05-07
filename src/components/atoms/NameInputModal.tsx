interface NameInputModalProps {
  name: string;
  setName: (name: string) => void;
  onSubmit: () => void;
}
export const NameInputModal = ({
  name,
  setName,
  onSubmit,
}: NameInputModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Hello! What's your name?</h2>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
        />
        <button
          onClick={onSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Start chat
        </button>
      </div>
    </div>
  );
};
