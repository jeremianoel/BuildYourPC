import { Link } from "react-router-dom"

function List({ data }) {
  return (
    <tr className="bg-white hover:bg-cyan-50 shadow-sm">
      <td className="px-4 py-3 text-center">{data.id}</td>
      <td className="px-4 py-3">{data.first_name}</td>
      <td className="px-4 py-3">{data.last_name}</td>
      <td className="px-4 py-3">{data.email}</td>
      <td className="px-4 py-3 flex justify-center">
        <img src={data.avatar} className="w-20 h-20 rounded-full hover:scale-115 duration-200" />
      </td>
      <td className="px-4 py-3 text-center">
        <Link
          to={`/users/${data.id}`}
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          View Profile →
        </Link>
      </td>
    </tr>
  );
}


export default List