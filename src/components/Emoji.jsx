import { useState } from 'react';

import EmojiDetails from './EmojiDetails';

export default function Emoji({ item }) {
  const [showDetails, setShowDetails] = useState(false);
  function onMouseEnter() {
    setShowDetails(true);
  }
  function onMouseLeave() {
    setShowDetails(false);
  }

  return (
    <div className='h-20 w-20 py-4 rounded-br-lg shadow-xl text-center' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button dangerouslySetInnerHTML={{ __html: item.htmlCode[0] }} className='text-5xl' />
      {
        showDetails && <EmojiDetails item={item} />
      }
    </div>
  );
}
