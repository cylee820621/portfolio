import Stack from './Stack';

function Tools({ tools }) {
  return (
    <div
      id='tools'
      className='flex justify-center md:min-h-screen items-center p-10'
    >
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-5xl m-5'> Tools</h1>
        <p>My weapons of choice to help tackle any project.</p>
        <div className='grid gap-5 grid-cols-2 md:grid-cols-4 m-5'>
          {tools.map((item, index) => (
            <Stack key={index} imageUrl={item.imageUrl} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools;
