import { FormEvent, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { makes } from "../../constant"
import ReactSelect from "react-select"

type ButtonProps = {
    design?: string;
}

const SearchButton = (
    { design }: ButtonProps
) => {
    return (
        <button
            className={`ml-3 z-10 
                ${design}
                
                 `
                }
        >
            <img src="/magnifying-glass.svg" width={40} height={40} />
        </button>
    )
}




const SearchBar = () => {

    const [params, setParams] = useSearchParams()
    const [make, setMake] = useState<string>(" ")
    const [model, setModel] = useState<string>(" ")

    type OptionType = {
        label: string;
        value: string;
    };

    const options: OptionType[] = useMemo(() => makes.map((make) => ({
        label: make,
        value: make
    })), [])
    const handleSumit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setParams({
            make,
            model,
        })

    }


    return (
        <form
            className="searchbar gap-3"
            onSubmit={handleSumit}
        >
            <div
                className="searchbar__item"
            >
                <ReactSelect
                    options={options}
                    onChange={(e: OptionType | null) => e && setMake(e.value)}
                    className="w-full text-black"
                />

                <SearchButton 
                design={'sm:hidden'} 
                />
            </div>

            <div className="searchbar__item">

                <img
                    className="absolute ml-4"
                    width={25}
                    src="/model-icon.png" />
                <input
                    placeholder="örn:Civic"
                    className="searchbar__input rounded text-black"
                    onChange={(e) => setModel(e.target.value)}
                    type="text" />
                    <SearchButton/>
            </div>

        </form>

    )
}

export default SearchBar