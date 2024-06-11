import { useState } from 'react'

function App() {
  
  const [color, setColor] = useState("olive");

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>
              Red
            </button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>
              Green
            </button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>
              Blue
            </button>
            <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}}>
              Orange
            </button>
            <button onClick={() => setColor("magenta")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "magenta"}}>
              Magenta
            </button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}}>
              Yellow
            </button>
            <button onClick={() => setColor("teal")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "teal"}}>
              Teal
            </button>
            <button onClick={() => setColor("rebeccaPurple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "rebeccaPurple"}}>
              RebeccaPurple
            </button>
            <button onClick={() => setColor("lime")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "lime"}}>
              Lime
            </button>
            <button onClick={() => setColor("aqua")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "aqua"}}>
              Aqua
            </button>
            <button onClick={() => setColor("lightSlateGray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "lightSlateGray"}}>
              LightSlateGray
            </button>
            <button onClick={() => setColor("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "violet"}}>
              Violet
            </button>
            <button onClick={() => setColor("gold")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "gold"}}>
              Gold
            </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
