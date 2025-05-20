type Props = {
    small: string
    big: string
    center: boolean
}

export const HeaderSection = ({small, big, center}: Props) => {
  return (
    <div className="">
        <p className={`text-textColorRose tracking-wide text-center ${center ? 'text-center' : 'md:text-left'}`}>{small}</p>
        <h1 className={`text-white font-extrabold text-6xl mt-2 text-center ${center ? 'text-center' : 'md:text-left'}`}>{big}</h1>
    </div>
  )
}