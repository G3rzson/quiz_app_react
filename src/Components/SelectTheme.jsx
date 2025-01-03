
export default function SelectTheme({setTheme}) {
    const handleChange = (e) => {
        setTheme(e.target.value)
    };
  return (
    <div className='flex items-center justify-center flex-col gap-4'>
        <label className='text-green-500 text-3xl'>  
            Válassz témakört:
        </label>
        <select 
            onChange={(e) => handleChange(e)}
            className="py-2 px-4 outline-none border-none text-xl bg-slate-400" >
          <option value="">Témák:</option>
          <option value="sport">Sport</option>
          <option value="kozelet">Közélet</option>
        </select>
    </div>
  )
}
