"use client"
import { useState } from 'react';

function TextExpander({ children }:{children:React.ReactNode}) {
  const [isExpanded, setIsExpanded] = useState(false);
  if(!children) return null
  const displayText = isExpanded
    ? children
    : children.toString().split(' ').slice(0, 40).join(' ') + '...';
  return (
    <span>
      {displayText}{' '}
      <button
        className='text-primary-700 border-b border-primary-700 leading-3 pb-1 cursor-pointer duration-300 transition-colors hover:text-accent-400 hover:border-b-accent-400'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}

export default TextExpander;
