import React from 'react'

export const Table = () => {
  return (
    <div><table class="table">
      <thead>
        <tr>
          <th scope="col">Categoría</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Resort</th>
          <td>Hilton Lake Las Vegas</td>
          <td>Cuenta con parqueo y servicio de internet ilimitado.</td>
        </tr>
        <tr>
          <th scope="row">Boutique</th>
          <td>Hotel La Mersella</td>
          <td>Es un hotel que brinda los mejores detalles.</td>
        </tr>
        <tr>
          <th scope="row">Lujo</th>
          <td>Hotel Real Guatemala</td>
          <td>Es uno de los mejores hoteles de Guatemala.</td>
        </tr>
      </tbody>
    </table></div>
  )
}


