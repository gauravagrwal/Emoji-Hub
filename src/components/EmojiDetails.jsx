export default function EmojiDetails({ item }) {
  return (
    <div className='absolute bg-gray-50 shadow-2xl w-64'>
      <div className='px-3 py-2 border-b bg-gray-100'>
        <h3 className='font-bold'>{item.name}</h3>
      </div>

      <div className='flex p-2 space-x-4'>
        <p dangerouslySetInnerHTML={{ __html: item.htmlCode[0] }} className='text-4xl' />
        <div>
          <span>HTML Code: </span>
          <code><button onClick={() => { navigator.clipboard.writeText(item.htmlCode[0]) }}>{item.htmlCode[0]}</button></code>
          <span>Unicode: </span>
          <code><button onClick={() => { navigator.clipboard.writeText(item.unicode[0]) }}>{item.unicode[0]}</button></code>
        </div>
      </div>

      <div className='px-3 py-2 border-t bg-gray-100'>
        <h3 className='font-bold'>{item.group}</h3>
      </div>
    </div >
  );
}
