const ShowAlert = ({altura,ancho,colorFondo,colorTexto, texto}) => {
  return (
      <div>
          <div  style={{
              height: altura,
              width:ancho,
              background:colorFondo,
              color:colorTexto,
              borderRadius:'3px',
              padding:'2px',
          }}>
            <h3 className="text-center">{texto}</h3>
          </div>
          <br />
          

      </div>

  )
}

export {
  ShowAlert
};