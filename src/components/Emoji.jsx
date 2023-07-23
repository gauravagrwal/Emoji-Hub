export default function Emoji({ item }) {
  return (
    <div className='h-20 w-20 py-4 rounded-br-lg shadow-xl text-center'>
      <button dangerouslySetInnerHTML={{ __html: item.htmlCode[0] }} className='text-5xl' />
    </div>
  );
}
