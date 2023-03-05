const App = () => {
  return (
    <div class='flex flex-col self-center items-center px-5 w-4/5'>
      <h1 class='font-bold text-3xl text-center'>Best Technologies Rated By Community</h1>

      <div class='flex flex-col w-2/4 mt-5'>
        <div class='border focus:border rounded-xl w-full'>
          <input class=' bg-transparent outline-0 w-full font-medium rounded-xl p-2' type='text' placeholder='Example: tRPC' />
        </div>
      </div>

      <div class='flex flex-col w-2/3 mt-24 '>
        <h2></h2>
        <div class='flex w-full border-l-2  justify-between border-gray-500 px-5 mb-5'>
          <h1 class='font-semibold'>1. hola</h1>
          <button class='flex gap-2'>
            <span>👍</span>
            <span>22</span>
          </button>
        </div>
        <div class='flex w-full border-l-2 justify-between border-gray-500 px-5 mb-5'>
          <h1 class='font-semibold'>2. hola</h1>
          <button class='flex gap-2'>
            <span>👍</span>
            <span>13</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
