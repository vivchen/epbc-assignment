import { ChangeEvent } from 'react'

import { optionType } from './../types'

type Props = {
    term: string
    searchOptions: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
}

const Search = ({term, searchOptions, onInputChange, onOptionSelect, onSubmit}: Props): JSX.Element => {

  return (
    <section className="flex flex-col text-center items-center p-10">
    <h1 className="text-4xl text-zinc-100">Weather Card Application</h1>

    <div className="relative flex mt-10">
        <input 
        type="text" 
        value={term} 
        className="px-2 py-1 rounded-l-md border-2 border-white"
        placeholder="Search for a city..."
        onChange={onInputChange}
        />
        <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
        {searchOptions.map((option: optionType, index: number) => (
            <li key={option.name + '-' + index}>
            <button className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer" onClick={() => onOptionSelect(option)}>
                {option.name} {option.country}
            </button>
            </li>
        ))}
        </ul>
        

        <button className="rounded-r-md border-2 border-zinc-100 text-zinc-100 px-2 py-1 cursor-pointer" onClick={onSubmit}>
        submit
        </button>
    </div>

    </section>
  )
}

export default Search
