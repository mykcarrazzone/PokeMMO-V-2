// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`SettingItems renders correctly 1`] = `
<div
  className="w-auto h-full flex flex-col p-4 text-white overflow-auto"
>
  <div
    className="flex items-center justify-center text-3xl font-bold mb-8"
  >
    <i
      className="fas fa-cogs mr-4"
    />
    Paramètres
  </div>
  <div
    className="flex flex-col w-full items-center mb-4"
  >
    <div
      className="flex flex-col w-full items-center justify-center  lg:flex-row sm:justify-center"
    >
      <button
        className="text-lg w-full font-bold px-8 py-2 mb-2 hover:bg-gray-700 rounded-md sm:mr-4 bg-gray-700"
        onClick={[Function]}
      >
        Audio
      </button>
      <button
        className="text-lg w-full font-bold px-8 py-2 mb-2 hover:bg-gray-700 rounded-md sm:mr-4 "
        onClick={[Function]}
      >
        Graphismes
      </button>
      <button
        className="text-lg w-full font-bold px-8 py-2 mb-2 hover:bg-gray-700 rounded-md sm:mr-4 "
        onClick={[Function]}
      >
        Contrôles
      </button>
      <button
        className="text-lg w-full font-bold px-8 py-2 mb-2 hover:bg-gray-700 rounded-md sm:mr-4 "
        onClick={[Function]}
      >
        Langue
      </button>
    </div>
    <div
      className="flex flex-col w-full items-center mt-12"
    >
      <div
        className="flex flex-col w-auto"
      >
        <div
          className="flex flex-col md:flex-row md:items-center"
        >
          <span
            className="text-lg font-bold mr-4 self-center"
          >
            Volume:
          </span>
          <div
            className="md:w-full flex items-center"
          >
            <input
              max="100"
              min="0"
              onChange={[Function]}
              type="range"
              value={50}
            />
          </div>
        </div>
        <div
          className="flex flex-row items-center mt-4"
        >
          <span
            className="text-lg font-bold mr-4"
          >
            Musique :
          </span>
          <button
            className="w-8 h-8 rounded-full bg-green-500"
            onClick={[Function]}
          >
            <i
              className="fas fa-volume-up text-white text-lg"
            />
          </button>
        </div>
        <div
          className="flex flex-row items-center mt-4"
        >
          <span
            className="text-lg font-bold mr-4"
          >
            Sons :
          </span>
          <button
            className="w-8 h-8 rounded-full bg-green-500"
            onClick={[Function]}
          >
            <i
              className="fas fa-volume-up text-white text-lg"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`;
