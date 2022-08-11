// import React from 'react';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getCountries } from '../../redux/actions';

// export default function ReLoad() {
//   const dispatch = useDispatch();

//   useEffect(
//     (e) => {
//       dispatch(getCountries());
//     },
//     [dispatch]
//   );

//   // function handleClick(e){
//   //     e.preventDefault();
//   //     dispatch(getCountries())
//   // }
//   function refreshPage() {
//     window.location.reload(false);
//   }

//   return (
//     <div>
//       <button
//         onClick={(e) => {
//           refreshPage(e);
//         }}
//       >
//         Inicio
//       </button>
//     </div>
//   );
// }
