import Emoji from './components/Emoji';

export default function Home({ data }) {
  return (
    <>
      <div className='flex flex-wrap'>
        {
          data.map((item) => (
            <Emoji key={item.id} item={item} />
          ))
        }
      </div>
    </>
  );
}
