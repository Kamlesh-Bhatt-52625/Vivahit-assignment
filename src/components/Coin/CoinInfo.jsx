import { useState } from "react";

const CoinInfo = ({ heading, desc }) => {
  const shortDesc =
    desc.slice(0, 200) + "<span style='color:var(--grey)'> Read More...</span>";
  const longDesc =
    desc + "<span style='color:var(--grey)'> Read Less...</span>";

  const [flag, setFlag] = useState(true);

  return (
    <div className='block w-[90%] bg-[#1b1b1b] my-6 mx-auto rounded-xl py-0 px-2'>
      <h2 className='m-4 font-semibold text-2xl py-2'>{heading}</h2>
      {desc.length > 200 ? (
        <p
          onClick={() => setFlag(!flag)}
          className='m-4 cursor-pointer pb-2'
          dangerouslySetInnerHTML={{
            __html: flag
              ? shortDesc.replace(
                  /<a /g,
                  '<a class="underline hover:text-[#fe993a]" '
                )
              : longDesc.replace(
                  /<a /g,
                  '<a class="underline hover:text-[#fe993a]" '
                ),
          }}></p>
      ) : (
        <p
          onClick={() => setFlag(!flag)}
          className='m-4 cursor-pointer pb-2'
          dangerouslySetInnerHTML={{
            __html: desc.replace(
              /<a /g,
              '<a class="underline hover:text-[#fe993a]"'
            ),
          }}></p>
      )}
    </div>
  );
};

export default CoinInfo;
