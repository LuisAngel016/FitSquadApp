

export const Advised = ({ img, name, estado, objetivo, peso }) => {
  return (
    <tbody>
      <tr className="border-b border-gray-500">
        <td class=" px-4 py-2 flex items-center gap-2">
          <figure className='w-12'>
            <img className='rounded-full ' src={ img } alt="" />
          </figure>
          { name }
        </td>
        <td class="text-center  px-4 py-2">{ estado }</td>
        <td class="text-center  px-4 py-2">{ objetivo }</td>
        <td class="text-center  px-4 py-2">{ peso }</td>
      </tr>
    </tbody>
  )
}
