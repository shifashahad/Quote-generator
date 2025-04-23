import React, { useState } from 'react'

const QuoteGenerator = () => {
  const [quote,setQuote] = useState('');
  const [author,setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://quotes-api-self.vercel.app/quote');
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (err) {
      console.error('Fetch failed:', err);
    }
  };
  
  return (
    <div className='min-h-screen'>
        <h1 className='text-[65px] text-center py-10 text-white'style={{ fontFamily: "'Grey Qo', cursive" }}>Quote Generator</h1>
        <div className='border-2 w-[50%] mx-auto h-40 overflow-auto bg-[url("https://i.pinimg.com/736x/df/e3/6d/dfe36d8ae3b439e41f61917d925bb1b4.jpg")] bg-cover bg-center'>
            <h3 className='m-3 h-20 text-white'>{quote ||'Life is 10% what happens to me and 90% of how I react to it.'}</h3>
            <hr className='mx-4 border-[1.4px] rounded-full border-white' />
            <h3 className='text-right mr-4 my-2 text-white'>- {author || 'Charles Swindoll'}</h3>
        </div>
        <button onClick={fetchQuote} className='border-2 p-2 block my-4 mx-auto glow-on-hover'>Get New Quote</button>
    </div>
  )
}

export default QuoteGenerator