type Props = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const UserFilter = ({handleChange}: Props) => {

    return (
        <input type="text" placeholder="Start typing username..." className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
        />
    )

}