

export const Advised = ({ img, user }) => {

  const { name, estado, objetivo, peso } = user;

  return (
      <tr className="border-b border-gray-500 mb-10 ">
        <td className=" px-4 py-2 flex items-center gap-2">
          <figure className='w-12'>
            <img className='rounded-full ' src={ img } alt="" />
          </figure>
          { name }
        </td>
        <td className="text-center  px-4 py-2">{ estado }</td>
        <td className="text-center  px-4 py-2">{ objetivo }</td>
        <td className="text-center  px-4 py-2">{ peso }</td>
      </tr>
  )
}
